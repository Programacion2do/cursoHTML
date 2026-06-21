# 📋 Documentación técnica — Aprende a Programar

> **Este archivo es para uso docente exclusivamente. No incluir en repositorios públicos.**

---

## 🗂️ Estructura del proyecto

```
html-course/
├── index.html           # Página de inicio — selección de cursos + desafíos + XP + panel docente
├── lesson.html          # Página de lección — editor + quiz + diploma + feedback
├── challenge.html       # Página de desafío — editor + verificación + celebración XP
├── playground.html      # Editor libre (HTML/CSS/JS)
├── css/
│   └── style.css        # Estilos globales
└── js/
    ├── app.js           # Lógica de lecciones (editor, verificación, quiz, diploma, feedback...)
    ├── challenge-app.js # Lógica de desafíos (editor, verificación, XP, confetti...)
    ├── lessons.js       # Contenido del curso de HTML (sin soluciones — ver solutions-data.js)
    ├── css-lessons.js   # Contenido del curso de CSS
    ├── js-lessons.js    # Contenido del curso de JavaScript
    ├── challenges.js    # Contenido de los 9 desafíos + helpers de XP
    └── solutions-data.js# Soluciones de todos los cursos en base64 (carga bajo demanda)
```

---

## 🔐 Panel docente

Permite exportar el material completo con soluciones en PDF.

**Cómo activarlo:** `Ctrl + Shift + Y` → ingresar contraseña

**Contraseña:** guardada fuera del repositorio (hash SHA-256 en `index.html` como `_TEACHER_HASH`, contraseña real en secreto separado).

**Qué incluye el PDF exportado:**
- Teoría de cada lección
- Enunciado/misión
- Solución completa (HTML / CSS / JS según corresponda)
- Vista previa renderizada

---

## 🛡️ Seguridad

Las soluciones y respuestas del quiz están ofuscadas para dificultar que los estudiantes las encuentren con las DevTools:

| Qué | Cómo se guarda | Cómo se usa |
|---|---|---|
| Soluciones de ejercicios | Base64 en `solutions-data.js` | Se carga solo al hacer clic en "Ver solución" |
| Respuestas de quiz | Campo `_c` con base64 del índice | Se decodifica en `_correctIdx(q)` al validar |
| Contraseña docente | Hash SHA-256 en `index.html` | Se compara con `crypto.subtle.digest` |

`solutions-data.js` **no se carga al inicio** — solo cuando el alumno solicita ver la solución o el docente activa el panel.

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

El **Panel docente → Ver opiniones de alumnos** muestra las opiniones guardadas en ese navegador.

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

> Los campos `solution`, `solutionHtml`, `solutionCss`, `solutionJs` **no van en estos archivos**. Las soluciones se agregan a `solutions-data.js` en base64.

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

## 🛠️ Tecnologías

| Herramienta | Uso |
|---|---|
| [CodeMirror 5](https://codemirror.net/5/) | Editor de código con syntax highlighting |
| [html2canvas](https://html2canvas.hertzen.com/) | Exportar el diploma como imagen PNG |
| [EmailJS](https://emailjs.com/) | Envío de entregas y feedback por email (opcional) |
| `crypto.subtle` | Hash SHA-256 para contraseña docente |
| localStorage | Guardar progreso, opiniones y proyectos |
| GitHub Pages | Hosting estático gratuito |

---

## 👩‍💻 Desarrollado por

**Elizabeth Izquierdo** con asistencia de [Claude](https://claude.ai) · CC BY-SA 4.0 · © 2026
