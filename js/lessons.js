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
      <p>HTML es el lenguaje con el que están hechas <strong>todas</strong> las páginas web que visitás. Sí, todas: YouTube, Instagram, Spotify... todo HTML.</p>
      <p>Un documento HTML tiene esta estructura base:</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Mi página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- acá va todo lo visible --&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> — le avisa al navegador que es HTML5</li>
        <li><code>&lt;html&gt;</code> — el contenedor de todo</li>
        <li><code>&lt;head&gt;</code> — info de la página (no se ve en pantalla)</li>
        <li><code>&lt;title&gt;</code> — el texto de la pestaña del navegador</li>
        <li><code>&lt;body&gt;</code> — todo lo que el usuario va a ver</li>
      </ul>
    `,
    instructions: "Escribí la estructura base de una página HTML. Tiene que tener:\n• <!DOCTYPE html> al principio\n• <html> que envuelva todo\n• <head> con un <title> (el nombre de tu artista o serie favorita)\n• <body> vacío por ahora\n\nFijate en el ejemplo de la teoría — ¡es casi igual!",
    starterCode: `<!-- 🎤 ¡Hora de crear tu fan page!
     Empezá con la estructura básica de HTML -->`,
    checks: [
      { type: 'regex',           pattern: '<!DOCTYPE\\s+html>',  message: 'Agregá <!DOCTYPE html> al inicio',          hint: 'Primera línea: <!DOCTYPE html>' },
      { type: 'element',         selector: 'html',               message: 'Necesitás el elemento <html>',              hint: 'Envolvé todo con <html>...</html>' },
      { type: 'element',         selector: 'head',               message: 'Necesitás el elemento <head>',              hint: 'Dentro de <html>, agregá <head>...</head>' },
      { type: 'elementWithText', selector: 'title',              message: '<title> debe tener el nombre de tu fan page', hint: 'Ej: <title>Fan Page de Bad Bunny</title>' },
      { type: 'element',         selector: 'body',               message: 'Necesitás el elemento <body>',              hint: 'Después de </head>, agregá <body>...</body>' },
    ],
    quiz: [
      {
        question: '¿Qué hace la declaración <code>&lt;!DOCTYPE html&gt;</code>?',
        options: ['Aplica estilos a la página', 'Le dice al navegador que el documento es HTML5', 'Define el título de la página', 'Crea el cuerpo del documento'],
        _c: 'MQ==',
        explanation: '¡Correcto! &lt;!DOCTYPE html&gt; le avisa al navegador que el documento está escrito en HTML5. Sin esta declaración, el navegador puede interpretar el código de manera incorrecta.'
      },
      {
        question: '¿Dónde va el contenido visible de la página (texto, imágenes, etc.)?',
        options: ['Dentro de &lt;head&gt;', 'Dentro de &lt;title&gt;', 'Dentro de &lt;body&gt;', 'Dentro de &lt;html&gt;'],
        _c: 'Mg==',
        explanation: '¡Correcto! El &lt;body&gt; contiene todo lo que el usuario puede ver en pantalla: texto, imágenes, links, videos, etc. El &lt;head&gt; es para información que no se muestra.'
      }
    ]
  },

  {
    id: 2,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "Títulos que impactan",
    duration: "7 min",
    icon: "🎮",
    theory: `
      <h3>Las etiquetas de título</h3>
      <p>HTML tiene 6 niveles de título. El <code>&lt;h1&gt;</code> es el más grande e importante (el nombre de la página), el <code>&lt;h6&gt;</code> el más chico:</p>
      <pre><code>&lt;h1&gt;El más grande&lt;/h1&gt;
&lt;h2&gt;Sección principal&lt;/h2&gt;
&lt;h3&gt;Subsección&lt;/h3&gt;</code></pre>
      <h3>Regla de oro</h3>
      <ul>
        <li>Usá <strong>un solo <code>&lt;h1&gt;</code></strong> por página</li>
        <li>No te saltés niveles (de h1 a h3 sin h2 queda raro)</li>
        <li>Los títulos le dan <em>jerarquía</em> a tu contenido</li>
      </ul>
    `,
    instructions: "Armá el perfil de un gamer o streamer (famoso o inventado). Tiene que tener:\n• Un h1 con el nombre del gamer\n• Un h2 que diga 'Juegos favoritos'\n• Un h3 con el nombre del primer juego",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Perfil Gamer</title>
  </head>
  <body>
    <!-- 🎮 Armá el perfil de tu gamer favorito
         Acordate: h1 para el nombre, h2 para las secciones, h3 para los detalles -->

  </body>
</html>`,
    checks: [
      { type: 'elementWithText', selector: 'h1', message: 'Agregá un <h1> con el nombre del gamer',         hint: '<h1>Nombre del gamer</h1>' },
      { type: 'elementWithText', selector: 'h2', message: 'Agregá al menos un <h2> para una sección',       hint: '<h2>Juegos favoritos</h2>' },
      { type: 'elementWithText', selector: 'h3', message: 'Agregá al menos un <h3> con un detalle',         hint: '<h3>Minecraft</h3>' },
    ],
    quiz: [
      {
        question: '¿Cuántos <code>&lt;h1&gt;</code> se recomienda usar por página?',
        options: ['Los que necesités', 'Solo uno', 'Dos como máximo', 'Ninguno'],
        _c: 'MQ==',
        explanation: '¡Correcto! Solo un &lt;h1&gt; por página — es el título principal. Usar varios confunde a Google y a los lectores de pantalla.'
      },
      {
        question: '¿Cuál de estos títulos tiene menor jerarquía (es el más pequeño visualmente)?',
        options: ['&lt;h1&gt;', '&lt;h3&gt;', '&lt;h4&gt;', '&lt;h6&gt;'],
        _c: 'Mw==',
        explanation: '¡Correcto! HTML tiene 6 niveles: &lt;h1&gt; es el más grande e importante, &lt;h6&gt; el más pequeño. Se usan para organizar la jerarquía del contenido.'
      }
    ]
  },

  {
    id: 3,
    chapter: 1,
    chapterTitle: "Capítulo 1: Fundamentos",
    title: "Tu bio de redes",
    duration: "6 min",
    icon: "📱",
    theory: `
      <h3>Párrafos con <code>&lt;p&gt;</code></h3>
      <p>El texto en bloque va dentro de etiquetas <code>&lt;p&gt;</code>. Cada <code>&lt;p&gt;</code> empieza en una nueva línea con espacio:</p>
      <pre><code>&lt;p&gt;Primera parte de mi bio.&lt;/p&gt;
&lt;p&gt;Segunda parte, en otro párrafo.&lt;/p&gt;</code></pre>
      <h3>Salto de línea</h3>
      <p>Para saltar de línea <em>dentro</em> de un mismo párrafo usás <code>&lt;br&gt;</code>:</p>
      <pre><code>&lt;p&gt;Línea uno&lt;br&gt;
Línea dos (sin espacio extra)&lt;/p&gt;</code></pre>
      <h3>Ojo con esto</h3>
      <p>Los espacios y enters que ponés en el código <strong>no se ven</strong> en el navegador. Solo los <code>&lt;p&gt;</code> y <code>&lt;br&gt;</code> generan separación visual.</p>
    `,
    instructions: "Escribí tu bio como si fuera para Instagram o TikTok. Tiene que tener:\n• Un h1 con tu nombre o apodo\n• Un párrafo presentándote\n• Un párrafo con tus intereses\n• Un párrafo con un dato random tuyo",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi bio</title>
  </head>
  <body>
    <!-- 📱 Escribí tu bio de redes
         ¿Cómo te presentarías en Instagram o TikTok? -->

  </body>
</html>`,
    checks: [
      { type: 'elementWithText', selector: 'h1',  message: 'Agregá un <h1> con tu nombre o apodo',    hint: '<h1>@tu_nombre</h1>' },
      { type: 'minCount',        selector: 'p',   count: 3, message: 'Escribí al menos 3 párrafos <p>', hint: 'Cada bloque de texto va en su propio <p>...</p>' },
    ],
    quiz: [
      {
        question: '¿Qué etiqueta insertá un salto de línea DENTRO de un párrafo?',
        options: ['&lt;p&gt;', '&lt;break&gt;', '&lt;br&gt;', '&lt;lb&gt;'],
        _c: 'Mg==',
        explanation: '¡Correcto! &lt;br&gt; es una etiqueta vacía (sin cierre) que inserta un salto de línea. &lt;p&gt; en cambio crea un párrafo nuevo con espacio adicional arriba y abajo.'
      },
      {
        question: '¿Qué pasa si escribís diez espacios seguidos en el código HTML?',
        options: ['Se muestran todos en la página', 'El navegador los muestra como uno solo', 'Genera un error de sintaxis', 'La página no carga'],
        _c: 'MQ==',
        explanation: '¡Correcto! El navegador colapsa múltiples espacios en uno solo. Para agregar espacio visual usá párrafos &lt;p&gt;, el salto &lt;br&gt;, o la entidad &amp;nbsp;'
      }
    ]
  },

  {
    id: 4,
    chapter: 2,
    chapterTitle: "Capítulo 2: Contenido",
    title: "Tus top 5",
    duration: "8 min",
    icon: "🏆",
    theory: `
      <h3>Lista sin orden <code>&lt;ul&gt;</code></h3>
      <p>Para cuando el orden no importa (una lista de favoritos, ingredientes, etc.):</p>
      <pre><code>&lt;ul&gt;
  &lt;li&gt;Bad Bunny&lt;/li&gt;
  &lt;li&gt;Taylor Swift&lt;/li&gt;
  &lt;li&gt;Bizarrap&lt;/li&gt;
&lt;/ul&gt;</code></pre>
      <h3>Lista ordenada <code>&lt;ol&gt;</code></h3>
      <p>Para cuando el orden sí importa (un ranking, pasos de una receta, etc.):</p>
      <pre><code>&lt;ol&gt;
  &lt;li&gt;La mejor canción del año&lt;/li&gt;
  &lt;li&gt;La segunda mejor&lt;/li&gt;
  &lt;li&gt;La tercera&lt;/li&gt;
&lt;/ol&gt;</code></pre>
      <p>Cada elemento de la lista va dentro de <code>&lt;li&gt;</code>.</p>
    `,
    instructions: "Creá dos listas:\n• Una lista sin orden (ul) con tu TOP 5 canciones o series del momento\n• Una lista ordenada (ol) con tu TOP 3 de películas o videojuegos de todos los tiempos, del mejor al tercero",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis tops 🏆</title>
  </head>
  <body>
    <h1>Mis tops del momento</h1>

    <h2>Lo que estoy escuchando / viendo</h2>
    <!-- ✅ Lista sin orden con 5 elementos -->

    <h2>Mi ranking de todos los tiempos</h2>
    <!-- 🥇 Lista ordenada con 3 elementos -->

  </body>
</html>`,
    checks: [
      { type: 'element',    selector: 'ul',    message: 'Agregá una lista sin orden <ul>',               hint: '<ul><li>...</li></ul>' },
      { type: 'minCount',   selector: 'ul li', count: 5, message: 'La lista <ul> necesita al menos 5 elementos', hint: 'Ponele 5 cosas a tu lista <ul>' },
      { type: 'element',    selector: 'ol',    message: 'Agregá un ranking <ol>',                        hint: '<ol><li>...</li></ol>' },
      { type: 'minCount',   selector: 'ol li', count: 3, message: 'El ranking <ol> necesita al menos 3 posiciones', hint: 'Ponele 3 cosas a tu ranking <ol>' },
    ],
    quiz: [
      {
        question: '¿Para qué sirve la etiqueta <code>&lt;ol&gt;</code>?',
        options: ['Para listas sin orden (bullets)', 'Para crear links', 'Para listas ordenadas (numeradas)', 'Para listas de imágenes'],
        _c: 'Mg==',
        explanation: '¡Correcto! &lt;ol&gt; (ordered list) numera los elementos automáticamente. Se usa para rankings, pasos de recetas o instrucciones donde el orden importa.'
      },
      {
        question: '¿Qué etiqueta va DENTRO de &lt;ul&gt; y &lt;ol&gt; para cada elemento?',
        options: ['&lt;item&gt;', '&lt;list&gt;', '&lt;element&gt;', '&lt;li&gt;'],
        _c: 'Mw==',
        explanation: '¡Correcto! &lt;li&gt; (list item) es cada elemento de la lista. Siempre va dentro de &lt;ul&gt; o &lt;ol&gt; — nunca solo en el HTML.'
      }
    ]
  },

  {
    id: 5,
    chapter: 2,
    chapterTitle: "Capítulo 2: Contenido",
    title: "Tus links favoritos",
    duration: "8 min",
    icon: "🔗",
    theory: `
      <h3>La etiqueta <code>&lt;a&gt;</code></h3>
      <p>Los links se hacen con <code>&lt;a&gt;</code> (de "anchor"). El atributo <code>href</code> es la dirección a donde va:</p>
      <pre><code>&lt;a href="https://www.youtube.com"&gt;YouTube&lt;/a&gt;</code></pre>
      <h3>Abrir en nueva pestaña</h3>
      <p>Agregá <code>target="_blank"</code> para que no cierre tu página:</p>
      <pre><code>&lt;a href="https://open.spotify.com" target="_blank"&gt;
  Escuchar en Spotify
&lt;/a&gt;</code></pre>
      <h3>El texto importa</h3>
      <p>Evitá poner "clickeá acá" — mejor describí a dónde lleva el link. Es mejor para accesibilidad y para Google.</p>
    `,
    instructions: "Armá tu sección personal de links (tipo Linktree):\n• Al menos 3 links a sitios que usás — YouTube, Spotify, Instagram, Twitch, lo que quieras\n• Cada link tiene que abrirse en una nueva pestaña (target=\"_blank\")",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mis links 🔗</title>
  </head>
  <body>
    <h1>@tu_nombre — mis links</h1>
    <p>Todo lo que necesitás en un solo lugar:</p>

    <!-- 🔗 Agregá al menos 3 links con target="_blank"
         Podés usar YouTube, Spotify, Instagram, TikTok, Twitch... -->

  </body>
</html>`,
    checks: [
      { type: 'minCount',      selector: 'a',        count: 3, message: 'Agregá al menos 3 links <a>',              hint: '<a href="https://...">texto del link</a>' },
      { type: 'elementWithAttr', selector: 'a',      attr: 'href', message: 'Los links necesitan el atributo href',  hint: 'href="https://www.youtube.com"' },
      { type: 'elementWithAttr', selector: 'a[target="_blank"]', attr: 'target', message: 'Al menos un link debe abrir en nueva pestaña (target="_blank")', hint: 'Agregá target="_blank" a tus links' },
    ],
    quiz: [
      {
        question: '¿Qué atributo de <code>&lt;a&gt;</code> indica a dónde va el link?',
        options: ['src', 'link', 'href', 'url'],
        _c: 'Mg==',
        explanation: '¡Correcto! href (hypertext reference) contiene la URL de destino. Sin href el elemento &lt;a&gt; no lleva a ningún lado.'
      },
      {
        question: '¿Qué hace <code>target="_blank"</code> en un link?',
        options: ['Lo hace invisible', 'Lo bloquea', 'Lo abre en la misma pestaña', 'Lo abre en una nueva pestaña'],
        _c: 'Mw==',
        explanation: '¡Correcto! target="_blank" le dice al navegador que abra el link en una nueva pestaña, sin cerrar la página actual. Muy útil para links externos.'
      }
    ]
  },

  {
    id: 6,
    chapter: 2,
    chapterTitle: "Capítulo 2: Contenido",
    title: "Galería de tu universo",
    duration: "7 min",
    icon: "🖼️",
    theory: `
      <h3>La etiqueta <code>&lt;img&gt;</code></h3>
      <p>Las imágenes son etiquetas <strong>vacías</strong> — no tienen etiqueta de cierre. Sus dos atributos más importantes:</p>
      <pre><code>&lt;img src="URL-de-la-imagen" alt="descripción"&gt;</code></pre>
      <ul>
        <li><code>src</code> — la URL de la imagen</li>
        <li><code>alt</code> — texto si la imagen no carga (y para lectores de pantalla)</li>
      </ul>
      <h3>Imágenes de internet</h3>
      <p>Podés usar cualquier URL de imagen. Para pruebas, <code>https://picsum.photos/300/200</code> devuelve una foto random de 300×200px.</p>
      <pre><code>&lt;img src="https://picsum.photos/300/200"
     alt="Foto random"
     width="300"&gt;</code></pre>
    `,
    instructions: "Creá una mini galería de tu serie, banda, videojuego o artista favorito:\n• Al menos 2 imágenes con URLs de internet\n• Cada imagen DEBE tener un alt descriptivo\n  (no pongas alt vacío — eso no cuenta 😄)",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi galería favorita 🖼️</title>
  </head>
  <body>
    <h1>Galería: [tu tema favorito]</h1>
    <p>Una colección de imágenes de lo que más me gusta.</p>

    <!-- 🖼️ Agregá al menos 2 imágenes con src y alt
         Podés buscar imágenes en Google y copiar la URL,
         o usar https://picsum.photos/300/200 para fotos de ejemplo -->

  </body>
</html>`,
    checks: [
      { type: 'minCount',      selector: 'img',      count: 2, message: 'Agregá al menos 2 imágenes <img>',        hint: '<img src="https://..." alt="descripción">' },
      { type: 'elementWithAttr', selector: 'img',    attr: 'src',  message: 'Las imágenes necesitan el atributo src',   hint: 'src="URL de la imagen"' },
      { type: 'elementWithAttr', selector: 'img',    attr: 'alt',  message: 'Las imágenes necesitan el atributo alt',   hint: 'alt="descripción de la imagen"' },
    ],
    quiz: [
      {
        question: '¿Para qué sirve el atributo <code>alt</code> en las imágenes?',
        options: ['Define el tamaño de la imagen', 'Muestra texto si la imagen no carga y mejora la accesibilidad', 'Es el link de la imagen', 'No tiene ninguna función importante'],
        _c: 'MQ==',
        explanation: '¡Correcto! alt es fundamental: aparece si la imagen falla al cargar, lo leen los lectores de pantalla para personas con discapacidad visual, y mejora el SEO en Google.'
      },
      {
        question: '¿Cuál de estos códigos de imagen es correcto?',
        options: ['&lt;img href="foto.jpg" alt="mi foto"&gt;', '&lt;img src="foto.jpg" alt="mi foto"&gt;', '&lt;image src="foto.jpg"&gt;', '&lt;img src="foto.jpg"&gt;&lt;/img&gt;'],
        _c: 'MQ==',
        explanation: '¡Correcto! &lt;img&gt; usa src (no href) para la URL de la imagen. Además es una etiqueta vacía — no necesita etiqueta de cierre &lt;/img&gt;.'
      }
    ]
  },

  {
    id: 7,
    chapter: 3,
    chapterTitle: "Capítulo 3: Formato",
    title: "Review sin spoilers",
    duration: "6 min",
    icon: "⭐",
    theory: `
      <h3>Dar énfasis al texto</h3>
      <pre><code>&lt;strong&gt;Texto importante (negrita)&lt;/strong&gt;
&lt;em&gt;Texto con énfasis (itálica)&lt;/em&gt;
&lt;mark&gt;Texto resaltado en amarillo&lt;/mark&gt;
&lt;del&gt;Texto tachado&lt;/del&gt;</code></pre>
      <h3><code>&lt;strong&gt;</code> vs <code>&lt;b&gt;</code></h3>
      <p><code>&lt;strong&gt;</code> indica que algo es <strong>importante</strong> (semántica). <code>&lt;b&gt;</code> solo es visual. Preferí siempre <code>&lt;strong&gt;</code>.</p>
      <h3>Tip</h3>
      <p>Usá <code>&lt;mark&gt;</code> para spoilers o datos que no querés que se pierdan. ¡Queda re bien en las reviews!</p>
    `,
    instructions: "Escribí una mini review de tu película, serie o videojuego favorito. Tiene que tener:\n• Un h1 con el título\n• Al menos 2 párrafos\n• Algo en <strong> (el nombre o algo importante)\n• Algo en <em> (tu opinión personal)\n• Algo en <mark> (¡sin spoilers... o con, vos decidís! 😄)",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Mi review ⭐</title>
  </head>
  <body>
    <h1>Review: [tu película/serie/juego]</h1>

    <!-- ⭐ Escribí tu review con formato
         Usá strong, em y mark para darle vida al texto
         Ejemplo: "La actuación de <strong>Florence Pugh</strong> es <em>increíble</em>" -->

  </body>
</html>`,
    checks: [
      { type: 'elementWithText', selector: 'h1',             message: 'Poné un título <h1> con el nombre de tu review',    hint: '<h1>Review: nombre de tu peli/serie</h1>' },
      { type: 'minCount',        selector: 'p',    count: 2, message: 'Escribí al menos 2 párrafos',                        hint: 'Dos bloques de texto entre <p>...</p>' },
      { type: 'element',         selector: 'strong, b',      message: 'Usá <strong> para destacar algo importante',         hint: '<strong>el título o algo clave</strong>' },
      { type: 'element',         selector: 'em, i',          message: 'Usá <em> para tu opinión personal',                  hint: '<em>es increíble</em>' },
    ],
    quiz: [
      {
        question: '¿Cuál es la diferencia entre <code>&lt;strong&gt;</code> y <code>&lt;b&gt;</code>?',
        options: ['No hay diferencia, son iguales', '&lt;strong&gt; indica importancia semántica, &lt;b&gt; es solo visual', '&lt;b&gt; es más moderno y recomendado', '&lt;strong&gt; hace el texto más grande'],
        _c: 'MQ==',
        explanation: '¡Correcto! Aunque ambos muestran negrita, &lt;strong&gt; le indica al navegador que ese contenido es importante. Los lectores de pantalla lo leen con mayor énfasis.'
      },
      {
        question: '¿Qué etiqueta resalta texto como con un marcador fluorescente?',
        options: ['&lt;highlight&gt;', '&lt;yellow&gt;', '&lt;mark&gt;', '&lt;em&gt;'],
        _c: 'Mg==',
        explanation: '¡Correcto! &lt;mark&gt; resalta el texto en amarillo, como un marcador. Ideal para spoilers, datos clave o advertencias importantes en tu contenido.'
      }
    ]
  },

  {
    id: 8,
    chapter: 3,
    chapterTitle: "Capítulo 3: Formato",
    title: "Stats de personajes",
    duration: "10 min",
    icon: "📊",
    theory: `
      <h3>Anatomía de una tabla</h3>
      <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Personaje&lt;/th&gt;
      &lt;th&gt;Poder&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Spider-Man&lt;/td&gt;
      &lt;td&gt;Sentido arácnido&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      <ul>
        <li><code>&lt;table&gt;</code> — la tabla completa</li>
        <li><code>&lt;thead&gt;</code> — fila de encabezados</li>
        <li><code>&lt;tbody&gt;</code> — filas de datos</li>
        <li><code>&lt;tr&gt;</code> — una fila</li>
        <li><code>&lt;th&gt;</code> — celda de encabezado (negrita por defecto)</li>
        <li><code>&lt;td&gt;</code> — celda de datos</li>
      </ul>
    `,
    instructions: "Creá la tabla de stats de 3 personajes de tu juego, película o serie favorita.\nLas columnas tienen que ser:\n• Personaje\n• Poder especial\n• Punto débil\n• Nivel de amenaza (del 1 al 10)",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Stats de personajes 📊</title>
  </head>
  <body>
    <h1>Tabla de stats: [tu universo favorito]</h1>

    <!-- 📊 Creá la tabla con thead y tbody
         4 columnas: Personaje | Poder especial | Punto débil | Nivel de amenaza -->

  </body>
</html>`,
    checks: [
      { type: 'element',    selector: 'table',             message: 'Creá la tabla con <table>',                     hint: '<table>...</table>' },
      { type: 'minCount',   selector: 'th',     count: 4,  message: 'La tabla necesita 4 encabezados <th>',          hint: 'Personaje | Poder | Punto débil | Nivel' },
      { type: 'minCount',   selector: 'tr',     count: 4,  message: 'Necesitás al menos 4 filas <tr> (encabezado + 3 personajes)', hint: 'Una fila de encabezados y una por cada personaje' },
      { type: 'minCount',   selector: 'td',     count: 9,  message: 'Completá los datos de los 3 personajes',        hint: 'Cada personaje necesita 4 celdas <td>' },
    ],
    quiz: [
      {
        question: '¿Qué etiqueta define una celda de ENCABEZADO en una tabla?',
        options: ['&lt;td&gt;', '&lt;th&gt;', '&lt;head&gt;', '&lt;header&gt;'],
        _c: 'MQ==',
        explanation: '¡Correcto! &lt;th&gt; (table header) crea celdas de encabezado — aparecen en negrita y centradas por defecto. &lt;td&gt; es para los datos normales de la tabla.'
      },
      {
        question: '¿Qué etiqueta representa una FILA completa en una tabla?',
        options: ['&lt;row&gt;', '&lt;line&gt;', '&lt;tr&gt;', '&lt;td&gt;'],
        _c: 'Mg==',
        explanation: '¡Correcto! &lt;tr&gt; (table row) define una fila completa. Dentro de cada &lt;tr&gt; van las celdas: &lt;th&gt; para encabezados o &lt;td&gt; para datos.'
      }
    ]
  },

  {
    id: 9,
    chapter: 4,
    chapterTitle: "Capítulo 4: Formularios básicos",
    title: "Formulario de fan club",
    duration: "12 min",
    icon: "📬",
    theory: `
      <h3>Un formulario básico</h3>
      <pre><code>&lt;form&gt;
  &lt;label for="nombre"&gt;Tu nombre:&lt;/label&gt;
  &lt;input type="text" id="nombre" name="nombre"&gt;

  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" name="email"&gt;

  &lt;label for="mensaje"&gt;Mensaje:&lt;/label&gt;
  &lt;textarea id="mensaje" name="mensaje"&gt;&lt;/textarea&gt;

  &lt;button type="submit"&gt;Enviar&lt;/button&gt;
&lt;/form&gt;</code></pre>
      <h3>Tipos de input</h3>
      <ul>
        <li><code>type="text"</code> — texto libre</li>
        <li><code>type="email"</code> — valida que sea un email válido</li>
        <li><code>type="password"</code> — oculta lo que se escribe</li>
        <li><code>type="number"</code> — solo números</li>
      </ul>
    `,
    instructions: "Creá el formulario de inscripción al fan club de tu artista favorito. El formulario debe pedir:\n• Nombre artístico (input type=\"text\")\n• Email (input type=\"email\")\n• Un textarea con la pregunta '¿Por qué sos el/la fan número 1?'\n• Un botón que diga 'Unirme al club 🎤'",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Fan Club 🎤</title>
  </head>
  <body>
    <h1>Fan Club Oficial de [tu artista]</h1>
    <p>¿Querés unirte? Completá el formulario:</p>

    <!-- 📬 Creá el formulario de inscripción
         Campos: nombre artístico (text), email, por qué sos fan (textarea), botón -->

  </body>
</html>`,
    checks: [
      { type: 'element', selector: 'form',                                    message: 'Creá el formulario con <form>',                    hint: '<form>...</form>' },
      { type: 'element', selector: 'input[type="text"], input:not([type])',   message: 'Agregá un campo de texto para el nombre artístico', hint: '<input type="text" name="apodo">' },
      { type: 'element', selector: 'input[type="email"]',                    message: 'Agregá un campo de email',                         hint: '<input type="email" name="email">' },
      { type: 'element', selector: 'textarea',                               message: 'Agregá un <textarea> para la pregunta del fan',    hint: '<textarea name="razon"></textarea>' },
      { type: 'element', selector: 'button, input[type="submit"]',           message: 'Agregá un botón para enviar el formulario',        hint: '<button type="submit">Unirme al club 🎤</button>' },
    ],
    quiz: [
      {
        question: '¿Qué tipo de <code>&lt;input&gt;</code> se usa para campos de contraseña?',
        options: ['type="secret"', 'type="hidden"', 'type="password"', 'type="text"'],
        _c: 'Mg==',
        explanation: '¡Correcto! type="password" oculta lo que el usuario escribe con puntos o asteriscos. Es esencial para proteger contraseñas en cualquier formulario.'
      },
      {
        question: '¿Qué etiqueta crea un área de texto multilínea (como para escribir un mensaje largo)?',
        options: ['&lt;input type="textarea"&gt;', '&lt;text&gt;', '&lt;textarea&gt;', '&lt;input type="multiline"&gt;'],
        _c: 'Mg==',
        explanation: '¡Correcto! &lt;textarea&gt; crea un campo de texto multilínea que el usuario puede expandir. A diferencia de &lt;input&gt;, tiene etiqueta de cierre: &lt;/textarea&gt;.'
      }
    ]
  },

  {
    id: 10,
    chapter: 5,
    chapterTitle: "Capítulo 5: Formularios avanzados",
    title: "El <div>: la caja invisible",
    duration: "7 min",
    icon: "📦",
    theory: `
      <h3>¿Qué es un <code>&lt;div&gt;</code>?</h3>
      <p>Un <code>&lt;div&gt;</code> es una caja invisible que agrupa elementos. Por sí solo no se ve nada — no tiene borde, no tiene color. Su función es <strong>organizar el contenido</strong>.</p>
      <p>Pensalo como una carpeta: no se ve, pero mantiene todo ordenado adentro.</p>
      <pre><code>&lt;div&gt;
  &lt;h2&gt;Mis juegos favoritos&lt;/h2&gt;
  &lt;p&gt;Todo este contenido está agrupado.&lt;/p&gt;
&lt;/div&gt;</code></pre>

      <h3>¿Por qué usarlo?</h3>
      <p>Cuando trabajás con CSS (el lenguaje de estilos), necesitás agrupar elementos para aplicarles el mismo estilo a todos juntos. El <code>&lt;div&gt;</code> te lo permite:</p>
      <pre><code>&lt;!-- Sin div: no podés mover o estilizar todo junto --&gt;
&lt;h2&gt;Perfil&lt;/h2&gt;
&lt;p&gt;Usuario: xXWolfXx&lt;/p&gt;
&lt;p&gt;Nivel: 42&lt;/p&gt;

&lt;!-- Con div: todo el bloque se mueve y estiliza junto --&gt;
&lt;div&gt;
  &lt;h2&gt;Perfil&lt;/h2&gt;
  &lt;p&gt;Usuario: xXWolfXx&lt;/p&gt;
  &lt;p&gt;Nivel: 42&lt;/p&gt;
&lt;/div&gt;</code></pre>

      <h3>Podés anidar divs</h3>
      <p>Un <code>&lt;div&gt;</code> puede estar adentro de otro <code>&lt;div&gt;</code>. Es normal y muy común:</p>
      <pre><code>&lt;div&gt;                       &lt;!-- contenedor general --&gt;
  &lt;div&gt;                     &lt;!-- sección izquierda --&gt;
    &lt;h2&gt;Stats&lt;/h2&gt;
    &lt;p&gt;Victorias: 120&lt;/p&gt;
  &lt;/div&gt;
  &lt;div&gt;                     &lt;!-- sección derecha --&gt;
    &lt;h2&gt;Logros&lt;/h2&gt;
    &lt;p&gt;🏆 MVP del mes&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

      <h3><code>&lt;div&gt;</code> vs etiquetas semánticas</h3>
      <p>Ya aprendiste <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>. ¿Cuándo usar <code>&lt;div&gt;</code>?</p>
      <ul>
        <li>Usá <code>&lt;section&gt;</code>, <code>&lt;header&gt;</code>, etc. cuando el bloque tiene un <strong>significado real</strong></li>
        <li>Usá <code>&lt;div&gt;</code> cuando solo necesitás <strong>agrupar cosas sin significado especial</strong></li>
      </ul>
    `,
    instructions: "Organizá la página de perfil de un gamer usando divs.\nLa página debe tener 3 secciones, cada una en su propio <div>:\n• Datos del jugador (nombre, nivel, país)\n• Lista de juegos favoritos\n• Logros desbloqueados (al menos 2 logros como párrafos)",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Perfil Gamer 🎮</title>
  </head>
  <body>
    <h1>🎮 Perfil del jugador</h1>

    <!-- Usá 3 div para separar las secciones:
         1. Datos del jugador (nombre, nivel, país)
         2. Juegos favoritos (una lista)
         3. Logros desbloqueados (párrafos) -->

  </body>
</html>`,
    checks: [
      { type: 'minCount',        selector: 'div',    count: 3, message: 'Usá al menos 3 <div> para separar las secciones',          hint: 'Cada sección (datos, juegos, logros) en su propio <div>' },
      { type: 'elementWithText', selector: 'h1',               message: 'Necesitás un <h1> para el título de la página',             hint: '<h1>Perfil del jugador</h1>' },
      { type: 'minCount',        selector: 'h2',     count: 3, message: 'Cada <div> necesita un <h2> como título de sección',         hint: '<h2>Datos del jugador</h2>' },
      { type: 'element',         selector: 'ul li, ol li',     message: 'Agregá una lista de juegos favoritos',                      hint: '<ul><li>Minecraft</li>...</ul>' },
    ],
    quiz: [
      {
        question: '¿Qué muestra un <code>&lt;div&gt;</code> vacío en la pantalla?',
        options: ['Un recuadro con borde gris', 'Nada — es completamente invisible', 'Un espacio en blanco del tamaño de la pantalla', 'Un mensaje de error'],
        _c: 'MQ==',
        explanation: '¡Correcto! Un &lt;div&gt; sin estilos CSS es completamente invisible. Su función es organizar el HTML, no agregar apariencia. El diseño viene después, con CSS.'
      },
      {
        question: '¿Cuándo conviene usar <code>&lt;div&gt;</code> en vez de <code>&lt;section&gt;</code>?',
        options: ['Siempre, div reemplaza a todos', 'Cuando el bloque no tiene un significado especial y solo agrupa elementos', 'Div es para imágenes, section para texto', 'Nunca, section es siempre mejor'],
        _c: 'MQ==',
        explanation: '¡Correcto! Usá &lt;section&gt; cuando el bloque representa una sección real del contenido. Usá &lt;div&gt; cuando solo necesitás una caja genérica para agrupar sin significado semántico.'
      }
    ]
  },

  {
    id: 11,
    chapter: 5,
    chapterTitle: "Capítulo 5: Formularios avanzados",
    title: "Menús desplegables con <select>",
    duration: "9 min",
    icon: "📋",
    theory: `
      <h3>¿Qué es <code>&lt;select&gt;</code>?</h3>
      <p>Es un menú desplegable — el usuario hace clic y aparece una lista de opciones para elegir una:</p>
      <pre><code>&lt;select name="pais"&gt;
  &lt;option value="ar"&gt;Argentina&lt;/option&gt;
  &lt;option value="mx"&gt;México&lt;/option&gt;
  &lt;option value="co"&gt;Colombia&lt;/option&gt;
&lt;/select&gt;</code></pre>

      <h3>Las partes del menú</h3>
      <ul>
        <li><code>&lt;select&gt;</code> — el contenedor del menú. Tiene el atributo <code>name</code> (necesario para que el servidor reciba el dato)</li>
        <li><code>&lt;option&gt;</code> — cada opción dentro del menú</li>
        <li><code>value</code> — el valor que se envía al servidor (puede ser diferente al texto visible)</li>
      </ul>

      <h3>Texto visible vs valor real</h3>
      <p>Lo que está entre las etiquetas <code>&lt;option&gt;</code> es lo que <em>ve</em> el usuario. El atributo <code>value</code> es lo que recibe el servidor:</p>
      <pre><code>&lt;option value="ar"&gt;Argentina&lt;/option&gt;
&lt;!-- El usuario ve: "Argentina" --&gt;
&lt;!-- El servidor recibe: "ar"   --&gt;</code></pre>

      <h3>Conectarlo con su label</h3>
      <p>Para buena accesibilidad, usá <code>&lt;label for&gt;</code> junto con el <code>id</code> del select. Al hacer clic en el label, el menú se activa:</p>
      <pre><code>&lt;label for="pais"&gt;Elegí tu país:&lt;/label&gt;
&lt;select id="pais" name="pais"&gt;
  &lt;option value="ar"&gt;Argentina&lt;/option&gt;
  &lt;option value="mx"&gt;México&lt;/option&gt;
&lt;/select&gt;</code></pre>
      <p>El <code>for</code> del label y el <code>id</code> del select tienen que tener el mismo valor.</p>
    `,
    instructions: "Creá un formulario de creación de personaje RPG con 3 menús desplegables:\n• Raza: Humano, Elfo, Enano, Orco\n• Clase: Guerrero, Mago, Arquero, Ladrón\n• Dificultad: Fácil, Normal, Difícil, Legendario\n\nCada <select> debe tener su <label> y su atributo name.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Crear personaje ⚔️</title>
  </head>
  <body>
    <h1>⚔️ Creá tu personaje</h1>
    <form>

      <!-- 1. label + select para la raza (name="raza") -->
      <!-- Opciones: Humano, Elfo, Enano, Orco -->

      <!-- 2. label + select para la clase (name="clase") -->
      <!-- Opciones: Guerrero, Mago, Arquero, Ladrón -->

      <!-- 3. label + select para la dificultad (name="dificultad") -->
      <!-- Opciones: Fácil, Normal, Difícil, Legendario -->

      <button type="submit">¡Comenzar aventura! ⚔️</button>
    </form>
  </body>
</html>`,
    checks: [
      { type: 'minCount',        selector: 'select',    count: 3, message: 'Necesitás 3 menús <select> (raza, clase, dificultad)',  hint: '<select name="raza">...</select>' },
      { type: 'minCount',        selector: 'option',    count: 8, message: 'Cada select necesita al menos 3 opciones <option>',     hint: '<option value="elfo">Elfo</option>' },
      { type: 'elementWithAttr', selector: 'select',    attr: 'name', message: 'Los <select> necesitan el atributo name',          hint: '<select name="raza">' },
      { type: 'element',         selector: 'label[for]',              message: 'Usá <label for="id"> para cada select',            hint: '<label for="raza">Raza:</label>' },
    ],
    quiz: [
      {
        question: '¿Qué valor recibe el servidor cuando el usuario elige una <code>&lt;option&gt;</code>?',
        options: ['El texto visible entre las etiquetas option', 'El atributo value de la option elegida', 'El atributo name del select', 'El id del select'],
        _c: 'MQ==',
        explanation: '¡Correcto! El servidor recibe el value — no el texto visible. Ej: &lt;option value="ar"&gt;Argentina&lt;/option&gt; → el servidor recibe "ar", aunque el usuario haya visto "Argentina".'
      },
      {
        question: '¿En qué etiqueta va el atributo <code>name</code> del menú desplegable?',
        options: ['En cada &lt;option&gt; individualmente', 'En el &lt;label&gt;', 'En el &lt;select&gt;', 'En el &lt;form&gt;'],
        _c: 'Mg==',
        explanation: '¡Correcto! El name va en el &lt;select&gt;, no en las opciones. El select representa el campo completo — las opciones son solo sus posibles valores.'
      }
    ]
  },

  {
    id: 12,
    chapter: 5,
    chapterTitle: "Capítulo 5: Formularios avanzados",
    title: "Radio y checkbox: elegir opciones",
    duration: "10 min",
    icon: "✅",
    theory: `
      <h3><code>type="radio"</code> — elegir UNO de varios</h3>
      <p>Los radio buttons se usan cuando el usuario puede elegir <strong>solo una opción</strong> de un grupo. El truco está en que todos compartan el mismo <code>name</code>:</p>
      <pre><code>&lt;p&gt;¿Cuál es tu consola?&lt;/p&gt;

&lt;input type="radio" id="ps5" name="consola" value="ps5"&gt;
&lt;label for="ps5"&gt;PlayStation 5&lt;/label&gt;

&lt;input type="radio" id="xbox" name="consola" value="xbox"&gt;
&lt;label for="xbox"&gt;Xbox Series X&lt;/label&gt;

&lt;input type="radio" id="switch" name="consola" value="switch"&gt;
&lt;label for="switch"&gt;Nintendo Switch&lt;/label&gt;</code></pre>
      <p>Al elegir uno, los demás se desmarcan solos — porque todos comparten <code>name="consola"</code>. El navegador entiende que son del mismo grupo.</p>

      <h3><code>type="checkbox"</code> — elegir VARIOS</h3>
      <p>Los checkboxes se usan cuando el usuario puede marcar <strong>múltiples opciones</strong> a la vez:</p>
      <pre><code>&lt;p&gt;Géneros que te gustan:&lt;/p&gt;

&lt;input type="checkbox" id="rpg" name="genero_rpg" value="rpg"&gt;
&lt;label for="rpg"&gt;RPG&lt;/label&gt;

&lt;input type="checkbox" id="fps" name="genero_fps" value="fps"&gt;
&lt;label for="fps"&gt;FPS&lt;/label&gt;

&lt;input type="checkbox" id="deportes" name="genero_deportes" value="deportes"&gt;
&lt;label for="deportes"&gt;Deportes&lt;/label&gt;</code></pre>
      <p>Cada checkbox tiene su propio <code>name</code> distinto — así el servidor puede saber exactamente cuáles se marcaron.</p>

      <h3>¿Cuándo usar cuál?</h3>
      <ul>
        <li><strong>Radio</strong>: "¿Cuál es tu consola favorita?" → solo una respuesta posible</li>
        <li><strong>Checkbox</strong>: "¿Qué géneros te gustan?" → pueden ser varios a la vez</li>
        <li>Siempre conectá cada input con su <code>&lt;label&gt;</code> usando <code>for</code> e <code>id</code> iguales</li>
      </ul>
    `,
    instructions: "Creá un formulario de encuesta gamer con dos secciones:\n\n1. Radio buttons — estilo de juego preferido:\n   Competitivo, Casual o Cooperativo (mismo name para los tres)\n\n2. Checkboxes — géneros favoritos:\n   RPG, FPS, Estrategia, Deportes, Aventura (name distinto para cada uno)\n\nCada input debe tener su <label> con el atributo for.",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Encuesta Gamer 🎮</title>
  </head>
  <body>
    <h1>🎮 ¿Qué tipo de gamer sos?</h1>

    <form>
      <h2>¿Cómo preferís jugar?</h2>
      <!-- Tres radio buttons con name="estilo"
           Opciones: Competitivo, Casual, Cooperativo
           Tip: los tres deben tener EL MISMO name para que
           solo se pueda elegir uno -->

      <h2>¿Qué géneros te gustan? (podés elegir varios)</h2>
      <!-- Checkboxes: RPG, FPS, Estrategia, Deportes, Aventura
           Tip: cada uno con su propio name diferente -->

      <button type="submit">Enviar encuesta 🎯</button>
    </form>
  </body>
</html>`,
    checks: [
      { type: 'minCount', selector: 'input[type="radio"]',    count: 3, message: 'Agregá 3 radio buttons para el estilo de juego',   hint: '<input type="radio" name="estilo" value="competitivo">' },
      { type: 'custom',   test: (code) => { const m = code.match(/name="estilo"/gi); return m && m.length >= 3; },
                                                                         message: 'Los 3 radio deben compartir el mismo name="estilo"', hint: 'Todos los radio del grupo tienen que tener name="estilo"' },
      { type: 'minCount', selector: 'input[type="checkbox"]', count: 3, message: 'Agregá al menos 3 checkboxes de géneros',           hint: '<input type="checkbox" name="genero_rpg" value="rpg">' },
      { type: 'element',  selector: 'label[for]',                        message: 'Cada input necesita su <label for="id">',           hint: '<label for="rpg">RPG</label>' },
    ],
    quiz: [
      {
        question: '¿Por qué los <code>type="radio"</code> de un mismo grupo deben tener el mismo <code>name</code>?',
        options: ['Para que tengan el mismo color', 'Para que el navegador sepa que son del mismo grupo y solo permita elegir uno', 'Para que el label funcione correctamente', 'Es solo una convención, no es obligatorio'],
        _c: 'MQ==',
        explanation: '¡Correcto! El name agrupa los radio buttons. El navegador automáticamente solo permite marcar uno por grupo. Si tuvieran nombres distintos, podrías marcar todos a la vez.'
      },
      {
        question: '¿Cuál es la principal diferencia entre <code>radio</code> y <code>checkbox</code>?',
        options: ['Radio es circular, checkbox es cuadrado', 'Radio permite elegir solo una opción; checkbox permite elegir varias', 'Checkbox solo funciona en formularios con method="post"', 'No hay diferencia práctica'],
        _c: 'MQ==',
        explanation: '¡Correcto! Radio = elegí uno (como sintonizar una radio: una sola estación). Checkbox = elegí varios (como una lista de compras: marcás lo que querás).'
      }
    ]
  },

  {
    id: 13,
    chapter: 5,
    chapterTitle: "Capítulo 5: Formularios avanzados",
    title: "Cómo llegan los datos al servidor",
    duration: "12 min",
    icon: "🚀",
    theory: `
      <h3>El atributo <code>name</code> — el más importante de los formularios</h3>
      <p>Cuando un formulario se envía, el servidor recibe los datos como pares <strong>nombre=valor</strong>. El <code>name</code> del input define ese "nombre". Sin él, el dato <strong>no llega al servidor</strong>:</p>
      <pre><code>&lt;!-- CON name: el servidor recibe el dato --&gt;
&lt;input type="text" name="usuario" value="xXWolfXx"&gt;
&lt;!-- El servidor recibe: usuario=xXWolfXx ✓ --&gt;

&lt;!-- SIN name: el servidor no recibe nada --&gt;
&lt;input type="text" value="xXWolfXx"&gt;
&lt;!-- El servidor recibe: (nada) ✗ --&gt;</code></pre>

      <h3>En Java: <code>request.getParameter()</code></h3>
      <p>En un Servlet de Java, los datos del formulario se leen así:</p>
      <pre><code>// El texto entre comillas DEBE ser igual
// al atributo name del input en HTML

String usuario  = request.getParameter("usuario");
String email    = request.getParameter("email");
String categoria = request.getParameter("categoria");</code></pre>
      <p>Si el input tiene <code>name="usuario"</code>, en Java escribís <code>getParameter("usuario")</code>. ¡Exactamente el mismo texto!</p>

      <h3><code>action</code> — a dónde va el formulario</h3>
      <p>El atributo <code>action</code> indica la URL del servidor (el Servlet) que va a procesar los datos cuando el usuario aprete Enviar:</p>
      <pre><code>&lt;form action="/InscripcionServlet" method="post"&gt;</code></pre>

      <h3><code>method</code> — cómo viajan los datos</h3>
      <ul>
        <li><code>method="get"</code> — los datos van en la URL: <code>?usuario=Wolf&amp;email=wolf@mail.com</code>. Son visibles. Bueno para búsquedas.</li>
        <li><code>method="post"</code> — los datos van ocultos. Nadie los ve en la URL. <strong>Siempre usá post para datos privados</strong> (contraseñas, información personal).</li>
      </ul>
      <pre><code>&lt;!-- Con get: datos visibles en la URL --&gt;
&lt;form action="/buscar" method="get"&gt;
  &lt;input type="text" name="q"&gt;
  &lt;button&gt;Buscar&lt;/button&gt;
&lt;/form&gt;
&lt;!-- URL resultante: /buscar?q=fortnite --&gt;

&lt;!-- Con post: datos ocultos --&gt;
&lt;form action="/login" method="post"&gt;
  &lt;input type="password" name="clave"&gt;
&lt;/form&gt;
&lt;!-- La clave NO aparece en la URL ✓ --&gt;</code></pre>
    `,
    instructions: "Armá el formulario completo de inscripción a un torneo de esports.\n\nEl <form> debe tener action='/inscripcion' y method='post'.\n\nNecesita:\n• Campo nombre (name='nombre')\n• Campo email (name='email')\n• Un <select> de categoría (con su name)\n• 2 radio buttons con el mismo name='modalidad'\n• 1 checkbox con su name\n• Un botón de envío\n\n¡Revisá que TODOS los inputs tengan name!",
    starterCode: `<!DOCTYPE html>
<html>
  <head>
    <title>Torneo de Esports 🏆</title>
  </head>
  <body>
    <h1>🏆 Torneo de Esports</h1>
    <h2>Formulario de inscripción</h2>

    <!-- Recordatorio:
         - El form necesita action y method
         - TODOS los inputs necesitan name
         - El name en HTML = lo que escribe el Servlet en Java -->

    <form>
      <!-- Campo nombre (type="text", name="nombre") -->

      <!-- Campo email (type="email", name="email") -->

      <!-- Select de categoría: Amateur, Semi-pro, Pro (name="categoria") -->

      <!-- Radio buttons: Individual / Por equipos (name="modalidad") -->

      <!-- Checkbox: Acepto las bases (name="acepto") -->

      <!-- Botón de envío -->
    </form>
  </body>
</html>`,
    checks: [
      { type: 'elementWithAttr', selector: 'form',  attr: 'action', message: 'El <form> necesita el atributo action (la URL del servidor)',    hint: '<form action="/inscripcion" method="post">' },
      { type: 'elementWithAttr', selector: 'form',  attr: 'method', message: 'El <form> necesita el atributo method (post o get)',             hint: '<form action="/inscripcion" method="post">' },
      { type: 'elementWithAttr', selector: 'input[type="text"], input[type="email"]', attr: 'name', message: 'Los campos de texto necesitan el atributo name', hint: '<input type="text" name="nombre">' },
      { type: 'elementWithAttr', selector: 'select', attr: 'name',  message: 'El <select> de categoría necesita el atributo name',             hint: '<select name="categoria">' },
      { type: 'element',         selector: 'input[type="radio"]',   message: 'Agregá los radio buttons de modalidad',                          hint: '<input type="radio" name="modalidad" value="individual">' },
      { type: 'element',         selector: 'input[type="checkbox"]', message: 'Agregá el checkbox para aceptar las bases',                     hint: '<input type="checkbox" name="acepto">' },
    ],
    quiz: [
      {
        question: '¿Qué método deberías usar para enviar una contraseña en un formulario?',
        options: ['get, es más rápido', 'post, los datos van ocultos y no aparecen en la URL', 'Cualquiera, no hay diferencia de seguridad', 'get, porque es el método predeterminado'],
        _c: 'MQ==',
        explanation: '¡Correcto! Con post los datos viajan ocultos. Con get la contraseña aparecería en la URL (?clave=mi_clave123) — visible para cualquiera que vea la pantalla, el historial o las capturas de pantalla.'
      },
      {
        question: 'En Java, ¿cómo leés el valor de un input con <code>name="email"</code>?',
        options: ['request.getValue("email")', 'request.getInput("email")', 'request.getParameter("email")', 'request.getName("email")'],
        _c: 'Mg==',
        explanation: '¡Correcto! request.getParameter("email") lee el campo cuyo name en HTML es "email". El texto entre comillas DEBE coincidir exactamente con el atributo name del input.'
      }
    ]
  },
];
