// ── CHALLENGES DATA ───────────────────────────────────
// Cada desafío: id, title, icon, difficulty, xp, description,
//               instructions, starterCode / starterHtml+starterCss+starterJs,
//               checks[]

const CHALLENGES = {

  // ════════════════════════════════════════════════════
  //  HTML
  // ════════════════════════════════════════════════════
  html: [

    // ── HTML 1 · Easy ────────────────────────────────
    {
      id: 1,
      title: 'Mi carta de presentación',
      icon: '👤',
      difficulty: 'easy',
      xp: 50,
      description: 'Creá tu primera página web personal completa.',
      instructions: 'Creá una página de presentación con:\n\n' +
        '• Un <strong>título &lt;h1&gt;</strong> con tu nombre\n' +
        '• Una <strong>imagen</strong> (usá https://picsum.photos/150 como src)\n' +
        '• Un <strong>párrafo</strong> de descripción\n' +
        '• Una <strong>lista con al menos 3 hobbies</strong>\n' +
        '• Un <strong>enlace</strong> a tu sitio favorito',
      starterCode:
        '<!DOCTYPE html>\n' +
        '<html lang="es">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Mi presentación</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  <!-- Completá tu página personal acá -->\n' +
        '  \n' +
        '</body>\n' +
        '</html>',
      checks: [
        { type: 'elementWithText', selector: 'h1',  message: 'Debe haber un &lt;h1&gt; con tu nombre', hint: 'Agregá <h1>Tu Nombre</h1> en el body' },
        { type: 'elementWithAttr', selector: 'img', attr: 'src', message: 'Debe haber una imagen con atributo src', hint: '<img src="https://picsum.photos/150" alt="Foto">' },
        { type: 'elementWithText', selector: 'p',   message: 'Debe haber un párrafo de descripción', hint: 'Agregá <p>Texto sobre vos</p>' },
        { type: 'minCount',        selector: 'li',  count: 3, message: 'La lista debe tener al menos 3 hobbies', hint: 'Agregá más <li> dentro de un <ul>' },
        { type: 'elementWithAttr', selector: 'a',   attr: 'href', message: 'Debe haber un enlace con href', hint: '<a href="https://...">Mi sitio favorito</a>' },
      ],
    },

    // ── HTML 2 · Medium ──────────────────────────────
    {
      id: 2,
      title: 'Menú de restaurante',
      icon: '🍽️',
      difficulty: 'medium',
      xp: 100,
      description: 'Diseñá la carta digital de un restaurante imaginario.',
      instructions: 'Creá la carta de un restaurante con:\n\n' +
        '• El <strong>nombre del restaurante en &lt;h1&gt;</strong>\n' +
        '• Una <strong>tabla</strong> con &lt;thead&gt; y &lt;tbody&gt;\n' +
        '• Al menos <strong>3 platos</strong> en la tabla (nombre, descripción, precio)\n' +
        '• Un <strong>formulario de reserva</strong> con campo de nombre, fecha y botón',
      starterCode:
        '<!DOCTYPE html>\n' +
        '<html lang="es">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Restaurante</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  <!-- Diseñá el menú de tu restaurante -->\n' +
        '  \n' +
        '</body>\n' +
        '</html>',
      checks: [
        { type: 'elementWithText', selector: 'h1',                          message: 'Debe haber un h1 con el nombre del restaurante' },
        { type: 'element',         selector: 'table',                        message: 'Debe haber una tabla', hint: '<table><thead>...</thead><tbody>...</tbody></table>' },
        { type: 'element',         selector: 'thead',                        message: 'La tabla debe tener un &lt;thead&gt;' },
        { type: 'minCount',        selector: 'tbody tr', count: 3,           message: 'La tabla debe tener al menos 3 platos', hint: 'Agregá más <tr> dentro del <tbody>' },
        { type: 'element',         selector: 'form',                         message: 'Debe haber un formulario de reserva' },
        { type: 'element',         selector: 'form input',                   message: 'El formulario debe tener campos de entrada' },
        { type: 'element',         selector: 'form button, form input[type=submit]', message: 'El formulario debe tener un botón de envío' },
      ],
    },

    // ── HTML 3 · Hard ────────────────────────────────
    {
      id: 3,
      title: 'Formulario de registro',
      icon: '📋',
      difficulty: 'hard',
      xp: 200,
      description: 'Construí un formulario de registro completo y accesible.',
      instructions: 'Creá un formulario de registro con todos estos elementos:\n\n' +
        '• Campo de <strong>nombre</strong> (type=text)\n' +
        '• Campo de <strong>email</strong> (type=email)\n' +
        '• Campo de <strong>contraseña</strong> (type=password)\n' +
        '• Campo de <strong>fecha de nacimiento</strong> (type=date)\n' +
        '• Un <strong>select de país</strong> con mínimo 3 opciones\n' +
        '• Un <strong>textarea</strong> "Sobre mí"\n' +
        '• Un <strong>checkbox</strong> de términos y condiciones\n' +
        '• Un <strong>botón de envío</strong>',
      starterCode:
        '<!DOCTYPE html>\n' +
        '<html lang="es">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Registro</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  <h1>Crear cuenta</h1>\n' +
        '  <form>\n' +
        '    <!-- Completá el formulario acá -->\n' +
        '    \n' +
        '  </form>\n' +
        '</body>\n' +
        '</html>',
      checks: [
        { type: 'element', selector: 'input[type=text], input:not([type])',    message: 'Debe haber un campo de nombre (type=text)' },
        { type: 'element', selector: 'input[type=email]',                     message: 'Debe haber un campo de email', hint: '<input type="email">' },
        { type: 'element', selector: 'input[type=password]',                  message: 'Debe haber un campo de contraseña', hint: '<input type="password">' },
        { type: 'element', selector: 'input[type=date]',                      message: 'Debe haber un campo de fecha de nacimiento', hint: '<input type="date">' },
        { type: 'minCount', selector: 'select option', count: 3,              message: 'El select debe tener al menos 3 opciones de país' },
        { type: 'element', selector: 'textarea',                              message: 'Debe haber un textarea "Sobre mí"' },
        { type: 'element', selector: 'input[type=checkbox]',                  message: 'Debe haber un checkbox de términos y condiciones' },
        { type: 'element', selector: 'button[type=submit], input[type=submit], button:not([type])', message: 'Debe haber un botón de envío' },
      ],
    },
  ],

  // ════════════════════════════════════════════════════
  //  CSS
  // ════════════════════════════════════════════════════
  css: [

    // ── CSS 1 · Easy ─────────────────────────────────
    {
      id: 1,
      title: 'Tarjeta de perfil',
      icon: '🎨',
      difficulty: 'easy',
      xp: 50,
      description: 'Estilizá una tarjeta de perfil de usuario.',
      instructions: 'Estilizá la tarjeta de perfil usando CSS:\n\n' +
        '• Fondo blanco con <strong>box-shadow</strong>\n' +
        '• <strong>border-radius</strong> en la tarjeta\n' +
        '• La imagen <strong>circular</strong> (border-radius: 50%)\n' +
        '• Un <strong>color de fondo</strong> para el body\n' +
        '• La tarjeta <strong>centrada</strong> (margin: auto)',
      starterHtml:
        '<!DOCTYPE html>\n' +
        '<html lang="es">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Tarjeta</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  <div class="card">\n' +
        '    <img class="avatar" src="https://i.pravatar.cc/100" alt="Avatar">\n' +
        '    <h2 class="nombre">Ana García</h2>\n' +
        '    <p class="rol">Desarrolladora Web 💻</p>\n' +
        '    <div class="stats">\n' +
        '      <div class="stat"><strong>42</strong><span>proyectos</span></div>\n' +
        '      <div class="stat"><strong>128</strong><span>seguidores</span></div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</body>\n' +
        '</html>',
      starterCss:
        '/* Estilizá la tarjeta de perfil acá */\n\n' +
        'body {\n' +
        '  /* color de fondo de la página */\n' +
        '}\n\n' +
        '.card {\n' +
        '  /* contenedor de la tarjeta */\n' +
        '}\n\n' +
        '.avatar {\n' +
        '  /* hacé la imagen circular */\n' +
        '}\n\n' +
        '.stats {\n' +
        '  /* alineá las estadísticas lado a lado */\n' +
        '}',
      checks: [
        { type: 'regex', pattern: 'border-radius',           message: 'Usá border-radius en la tarjeta o la imagen', hint: '.card { border-radius: 16px }' },
        { type: 'regex', pattern: 'box-shadow',              message: 'Agregá una sombra con box-shadow', hint: 'box-shadow: 0 4px 20px rgba(0,0,0,0.1)' },
        { type: 'regex', pattern: 'background',              message: 'Definí un color de fondo para el body o la tarjeta' },
        { type: 'regex', pattern: '50%',                     message: 'La imagen debe ser circular (border-radius: 50%)', hint: '.avatar { border-radius: 50% }' },
        { type: 'regex', pattern: 'margin[^:]*:[^;]*auto',   message: 'Centrá la tarjeta con margin: auto', hint: '.card { margin: 0 auto; }' },
      ],
    },

    // ── CSS 2 · Medium ───────────────────────────────
    {
      id: 2,
      title: 'Navbar con Flexbox',
      icon: '🧭',
      difficulty: 'medium',
      xp: 100,
      description: 'Construí una barra de navegación responsiva con Flexbox.',
      instructions: 'Estilizá la barra de navegación con:\n\n' +
        '• <strong>display: flex</strong> en .navbar\n' +
        '• <strong>justify-content: space-between</strong> para separar logo y links\n' +
        '• Un <strong>color de fondo</strong> para la navbar\n' +
        '• Links <strong>sin subrayado</strong> (text-decoration: none)\n' +
        '• <strong>Efecto :hover</strong> visible en los links\n' +
        '• <strong>padding</strong> para dar espacio interno',
      starterHtml:
        '<!DOCTYPE html>\n' +
        '<html lang="es">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Navbar</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  <nav class="navbar">\n' +
        '    <div class="logo">&lt;Code&gt;</div>\n' +
        '    <ul class="links">\n' +
        '      <li><a href="#">Inicio</a></li>\n' +
        '      <li><a href="#">Cursos</a></li>\n' +
        '      <li><a href="#">Proyectos</a></li>\n' +
        '      <li><a href="#" class="btn-cta">Empezar gratis</a></li>\n' +
        '    </ul>\n' +
        '  </nav>\n' +
        '  <main style="padding:40px;font-family:sans-serif">\n' +
        '    <h1>Contenido de la página</h1>\n' +
        '    <p>La navbar de arriba debe quedar bien estilizada.</p>\n' +
        '  </main>\n' +
        '</body>\n' +
        '</html>',
      starterCss:
        '/* Estilizá la navbar acá */\n\n' +
        '.navbar {\n' +
        '  /* Flexbox, fondo, padding */\n' +
        '}\n\n' +
        '.logo {\n' +
        '  /* Estilo del logo */\n' +
        '}\n\n' +
        '.links {\n' +
        '  /* Quitar bullets, alinear horizontal */\n' +
        '}\n\n' +
        '.links a {\n' +
        '  /* Color, sin subrayado */\n' +
        '}\n\n' +
        '.links a:hover {\n' +
        '  /* Efecto al pasar el mouse */\n' +
        '}\n\n' +
        '.btn-cta {\n' +
        '  /* Botón destacado */\n' +
        '}',
      checks: [
        { type: 'regex', pattern: 'display\\s*:\\s*flex',          message: 'Usá display: flex en .navbar', hint: '.navbar { display: flex; }' },
        { type: 'regex', pattern: 'space-between',                 message: 'Usá justify-content: space-between', hint: 'justify-content: space-between' },
        { type: 'regex', pattern: 'background',                    message: 'Definí un color de fondo para la navbar' },
        { type: 'regex', pattern: 'text-decoration\\s*:\\s*none',  message: 'Eliminá el subrayado con text-decoration: none' },
        { type: 'regex', pattern: ':hover',                        message: 'Agregá un efecto :hover en los links', hint: '.links a:hover { ... }' },
        { type: 'regex', pattern: 'padding',                       message: 'Agregá padding para dar espacio interno a la navbar' },
      ],
    },

    // ── CSS 3 · Hard ─────────────────────────────────
    {
      id: 3,
      title: 'Galería con Grid',
      icon: '🖼️',
      difficulty: 'hard',
      xp: 200,
      description: 'Creá una galería de fotos usando CSS Grid.',
      instructions: 'Estilizá la galería con CSS Grid:\n\n' +
        '• <strong>display: grid</strong> con al menos 3 columnas\n' +
        '• Un <strong>gap</strong> entre las imágenes\n' +
        '• Imágenes con <strong>width: 100%</strong> y <strong>object-fit: cover</strong>\n' +
        '• <strong>Efecto :hover</strong> con transform: scale()\n' +
        '• Color de fondo en el body\n' +
        '• Bonus: una foto con <strong>grid-column: span 2</strong>',
      starterHtml:
        '<!DOCTYPE html>\n' +
        '<html lang="es">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Galería</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  <h1>Mi galería</h1>\n' +
        '  <div class="galeria">\n' +
        '    <div class="foto"><img src="https://picsum.photos/400/300?random=1" alt="1"></div>\n' +
        '    <div class="foto"><img src="https://picsum.photos/400/300?random=2" alt="2"></div>\n' +
        '    <div class="foto"><img src="https://picsum.photos/400/300?random=3" alt="3"></div>\n' +
        '    <div class="foto"><img src="https://picsum.photos/400/300?random=4" alt="4"></div>\n' +
        '    <div class="foto"><img src="https://picsum.photos/400/300?random=5" alt="5"></div>\n' +
        '    <div class="foto"><img src="https://picsum.photos/400/300?random=6" alt="6"></div>\n' +
        '  </div>\n' +
        '</body>\n' +
        '</html>',
      starterCss:
        '/* Estilizá la galería con CSS Grid */\n\n' +
        'body {\n' +
        '  /* Fondo y padding */\n' +
        '}\n\n' +
        '.galeria {\n' +
        '  /* Grid de 3 columnas */\n' +
        '}\n\n' +
        '.foto img {\n' +
        '  /* Imágenes que ocupen todo el espacio */\n' +
        '}\n\n' +
        '.foto:hover img {\n' +
        '  /* Efecto hover */\n' +
        '}',
      checks: [
        { type: 'regex', pattern: 'display\\s*:\\s*grid',      message: 'Usá display: grid en .galeria' },
        { type: 'regex', pattern: 'grid-template-columns',     message: 'Definí las columnas con grid-template-columns', hint: 'grid-template-columns: repeat(3, 1fr)' },
        { type: 'regex', pattern: 'gap|grid-gap',              message: 'Agregá un gap entre las fotos', hint: 'gap: 12px' },
        { type: 'regex', pattern: 'object-fit\\s*:\\s*cover',  message: 'Usá object-fit: cover en las imágenes' },
        { type: 'regex', pattern: 'transform\\s*:\\s*scale',   message: 'Agregá un efecto hover con transform: scale()', hint: '.foto:hover img { transform: scale(1.05) }' },
        { type: 'regex', pattern: 'width\\s*:\\s*100%',        message: 'Las imágenes deben tener width: 100%' },
      ],
    },
  ],

  // ════════════════════════════════════════════════════
  //  JavaScript
  // ════════════════════════════════════════════════════
  js: [

    // ── JS 1 · Easy ──────────────────────────────────
    {
      id: 1,
      title: 'Contador interactivo',
      icon: '🔢',
      difficulty: 'easy',
      xp: 50,
      description: 'Programá un contador que responda a clicks.',
      instructions: 'Hacé funcionar el contador:\n\n' +
        '• El botón <strong>+</strong> debe sumar 1\n' +
        '• El botón <strong>−</strong> debe restar 1 (sin bajar de 0)\n' +
        '• El botón <strong>Resetear</strong> debe volver el contador a 0\n' +
        '• El número debe actualizarse en la pantalla',
      starterHtml:
        '<!DOCTYPE html>\n' +
        '<html lang="es">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Contador</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  <div id="contador">\n' +
        '    <h1 id="numero">0</h1>\n' +
        '    <div class="botones">\n' +
        '      <button id="btn-menos">−</button>\n' +
        '      <button id="btn-reset">Resetear</button>\n' +
        '      <button id="btn-mas">+</button>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</body>\n' +
        '</html>',
      starterCss:
        'body {\n' +
        '  display: flex; justify-content: center; align-items: center;\n' +
        '  min-height: 100vh; margin: 0;\n' +
        '  background: #f0f4f8; font-family: sans-serif;\n' +
        '}\n' +
        '#contador {\n' +
        '  text-align: center; background: white;\n' +
        '  border-radius: 16px; padding: 40px 60px;\n' +
        '  box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n' +
        '}\n' +
        '#numero { font-size: 5rem; margin: 0 0 24px; color: #7c3aed; }\n' +
        '.botones { display: flex; gap: 12px; justify-content: center; }\n' +
        'button {\n' +
        '  padding: 12px 24px; font-size: 1.2rem;\n' +
        '  border: 2px solid #7c3aed; border-radius: 8px;\n' +
        '  background: white; color: #7c3aed;\n' +
        '  cursor: pointer; transition: all 0.2s;\n' +
        '}\n' +
        'button:hover { background: #7c3aed; color: white; }',
      starterJs:
        '// Completá el código del contador\n\n' +
        'const numero   = document.getElementById(\'numero\');\n' +
        'const btnMas   = document.getElementById(\'btn-mas\');\n' +
        'const btnMenos = document.getElementById(\'btn-menos\');\n' +
        'const btnReset = document.getElementById(\'btn-reset\');\n\n' +
        'let cuenta = 0;\n\n' +
        '// Tu código acá:\n',
      checks: [
        { type: 'regex', pattern: 'addEventListener|onclick',                                     message: 'Usá addEventListener para detectar los clicks', hint: 'btnMas.addEventListener("click", function() { ... })' },
        { type: 'regex', pattern: 'cuenta\\s*\\+\\+|cuenta\\s*\\+=|cuenta\\s*=\\s*cuenta\\s*\\+', message: 'El botón + debe incrementar la cuenta', hint: 'cuenta++ o cuenta += 1' },
        { type: 'regex', pattern: 'cuenta\\s*--|cuenta\\s*-=|cuenta\\s*=\\s*cuenta\\s*-',         message: 'El botón − debe decrementar la cuenta', hint: 'cuenta-- o cuenta -= 1' },
        { type: 'regex', pattern: 'cuenta\\s*=\\s*0',                                             message: 'El botón Resetear debe volver la cuenta a 0', hint: 'cuenta = 0' },
        { type: 'regex', pattern: 'textContent|innerHTML|innerText',                              message: 'Actualizá el número en pantalla', hint: 'numero.textContent = cuenta' },
      ],
    },

    // ── JS 2 · Medium ────────────────────────────────
    {
      id: 2,
      title: 'Lista de tareas',
      icon: '✅',
      difficulty: 'medium',
      xp: 100,
      description: 'Construí un gestor de tareas completo.',
      instructions: 'Hacé funcionar la lista de tareas:\n\n' +
        '• <strong>Agregar tareas</strong> al presionar el botón o Enter\n' +
        '• <strong>Tachar tareas</strong> al clickearlas (clase "completada")\n' +
        '• <strong>Eliminar tareas</strong> con el botón ✕ de cada una',
      starterHtml:
        '<!DOCTYPE html>\n' +
        '<html lang="es">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Lista de tareas</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  <div id="app">\n' +
        '    <h1>📝 Mis tareas</h1>\n' +
        '    <div id="formulario">\n' +
        '      <input type="text" id="nueva-tarea" placeholder="Nueva tarea...">\n' +
        '      <button id="btn-agregar">Agregar</button>\n' +
        '    </div>\n' +
        '    <ul id="lista"></ul>\n' +
        '  </div>\n' +
        '</body>\n' +
        '</html>',
      starterCss:
        'body { font-family: sans-serif; background: #f8fafc; margin: 0; display: flex; justify-content: center; padding: 40px 20px; }\n' +
        '#app { background: white; border-radius: 16px; padding: 32px; width: 100%; max-width: 460px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }\n' +
        'h1 { margin: 0 0 24px; color: #1e293b; }\n' +
        '#formulario { display: flex; gap: 8px; margin-bottom: 20px; }\n' +
        '#nueva-tarea { flex: 1; padding: 10px 14px; border: 1.5px solid #e2e8f0; border-radius: 8px; font-size: 0.95rem; outline: none; }\n' +
        '#nueva-tarea:focus { border-color: #7c3aed; }\n' +
        '#btn-agregar { padding: 10px 18px; background: #7c3aed; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 0.9rem; }\n' +
        '#lista { list-style: none; padding: 0; margin: 0; }\n' +
        '#lista li { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 8px; cursor: pointer; margin-bottom: 6px; background: #f8fafc; border: 1px solid #e2e8f0; transition: all 0.2s; }\n' +
        '#lista li:hover { background: #f5f3ff; border-color: #ddd6fe; }\n' +
        '.texto-tarea { flex: 1; }\n' +
        '.completada .texto-tarea { text-decoration: line-through; color: #94a3b8; }\n' +
        '.btn-eliminar { background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 1rem; padding: 0 4px; }\n' +
        '.btn-eliminar:hover { color: #ef4444; }',
      starterJs:
        '// Completá la lógica de la lista de tareas\n\n' +
        'const input      = document.getElementById(\'nueva-tarea\');\n' +
        'const btnAgregar = document.getElementById(\'btn-agregar\');\n' +
        'const lista      = document.getElementById(\'lista\');\n\n' +
        'function agregarTarea() {\n' +
        '  const texto = input.value.trim();\n' +
        '  if (!texto) return;\n' +
        '  \n' +
        '  // Crear el elemento li con el texto y el botón eliminar\n' +
        '  \n' +
        '  input.value = \'\';\n' +
        '}\n\n' +
        '// Conectar el botón y la tecla Enter\n',
      checks: [
        { type: 'regex', pattern: 'createElement',                             message: 'Usá createElement para crear las tareas', hint: 'document.createElement("li")' },
        { type: 'regex', pattern: 'appendChild|append\\b',                     message: 'Agregá las tareas con appendChild o append', hint: 'lista.appendChild(li)' },
        { type: 'regex', pattern: 'classList',                                 message: 'Usá classList para marcar tareas como completadas', hint: 'li.classList.toggle("completada")' },
        { type: 'regex', pattern: '\\.remove\\(|removeChild',                  message: 'Implementá la eliminación de tareas', hint: 'li.remove()' },
        { type: 'regex', pattern: 'key.*Enter|Enter.*key|keydown|keypress',    message: 'Detectá la tecla Enter para agregar', hint: 'if (e.key === "Enter") agregarTarea()' },
      ],
    },

    // ── JS 3 · Hard ──────────────────────────────────
    {
      id: 3,
      title: 'Calculadora',
      icon: '🧮',
      difficulty: 'hard',
      xp: 200,
      description: 'Programá una calculadora completamente funcional.',
      instructions: 'Hacé funcionar la calculadora:\n\n' +
        '• <strong>Mostrar números</strong> al presionar los botones\n' +
        '• Soportar las <strong>4 operaciones</strong> (+, −, ×, ÷)\n' +
        '• Limpiar con el botón <strong>C</strong>\n' +
        '• Mostrar el <strong>resultado</strong> al presionar <strong>=</strong>\n' +
        '• Manejar correctamente la <strong>división por cero</strong>',
      starterHtml:
        '<!DOCTYPE html>\n' +
        '<html lang="es">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <title>Calculadora</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '  <div id="calculadora">\n' +
        '    <div id="display">0</div>\n' +
        '    <div id="botones">\n' +
        '      <button class="btn-clear btn-span2" onclick="limpiar()">C</button>\n' +
        '      <button onclick="presionar(\'/\')">/</button>\n' +
        '      <button onclick="presionar(\'*\')">×</button>\n' +
        '      <button onclick="presionar(\'7\')">7</button>\n' +
        '      <button onclick="presionar(\'8\')">8</button>\n' +
        '      <button onclick="presionar(\'9\')">9</button>\n' +
        '      <button onclick="presionar(\'-\')">−</button>\n' +
        '      <button onclick="presionar(\'4\')">4</button>\n' +
        '      <button onclick="presionar(\'5\')">5</button>\n' +
        '      <button onclick="presionar(\'6\')">6</button>\n' +
        '      <button onclick="presionar(\'+\')">+</button>\n' +
        '      <button onclick="presionar(\'1\')">1</button>\n' +
        '      <button onclick="presionar(\'2\')">2</button>\n' +
        '      <button onclick="presionar(\'3\')">3</button>\n' +
        '      <button class="btn-igual btn-tall" onclick="calcular()">=</button>\n' +
        '      <button class="btn-span2" onclick="presionar(\'0\')">0</button>\n' +
        '      <button onclick="presionar(\'.\')">.</button>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</body>\n' +
        '</html>',
      starterCss:
        'body { display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #1a1a2e; font-family: sans-serif; }\n' +
        '#calculadora { background: #0f0f1a; border-radius: 16px; padding: 20px; width: 280px; box-shadow: 0 8px 32px rgba(0,0,0,0.4); }\n' +
        '#display { background: #1e2035; color: white; font-size: 2rem; text-align: right; padding: 16px 20px; border-radius: 10px; margin-bottom: 16px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n' +
        '#botones { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }\n' +
        'button { padding: 18px; font-size: 1rem; border: none; border-radius: 10px; cursor: pointer; background: #2a2a4a; color: white; transition: all 0.15s; }\n' +
        'button:hover { background: #3a3a5a; }\n' +
        '.btn-clear { background: #ef4444; }\n' +
        '.btn-clear:hover { background: #dc2626; }\n' +
        '.btn-igual { background: #7c3aed; }\n' +
        '.btn-igual:hover { background: #6d28d9; }\n' +
        '.btn-span2 { grid-column: span 2; }\n' +
        '.btn-tall { grid-row: span 2; }',
      starterJs:
        '// Completá la lógica de la calculadora\n\n' +
        'const display = document.getElementById(\'display\');\n' +
        'let expresion = \'\';\n\n' +
        'function presionar(valor) {\n' +
        '  // Agregar el valor y mostrarlo en el display\n' +
        '  \n' +
        '}\n\n' +
        'function limpiar() {\n' +
        '  // Limpiar la expresión\n' +
        '  \n' +
        '}\n\n' +
        'function calcular() {\n' +
        '  // Calcular el resultado (usá try/catch)\n' +
        '  \n' +
        '}\n',
      checks: [
        { type: 'regex', pattern: 'expresion|expression',                   message: 'Usá una variable para guardar la expresión', hint: 'expresion += valor' },
        { type: 'regex', pattern: 'textContent|innerHTML|innerText',        message: 'Actualizá el display con el valor actual' },
        { type: 'regex', pattern: 'expresion\\s*=\\s*(\'\'|"")|limpiar',    message: 'Implementá la función limpiar()', hint: 'expresion = ""; display.textContent = "0"' },
        { type: 'regex', pattern: 'eval|Function|parseFloat|Number',        message: 'Calculá el resultado de la expresión', hint: 'Usá eval(expresion) dentro de un try/catch' },
        { type: 'regex', pattern: 'try|catch|Infinity|isNaN|Error',         message: 'Manejá errores como la división por cero', hint: 'try { ... } catch(e) { display.textContent = "Error" }' },
      ],
    },
  ],
};

// ── XP HELPERS ────────────────────────────────────────
function getXpKey(course) {
  return course + 'challenges_done';
}
function getCompletedChallenges(course) {
  return JSON.parse(localStorage.getItem(getXpKey(course)) || '[]');
}
function getTotalXp() {
  let total = 0;
  Object.keys(CHALLENGES).forEach(course => {
    const done = getCompletedChallenges(course);
    CHALLENGES[course].forEach(ch => {
      if (done.includes(ch.id)) total += ch.xp;
    });
  });
  return total;
}
function getXpLevel(xp) {
  if (xp >= 1000) return { label: 'Maestro',       icon: '🏆', next: null };
  if (xp >= 600)  return { label: 'Experto',        icon: '🚀', next: 1000 };
  if (xp >= 300)  return { label: 'Desarrollador',  icon: '💻', next: 600  };
  if (xp >= 100)  return { label: 'Explorador',     icon: '🔭', next: 300  };
                  return { label: 'Principiante',   icon: '🌱', next: 100  };
}
