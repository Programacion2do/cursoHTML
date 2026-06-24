// ── CHALLENGE PAGE LOGIC ──────────────────────────────

const _chParams  = new URLSearchParams(window.location.search);
const _chCourse  = _chParams.get('course') || 'html';
const _chId      = parseInt(_chParams.get('id')) || 1;
const _chList    = CHALLENGES[_chCourse] || [];

let _challenge    = null;
let chEditor      = null;
let chEditorCss   = null;
let chEditorJs    = null;
let chPreviewDeb  = null;
let chAlreadyDone = false;

document.addEventListener('DOMContentLoaded', () => {
  // Init editors
  chEditor = CodeMirror.fromTextArea(document.getElementById('ch-editor-html'), {
    mode: 'xml', theme: 'material-darker', lineNumbers: true,
    autoCloseTags: true, lineWrapping: false, indentUnit: 2, tabSize: 2,
    extraKeys: { Tab: cm => cm.replaceSelection('  ') },
  });
  chEditorCss = CodeMirror.fromTextArea(document.getElementById('ch-editor-css'), {
    mode: 'css', theme: 'material-darker', lineNumbers: true,
    lineWrapping: false, indentUnit: 2, tabSize: 2,
    extraKeys: { Tab: cm => cm.replaceSelection('  ') },
  });
  chEditorJs = CodeMirror.fromTextArea(document.getElementById('ch-editor-js'), {
    mode: 'javascript', theme: 'material-darker', lineNumbers: true,
    lineWrapping: false, indentUnit: 2, tabSize: 2,
    extraKeys: { Tab: cm => cm.replaceSelection('  ') },
  });

  const onChg = () => { clearTimeout(chPreviewDeb); chPreviewDeb = setTimeout(chUpdatePreview, 500); };
  chEditor.on('change', onChg);
  chEditorCss.on('change', onChg);
  chEditorJs.on('change', onChg);

  chInitResizers();
  chLoadChallenge();
});

// ── LOAD ─────────────────────────────────────────────
function chLoadChallenge() {
  _challenge = _chList.find(c => c.id === _chId);
  if (!_challenge) {
    document.body.innerHTML = '<div style="padding:40px;color:#94a3b8;font-family:sans-serif">Desafío no encontrado. <a href="index.html">Volver al inicio</a></div>';
    return;
  }

  const isJs  = _challenge.starterJs  !== undefined;
  const isCss = _challenge.starterCss !== undefined && !isJs;
  const labels = { html: 'HTML', css: 'CSS', js: 'JavaScript' };
  const diffLabels = { easy: 'Fácil', medium: 'Medio', hard: 'Difícil' };
  const diffColors = { easy: '#10b981', medium: '#f59e0b', hard: '#ef4444' };

  // Topbar
  document.getElementById('ch-course-badge').textContent = 'Desafíos de ' + (labels[_chCourse] || _chCourse);
  document.getElementById('ch-title').textContent        = _challenge.title;

  const xpBadge  = document.getElementById('ch-xp-badge');
  xpBadge.textContent = '+' + _challenge.xp + ' XP';

  const diffBadge = document.getElementById('ch-diff-badge');
  diffBadge.textContent = diffLabels[_challenge.difficulty] || _challenge.difficulty;
  diffBadge.style.background = diffColors[_challenge.difficulty] || '#64748b';

  // Left panel
  document.getElementById('ch-num-badge').textContent   = _challenge.icon + ' Desafío ' + _chId + ' de ' + _chList.length;
  document.getElementById('ch-title-panel').textContent = _challenge.title;
  document.getElementById('ch-description').textContent = _challenge.description;
  document.getElementById('ch-instructions').innerHTML  = _challenge.instructions;

  // Tabs visibility
  const tabCss = document.getElementById('ch-tab-css');
  const tabJs  = document.getElementById('ch-tab-js');
  if (tabCss) tabCss.style.display = (isCss || isJs) ? '' : 'none';
  if (tabJs)  tabJs.style.display  = isJs ? '' : 'none';

  // Check if already completed
  const done = getCompletedChallenges(_chCourse);
  chAlreadyDone = done.includes(_chId);

  // Load starter code
  if (isJs) {
    chEditor.setValue(_challenge.starterHtml || '');
    chEditorCss.setValue(_challenge.starterCss || '');
    chEditorJs.setValue(_challenge.starterJs || '');
    chSwitchTab('js');
  } else if (isCss) {
    chEditor.setValue(_challenge.starterHtml || '');
    chEditorCss.setValue(_challenge.starterCss || '');
    chEditorJs.setValue('');
    chSwitchTab('css');
  } else {
    chEditor.setValue(_challenge.starterCode || '');
    chEditorCss.setValue('');
    chEditorJs.setValue('');
    chSwitchTab('html');
  }

  chEditor.clearHistory(); chEditorCss.clearHistory(); chEditorJs.clearHistory();

  // Show next button if there's another challenge
  const nextIdx = _chList.findIndex(c => c.id === _chId) + 1;
  const nextBtn = document.getElementById('ch-btn-next');
  if (nextBtn) nextBtn.style.display = nextIdx < _chList.length ? '' : 'none';

  // Restore done state
  if (chAlreadyDone) {
    document.getElementById('ch-success-banner').style.display = 'flex';
  }

  setTimeout(() => {
    chEditor.refresh(); chEditorCss.refresh(); chEditorJs.refresh();
    chUpdatePreview();
  }, 50);
}

// ── PREVIEW ──────────────────────────────────────────
function chUpdatePreview() {
  const html = chEditor.getValue();
  const css  = chEditorCss.getValue().trim();
  const js   = chEditorJs.getValue().trim();
  let combined = html;
  if (css && !combined.includes('<style>')) {
    combined = combined.replace('</head>', '<style>\n' + css + '\n</style>\n</head>');
    if (!combined.includes('<style>')) combined = '<style>\n' + css + '\n</style>\n' + combined;
  }
  if (js) {
    var tag = '<' + 'script>'; var endTag = '<' + '/script>';
    combined = combined.includes('</body>')
      ? combined.replace('</body>', tag + '\n' + js + '\n' + endTag + '\n</body>')
      : combined + tag + '\n' + js + '\n' + endTag;
  }
  const iframe = document.getElementById('ch-preview-frame');
  try {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open(); doc.write(combined); doc.close();
  } catch(e) { iframe.srcdoc = combined; }
}

// ── VERIFY ───────────────────────────────────────────
function chVerify() {
  if (!_challenge) return;
  const isJs  = _challenge.starterJs  !== undefined;
  const isCss = _challenge.starterCss !== undefined && !isJs;

  const htmlCode = chEditor.getValue().trim();
  const cssCode  = chEditorCss ? chEditorCss.getValue().trim() : '';
  const jsCode   = chEditorJs  ? chEditorJs.getValue().trim()  : '';
  const checkCode = isJs ? jsCode : isCss ? cssCode : htmlCode;

  // Build DOM for element checks
  let fullHtml = htmlCode;
  if (cssCode && !htmlCode.includes('<style>')) {
    fullHtml = fullHtml.replace('</head>', '<style>' + cssCode + '</style></head>');
  }
  const parser = new DOMParser();
  const doc    = parser.parseFromString(fullHtml, 'text/html');

  const results = _challenge.checks.map(check => chRunCheck(check, checkCode, doc));
  chDisplayResults(results);
  if (results.every(r => r.passed)) chMarkComplete();
}

function chRunCheck(check, code, doc) {
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
  } catch(e) { passed = false; }
  return { ...check, passed };
}

function chDisplayResults(results) {
  const panel = document.getElementById('ch-checks-panel');
  const list  = document.getElementById('ch-checks-list');
  list.innerHTML = '';
  panel.style.display = 'block';
  results.forEach(r => {
    const item = document.createElement('div');
    item.className = 'check-item ' + (r.passed ? 'check-pass' : 'check-fail');
    item.innerHTML =
      '<span class="check-icon">' + (r.passed ? '✓' : '✗') + '</span>' +
      '<div class="check-body">' +
        '<span class="check-msg">' + r.message + '</span>' +
        (!r.passed && r.hint ? '<span class="check-hint">💡 ' + r.hint + '</span>' : '') +
      '</div>';
    list.appendChild(item);
  });
}

// ── COMPLETE ─────────────────────────────────────────
function chMarkComplete() {
  const done = getCompletedChallenges(_chCourse);
  if (!done.includes(_chId)) {
    done.push(_chId);
    localStorage.setItem(getXpKey(_chCourse), JSON.stringify(done));
  }
  document.getElementById('ch-success-banner').style.display = 'flex';
  if (!chAlreadyDone) {
    chAlreadyDone = true;
    setTimeout(chShowXpOverlay, 400);
  }
}

// ── XP OVERLAY ───────────────────────────────────────
function chShowXpOverlay() {
  const totalXp = getTotalXp();
  const level   = getXpLevel(totalXp);
  const xp      = _challenge.xp;

  document.getElementById('xp-icon').textContent    = _challenge.icon;
  document.getElementById('xp-subtitle').textContent = _challenge.title;
  document.getElementById('xp-amount').textContent   = '+' + xp + ' XP';

  // Level info
  const levelRow = document.getElementById('xp-level-row');
  levelRow.innerHTML =
    '<span>' + level.icon + ' ' + level.label + '</span>' +
    '<span style="margin:0 8px;color:var(--text3)">·</span>' +
    '<span style="color:var(--accent2)">' + totalXp + ' XP total</span>';

  // Next button
  const nextIdx = _chList.findIndex(c => c.id === _chId) + 1;
  const nextBtn = document.getElementById('xp-btn-next');
  if (nextBtn) nextBtn.style.display = nextIdx < _chList.length ? '' : 'none';

  document.getElementById('xp-overlay').style.display = 'flex';
  chSpawnConfetti();
}

function chNextFromOverlay() {
  document.getElementById('xp-overlay').style.display = 'none';
  chNextChallenge();
}

function chNextChallenge() {
  const nextIdx = _chList.findIndex(c => c.id === _chId) + 1;
  if (nextIdx < _chList.length) {
    const nextId = _chList[nextIdx].id;
    window.location.href = 'challenge.html?course=' + _chCourse + '&id=' + nextId;
  } else {
    window.location.href = 'index.html';
  }
}

// ── CONFETTI ─────────────────────────────────────────
function chSpawnConfetti() {
  const container = document.getElementById('xp-confetti');
  container.innerHTML = '';
  const colors = ['#7c3aed','#a78bfa','#fbbf24','#10b981','#38bdf8','#f472b6'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText =
      'left:' + (Math.random() * 100) + '%;' +
      'background:' + colors[Math.floor(Math.random() * colors.length)] + ';' +
      'animation-delay:' + (Math.random() * 0.8) + 's;' +
      'animation-duration:' + (0.8 + Math.random() * 0.8) + 's;' +
      'width:' + (6 + Math.random() * 8) + 'px;' +
      'height:' + (6 + Math.random() * 8) + 'px;' +
      'border-radius:' + (Math.random() > 0.5 ? '50%' : '2px') + ';';
    container.appendChild(p);
  }
}

// ── RESET / SOLUTION ─────────────────────────────────
function chReset() {
  if (!_challenge || !confirm('¿Resetear el código al ejemplo inicial?')) return;
  const isJs  = _challenge.starterJs  !== undefined;
  const isCss = _challenge.starterCss !== undefined && !isJs;
  if (isJs) {
    chEditor.setValue(_challenge.starterHtml || '');
    chEditorCss.setValue(_challenge.starterCss || '');
    chEditorJs.setValue(_challenge.starterJs || '');
  } else if (isCss) {
    chEditor.setValue(_challenge.starterHtml || '');
    chEditorCss.setValue(_challenge.starterCss || '');
    chEditorJs.setValue('');
  } else {
    chEditor.setValue(_challenge.starterCode || '');
    chEditorCss.setValue(''); chEditorJs.setValue('');
  }
  chEditor.clearHistory(); chEditorCss.clearHistory(); chEditorJs.clearHistory();
  document.getElementById('ch-checks-panel').style.display = 'none';
  document.getElementById('ch-checks-list').innerHTML = '';
  chUpdatePreview();
}


// ── TAB SWITCHER ─────────────────────────────────────
function chSwitchTab(tab) {
  ['html','css','js'].forEach(t => {
    document.getElementById('ch-wrap-' + t).style.display = t === tab ? '' : 'none';
    document.getElementById('ch-tab-' + t).classList.toggle('active', t === tab);
  });
  setTimeout(() => {
    if (tab === 'html') chEditor.refresh();
    if (tab === 'css')  chEditorCss.refresh();
    if (tab === 'js')   chEditorJs.refresh();
  }, 10);
}

// ── RESIZERS ─────────────────────────────────────────
function chInitResizers() {
  const leftPanel  = document.getElementById('panel-lesson');
  const rightPanel = document.getElementById('panel-preview');
  const MIN = 160, MAX = 700;
  function makeResizable(resizer, panel, side) {
    resizer.addEventListener('mousedown', e => {
      e.preventDefault();
      const startX = e.clientX, startW = panel.getBoundingClientRect().width;
      resizer.classList.add('is-dragging');
      document.body.style.cursor = 'col-resize'; document.body.style.userSelect = 'none';
      document.getElementById('ch-preview-frame').style.pointerEvents = 'none';
      const onMove = e => {
        const w = side === 'left'
          ? Math.max(MIN, Math.min(MAX, startW + e.clientX - startX))
          : Math.max(MIN, Math.min(MAX, startW - e.clientX + startX));
        panel.style.width = w + 'px';
      };
      const onUp = () => {
        resizer.classList.remove('is-dragging');
        document.body.style.cursor = ''; document.body.style.userSelect = '';
        document.getElementById('ch-preview-frame').style.pointerEvents = '';
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (chEditor) chEditor.refresh();
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    });
    resizer.addEventListener('dblclick', () => { panel.style.width = side === 'left' ? '320px' : '340px'; });
  }
  makeResizable(document.getElementById('resizer-left'),  leftPanel,  'left');
  makeResizable(document.getElementById('resizer-right'), rightPanel, 'right');
}
