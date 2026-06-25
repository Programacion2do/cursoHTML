// Quiz del curso de HTML — Aprende a Programar
// Genera un Google Form con autocorrección.
// Usar en: script.google.com → Nuevo proyecto → pegar → ejecutar crearQuizHTML()

function crearQuizHTML() {
  var form = FormApp.create('Quiz — Curso de HTML');
  form.setIsQuiz(true);
  form.setDescription('Preguntas de comprensión del curso de HTML. Cada lección tiene 2 preguntas.');

  // ── Datos del alumno ──
  form.addTextItem().setTitle('Nombre').setRequired(true);
  form.addTextItem().setTitle('Apellido').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Institución').setRequired(true).setChoiceValues(['Las Piedras', 'La Paz']);
  form.addTextItem().setTitle('Grupo').setRequired(true);

  // ── Lección 1: La estructura básica ──
  form.addPageBreakItem().setTitle('Lección 1: La estructura básica');

  var q = form.addMultipleChoiceItem().setTitle('¿Qué hace la declaración <!DOCTYPE html>?').setRequired(true);
  q.setChoices([
    q.createChoice('Aplica estilos a la página', false),
    q.createChoice('Le dice al navegador que el documento es HTML5', true),
    q.createChoice('Define el título de la página', false),
    q.createChoice('Crea el cuerpo del documento', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('<!DOCTYPE html> le avisa al navegador que el documento está escrito en HTML5.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Dónde va el contenido visible de la página (texto, imágenes, etc.)?').setRequired(true);
  q.setChoices([
    q.createChoice('Dentro de <head>', false),
    q.createChoice('Dentro de <title>', false),
    q.createChoice('Dentro de <body>', true),
    q.createChoice('Dentro de <html>', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('El <body> contiene todo lo que el usuario puede ver en pantalla.').build());

  // ── Lección 2: Títulos y párrafos ──
  form.addPageBreakItem().setTitle('Lección 2: Títulos y párrafos');

  q = form.addMultipleChoiceItem().setTitle('¿Cuántos <h1> se recomienda usar por página?').setRequired(true);
  q.setChoices([
    q.createChoice('Los que necesités', false),
    q.createChoice('Solo uno', true),
    q.createChoice('Dos como máximo', false),
    q.createChoice('Ninguno', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Solo un <h1> por página — es el título principal.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Cuál de estos títulos tiene menor jerarquía (es el más pequeño)?').setRequired(true);
  q.setChoices([
    q.createChoice('<h1>', false),
    q.createChoice('<h3>', false),
    q.createChoice('<h4>', false),
    q.createChoice('<h6>', true)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('HTML tiene 6 niveles: <h1> es el más grande, <h6> el más pequeño.').build());

  // ── Lección 3: Saltos de línea y espacios ──
  form.addPageBreakItem().setTitle('Lección 3: Saltos de línea y espacios');

  q = form.addMultipleChoiceItem().setTitle('¿Qué etiqueta inserta un salto de línea DENTRO de un párrafo?').setRequired(true);
  q.setChoices([
    q.createChoice('<p>', false),
    q.createChoice('<break>', false),
    q.createChoice('<br>', true),
    q.createChoice('<lb>', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('<br> es una etiqueta vacía (sin cierre) que inserta un salto de línea.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué pasa si escribís diez espacios seguidos en el código HTML?').setRequired(true);
  q.setChoices([
    q.createChoice('Se muestran todos en la página', false),
    q.createChoice('El navegador los muestra como uno solo', true),
    q.createChoice('Genera un error de sintaxis', false),
    q.createChoice('La página no carga', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('El navegador colapsa múltiples espacios en uno solo.').build());

  // ── Lección 4: Listas ──
  form.addPageBreakItem().setTitle('Lección 4: Listas');

  q = form.addMultipleChoiceItem().setTitle('¿Para qué sirve la etiqueta <ol>?').setRequired(true);
  q.setChoices([
    q.createChoice('Para listas sin orden (bullets)', false),
    q.createChoice('Para crear links', false),
    q.createChoice('Para listas ordenadas (numeradas)', true),
    q.createChoice('Para listas de imágenes', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('<ol> (ordered list) numera los elementos automáticamente.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué etiqueta va DENTRO de <ul> y <ol> para cada elemento?').setRequired(true);
  q.setChoices([
    q.createChoice('<item>', false),
    q.createChoice('<list>', false),
    q.createChoice('<element>', false),
    q.createChoice('<li>', true)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('<li> (list item) es cada elemento de la lista.').build());

  // ── Lección 5: Links ──
  form.addPageBreakItem().setTitle('Lección 5: Links');

  q = form.addMultipleChoiceItem().setTitle('¿Qué atributo de <a> indica a dónde va el link?').setRequired(true);
  q.setChoices([
    q.createChoice('src', false),
    q.createChoice('link', false),
    q.createChoice('href', true),
    q.createChoice('url', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('href (hypertext reference) contiene la URL de destino.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué hace target="_blank" en un link?').setRequired(true);
  q.setChoices([
    q.createChoice('Lo hace invisible', false),
    q.createChoice('Lo bloquea', false),
    q.createChoice('Lo abre en la misma pestaña', false),
    q.createChoice('Lo abre en una nueva pestaña', true)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('target="_blank" abre el link en una nueva pestaña.').build());

  // ── Lección 6: Imágenes ──
  form.addPageBreakItem().setTitle('Lección 6: Imágenes');

  q = form.addMultipleChoiceItem().setTitle('¿Para qué sirve el atributo alt en las imágenes?').setRequired(true);
  q.setChoices([
    q.createChoice('Define el tamaño de la imagen', false),
    q.createChoice('Muestra texto si la imagen no carga y mejora la accesibilidad', true),
    q.createChoice('Es el link de la imagen', false),
    q.createChoice('No tiene ninguna función importante', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('alt es fundamental: aparece si la imagen falla y lo leen los lectores de pantalla.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Cuál de estos códigos de imagen es correcto?').setRequired(true);
  q.setChoices([
    q.createChoice('<img href="foto.jpg" alt="mi foto">', false),
    q.createChoice('<img src="foto.jpg" alt="mi foto">', true),
    q.createChoice('<image src="foto.jpg">', false),
    q.createChoice('<img src="foto.jpg"></img>', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('<img> usa src (no href) para la URL de la imagen y es una etiqueta vacía.').build());

  // ── Lección 7: Formato de texto ──
  form.addPageBreakItem().setTitle('Lección 7: Formato de texto');

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la diferencia entre <strong> y <b>?').setRequired(true);
  q.setChoices([
    q.createChoice('No hay diferencia, son iguales', false),
    q.createChoice('<strong> indica importancia semántica, <b> es solo visual', true),
    q.createChoice('<b> es más moderno y recomendado', false),
    q.createChoice('<strong> hace el texto más grande', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Ambos muestran negrita, pero <strong> indica que el contenido es importante.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué etiqueta resalta texto como con un marcador fluorescente?').setRequired(true);
  q.setChoices([
    q.createChoice('<highlight>', false),
    q.createChoice('<yellow>', false),
    q.createChoice('<mark>', true),
    q.createChoice('<em>', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('<mark> resalta el texto en amarillo, como un marcador.').build());

  // ── Lección 8: Tablas ──
  form.addPageBreakItem().setTitle('Lección 8: Tablas');

  q = form.addMultipleChoiceItem().setTitle('¿Qué etiqueta define una celda de ENCABEZADO en una tabla?').setRequired(true);
  q.setChoices([
    q.createChoice('<td>', false),
    q.createChoice('<th>', true),
    q.createChoice('<head>', false),
    q.createChoice('<header>', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('<th> (table header) crea celdas de encabezado — en negrita y centradas.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué etiqueta representa una FILA completa en una tabla?').setRequired(true);
  q.setChoices([
    q.createChoice('<row>', false),
    q.createChoice('<line>', false),
    q.createChoice('<tr>', true),
    q.createChoice('<td>', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('<tr> (table row) define una fila completa.').build());

  // ── Lección 9: Formularios ──
  form.addPageBreakItem().setTitle('Lección 9: Formularios');

  q = form.addMultipleChoiceItem().setTitle('¿Qué tipo de <input> se usa para campos de contraseña?').setRequired(true);
  q.setChoices([
    q.createChoice('type="secret"', false),
    q.createChoice('type="hidden"', false),
    q.createChoice('type="password"', true),
    q.createChoice('type="text"', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('type="password" oculta lo que el usuario escribe.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué etiqueta crea un área de texto multilínea?').setRequired(true);
  q.setChoices([
    q.createChoice('<input type="textarea">', false),
    q.createChoice('<text>', false),
    q.createChoice('<textarea>', true),
    q.createChoice('<input type="multiline">', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('<textarea> crea un campo de texto multilínea.').build());

  // ── Lección 10: Div y semántica ──
  form.addPageBreakItem().setTitle('Lección 10: Div y estructura semántica');

  q = form.addMultipleChoiceItem().setTitle('¿Qué muestra un <div> vacío en la pantalla?').setRequired(true);
  q.setChoices([
    q.createChoice('Un recuadro con borde gris', false),
    q.createChoice('Nada — es completamente invisible', true),
    q.createChoice('Un espacio en blanco del tamaño de la pantalla', false),
    q.createChoice('Un mensaje de error', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Un <div> sin estilos CSS es completamente invisible. Su función es organizar.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Cuándo conviene usar <div> en vez de <section>?').setRequired(true);
  q.setChoices([
    q.createChoice('Siempre, div reemplaza a todos', false),
    q.createChoice('Cuando el bloque no tiene un significado especial y solo agrupa elementos', true),
    q.createChoice('Div es para imágenes, section para texto', false),
    q.createChoice('Nunca, section es siempre mejor', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Usá <section> para secciones reales del contenido. <div> para agrupaciones genéricas.').build());

  // ── Lección 11: Select y option ──
  form.addPageBreakItem().setTitle('Lección 11: Select y menús desplegables');

  q = form.addMultipleChoiceItem().setTitle('¿Qué valor recibe el servidor cuando el usuario elige una <option>?').setRequired(true);
  q.setChoices([
    q.createChoice('El texto visible entre las etiquetas option', false),
    q.createChoice('El atributo value de la option elegida', true),
    q.createChoice('El atributo name del select', false),
    q.createChoice('El id del select', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('El servidor recibe el value — no el texto visible.').build());

  q = form.addMultipleChoiceItem().setTitle('¿En qué etiqueta va el atributo name del menú desplegable?').setRequired(true);
  q.setChoices([
    q.createChoice('En cada <option> individualmente', false),
    q.createChoice('En el <label>', false),
    q.createChoice('En el <select>', true),
    q.createChoice('En el <form>', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('El name va en el <select>, no en las opciones.').build());

  // ── Lección 12: Radio y checkbox ──
  form.addPageBreakItem().setTitle('Lección 12: Radio buttons y checkboxes');

  q = form.addMultipleChoiceItem().setTitle('¿Por qué los type="radio" de un mismo grupo deben tener el mismo name?').setRequired(true);
  q.setChoices([
    q.createChoice('Para que tengan el mismo color', false),
    q.createChoice('Para que el navegador sepa que son del mismo grupo y solo permita elegir uno', true),
    q.createChoice('Para que el label funcione correctamente', false),
    q.createChoice('Es solo una convención, no es obligatorio', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('El name agrupa los radio buttons. Solo se puede marcar uno por grupo.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la principal diferencia entre radio y checkbox?').setRequired(true);
  q.setChoices([
    q.createChoice('Radio es circular, checkbox es cuadrado', false),
    q.createChoice('Radio permite elegir solo una opción; checkbox permite elegir varias', true),
    q.createChoice('Checkbox solo funciona en formularios con method="post"', false),
    q.createChoice('No hay diferencia práctica', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Radio = elegí uno. Checkbox = elegí varios.').build());

  // ── Lección 13: Envío de formularios ──
  form.addPageBreakItem().setTitle('Lección 13: Envío de formularios (GET vs POST)');

  q = form.addMultipleChoiceItem().setTitle('¿Qué método deberías usar para enviar una contraseña en un formulario?').setRequired(true);
  q.setChoices([
    q.createChoice('get, es más rápido', false),
    q.createChoice('post, los datos van ocultos y no aparecen en la URL', true),
    q.createChoice('Cualquiera, no hay diferencia de seguridad', false),
    q.createChoice('get, porque es el método predeterminado', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Con post los datos viajan ocultos. Con get la contraseña aparecería en la URL.').build());

  q = form.addMultipleChoiceItem().setTitle('En Java, ¿cómo leés el valor de un input con name="email"?').setRequired(true);
  q.setChoices([
    q.createChoice('request.getValue("email")', false),
    q.createChoice('request.getInput("email")', false),
    q.createChoice('request.getParameter("email")', true),
    q.createChoice('request.getName("email")', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('request.getParameter("email") lee el campo cuyo name en HTML es "email".').build());

  Logger.log('✅ Formulario creado: ' + form.getEditUrl());
}
