// Quiz del curso de JavaScript — Aprende a Programar
// Genera un Google Form con autocorrección.
// Usar en: script.google.com → Nuevo proyecto → pegar → ejecutar crearQuizJS()

function crearQuizJS() {
  var form = FormApp.create('Quiz — Curso de JavaScript');
  form.setIsQuiz(true);
  form.setDescription('Preguntas de comprensión del curso de JavaScript. Cada lección tiene 2 preguntas.');

  // ── Datos del alumno ──
  form.addTextItem().setTitle('Nombre').setRequired(true);
  form.addTextItem().setTitle('Apellido').setRequired(true);
  form.addMultipleChoiceItem().setTitle('Institución').setRequired(true).setChoiceValues(['Las Piedras', 'La Paz']);
  form.addTextItem().setTitle('Grupo').setRequired(true);

  // ── Lección 1: DOM y primeros pasos ──
  form.addPageBreakItem().setTitle('Lección 1: DOM y primeros pasos');

  var q = form.addMultipleChoiceItem().setTitle('¿Cómo se accede a un elemento HTML con id="nombre" desde JavaScript?').setRequired(true);
  q.setChoices([
    q.createChoice('getElement("nombre")', false),
    q.createChoice('document.getElementById("nombre")', true),
    q.createChoice('getElementById("nombre")', false),
    q.createChoice('document.getElement("nombre")', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('document.getElementById("nombre") devuelve el elemento con ese id.').build());

  q = form.addMultipleChoiceItem().setTitle('En JavaScript, ¿cómo se escribe la propiedad CSS background-color?').setRequired(true);
  q.setChoices([
    q.createChoice('background-color', false),
    q.createChoice('background_color', false),
    q.createChoice('backgroundColor', true),
    q.createChoice('"background-color"', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('En JavaScript las propiedades CSS se escriben en camelCase: background-color → backgroundColor.').build());

  // ── Lección 2: Variables y template literals ──
  form.addPageBreakItem().setTitle('Lección 2: Variables y template literals');

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la diferencia entre let y const?').setRequired(true);
  q.setChoices([
    q.createChoice('No hay diferencia', false),
    q.createChoice('let puede cambiar de valor; const no puede reasignarse', true),
    q.createChoice('const es más rápida que let', false),
    q.createChoice('let solo funciona con strings', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('let declara variables que pueden cambiar. const declara constantes.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué resultado da este código? let x = 5; `El doble es ${x * 2}`').setRequired(true);
  q.setChoices([
    q.createChoice('El doble es ${x * 2}', false),
    q.createChoice('El doble es x * 2', false),
    q.createChoice('El doble es 10', true),
    q.createChoice('Error de sintaxis', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Los template literals evalúan ${expresión} y reemplazan con el resultado.').build());

  // ── Lección 3: Condicionales ──
  form.addPageBreakItem().setTitle('Lección 3: Condicionales (if / else)');

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la diferencia entre == y ===?').setRequired(true);
  q.setChoices([
    q.createChoice('Son exactamente iguales', false),
    q.createChoice('=== compara valor Y tipo de dato; == solo compara el valor', true),
    q.createChoice('== es más moderno', false),
    q.createChoice('=== solo funciona con números', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('=== (estricto) compara valor Y tipo. 5 == "5" es true pero 5 === "5" es false.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Qué pasa si la condición del if es false y no hay else?').setRequired(true);
  q.setChoices([
    q.createChoice('Se produce un error en el código', false),
    q.createChoice('El bloque if se ejecuta igual', false),
    q.createChoice('El bloque if se salta y el programa sigue', true),
    q.createChoice('El programa se detiene completamente', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Si la condición es false y no hay else, se salta el bloque if y el código continúa.').build());

  // ── Lección 4: Funciones ──
  form.addPageBreakItem().setTitle('Lección 4: Funciones');

  q = form.addMultipleChoiceItem().setTitle('¿Qué hace la palabra clave return dentro de una función?').setRequired(true);
  q.setChoices([
    q.createChoice('Termina el programa', false),
    q.createChoice('Devuelve un valor al código que llamó la función', true),
    q.createChoice('Imprime el valor en pantalla', false),
    q.createChoice('Define el nombre de la función', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('return devuelve el valor al lugar donde se llamó la función.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Cuántas veces podés llamar a una misma función?').setRequired(true);
  q.setChoices([
    q.createChoice('Solo una vez', false),
    q.createChoice('Máximo 10 veces', false),
    q.createChoice('Cuantas veces quieras', true),
    q.createChoice('Depende del tamaño del archivo', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Esa es la ventaja de las funciones: reutilizar código.').build());

  // ── Lección 5: querySelector y DOM avanzado ──
  form.addPageBreakItem().setTitle('Lección 5: querySelector y DOM avanzado');

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la diferencia entre querySelector y querySelectorAll?').setRequired(true);
  q.setChoices([
    q.createChoice('No hay diferencia', false),
    q.createChoice('querySelector devuelve el primer elemento; querySelectorAll devuelve todos', true),
    q.createChoice('querySelectorAll solo funciona con ids', false),
    q.createChoice('querySelector solo funciona con clases', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('querySelector devuelve el PRIMER elemento. querySelectorAll devuelve una lista con TODOS.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Cuál es la diferencia entre textContent e innerHTML?').setRequired(true);
  q.setChoices([
    q.createChoice('Son exactamente iguales', false),
    q.createChoice('textContent muestra texto plano; innerHTML renderiza etiquetas HTML', true),
    q.createChoice('innerHTML es más lento siempre', false),
    q.createChoice('textContent agrega el texto al final sin borrar lo anterior', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Con innerHTML las etiquetas se renderizan. Con textContent se muestran como texto plano.').build());

  // ── Lección 6: Eventos ──
  form.addPageBreakItem().setTitle('Lección 6: Eventos (addEventListener)');

  q = form.addMultipleChoiceItem().setTitle('¿Qué hace addEventListener?').setRequired(true);
  q.setChoices([
    q.createChoice('Agrega un nuevo elemento al HTML', false),
    q.createChoice('Registra una función que se ejecuta cuando ocurre un evento específico', true),
    q.createChoice('Verifica si hay errores en el código', false),
    q.createChoice('Conecta la página con el servidor', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('addEventListener registra un "escuchador": espera el evento y ejecuta la función.').build());

  q = form.addMultipleChoiceItem().setTitle('¿Por qué declaramos let clics = 0 FUERA del addEventListener?').setRequired(true);
  q.setChoices([
    q.createChoice('Por un error de sintaxis', false),
    q.createChoice('Para que la variable se reinicie a 0 en cada clic', false),
    q.createChoice('Para que la variable persista entre un clic y otro', true),
    q.createChoice('No importa dónde se declare', false)
  ]);
  q.setFeedbackForCorrect(FormApp.createFeedback().setText('Declarada fuera del listener, la variable mantiene su valor entre llamadas.').build());

  Logger.log('✅ Formulario creado: ' + form.getEditUrl());
}
