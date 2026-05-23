let editor = null;

function initResizers() {
  const leftPanel  = document.getElementById('panel-lesson');
  const rightPanel = document.getElementById('panel-preview');
  const rLeft  = document.getElementById('resizer-left');
  const rRight = document.getElementById('resizer-right');

  const MIN = 160, MAX = 700;

  function makeResizable(resizer, panel, side) {
    resizer.addEventListener('mousedown', (e) => {
      e.preventDefault();
      const startX     = e.clientX;
      const startWidth = panel.getBoundingClientRect().width;

      resizer.classList.add('is-dragging');
      document.body.style.cursor      = 'col-resize';
      document.body.style.userSelect  = 'none';

      // Disable iframe pointer events while dragging (prevents capture)
      document.getElementById('preview-frame').style.pointerEvents = 'none';

      function onMove(e) {
        const delta = e.clientX - startX;
        const newW  = side === 'left'
          ? Math.max(MIN, Math.min(MAX, startWidth + delta))
          : Math.max(MIN, Math.min(MAX, startWidth - delta));
        panel.style.width = newW + 'px';
      }

      function onUp() {
        resizer.classList.remove('is-dragging');
        document.body.style.cursor     = '';
        document.body.style.userSelect = '';
        document.getElementById('preview-frame').style.pointerEvents = '';
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup',   onUp);
        if (editor) editor.refresh();
      }

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup',   onUp);
    });

    // Double-click → reset to default width
    resizer.addEventListener('dblclick', () => {
      panel.style.width = side === 'left' ? '320px' : '340px';
      if (editor) editor.refresh();
    });
  }

  makeResizable(rLeft,  leftPanel,  'left');
  makeResizable(rRight, rightPanel, 'right');
}
let currentLesson = null;
let previewDebounce = null;
let completedLessons = JSON.parse(localStorage.getItem('htmlcourse_progress') || '[]');

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const lessonId = parseInt(params.get('id')) || 1;

  editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
    mode: 'xml',
    theme: 'material-darker',
    lineNumbers: true,
    autoCloseTags: true,
    lineWrapping: false,
    indentUnit: 2,
    tabSize: 2,
    extraKeys: { Tab: (cm) => cm.replaceSelection('  ') },
  });

  editor.on('change', () => {
    clearTimeout(previewDebounce);
    previewDebounce = setTimeout(updatePreview, 500);
  });

  initResizers();
  loadLesson(lessonId);
});

function loadLesson(id) {
  currentLesson = lessons.find(l => l.id === id);
  if (!currentLesson) return;

  document.getElementById('lesson-title').textContent = currentLesson.title;
  document.getElementById('chapter-badge').textContent = currentLesson.chapterTitle;
  document.getElementById('lesson-number').textContent = `Lección ${id} de ${lessons.length}`;
  document.getElementById('theory-content').innerHTML = currentLesson.theory;
  document.getElementById('instructions-text').textContent = currentLesson.instructions;

  const progressPct = Math.round((completedLessons.length / lessons.length) * 100);
  document.getElementById('progress-bar').style.width = progressPct + '%';
  document.getElementById('progress-text').textContent = `${completedLessons.length}/${lessons.length}`;

  if (completedLessons.includes(id)) {
    editor.setValue(currentLesson.solution);
  } else {
    editor.setValue(currentLesson.starterCode);
  }
  editor.clearHistory();

  clearFeedback();
  updateNavButtons(id);

  setTimeout(() => {
    editor.refresh();
    updatePreview();
  }, 50);
}

function updatePreview() {
  const code = editor ? editor.getValue() : '';
  const iframe = document.getElementById('preview-frame');
  try {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  } catch (e) {
    iframe.srcdoc = code;
  }
}

function verifyCode() {
  const code = editor.getValue().trim();
  if (!code || code === currentLesson.starterCode) {
    showToast('Escribe algo de código primero 😊', 'warn');
    return;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(code, 'text/html');
  const results = currentLesson.checks.map(check => runCheck(check, code, doc));

  displayResults(results);

  if (results.every(r => r.passed)) {
    markComplete();
  }
}

function runCheck(check, code, doc) {
  let passed = false;
  try {
    switch (check.type) {
      case 'regex':
        passed = new RegExp(check.pattern, 'i').test(code);
        break;
      case 'element':
        passed = doc.querySelector(check.selector) !== null;
        break;
      case 'elementWithText':
        const el = doc.querySelector(check.selector);
        passed = !!el && el.textContent.trim().length > 0;
        break;
      case 'elementWithAttr':
        const el2 = doc.querySelector(check.selector);
        passed = !!el2 && el2.hasAttribute(check.attr) && el2.getAttribute(check.attr).trim() !== '';
        break;
      case 'minCount':
        passed = doc.querySelectorAll(check.selector).length >= check.count;
        break;
      case 'custom':
        passed = check.test(code, doc);
        break;
    }
  } catch (e) {
    passed = false;
  }
  return { ...check, passed };
}

function displayResults(results) {
  const panel = document.getElementById('checks-panel');
  const list = document.getElementById('checks-list');
  list.innerHTML = '';
  panel.style.display = 'block';

  results.forEach(r => {
    const item = document.createElement('div');
    item.className = 'check-item ' + (r.passed ? 'check-pass' : 'check-fail');
    item.innerHTML = `
      <span class="check-icon">${r.passed ? '✓' : '✗'}</span>
      <div class="check-body">
        <span class="check-msg">${r.message}</span>
        ${!r.passed && r.hint ? `<span class="check-hint">💡 ${r.hint}</span>` : ''}
      </div>
    `;
    list.appendChild(item);
  });
}

function markComplete() {
  const id = currentLesson.id;
  if (!completedLessons.includes(id)) {
    completedLessons.push(id);
    localStorage.setItem('htmlcourse_progress', JSON.stringify(completedLessons));
  }

  document.getElementById('success-banner').style.display = 'flex';

  const progressPct = Math.round((completedLessons.length / lessons.length) * 100);
  document.getElementById('progress-bar').style.width = progressPct + '%';
  document.getElementById('progress-text').textContent = `${completedLessons.length}/${lessons.length}`;

  const nextBtn = document.getElementById('btn-next');
  if (nextBtn) nextBtn.classList.add('btn-next-active');
}

function resetCode() {
  if (confirm('¿Resetear el código al ejemplo inicial?')) {
    editor.setValue(currentLesson.starterCode);
    editor.clearHistory();
    clearFeedback();
    updatePreview();
  }
}

function showSolution() {
  if (confirm('¿Ver la solución? Te recomendamos intentarlo primero.')) {
    editor.setValue(currentLesson.solution);
    updatePreview();
  }
}

function clearFeedback() {
  document.getElementById('checks-panel').style.display = 'none';
  document.getElementById('checks-list').innerHTML = '';
  document.getElementById('success-banner').style.display = 'none';
}

function updateNavButtons(id) {
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');

  if (prevBtn) {
    prevBtn.disabled = id <= 1;
    prevBtn.onclick = () => navigateTo(id - 1);
  }
  if (nextBtn) {
    const isLast = id >= lessons.length;
    nextBtn.textContent = isLast ? '🏁 Finalizar' : 'Siguiente →';
    nextBtn.onclick = () => isLast ? (window.location.href = 'index.html') : navigateTo(id + 1);
    if (completedLessons.includes(id)) nextBtn.classList.add('btn-next-active');
  }
}

function navigateTo(id) {
  window.location.href = `lesson.html?id=${id}`;
}

function showToast(msg, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast toast-' + type;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('toast-visible'), 10);
  setTimeout(() => { toast.classList.remove('toast-visible'); setTimeout(() => toast.remove(), 300); }, 2500);
}
