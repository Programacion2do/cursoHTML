const _urlParams   = new URLSearchParams(window.location.search);
const _course      = _urlParams.get('course') || 'html';
const _lessons     = _course === 'css' ? (typeof cssLessons !== 'undefined' ? cssLessons : [])
                   : _course === 'js'  ? (typeof jsLessons  !== 'undefined' ? jsLessons  : [])
                   : lessons;
const _progressKey = _course === 'css' ? 'csscourse_progress'
                   : _course === 'js'  ? 'jscourse_progress'
                   : 'htmlcourse_progress';

let editor          = null;   // index.html  (xml mode)
let editorCss       = null;   // style.css   (css mode)
let editorJs        = null;   // script.js   (javascript mode)
let activeEditorTab = 'html'; // 'html' | 'css' | 'js'
let currentLesson   = null;
let previewDebounce = null;
let completedLessons = JSON.parse(localStorage.getItem(_progressKey) || '[]');

document.addEventListener('DOMContentLoaded', () => {
  const params   = new URLSearchParams(window.location.search);
  const lessonId = parseInt(params.get('id')) || 1;

  editor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
    mode: 'xml', theme: 'material-darker', lineNumbers: true,
    autoCloseTags: true, lineWrapping: false, indentUnit: 2, tabSize: 2,
    extraKeys: { Tab: (cm) => cm.replaceSelection('  ') },
  });
  editor.on('change', () => {
    clearTimeout(previewDebounce);
    previewDebounce = setTimeout(updatePreview, 500);
  });

  editorCss = CodeMirror.fromTextArea(document.getElementById('code-editor-css'), {
    mode: 'css', theme: 'material-darker', lineNumbers: true,
    lineWrapping: false, indentUnit: 2, tabSize: 2,
    extraKeys: { Tab: (cm) => cm.replaceSelection('  ') },
  });
  editorCss.on('change', () => {
    clearTimeout(previewDebounce);
    previewDebounce = setTimeout(updatePreview, 500);
  });

  editorJs = CodeMirror.fromTextArea(document.getElementById('code-editor-js'), {
    mode: 'javascript', theme: 'material-darker', lineNumbers: true,
    lineWrapping: false, indentUnit: 2, tabSize: 2,
    extraKeys: { Tab: (cm) => cm.replaceSelection('  ') },
  });
  editorJs.on('change', () => {
    clearTimeout(previewDebounce);
    previewDebounce = setTimeout(updatePreview, 500);
  });

  initResizers();
  loadLesson(lessonId);
});

function loadLesson(id) {
  currentLesson = _lessons.find(l => l.id === id);
  if (!currentLesson) return;

  document.getElementById('lesson-title').textContent        = currentLesson.title;
  document.getElementById('chapter-badge').textContent       = currentLesson.chapterTitle;
  document.getElementById('lesson-number').textContent       = `Lección ${id} de ${_lessons.length}`;

  // Update topbar logo to match the active course
  const logoSpan = document.querySelector('.topbar-logo span');
  if (logoSpan) logoSpan.textContent = _course === 'css' ? 'CSS' : _course === 'js' ? 'JS' : 'HTML';
  document.getElementById('theory-content').innerHTML        = currentLesson.theory;
  document.getElementById('instructions-text').textContent   = currentLesson.instructions;

  updateProgressBar();

  const alreadyDone = completedLessons.includes(id);
  const isJs        = currentLesson.starterJs  !== undefined;
  const isCss       = currentLesson.starterCss !== undefined;

  // Show/hide tabs based on lesson type
  const tabCss = document.getElementById('tab-css');
  const tabJs  = document.getElementById('tab-js');
  const wrapCss = document.getElementById('wrap-css');
  const wrapJs  = document.getElementById('wrap-js');
  if (tabCss)  tabCss.style.display  = isCss ? '' : 'none';
  if (tabJs)   tabJs.style.display   = isJs  ? '' : 'none';
  if (wrapCss) wrapCss.style.display = 'none';
  if (wrapJs)  wrapJs.style.display  = 'none';

  if (isJs) {
    let h = currentLesson.starterHtml, c = currentLesson.starterCss || '', j = currentLesson.starterJs;
    if (alreadyDone) {
      const raw = localStorage.getItem(_progressKey + '_code_' + id);
      if (raw) { const snap = JSON.parse(raw); h = snap.html || h; c = snap.css || c; j = snap.js || j; }
    }
    editor.setValue(h); editorCss.setValue(c); editorJs.setValue(j);
    switchEditorTab('js');
  } else if (isCss) {
    let h = currentLesson.starterHtml, c = currentLesson.starterCss;
    if (alreadyDone) {
      const raw = localStorage.getItem(_progressKey + '_code_' + id);
      if (raw) { const snap = JSON.parse(raw); h = snap.html || h; c = snap.css || c; }
    }
    editor.setValue(h); editorCss.setValue(c); editorJs.setValue('');
    switchEditorTab('css');
  } else {
    let code = currentLesson.starterCode;
    if (alreadyDone) {
      const raw = localStorage.getItem(_progressKey + '_code_' + id);
      if (raw) { const snap = JSON.parse(raw); code = snap.html || code; }
    }
    editor.setValue(code); editorCss.setValue(''); editorJs.setValue('');
    switchEditorTab('html');
  }

  editor.clearHistory();
  editorCss.clearHistory();
  editorJs.clearHistory();

  clearFeedback();
  updateNavButtons(id);

  // If already fully completed, restore done state
  if (alreadyDone) {
    document.getElementById('success-banner').style.display = 'flex';
    if (currentLesson.formUrl && completedLessons.length >= _lessons.length) showFormPanel();
  }

  setTimeout(() => { editor.refresh(); editorCss.refresh(); editorJs.refresh(); updatePreview(); }, 50);
}

function updatePreview() {
  const html = editor    ? editor.getValue()    : '';
  const css  = editorCss ? editorCss.getValue() : '';
  const js   = editorJs  ? editorJs.getValue()  : '';
  let combined = html;
  if (css.trim() && !combined.includes('<style>')) {
    combined = combined.replace('</head>', `<style>\n${css}\n</style>\n</head>`);
  }
  if (js.trim()) {
    combined = combined.includes('</body>')
      ? combined.replace('</body>', `<script>\n${js}\n<\/script>\n</body>`)
      : combined + `<script>\n${js}\n<\/script>`;
  }
  const iframe = document.getElementById('preview-frame');
  try {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open(); doc.write(combined); doc.close();
  } catch (e) { iframe.srcdoc = combined; }
}

function verifyCode() {
  const isJs     = currentLesson.starterJs  !== undefined;
  const isCss    = currentLesson.starterCss !== undefined;
  const htmlCode = editor.getValue().trim();
  const cssCode  = editorCss ? editorCss.getValue().trim() : '';
  const jsCode   = editorJs  ? editorJs.getValue().trim()  : '';

  // What gets checked depends on lesson type
  const checkCode = isJs ? jsCode : isCss ? cssCode : htmlCode;

  if (!checkCode || (!isJs && !isCss && checkCode === currentLesson.starterCode)) {
    showToast('Escribí algo de código primero 😊', 'warn'); return;
  }

  // Build combined HTML for element checks (DOMParser)
  let fullHtml = htmlCode;
  if (cssCode && !htmlCode.includes('<style>')) {
    fullHtml = fullHtml.replace('</head>', `<style>${cssCode}</style></head>`);
  }
  if (jsCode) {
    fullHtml = fullHtml.replace('</body>', `<script>${jsCode}<\/script></body>`);
  }

  const parser  = new DOMParser();
  const doc     = parser.parseFromString(fullHtml, 'text/html');
  const results = currentLesson.checks.map(check => runCheck(check, checkCode, doc));

  displayResults(results);
  if (results.every(r => r.passed)) markComplete();
}

function runCheck(check, code, doc) {
  let passed = false;
  try {
    switch (check.type) {
      case 'regex':           passed = new RegExp(check.pattern, 'i').test(code); break;
      case 'element':         passed = doc.querySelector(check.selector) !== null; break;
      case 'elementWithText': { const e = doc.querySelector(check.selector); passed = !!e && e.textContent.trim().length > 0; break; }
      case 'elementWithAttr': { const e = doc.querySelector(check.selector); passed = !!e && e.hasAttribute(check.attr) && e.getAttribute(check.attr).trim() !== ''; break; }
      case 'minCount':        passed = doc.querySelectorAll(check.selector).length >= check.count; break;
      case 'custom':          passed = check.test(code, doc); break;
    }
  } catch (e) { passed = false; }
  return { ...check, passed };
}

function displayResults(results) {
  const panel = document.getElementById('checks-panel');
  const list  = document.getElementById('checks-list');
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
      </div>`;
    list.appendChild(item);
  });
}

function markComplete() {
  const id = currentLesson.id;
  if (!completedLessons.includes(id)) {
    completedLessons.push(id);
    localStorage.setItem(_progressKey, JSON.stringify(completedLessons));
  }

  // Save student's code snapshot for this lesson
  try {
    const snap = {
      lessonId:    id,
      lessonTitle: currentLesson.title,
      html: editor    ? editor.getValue()    : '',
      css:  editorCss ? editorCss.getValue() : '',
      js:   editorJs  ? editorJs.getValue()  : '',
      date: new Date().toISOString(),
    };
    localStorage.setItem(_progressKey + '_code_' + id, JSON.stringify(snap));
  } catch(e) {}

  document.getElementById('success-banner').style.display = 'flex';
  updateProgressBar();
  enableNext();

  if (currentLesson.formUrl && completedLessons.length >= _lessons.length) showFormPanel();
}


function enableNext() {
  const btn = document.getElementById('btn-next');
  if (btn) {
    btn.disabled  = false;
    btn.title     = '';
    btn.classList.add('btn-next-active');
    const isLast  = currentLesson.id >= _lessons.length;
    btn.onclick   = () => isLast ? showDiplomaModal() : navigateTo(currentLesson.id + 1);
  }
}

function updateProgressBar() {
  const pct = Math.round((completedLessons.length / _lessons.length) * 100);
  document.getElementById('progress-bar').style.width  = pct + '%';
  document.getElementById('progress-text').textContent = `${completedLessons.length}/${_lessons.length}`;
}

function clearFeedback() {
  document.getElementById('checks-panel').style.display   = 'none';
  document.getElementById('checks-list').innerHTML        = '';
  document.getElementById('success-banner').style.display = 'none';
  hideFormPanel();
}

function showFormPanel() {
  const formPanel  = document.getElementById('form-panel');
  const editorArea = document.getElementById('editor-area');
  const iframe     = document.getElementById('form-embed');
  if (!formPanel || !iframe) return;
  iframe.src = currentLesson.formUrl + '?embedded=true';
  editorArea.style.display = 'none';
  formPanel.style.display  = 'flex';
}

function hideFormPanel() {
  const formPanel  = document.getElementById('form-panel');
  const editorArea = document.getElementById('editor-area');
  if (formPanel)  formPanel.style.display  = 'none';
  if (editorArea) editorArea.style.display = '';
}

function updateNavButtons(id) {
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  if (prevBtn) {
    prevBtn.disabled = id <= 1;
    prevBtn.onclick  = () => navigateTo(id - 1);
  }
  if (nextBtn) {
    const isLast      = id >= _lessons.length;
    const isUnlocked  = completedLessons.includes(id);
    nextBtn.textContent = isLast ? '🏁 Finalizar' : 'Siguiente →';
    nextBtn.disabled    = !isUnlocked;
    nextBtn.title       = isUnlocked ? '' : 'Completá el ejercicio para continuar';
    nextBtn.classList.toggle('btn-next-active', isUnlocked);
    nextBtn.onclick = isUnlocked
      ? () => isLast ? showDiplomaModal() : navigateTo(id + 1)
      : null;
  }
}

function navigateTo(id) {
  window.location.href = _course === 'html'
    ? `lesson.html?id=${id}`
    : `lesson.html?course=${_course}&id=${id}`;
}
function resetCode() {
  if (confirm('¿Resetear el código al ejemplo inicial?')) {
    const isJs  = currentLesson.starterJs  !== undefined;
    const isCss = currentLesson.starterCss !== undefined;
    if (isJs) {
      editor.setValue(currentLesson.starterHtml);
      editorCss.setValue(currentLesson.starterCss || '');
      editorJs.setValue(currentLesson.starterJs);
    } else if (isCss) {
      editor.setValue(currentLesson.starterHtml);
      editorCss.setValue(currentLesson.starterCss);
      editorJs.setValue('');
    } else {
      editor.setValue(currentLesson.starterCode);
      editorCss.setValue('');
      editorJs.setValue('');
    }
    editor.clearHistory(); editorCss.clearHistory(); editorJs.clearHistory();
    clearFeedback(); updatePreview();
  }
}
function resetLesson() {
  const id = currentLesson.id;
  completedLessons = completedLessons.filter(x => x !== id);
  localStorage.setItem(_progressKey, JSON.stringify(completedLessons));

  const isJs  = currentLesson.starterJs  !== undefined;
  const isCss = currentLesson.starterCss !== undefined;
  if (isJs) {
    editor.setValue(currentLesson.starterHtml);
    editorCss.setValue(currentLesson.starterCss || '');
    editorJs.setValue(currentLesson.starterJs);
    switchEditorTab('js');
  } else if (isCss) {
    editor.setValue(currentLesson.starterHtml);
    editorCss.setValue(currentLesson.starterCss);
    editorJs.setValue('');
    switchEditorTab('css');
  } else {
    editor.setValue(currentLesson.starterCode);
    editorCss.setValue('');
    editorJs.setValue('');
    switchEditorTab('html');
  }
  editor.clearHistory(); editorCss.clearHistory(); editorJs.clearHistory();
  clearFeedback();
  updateNavButtons(id);
  updateProgressBar();
  updatePreview();
}


function saveAndExport() {
  const keys = [
    'lastCourse',
    'htmlcourse_progress', 'csscourse_progress', 'jscourse_progress',
    'htmlchallenges_done', 'csschallenges_done', 'jschallenges_done',
  ];
  const data = {};
  keys.forEach(k => { const v = localStorage.getItem(k); if (v !== null) data[k] = v; });
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.includes('_code_')) data[k] = localStorage.getItem(k);
  }
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'progreso_' + new Date().toISOString().slice(0,10) + '.json';
  a.click(); URL.revokeObjectURL(url);
  showToast('✓ Progreso guardado', 'ok');
}

function showToast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = `toast toast-${type}`; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('toast-visible'), 10);
  setTimeout(() => { t.classList.remove('toast-visible'); setTimeout(() => t.remove(), 300); }, 2500);
}

function switchEditorTab(tab) {
  activeEditorTab = tab;
  const wrapHtml = document.getElementById('wrap-html');
  const wrapCss  = document.getElementById('wrap-css');
  const wrapJs   = document.getElementById('wrap-js');
  const tabHtml  = document.getElementById('tab-html');
  const tabCss   = document.getElementById('tab-css');
  const tabJs    = document.getElementById('tab-js');
  if (wrapHtml) wrapHtml.style.display = tab === 'html' ? '' : 'none';
  if (wrapCss)  wrapCss.style.display  = tab === 'css'  ? '' : 'none';
  if (wrapJs)   wrapJs.style.display   = tab === 'js'   ? '' : 'none';
  if (tabHtml)  tabHtml.classList.toggle('active', tab === 'html');
  if (tabCss)   tabCss.classList.toggle('active',  tab === 'css');
  if (tabJs)    tabJs.classList.toggle('active',   tab === 'js');
  setTimeout(() => {
    if (tab === 'html' && editor)    editor.refresh();
    if (tab === 'css'  && editorCss) editorCss.refresh();
    if (tab === 'js'   && editorJs)  editorJs.refresh();
  }, 10);
}

function initResizers() {
  const leftPanel  = document.getElementById('panel-lesson');
  const rightPanel = document.getElementById('panel-preview');
  const MIN = 160, MAX = 700;

  function makeResizable(resizer, panel, side) {
    resizer.addEventListener('mousedown', (e) => {
      e.preventDefault();
      const startX = e.clientX, startWidth = panel.getBoundingClientRect().width;
      resizer.classList.add('is-dragging');
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      document.getElementById('preview-frame').style.pointerEvents = 'none';

      const onMove = e => {
        const delta = e.clientX - startX;
        const newW  = side === 'left'
          ? Math.max(MIN, Math.min(MAX, startWidth + delta))
          : Math.max(MIN, Math.min(MAX, startWidth - delta));
        panel.style.width = newW + 'px';
      };
      const onUp = () => {
        resizer.classList.remove('is-dragging');
        document.body.style.cursor = ''; document.body.style.userSelect = '';
        document.getElementById('preview-frame').style.pointerEvents = '';
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (editor) editor.refresh();
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
    resizer.addEventListener('dblclick', () => {
      panel.style.width = side === 'left' ? '320px' : '340px';
      if (editor) editor.refresh();
    });
  }

  makeResizable(document.getElementById('resizer-left'),  leftPanel,  'left');
  makeResizable(document.getElementById('resizer-right'), rightPanel, 'right');
}

function showDiplomaModal() {
  const modal = document.getElementById('diploma-modal');
  if (!modal) { window.location.href = 'index.html'; return; }
  document.getElementById('diploma-step-1').style.display = 'block';
  document.getElementById('diploma-step-2').style.display = 'none';
  document.getElementById('diploma-nombre').value   = '';
  document.getElementById('diploma-apellido').value = '';
  modal.style.display = 'flex';
}

function closeDiplomaModal() {
  document.getElementById('diploma-modal').style.display = 'none';
}

function submitDiplomaForm(e) {
  e.preventDefault();
  const nombre   = document.getElementById('diploma-nombre').value.trim();
  const apellido = document.getElementById('diploma-apellido').value.trim();
  if (!nombre || !apellido) return;

  const labels = { html: 'HTML', css: 'CSS', js: 'JavaScript' };
  const icons  = { html: '🌐', css: '🎨', js: '⚡' };
  const date   = new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });

  document.getElementById('diploma-icon').textContent   = icons[_course]  || '💻';
  document.getElementById('diploma-name').textContent   = `${nombre} ${apellido}`;
  document.getElementById('diploma-course').textContent = `Desarrollo ${labels[_course] || 'Web'}`;
  document.getElementById('diploma-date').textContent   = `Emitido el ${date}`;

  document.getElementById('diploma-step-1').style.display = 'none';
  document.getElementById('diploma-step-2').style.display = 'block';
}

function downloadDiploma() {
  const card = document.getElementById('diploma-card');
  if (typeof html2canvas === 'undefined') {
    window.print(); return;
  }
  const btn = document.querySelector('.btn-diploma-dl');
  const orig = btn.textContent;
  btn.textContent = 'Generando...'; btn.disabled = true;
  html2canvas(card, { scale: 2, useCORS: true, backgroundColor: null }).then(canvas => {
    const link    = document.createElement('a');
    link.download = `diploma-${_course}.png`;
    link.href     = canvas.toDataURL('image/png');
    link.click();
  }).catch(() => { window.print(); })
    .finally(() => { btn.textContent = orig; btn.disabled = false; });
}

function openFeedback() {
  closeDiplomaModal();
  // Pre-fill name from diploma if available
  const nombre   = document.getElementById('diploma-nombre') ? document.getElementById('diploma-nombre').value : '';
  const apellido = document.getElementById('diploma-apellido') ? document.getElementById('diploma-apellido').value : '';
  setTimeout(() => {
    const modal = document.getElementById('feedback-modal');
    if (!modal) return;
    document.getElementById('feedback-form-wrap').style.display = 'block';
    document.getElementById('feedback-thanks').style.display    = 'none';
    if (nombre)   document.getElementById('fb-nombre').value   = nombre;
    if (apellido) document.getElementById('fb-apellido').value = apellido;
    modal.style.display = 'flex';
  }, 180);
}

let _feedbackRating = 0;

function setRating(r) {
  _feedbackRating = r;
  document.querySelectorAll('.feedback-star').forEach((s, i) => {
    s.classList.toggle('active', i < r);
  });
}

async function submitFeedback(e) {
  e.preventDefault();
  const nombre      = document.getElementById('fb-nombre').value.trim();
  const apellido    = document.getElementById('fb-apellido').value.trim();
  const opinion     = document.getElementById('fb-opinion').value.trim();
  const sugerencias = document.getElementById('fb-sugerencias').value.trim();
  const fecha       = new Date().toLocaleDateString('es-AR', { year:'numeric', month:'long', day:'numeric' });
  const labels      = { html: 'HTML', css: 'CSS', js: 'JavaScript' };
  const stars       = '★'.repeat(_feedbackRating) + '☆'.repeat(5 - _feedbackRating);

  // Siempre guardar en localStorage como respaldo
  const entry = { curso: _course, nombre, apellido, rating: _feedbackRating, opinion, sugerencias, fecha: new Date().toISOString() };
  const all = JSON.parse(localStorage.getItem('course_feedback') || '[]');
  all.push(entry);
  localStorage.setItem('course_feedback', JSON.stringify(all));

  // Enviar por email si EmailJS está configurado
  if (_EMAILJS_SERVICE && _EMAILJS_FB_TEMPLATE) {
    const btn = document.querySelector('.feedback-submit');
    if (btn) { btn.textContent = 'Enviando...'; btn.disabled = true; }
    try {
      if (typeof emailjs === 'undefined') {
        await new Promise((res, rej) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          s.onload = res; s.onerror = rej;
          document.head.appendChild(s);
        });
        emailjs.init(_EMAILJS_PUBLIC);
      }
      await emailjs.send(_EMAILJS_SERVICE, _EMAILJS_FB_TEMPLATE, {
        nombre, apellido,
        curso:       labels[_course] || _course,
        calificacion: stars + ' (' + _feedbackRating + '/5)',
        opinion,
        sugerencias:  sugerencias || '(sin sugerencias)',
        fecha,
      });
    } catch(err) {
      console.error('EmailJS feedback error:', err);
    } finally {
      if (btn) { btn.textContent = 'Enviar opinión ✓'; btn.disabled = false; }
    }
  }

  document.getElementById('feedback-form-wrap').style.display = 'none';
  document.getElementById('feedback-thanks').style.display    = 'block';
}

function closeFeedbackModal() {
  document.getElementById('feedback-modal').style.display = 'none';
  _feedbackRating = 0;
  document.querySelectorAll('.feedback-star').forEach(s => s.classList.remove('active'));
}

// Para recibir entregas por email configurá EmailJS (gratis en emailjs.com):
//   1. Creá una cuenta en https://emailjs.com
//   2. Añadí un Email Service (Gmail, Outlook, etc.)
//   3. Creá un Email Template con las variables: {{nombre}}, {{apellido}}, {{email}},
//      {{curso}}, {{progreso}}, {{fecha}}, {{contenido}}
//   4. Copiá los IDs y pegálos acá:
const _EMAILJS_SERVICE     = 'service_76356jc';
const _EMAILJS_TEMPLATE    = '';
const _EMAILJS_FB_TEMPLATE = 'template_14scmt8';
const _EMAILJS_PUBLIC      = 'sTGt_cQvivmQWwJq1';

function openSubmitModal() {
  const modal = document.getElementById('submit-modal');
  if (!modal) return;

  // Reset panels
  document.getElementById('submit-form-wrap').style.display = 'block';
  document.getElementById('submit-thanks').style.display    = 'none';

  // Pre-fill name from diploma if available
  const n = document.getElementById('diploma-nombre');
  const a = document.getElementById('diploma-apellido');
  if (n && n.value) { const el = document.getElementById('sub-nombre');   if (el) el.value = n.value; }
  if (a && a.value) { const el = document.getElementById('sub-apellido'); if (el) el.value = a.value; }

  // If no EmailJS configured, hide email send button
  const sendBtn = document.getElementById('sub-send-btn');
  if (sendBtn) sendBtn.style.display = _EMAILJS_SERVICE ? '' : 'none';

  // Build progress summary
  _renderSubmitSummary();
  modal.style.display = 'flex';
}

function closeSubmitModal() {
  const m = document.getElementById('submit-modal');
  if (m) m.style.display = 'none';
}

function _renderSubmitSummary() {
  const el = document.getElementById('sub-summary');
  if (!el) return;
  const labels = { html: 'HTML', css: 'CSS', js: 'JavaScript' };
  const done   = completedLessons.length;
  const total  = _lessons.length;
  const pct    = Math.round((done / total) * 100);
  el.innerHTML =
    '<div class="sub-summary-box">' +
    '<div class="sub-sum-row"><span>Curso:</span><strong>' + (labels[_course] || _course) + '</strong></div>' +
    '<div class="sub-sum-row"><span>Progreso:</span><strong>' + done + ' / ' + total + ' lecciones (' + pct + '%)</strong></div>' +
    '<div class="sub-sum-row"><span>Código guardado:</span><strong>' + done + ' ejercicios</strong></div>' +
    '</div>';
}

function _collectSubmissionData(nombre, apellido, email) {
  const labels  = { html: 'HTML', css: 'CSS', js: 'JavaScript' };
  const lecciones = _lessons.map(l => {
    const raw  = localStorage.getItem(_progressKey + '_code_' + l.id);
    const snap = raw ? JSON.parse(raw) : null;
    return {
      id:        l.id,
      titulo:    l.title,
      completada: completedLessons.includes(l.id),
      codigo:    snap ? { html: snap.html, css: snap.css, js: snap.js } : null,
      fecha:     snap ? snap.date : null,
    };
  });
  return {
    alumno:   { nombre, apellido, email },
    curso:    labels[_course] || _course,
    progreso: completedLessons.length + '/' + _lessons.length,
    fecha:    new Date().toISOString(),
    lecciones,
  };
}

function downloadSubmissionJSON() {
  const nombre   = (document.getElementById('sub-nombre')?.value   || 'alumno').trim();
  const apellido = (document.getElementById('sub-apellido')?.value || '').trim();
  const email    = (document.getElementById('sub-email')?.value    || '').trim();
  const data     = _collectSubmissionData(nombre, apellido, email);
  const json     = JSON.stringify(data, null, 2);
  const blob     = new Blob([json], { type: 'application/json' });
  const url      = URL.createObjectURL(blob);
  const link     = document.createElement('a');
  link.href      = url;
  link.download  = 'entrega-' + _course + '-' + (nombre + '-' + apellido).toLowerCase().replace(/\s+/g, '-') + '.json';
  link.click();
  URL.revokeObjectURL(url);
}

async function handleSubmit(e) {
  e.preventDefault();
  const nombre   = document.getElementById('sub-nombre').value.trim();
  const apellido = document.getElementById('sub-apellido').value.trim();
  const email    = document.getElementById('sub-email').value.trim();

  // If no EmailJS configured, just download
  if (!_EMAILJS_SERVICE) { downloadSubmissionJSON(); return; }

  const btn  = document.getElementById('sub-send-btn');
  const orig = btn ? btn.textContent : '';
  if (btn) { btn.textContent = 'Enviando...'; btn.disabled = true; }

  const data = _collectSubmissionData(nombre, apellido, email);

  try {
    // Lazy-load EmailJS SDK
    if (typeof emailjs === 'undefined') {
      await new Promise((res, rej) => {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
        s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
      });
      emailjs.init(_EMAILJS_PUBLIC);
    }
    const labels = { html: 'HTML', css: 'CSS', js: 'JavaScript' };
    await emailjs.send(_EMAILJS_SERVICE, _EMAILJS_TEMPLATE, {
      nombre, apellido, email,
      curso:     labels[_course] || _course,
      progreso:  data.progreso,
      fecha:     new Date().toLocaleDateString('es-AR'),
      contenido: JSON.stringify(data.lecciones, null, 2).substring(0, 18000),
    });
    document.getElementById('submit-form-wrap').style.display = 'none';
    document.getElementById('submit-thanks').style.display    = 'block';
  } catch(err) {
    console.error('EmailJS error:', err);
    alert('No se pudo enviar por email. Descargando el archivo JSON como alternativa...');
    downloadSubmissionJSON();
  } finally {
    if (btn) { btn.textContent = orig; btn.disabled = false; }
  }
}
