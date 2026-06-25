# 📋 Documentación técnica — Aprende a Programar

> **Este archivo es para uso docente exclusivamente. No incluir en repositorios públicos.**

---

## 🗂️ Estructura del proyecto

```
html-course/
├── index.html           # Página de inicio — selección de cursos + desafíos + XP
├── lesson.html          # Página de lección — editor + quiz + diploma + feedback
├── challenge.html       # Página de desafío — editor + verificación + celebración XP
├── playground.html      # Editor libre (HTML/CSS/JS)
├── css/
│   └── style.css        # Estilos globales
├── js/
│   ├── app.js           # Lógica de lecciones (editor, verificación, quiz, diploma, feedback...)
│   ├── challenge-app.js # Lógica de desafíos (editor, verificación, XP, confetti...)
│   ├── lessons.js       # Contenido del curso de HTML
│   ├── css-lessons.js   # Contenido del curso de CSS
│   ├── js-lessons.js    # Contenido del curso de JavaScript
│   └── challenges.js    # Contenido de los 9 desafíos + helpers de XP
├── build.js             # Script de build: copia archivos a dist/ y ofusca los JS principales
└── package.json         # Dependencias de build (javascript-obfuscator)
```

---

## 🛡️ Seguridad

Las respuestas del quiz están ofuscadas para dificultar que los estudiantes las encuentren con las DevTools:

| Qué | Cómo se guarda | Cómo se usa |
|---|---|---|
| Respuestas de quiz | Campo `_c` con base64 del índice | Se decodifica en `_ci(q)` al validar |

Las soluciones de los ejercicios **no están en la app** — se guardan en el repositorio privado `cursoHTMLp`.

El panel docente y el botón "Ver solución" fueron eliminados para evitar que los estudiantes accedan a información sensible.

---

## 📝 Quizzes (Google Forms)

Los quizzes se generaron con [Fábrica de Cuestionarios](https://github.com/recursos-docentes/Fabrica-cuestionarios) (Google Apps Script) y están alojados en la cuenta **profe.eliza17@gmail.com**.

| Curso | Aparece en | Google Form |
|---|---|---|
| HTML | Lección 13 | [Editar](https://docs.google.com/forms/d/1xHYYnRMimZx_CjtQzRkpcjcP2M981p51KHM6XGFp1jM/edit) |
| CSS | Lección 6 | [Editar](https://docs.google.com/forms/d/1hhpwJ52LcVHfd4Rg6JJ6VlNa1gb5re7z6o3ClmHUh_s/edit) |
| JS | Lección 6 | [Editar](https://docs.google.com/forms/d/1HkyMfFVObQxBp_ZnMCs7lOEqSe57bPbUCkoPzMEo8WU/edit) |

Los scripts `.gs` para regenerar los formularios están en `quiz-forms/`. Cada formulario incluye campos de identificación (nombre, apellido, institución, grupo), secciones por lección, autocorrección y feedback por pregunta.

El quiz se muestra incrustado en el panel central de la app al completar el ejercicio de la última lección de cada curso.

---

## 📤 Sistema de entregas

Al finalizar un curso, el alumno puede:

- **Descargar JSON** — archivo con el código de cada ejercicio completado
- **Enviar por email** — integración con [EmailJS](https://emailjs.com) (gratis hasta 200 emails/mes)

Para activar el envío por email, editá `js/app.js`:
```js
const _EMAILJS_SERVICE     = 'service_xxx';    // de emailjs.com → Email Services
const _EMAILJS_TEMPLATE    = 'template_xxx';   // plantilla para entregas de código
const _EMAILJS_FB_TEMPLATE = 'template_xxx';   // plantilla para feedback de alumnos
const _EMAILJS_PUBLIC      = 'tu_public_key';  // Account → General → Public Key
```

**Variables del template de entregas:** `{{nombre}}`, `{{apellido}}`, `{{email}}`, `{{curso}}`, `{{progreso}}`, `{{fecha}}`, `{{contenido}}`

**Variables del template de feedback:** `{{nombre}}`, `{{apellido}}`, `{{curso}}`, `{{calificacion}}`, `{{opinion}}`, `{{sugerencias}}`, `{{fecha}}`

En ambas plantillas, el campo **To Email** debe ser la dirección del docente (fija, no una variable).

---

## 💬 Feedback de alumnos

Al finalizar un curso los alumnos pueden dejar su opinión (estrellas + texto). El feedback se envía por email al docente (vía EmailJS) y se guarda en `localStorage` como respaldo.

---

## ⚡ Sistema de desafíos

Cada curso tiene 3 desafíos de dificultad creciente, accesibles desde la página de inicio.

| | Fácil · 50 XP | Medio · 100 XP | Difícil · 200 XP |
|---|---|---|---|
| HTML | Mi carta de presentación | Menú de restaurante | Formulario de registro |
| CSS | Tarjeta de perfil | Navbar con Flexbox | Galería con Grid |
| JS | Contador interactivo | Lista de tareas | Calculadora |

**Niveles de XP:**

| XP | Nivel |
|---|---|
| 0 | 🌱 Principiante |
| 100 | 🔭 Explorador |
| 300 | 💻 Desarrollador |
| 600 | 🚀 Experto |
| 1000 | 🏆 Maestro |

---

## 💾 Exportar e importar progreso

El progreso se guarda en `localStorage` del navegador. Para continuar en otro equipo, el alumno usa el botón **"💾 Mi progreso"** del header (exportar/importar JSON).

**Claves de localStorage exportadas:**

| Clave | Contenido |
|---|---|
| `htmlcourse_progress` | IDs de lecciones HTML completadas |
| `htmlcourse_quiz` | IDs de quizzes HTML completados |
| `htmlcourse_progress_code_N` | Código guardado de la lección N |
| `csscourse_progress` / `csscourse_quiz` / `_code_N` | Ídem para CSS |
| `jscourse_progress` / `jscourse_quiz` / `_code_N` | Ídem para JS |
| `htmlchallenges_done` / `csschallenges_done` / `jschallenges_done` | Desafíos completados |
| `lastCourse` | Último curso seleccionado |

---

## 📝 Agregar o editar lecciones

Cada archivo de lecciones (`lessons.js`, `css-lessons.js`, `js-lessons.js`) exporta un array. Estructura por tipo:

**Lección HTML** (1 editor):
```js
{
  id: 1, chapter: 1, chapterTitle: 'Nombre del capítulo',
  icon: '🏷️', title: 'Título', duration: '10 min',
  theory:       `<h3>Subtítulo</h3><p>Contenido HTML...</p>`,
  instructions: 'Descripción de la tarea.',
  starterCode:  `<!-- código inicial -->`,
  checks: [ ... ],
  quiz:   [ ... ],
}
```

**Lección CSS** (2 editores — HTML + CSS):
```js
{ starterHtml: `...`, starterCss: `...`, checks: [...], quiz: [...] }
```

**Lección JS** (3 editores — HTML + CSS + JS):
```js
{ starterHtml: `...`, starterCss: `...`, starterJs: `...`, checks: [...], quiz: [...] }
```

> Las soluciones **no van en la app pública**. Se guardan en el repositorio privado `cursoHTMLp`.

**Estructura del quiz** (respuesta correcta ofuscada):
```js
quiz: [
  {
    question:    '¿Para qué sirve la etiqueta h1?',
    options:     ['Título principal', 'Imagen', 'Párrafo', 'Lista'],
    _c:          'MA==',   // btoa('0') → índice 0 es la respuesta correcta
    explanation: 'h1 es el título de mayor jerarquía en HTML.',
  },
]
```

Tabla de `_c` según índice correcto:

| Índice | `_c` |
|---|---|
| 0 | `'MA=='` |
| 1 | `'MQ=='` |
| 2 | `'Mg=='` |
| 3 | `'Mw=='` |

**Tipos de check disponibles:**

| Tipo | Descripción |
|---|---|
| `element` | Verifica que exista un selector CSS en el DOM |
| `elementWithText` | Verifica que el elemento exista y tenga texto |
| `elementWithAttr` | Verifica que el elemento tenga un atributo determinado |
| `regex` | Verifica que el código coincida con una expresión regular |
| `minCount` | Verifica que haya al menos N elementos de un selector |
| `custom` | Función personalizada `(code, doc) => boolean` |

---

## 🔨 Build y publicación

El proyecto tiene dos repositorios en GitHub:

| Repo | Contenido | Visibilidad |
|---|---|---|
| `cursoHTML` | Versión para estudiantes: JS ofuscado, sin archivos docente | Público (GitHub Pages) |
| `cursoHTMLp` | Código fuente completo + documentación docente | Privado |

### Ofuscación JS

`build.js` usa [`javascript-obfuscator`](https://github.com/javascript-obfuscator/javascript-obfuscator) para dificultar la lectura del código en DevTools. Se ofuscan solo los archivos principales:

| Archivo | Tamaño original → ofuscado |
|---|---|
| `js/app.js` | ~32 KB → ~79 KB |
| `js/challenge-app.js` | ~15 KB → ~39 KB |
| `js/challenges.js` | ~30 KB → ~58 KB |

Los archivos de contenido (`lessons.js`, `css-lessons.js`, `js-lessons.js`) **no se ofuscan** — son datos que la docente edita frecuentemente.

> **Requisito:** Node.js instalado. La primera vez: `npm install` dentro de `html-course/`.

### Flujo para actualizar la app

```
1. Editar archivos fuente en html-course/
2. node build.js               → genera dist/ con JS ofuscado
3. git add ... && git commit   → guarda cambios en el repo privado
   git push                    → sube a cursoHTMLp (privado)
4. cd dist/
   git add ... && git commit
   git push                    → sube a cursoHTML (público, lo que ven los estudiantes)
```

---

## 🛠️ Tecnologías

| Herramienta | Uso |
|---|---|
| [CodeMirror 5](https://codemirror.net/5/) | Editor de código con syntax highlighting |
| [html2canvas](https://html2canvas.hertzen.com/) | Exportar el diploma como imagen PNG |
| [EmailJS](https://emailjs.com/) | Envío de entregas y feedback por email (opcional) |
| [javascript-obfuscator](https://github.com/javascript-obfuscator/javascript-obfuscator) | Ofuscación del JS en el proceso de build (Node.js) |
| `crypto.subtle` | Hash SHA-256 para contraseña docente |
| localStorage | Guardar progreso, opiniones y proyectos |
| GitHub Pages | Hosting estático gratuito |

---

## 👩‍💻 Desarrollado por

**Elizabeth Izquierdo** con asistencia de [Claude](https://claude.ai) · CC BY-SA 4.0 · © 2026
