const lessons = [
  {
    id: 1,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "La estructura básica",
    duration: "5 min",
    icon: "🏗️",
    theory: `
      <h3>¿Qué es HTML?</h3>
      <p>HTML (<em>HyperText Markup Language</em>) es el lenguaje que usamos para crear páginas web. Define la <strong>estructura</strong> del contenido usando <em>etiquetas</em>.</p>

      <h3>La estructura mínima</h3>
      <p>Todo documento HTML tiene esta estructura base:</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Mi página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- contenido visible --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> — indica que usamos HTML5</li>
        <li><code>&lt;html&gt;</code> — elemento raíz de la página</li>
        <li><code>&lt;head&gt;</code> — información sobre la página (no visible)</li>
        <li><code>&lt;title&gt;</code> — texto de la pestaña del navegador</li>
        <li><code>&lt;body&gt;</code> — todo el contenido visible</li>
      </ul>
    `,
    instructions: "Crea la estructura básica de un documento HTML. Debe tener: DOCTYPE, html, head, un title con texto, y body.",
    starterCode: `<!-- ¡Escribe aquí tu primer documento HTML! -->`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página</title>
  </head>
  <body>

  </body>
</html>`,
    checks: [
      { type: 'regex', pattern: '<!DOCTYPE\\s+html>', message: 'Declara el tipo de documento con <!DOCTYPE html>', hint: 'La primera línea debe ser <!DOCTYPE html>' },
      { type: 'element', selector: 'html', message: 'Agrega el elemento raíz <html>', hint: 'Envuelve todo con <html>...</html>' },
      { type: 'element', selector: 'head', message: 'Agrega el elemento <head>', hint: 'Dentro de <html>, agrega <head>...</head>' },
      { type: 'elementWithText', selector: 'title', message: 'Agrega <title> con texto dentro de <head>', hint: '<title>Mi primera página</title>' },
      { type: 'element', selector: 'body', message: 'Agrega el elemento <body>', hint: 'Después de </head>, agrega <body>...</body>' },
    ]
  },

  {
    id: 2,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "Títulos",
    duration: "7 min",
    icon: "📰",
    theory: `
      <h3>Los 6 niveles de títulos</h3>
      <p>HTML tiene 6 etiquetas de título, del más importante al menos importante:</p>
      <pre><code>&lt;h1&gt;Título principal&lt;/h1&gt;
&lt;h2&gt;Sección&lt;/h2&gt;
&lt;h3&gt;Subsección&lt;/h3&gt;
&lt;h4&gt;Sub-subsección&lt;/h4&gt;
&lt;h5&gt;Nivel 5&lt;/h5&gt;
&lt;h6&gt;Nivel 6&lt;/h6&gt;</code></pre>
      <h3>Buenas prácticas</h3>
      <ul>
        <li>Usa <strong>un solo <code>&lt;h1&gt;</code></strong> por página (el título principal)</li>
        <li>No saltes niveles (no vayas de h1 a h3 directamente)</li>
        <li>Los títulos definen la <strong>jerarquía</strong> del contenido</li>
      </ul>
    `,
    instructions: "Dentro del <body>, agrega: un <h1> con el nombre de tu curso favorito, un <h2> con 'Temas principales', y un <h3> con el primer tema.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis títulos</title>
  </head>
  <body>
    <!-- Agrega tus títulos aquí -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis títulos</title>
  </head>
  <body>
    <h1>Programación Web</h1>
    <h2>Temas principales</h2>
    <h3>HTML básico</h3>
  </body>
</html>`,
    checks: [
      { type: 'elementWithText', selector: 'h1', message: 'Agrega un <h1> con texto', hint: '<h1>El título principal va aquí</h1>' },
      { type: 'elementWithText', selector: 'h2', message: 'Agrega un <h2> con texto', hint: '<h2>Un subtítulo aquí</h2>' },
      { type: 'elementWithText', selector: 'h3', message: 'Agrega un <h3> con texto', hint: '<h3>Un sub-subtítulo aquí</h3>' },
    ]
  },

  {
    id: 3,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "Párrafos",
    duration: "6 min",
    icon: "📝",
    theory: `
      <h3>El elemento <code>&lt;p&gt;</code></h3>
      <p>Los párrafos de texto se escriben dentro de etiquetas <code>&lt;p&gt;</code>:</p>
      <pre><code>&lt;p&gt;Este es un párrafo de texto.&lt;/p&gt;
&lt;p&gt;Este es otro párrafo separado.&lt;/p&gt;</code></pre>

      <h3>Saltos de línea</h3>
      <p>Para un salto de línea dentro de un párrafo, usa <code>&lt;br&gt;</code> (no tiene etiqueta de cierre):</p>
      <pre><code>&lt;p&gt;Primera línea&lt;br&gt;
Segunda línea&lt;/p&gt;</code></pre>

      <h3>Importante</h3>
      <p>Los espacios y saltos de línea en el código <strong>no</strong> afectan el resultado. El navegador ignora los espacios extra.</p>
    `,
    instructions: "Crea una pequeña bio personal. Agrega al menos 3 párrafos: uno con tu nombre (en un h1), uno con tu descripción, y uno con tus hobbies.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi bio</title>
  </head>
  <body>
    <!-- Escribe tu bio aquí -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi bio</title>
  </head>
  <body>
    <h1>Ana García</h1>
    <p>Soy estudiante de programación web y me encanta crear sitios web.</p>
    <p>Estoy aprendiendo HTML, CSS y JavaScript.</p>
    <p>En mi tiempo libre me gusta leer y escuchar música.</p>
  </body>
</html>`,
    checks: [
      { type: 'minCount', selector: 'p', count: 3, message: 'Agrega al menos 3 párrafos <p>', hint: 'Escribe tres bloques <p>...</p> con texto diferente' },
      { type: 'elementWithText', selector: 'h1', message: 'Agrega un título <h1> con tu nombre', hint: '<h1>Tu nombre aquí</h1>' },
    ]
  },

  {
    id: 4,
    chapter: 2,
    chapterTitle: "Capítulo 2: Contenido",
    title: "Listas",
    duration: "8 min",
    icon: "📋",
    theory: `
      <h3>Listas sin orden <code>&lt;ul&gt;</code></h3>
      <p>Usan puntos (bullets). Ideales para elementos sin secuencia:</p>
      <pre><code>&lt;ul&gt;
  &lt;li&gt;Manzanas&lt;/li&gt;
  &lt;li&gt;Naranjas&lt;/li&gt;
  &lt;li&gt;Uvas&lt;/li&gt;
&lt;/ul&gt;</code></pre>

      <h3>Listas ordenadas <code>&lt;ol&gt;</code></h3>
      <p>Numeran los elementos automáticamente. Para pasos o rankings:</p>
      <pre><code>&lt;ol&gt;
  &lt;li&gt;Abrir el navegador&lt;/li&gt;
  &lt;li&gt;Escribir la URL&lt;/li&gt;
  &lt;li&gt;Presionar Enter&lt;/li&gt;
&lt;/ol&gt;</code></pre>
      <p>Cada elemento de la lista va dentro de <code>&lt;li&gt;</code> (<em>list item</em>).</p>
    `,
    instructions: "Crea dos listas: una <ul> con tus 4 materias favoritas, y una <ol> con los 3 pasos para aprender a programar.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis listas</title>
  </head>
  <body>
    <h1>Mis materias favoritas</h1>
    <!-- Lista sin orden aquí -->

    <h2>Cómo aprender a programar</h2>
    <!-- Lista ordenada aquí -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis listas</title>
  </head>
  <body>
    <h1>Mis materias favoritas</h1>
    <ul>
      <li>Programación</li>
      <li>Matemáticas</li>
      <li>Arte</li>
      <li>Música</li>
    </ul>

    <h2>Cómo aprender a programar</h2>
    <ol>
      <li>Aprender los fundamentos</li>
      <li>Practicar con proyectos</li>
      <li>Nunca dejar de aprender</li>
    </ol>
  </body>
</html>`,
    checks: [
      { type: 'element', selector: 'ul', message: 'Agrega una lista sin orden <ul>', hint: 'Usa <ul><li>...</li></ul>' },
      { type: 'minCount', selector: 'ul li', count: 4, message: 'La lista <ul> debe tener al menos 4 elementos', hint: 'Agrega más <li> dentro de tu <ul>' },
      { type: 'element', selector: 'ol', message: 'Agrega una lista ordenada <ol>', hint: 'Usa <ol><li>...</li></ol>' },
      { type: 'minCount', selector: 'ol li', count: 3, message: 'La lista <ol> debe tener al menos 3 elementos', hint: 'Agrega más <li> dentro de tu <ol>' },
    ]
  },

  {
    id: 5,
    chapter: 2,
    chapterTitle: "Capítulo 2: Contenido",
    title: "Hipervínculos",
    duration: "8 min",
    icon: "🔗",
    theory: `
      <h3>La etiqueta <code>&lt;a&gt;</code></h3>
      <p>Los links se crean con <code>&lt;a&gt;</code> (anchor). El atributo <code>href</code> indica el destino:</p>
      <pre><code>&lt;a href="https://www.google.com"&gt;Ir a Google&lt;/a&gt;</code></pre>

      <h3>Abrir en nueva pestaña</h3>
      <p>Usa <code>target="_blank"</code> para abrir el link en una nueva pestaña:</p>
      <pre><code>&lt;a href="https://www.youtube.com" target="_blank"&gt;
  YouTube
&lt;/a&gt;</code></pre>

      <h3>Links internos</h3>
      <p>También puedes enlazar a otras páginas del mismo sitio:</p>
      <pre><code>&lt;a href="contacto.html"&gt;Contacto&lt;/a&gt;</code></pre>
    `,
    instructions: "Crea una lista de tus 3 sitios web favoritos. Cada elemento debe ser un enlace con <a href=\"...\"> que tenga la URL completa y un texto descriptivo.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis sitios favoritos</title>
  </head>
  <body>
    <h1>Mis sitios favoritos</h1>
    <ul>
      <!-- Agrega tus 3 links aquí -->

    </ul>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis sitios favoritos</title>
  </head>
  <body>
    <h1>Mis sitios favoritos</h1>
    <ul>
      <li><a href="https://www.youtube.com" target="_blank">YouTube</a></li>
      <li><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></li>
      <li><a href="https://www.github.com" target="_blank">GitHub</a></li>
    </ul>
  </body>
</html>`,
    checks: [
      { type: 'minCount', selector: 'a', count: 3, message: 'Agrega al menos 3 enlaces <a>', hint: 'Cada <li> debe tener un <a href="...">texto</a>' },
      { type: 'elementWithAttr', selector: 'a', attr: 'href', message: 'Los enlaces deben tener el atributo href', hint: 'Escribe: <a href="https://...">texto</a>' },
      { type: 'elementWithText', selector: 'a', message: 'Los enlaces deben tener texto visible', hint: 'Escribe algo entre <a> y </a>' },
    ]
  },

  {
    id: 6,
    chapter: 2,
    chapterTitle: "Capítulo 2: Contenido",
    title: "Imágenes",
    duration: "7 min",
    icon: "🖼️",
    theory: `
      <h3>La etiqueta <code>&lt;img&gt;</code></h3>
      <p>Las imágenes son etiquetas <strong>vacías</strong> (sin etiqueta de cierre). Usan dos atributos clave:</p>
      <pre><code>&lt;img src="foto.jpg" alt="Descripción de la imagen"&gt;</code></pre>

      <ul>
        <li><code>src</code> — la ruta o URL de la imagen</li>
        <li><code>alt</code> — texto alternativo (accesibilidad y SEO)</li>
      </ul>

      <h3>Imágenes de internet</h3>
      <p>Puedes usar la URL completa de cualquier imagen:</p>
      <pre><code>&lt;img src="https://placekitten.com/300/200"
     alt="Un gatito"
     width="300"&gt;</code></pre>

      <h3>Tamaño</h3>
      <p>Controla el tamaño con <code>width</code> y <code>height</code> (en píxeles).</p>
    `,
    instructions: "Agrega 2 imágenes a tu página. Puedes usar URLs de internet. Cada imagen DEBE tener un atributo alt descriptivo.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi galería</title>
  </head>
  <body>
    <h1>Mi galería de imágenes</h1>
    <!-- Agrega tus imágenes aquí -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi galería</title>
  </head>
  <body>
    <h1>Mi galería de imágenes</h1>
    <img src="https://picsum.photos/300/200?random=1" alt="Imagen aleatoria 1" width="300">
    <img src="https://picsum.photos/300/200?random=2" alt="Imagen aleatoria 2" width="300">
  </body>
</html>`,
    checks: [
      { type: 'minCount', selector: 'img', count: 2, message: 'Agrega al menos 2 imágenes <img>', hint: 'Escribe dos etiquetas <img src="..." alt="...">' },
      { type: 'elementWithAttr', selector: 'img', attr: 'src', message: 'Las imágenes deben tener el atributo src', hint: 'Agrega src="URL de la imagen"' },
      { type: 'elementWithAttr', selector: 'img', attr: 'alt', message: 'Las imágenes deben tener el atributo alt', hint: 'Agrega alt="descripción de la imagen"' },
    ]
  },

  {
    id: 7,
    chapter: 3,
    chapterTitle: "Capítulo 3: Formato",
    title: "Formato de texto",
    duration: "6 min",
    icon: "✍️",
    theory: `
      <h3>Negrita e itálica</h3>
      <pre><code>&lt;strong&gt;Texto importante (negrita)&lt;/strong&gt;
&lt;em&gt;Texto enfatizado (itálica)&lt;/em&gt;</code></pre>

      <h3>Otras etiquetas de formato</h3>
      <pre><code>&lt;mark&gt;Texto resaltado&lt;/mark&gt;
&lt;del&gt;Texto tachado&lt;/del&gt;
&lt;ins&gt;Texto subrayado&lt;/ins&gt;
&lt;small&gt;Texto pequeño&lt;/small&gt;
&lt;sup&gt;superíndice&lt;/sup&gt;
&lt;sub&gt;subíndice&lt;/sub&gt;</code></pre>

      <h3><code>&lt;strong&gt;</code> vs <code>&lt;b&gt;</code></h3>
      <p>Ambos muestran negrita, pero <code>&lt;strong&gt;</code> indica <strong>importancia semántica</strong> mientras que <code>&lt;b&gt;</code> es solo visual.</p>
    `,
    instructions: "Escribe un párrafo sobre tu materia favorita. Usa <strong> para destacar al menos una palabra importante y <em> para enfatizar otra.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Formato de texto</title>
  </head>
  <body>
    <h1>Mi materia favorita</h1>
    <p>
      <!-- Escribe tu párrafo con formato aquí -->

    </p>
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Formato de texto</title>
  </head>
  <body>
    <h1>Mi materia favorita</h1>
    <p>
      Mi materia favorita es <strong>Programación</strong>.
      Es <em>muy interesante</em> porque puedo crear cosas con código.
      <mark>¡Nunca dejes de aprender!</mark>
    </p>
  </body>
</html>`,
    checks: [
      { type: 'element', selector: 'strong, b', message: 'Usa <strong> o <b> para poner texto en negrita', hint: 'Escribe <strong>palabra importante</strong>' },
      { type: 'element', selector: 'em, i', message: 'Usa <em> o <i> para poner texto en itálica', hint: 'Escribe <em>texto enfatizado</em>' },
      { type: 'elementWithText', selector: 'p', message: 'Escribe al menos un párrafo con contenido', hint: 'Agrega texto dentro de <p>...</p>' },
    ]
  },

  {
    id: 8,
    chapter: 3,
    chapterTitle: "Capítulo 3: Formato",
    title: "Tablas",
    duration: "10 min",
    icon: "📊",
    theory: `
      <h3>Estructura de una tabla</h3>
      <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Nombre&lt;/th&gt;
      &lt;th&gt;Nota&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Ana&lt;/td&gt;
      &lt;td&gt;90&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      <ul>
        <li><code>&lt;table&gt;</code> — contenedor de la tabla</li>
        <li><code>&lt;thead&gt;</code> — sección de encabezados</li>
        <li><code>&lt;tbody&gt;</code> — sección de datos</li>
        <li><code>&lt;tr&gt;</code> — fila (<em>table row</em>)</li>
        <li><code>&lt;th&gt;</code> — celda de encabezado (<em>table header</em>)</li>
        <li><code>&lt;td&gt;</code> — celda de datos (<em>table data</em>)</li>
      </ul>
    `,
    instructions: "Crea una tabla de calificaciones con 3 columnas (Nombre, Materia, Nota) y al menos 3 filas de datos.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Calificaciones</title>
  </head>
  <body>
    <h1>Tabla de calificaciones</h1>
    <!-- Crea la tabla aquí -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Calificaciones</title>
  </head>
  <body>
    <h1>Tabla de calificaciones</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Materia</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ana García</td>
          <td>Programación</td>
          <td>95</td>
        </tr>
        <tr>
          <td>Juan López</td>
          <td>Matemáticas</td>
          <td>88</td>
        </tr>
        <tr>
          <td>María Pérez</td>
          <td>Historia</td>
          <td>92</td>
        </tr>
      </tbody>
    </table>
  </body>
</html>`,
    checks: [
      { type: 'element', selector: 'table', message: 'Crea una tabla <table>', hint: 'Usa <table>...</table>' },
      { type: 'minCount', selector: 'th', count: 3, message: 'La tabla debe tener al menos 3 encabezados <th>', hint: 'Agrega <th>Encabezado</th> en la primera fila' },
      { type: 'minCount', selector: 'tr', count: 4, message: 'La tabla debe tener al menos 4 filas <tr> (1 encabezado + 3 datos)', hint: 'Agrega más filas con <tr><td>...</td></tr>' },
      { type: 'minCount', selector: 'td', count: 6, message: 'Agrega datos en las celdas <td>', hint: 'Cada fila de datos necesita celdas <td>' },
    ]
  },

  {
    id: 9,
    chapter: 4,
    chapterTitle: "Capítulo 4: Formularios",
    title: "Formularios básicos",
    duration: "12 min",
    icon: "📬",
    theory: `
      <h3>Estructura de un formulario</h3>
      <pre><code>&lt;form&gt;
  &lt;label for="nombre"&gt;Tu nombre:&lt;/label&gt;
  &lt;input type="text" id="nombre" name="nombre"&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;

  &lt;label for="mensaje"&gt;Mensaje:&lt;/label&gt;
  &lt;textarea id="mensaje" name="mensaje"&gt;&lt;/textarea&gt;

  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
      <h3>Tipos de <code>&lt;input&gt;</code></h3>
      <ul>
        <li><code>type="text"</code> — texto libre</li>
        <li><code>type="email"</code> — valida formato de email</li>
        <li><code>type="password"</code> — oculta el texto</li>
        <li><code>type="number"</code> — solo números</li>
        <li><code>type="checkbox"</code> — casilla de verificación</li>
      </ul>
    `,
    instructions: "Crea un formulario de contacto con: campo de nombre (text), campo de email (email), área de mensaje (textarea), y un botón de envío.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Contacto</title>
  </head>
  <body>
    <h1>Formulario de contacto</h1>
    <!-- Crea el formulario aquí -->

  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>Contacto</title>
  </head>
  <body>
    <h1>Formulario de contacto</h1>
    <form>
      <label for="nombre">Nombre:</label><br>
      <input type="text" id="nombre" name="nombre"><br><br>

      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br><br>

      <label for="mensaje">Mensaje:</label><br>
      <textarea id="mensaje" name="mensaje" rows="4" cols="40"></textarea><br><br>

      <button type="submit">Enviar mensaje</button>
    </form>
  </body>
</html>`,
    checks: [
      { type: 'element', selector: 'form', message: 'Crea un formulario con <form>', hint: 'Envuelve todos los campos en <form>...</form>' },
      { type: 'element', selector: 'input[type="text"], input:not([type])', message: 'Agrega un campo de texto <input type="text">', hint: '<input type="text" name="nombre">' },
      { type: 'element', selector: 'input[type="email"]', message: 'Agrega un campo de email <input type="email">', hint: '<input type="email" name="email">' },
      { type: 'element', selector: 'textarea', message: 'Agrega un área de texto <textarea>', hint: '<textarea name="mensaje"></textarea>' },
      { type: 'element', selector: 'button, input[type="submit"]', message: 'Agrega un botón de envío', hint: '<button type="submit">Enviar</button>' },
    ]
  },
];
