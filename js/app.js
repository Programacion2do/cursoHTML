// ── COURSE DETECTION ─────────────────────────────────
const _urlParams   = new URLSearchParams(window.location.search);
const _course      = _urlParams.get('course') || 'html';
const _lessons     = _course === 'css'
  ? (typeof cssLessons !== 'undefined' ? cssLessons : [])
  : lessons;
const _progressKey = _course === 'css' ? 'csscourse_progress' : 'htmlcourse_progress';
const _quizKey     = _course === 'css' ? 'csscourse_quiz'     : 'htmlcourse_quiz';

// ── STATE ────────────────────────────────────────────
let editor          = null;
let currentLesson   = null;
let previewDebounce = null;
let quizAnswers     = {};   // { questionIndex: optionIndex }

let completedLessons = JSON.parse(localStorage.getItem(_progressKey) || '[]');
let completedQuizzes = JSON.parse(localStorage.getItem(_quizKey)     || '[]');

// ── BOOT ─────────────────────────────────────────────
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

  initResizers();
  loadLesson(lessonId);
});

// ── LESSON LOADING ────────────────────────────────────
function loadLesson(id) {
  currentLesson = _lessons.find(l => l.id === id);
  if (!currentLesson) return;

  document.getElementById('lesson-title').textContent        = currentLesson.title;
  document.getElementById('chapter-badge').textContent       = currentLesson.chapterTitle;
  document.getElementById('lesson-number').textContent       = `Lección ${id} de ${_lessons.length}`;
  document.getElementById('theory-content').innerHTML        = currentLesson.theory;
  document.getElementById('instructions-text').textContent   = currentLesson.instructions;

  updateProgressBar();

  const alreadyDone = completedLessons.includes(id);
  editor.setValue(alreadyDone ? currentLesson.solution : currentLesson.starterCode);
  editor.clearHistory();

  clearFeedback();
  updateNavButtons(id);

  // If already fully completed, restore done state
  if (alreadyDone) {
    document.getElementById('success-banner').style.display = 'flex';
    if (completedQuizzes.includes(id)) {
      restoreCompletedQuiz();
    }
  }

  setTimeout(() => { editor.refresh(); updatePreview(); }, 50);
}

// ── PREVIEW ───────────────────────────────────────────
function updatePreview() {
  const code   = editor ? editor.getValue() : '';
  const iframe = document.getElementById('preview-frame');
  try {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open(); doc.write(code); doc.close();
  } catch (e) { iframe.srcdoc = code; }
}

// ── EXERCISE VERIFICATION ─────────────────────────────
function verifyCode() {
  const code = editor.getValue().trim();
  if (!code || code === currentLesson.starterCode) {
    showToast('Escribe algo de código primero 😊', 'warn'); return;
  }
  const parser  = new DOMParser();
  const doc     = parser.parseFromString(code, 'text/html');
  const results = currentLesson.checks.map(check => runCheck(check, code, doc));

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
  document.getElementById('success-banner').style.display = 'flex';
  updateProgressBar();

  // If quiz already done (re-verification), just enable next
  if (completedQuizzes.includes(id)) {
    enableNext(); restoreCompletedQuiz(); return;
  }
  // Show quiz
  showQuiz();
}

// ── QUIZ ──────────────────────────────────────────────
function showQuiz() {
  quizAnswers = {};
  const panel = document.getElementById('quiz-panel');
  panel.style.display = 'block';
  document.getElementById('quiz-done-banner').style.display = 'none';
  renderQuiz();
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 150);
}

function renderQuiz() {
  const quiz      = currentLesson.quiz || [];
  const container = document.getElementById('quiz-questions');
  container.innerHTML = '';

  quiz.forEach((q, qi) => {
    const block = document.createElement('div');
    block.className = 'quiz-block';
    block.id = `qblock-${qi}`;
    block.innerHTML = `
      <div class="quiz-q-label">Pregunta ${qi + 1} de ${quiz.length}</div>
      <div class="quiz-q-text">${q.question}</div>
      <div class="quiz-opts" id="qopts-${qi}">
        ${'ABCD'.split('').map((letter, oi) => `
          <button class="quiz-opt" onclick="selectOption(${qi},${oi})">
            <span class="quiz-letter">${letter}</span>
            <span>${q.options[oi]}</span>
          </button>`).join('')}
      </div>
      <div class="quiz-feedback" id="qfb-${qi}" style="display:none"></div>`;
    container.appendChild(block);
  });
}

function selectOption(qi, oi) {
  if (quizAnswers[qi] !== undefined) return;  // already answered
  quizAnswers[qi] = oi;

  const q       = currentLesson.quiz[qi];
  const correct = oi === q.correct;

  // Style options
  document.querySelectorAll(`#qopts-${qi} .quiz-opt`).forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('qopt-correct');
    if (i === oi && !correct) btn.classList.add('qopt-wrong');
  });

  // Feedback
  const fb = document.getElementById(`qfb-${qi}`);
  fb.style.display = 'flex';
  fb.className     = `quiz-feedback ${correct ? 'qfb-ok' : 'qfb-err'}`;
  fb.innerHTML     = `<span class="qfb-icon">${correct ? '✓' : '✗'}</span><span>${q.explanation}</span>`;

  // All answered?
  const total = currentLesson.quiz.length;
  const done  = Object.keys(quizAnswers).length;
  if (done === total) setTimeout(completeQuiz, 500);
}

function completeQuiz() {
  const id = currentLesson.id;
  if (!completedQuizzes.includes(id)) {
    completedQuizzes.push(id);
    localStorage.setItem(_quizKey, JSON.stringify(completedQuizzes));
  }
  document.getElementById('quiz-done-banner').style.display = 'flex';
  enableNext();
  document.getElementById('quiz-done-banner').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function restoreCompletedQuiz() {
  const panel = document.getElementById('quiz-panel');
  panel.style.display = 'block';

  const container = document.getElementById('quiz-questions');
  container.innerHTML = '';

  // Show questions locked in solution state
  const quiz = currentLesson.quiz || [];
  quiz.forEach((q, qi) => {
    const block = document.createElement('div');
    block.className = 'quiz-block quiz-block-done';
    block.innerHTML = `
      <div class="quiz-q-label">Pregunta ${qi + 1} de ${quiz.length}</div>
      <div class="quiz-q-text">${q.question}</div>
      <div class="quiz-opts">
        ${'ABCD'.split('').map((letter, oi) => `
          <button class="quiz-opt ${oi === q.correct ? 'qopt-correct' : ''}" disabled>
            <span class="quiz-letter">${letter}</span>
            <span>${q.options[oi]}</span>
          </button>`).join('')}
      </div>
      <div class="quiz-feedback qfb-ok" style="display:flex">
        <span class="qfb-icon">✓</span><span>${q.explanation}</span>
      </div>`;
    container.appendChild(block);
  });

  document.getElementById('quiz-done-banner').style.display = 'flex';
}

// ── HELPERS ───────────────────────────────────────────
function enableNext() {
  const btn = document.getElementById('btn-next');
  if (btn) btn.classList.add('btn-next-active');
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
  document.getElementById('quiz-panel').style.display     = 'none';
  document.getElementById('quiz-questions').innerHTML     = '';
  document.getElementById('quiz-done-banner').style.display = 'none';
  quizAnswers = {};
}

function updateNavButtons(id) {
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  if (prevBtn) {
    prevBtn.disabled = id <= 1;
    prevBtn.onclick  = () => navigateTo(id - 1);
  }
  if (nextBtn) {
    const isLast         = id >= _lessons.length;
    nextBtn.textContent  = isLast ? '🏁 Finalizar' : 'Siguiente →';
    nextBtn.onclick      = () => isLast ? (window.location.href = 'index.html') : navigateTo(id + 1);
    if (completedQuizzes.includes(id)) nextBtn.classList.add('btn-next-active');
  }
}

function navigateTo(id) {
  window.location.href = _course === 'html'
    ? `lesson.html?id=${id}`
    : `lesson.html?course=${_course}&id=${id}`;
}
function resetCode() {
  if (confirm('¿Resetear el código al ejemplo inicial?')) {
    editor.setValue(currentLesson.starterCode);
    editor.clearHistory(); clearFeedback(); updatePreview();
  }
}
function showSolution() {
  if (confirm('¿Ver la solución? Te recomendamos intentarlo primero.')) {
    editor.setValue(currentLesson.solution); updatePreview();
  }
}
function showToast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = `toast toast-${type}`; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('toast-visible'), 10);
  setTimeout(() => { t.classList.remove('toast-visible'); setTimeout(() => t.remove(), 300); }, 2500);
}

// ── PANEL RESIZERS ────────────────────────────────────
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
