// Quiz del curso de CSS — Aprende a Programar
// Genera un Google Form con autocorrección.
// Usar en: script.google.com → Nuevo proyecto → pegar → ejecutar crearQuizCSS()

function crearQuizCSS() {
  var form = FormApp.create('Quiz — Curso de CSS');
  form.setIsQuiz(true);
  form.setDescription('Preguntas de comprensión del curso de CSS. Cada lección tiene 2 preguntas.');

  // ── Lección 1: Introducción a CSS ──
  form.addPageBreakItem().setTitle('Lección 1: Introducción a CSS');

  var q = form.addMultipleChoiceItem().setTitle('¿Qué hace CSS en una página web?').setRequired(true);
  q.setChoices([
    q.createChoice('Define la estructura (títulos, párrafos, listas)', false),
    q.createChoice('Define cómo se ve (colores, tamaños, posición)', true),
    q.createChoice('Maneja la lógica y los clics', false),
    q.createChoice('Conecta la página con la base de datos', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('HTML define la estructura, CSS define el diseño visual.').build());

  q = form.addMultipleChoiceItem().setTitle('En CSS, ¿qué es el "selector"?').setRequired(true);
  q.setChoices([
    q.createChoice('El valor que se le asigna a una propiedad', false),
    q.createChoice('La parte que indica a qué elemento HTML se aplica el estilo', true),
    q.createChoice('El nombre del archivo CSS', false),
    q.createChoice('El bloque de llaves { }', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('El selector indica a qué elementos se les aplica el estilo.').build());

  // ── Lección 2: Clases e IDs ──
  form.addPageBreakItem().setTitle('Lección 2: Clases e IDs');

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la sintaxis correcta para un selector de clase?').setRequired(true);
  q.setChoices([
    q.createChoice('.mi-clase { }', true),
    q.createChoice('#mi-clase { }', false),
    q.createChoice('mi-clase { }', false),
    q.createChoice('@mi-clase { }', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Los selectores de clase empiezan con punto (.).').build());

  q = form.addMultipleChoiceItem().setTitle('Tenés <p class="nota"> y <h2 class="nota">. Si escribís .nota { color: red; }, ¿qué se colorea?').setRequired(true);
  q.setChoices([
    q.createChoice('Solo el párrafo', false),
    q.createChoice('Solo el h2', false),
    q.createChoice('Los dos', true),
    q.createChoice('Ninguno', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Una clase colorea TODOS los elementos con esa clase, sin importar el tipo de etiqueta.').build());

  // ── Lección 3: Colores ──
  form.addPageBreakItem().setTitle('Lección 3: Colores en CSS');

  q = form.addMultipleChoiceItem().setTitle('¿Cuál de estos es un color hexadecimal válido?').setRequired(true);
  q.setChoices([
    q.createChoice('rgb(255, 0, 0)', false),
    q.createChoice('#ff6b6b', true),
    q.createChoice('hex(255, 107, 107)', false),
    q.createChoice('color(200, 50, 80)', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Los colores hexadecimales empiezan con # seguido de 6 caracteres (0-9 y a-f).').build());

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la diferencia entre color y background-color?').setRequired(true);
  q.setChoices([
    q.createChoice('No hay diferencia', false),
    q.createChoice('color cambia el texto, background-color cambia el fondo', true),
    q.createChoice('background-color cambia el fondo de toda la página siempre', false),
    q.createChoice('color solo funciona en h1', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('color aplica al texto. background-color aplica al fondo.').build());

  // ── Lección 4: Tipografía ──
  form.addPageBreakItem().setTitle('Lección 4: Tipografía');

  q = form.addMultipleChoiceItem().setTitle('¿Qué hace text-align: center?').setRequired(true);
  q.setChoices([
    q.createChoice('Mueve el elemento al centro de la pantalla', false),
    q.createChoice('Centra el texto dentro de su elemento', true),
    q.createChoice('Agranda el texto al doble', false),
    q.createChoice('Solo funciona en imágenes', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('text-align centra el texto DENTRO del elemento, no mueve el elemento en sí.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la diferencia entre font-weight: bold y font-weight: 700?').setRequired(true);
  q.setChoices([
    q.createChoice('Son completamente distintos', false),
    q.createChoice('Son lo mismo: 700 = bold, 400 = normal', true),
    q.createChoice('bold es más grueso que 700', false),
    q.createChoice('700 solo funciona en Google Fonts', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('400 = normal, 700 = bold. "bold" y "700" producen el mismo resultado.').build());

  // ── Lección 5: Box Model ──
  form.addPageBreakItem().setTitle('Lección 5: Box Model');

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la diferencia entre padding y margin?').setRequired(true);
  q.setChoices([
    q.createChoice('No hay diferencia', false),
    q.createChoice('padding es espacio adentro del borde; margin es espacio afuera', true),
    q.createChoice('margin es adentro; padding es afuera', false),
    q.createChoice('padding solo funciona con border', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Padding = espacio entre contenido y borde. Margin = espacio entre el elemento y sus vecinos.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué hace border-radius: 10px?').setRequired(true);
  q.setChoices([
    q.createChoice('Aumenta el grosor del borde a 10px', false),
    q.createChoice('Redondea las esquinas del elemento', true),
    q.createChoice('Gira el elemento 10 grados', false),
    q.createChoice('Agrega 10px de padding alrededor', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('border-radius redondea las esquinas. Con 50% se convierte en un círculo.').build());

  // ── Lección 6: Flexbox ──
  form.addPageBreakItem().setTitle('Lección 6: Flexbox');

  q = form.addMultipleChoiceItem().setTitle('¿En qué elemento se pone display: flex?').setRequired(true);
  q.setChoices([
    q.createChoice('En cada elemento hijo', false),
    q.createChoice('En el body siempre', false),
    q.createChoice('En el contenedor padre', true),
    q.createChoice('En el html', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('display: flex se pone en el contenedor. Los hijos se alinean automáticamente.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué hace justify-content: space-between?').setRequired(true);
  q.setChoices([
    q.createChoice('Centra todos los elementos', false),
    q.createChoice('Distribuye con el máximo espacio posible entre ellos', true),
    q.createChoice('Pone todos al final', false),
    q.createChoice('Agrega espacio dentro de cada elemento', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('space-between empuja el primero al inicio y el último al final, con espacio igual entre los del medio.').build());

  Logger.log('✅ Formulario creado: ' + form.getEditUrl());
}
