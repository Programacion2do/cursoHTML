const JavaScriptObfuscator = require('javascript-obfuscator');
const fs   = require('fs');
const path = require('path');

const SRC  = __dirname;
const DIST = path.join(__dirname, 'dist');

// JS files to obfuscate in dist/js/
const OBFUSCATE = ['app.js', 'challenge-app.js', 'challenges.js'];

// Files/dirs to exclude from dist (source-only)
const EXCLUDE = new Set([
  'node_modules', 'dist', 'build.js',
  'package.json', 'package-lock.json',
  'README-docente.md', 'soluciones.md', 'solucionesDesafios.md',
  'quiz-forms',
]);

const OPTIONS = {
  compact:                        true,
  controlFlowFlattening:          true,
  controlFlowFlatteningThreshold: 0.4,
  deadCodeInjection:              false,
  debugProtection:                false,
  disableConsoleOutput:           false,
  identifierNamesGenerator:       'hexadecimal',
  renameGlobals:                  false, // onclick handlers referencian funciones globales
  selfDefending:                  false,
  simplify:                       true,
  splitStrings:                   true,
  splitStringsChunkLength:        8,
  stringArray:                    true,
  stringArrayCallsTransform:      true,
  stringArrayEncoding:            ['base64'],
  stringArrayIndexShift:          true,
  stringArrayRotate:              true,
  stringArrayShuffle:             true,
  stringArrayThreshold:           0.75,
  unicodeEscapeSequence:          false,
};

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (EXCLUDE.has(entry.name)) continue;
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else { fs.mkdirSync(path.dirname(d), { recursive: true }); fs.copyFileSync(s, d); }
  }
}

function kb(bytes) { return (bytes / 1024).toFixed(1) + ' KB'; }

console.log('\n🔨 Generando dist/...\n');
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
copyDir(SRC, DIST);
console.log('  ✓ Archivos copiados\n');

console.log('🔒 Ofuscando JS...\n');
for (const file of OBFUSCATE) {
  const p = path.join(DIST, 'js', file);
  if (!fs.existsSync(p)) { console.warn(`  ⚠ No encontrado: js/${file}`); continue; }
  const original   = fs.readFileSync(p, 'utf8');
  const obfuscated = JavaScriptObfuscator.obfuscate(original, OPTIONS).getObfuscatedCode();
  fs.writeFileSync(p, obfuscated, 'utf8');
  console.log(`  ✓ js/${file}  (${kb(Buffer.byteLength(original))} → ${kb(Buffer.byteLength(obfuscated))})`);
}

console.log('\n✅ ¡Listo! Publicar el contenido de dist/\n');
