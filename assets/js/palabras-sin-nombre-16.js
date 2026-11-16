/* ============================================================
   SEMANA 16 · Diez huecos que alguien ya bautizó
   ------------------------------------------------------------
   Diez palabras inventadas por John Koenig en
   «The Dictionary of Obscure Sorrows» (Simon & Schuster, 2021)
   para sentimientos que no tenían nombre. Cinco se explican con
   una ilustración y cinco con un texto corto.

   Las palabras y sus piezas son de Koenig. Las definiciones y
   los textos están escritos para este curso: no son traducción
   del libro. Las ilustraciones se generaron con Gemini en el
   formato de Sketchplanations (una idea, un dibujo) y sus
   rótulos, en español, se revisaron letra por letra.

   Uso:
     SIN16.FICHAS                    las diez fichas
     <div data-galeria16></div>      se llena solo: la galería
     <div data-sin16="sonder"></div> se llena solo: una ficha
   ============================================================ */
(function () {
  if (window.SIN16) return;

  var yo = document.currentScript && document.currentScript.src ? document.currentScript.src : '';
  var IMG = yo ? yo.replace(/js\/palabras-sin-nombre-16\.js.*$/, 'img/semana-16/') : '../assets/img/semana-16/';

  var FICHAS = [
    { id: 'sonder', palabra: 'sonder', dice: 'sónder', tipo: 'img', img: 'sonder.jpg',
      alt: 'Una combi cortada para ver adentro, con cinco pasajeros; sobre cada uno, un globo de pensamiento distinto: una casa, una milpa, un hospital, un baile, un balón. Rótulos: «cada quien trae su propia película» y, con una flecha hacia quien trae la mochila, «y tú sales de extra».',
      pregunta: 'Mira a quien trae la mochila. ¿De qué se acaba de dar cuenta?',
      def: 'Caer en la cuenta de que cada desconocido que pasa lleva una vida tan llena y tan enredada como la tuya, y que en esa vida tú apenas eres un extra.',
      piezas: 'El francés <b>sonder</b>, «sondear»: echar la sonda para medir qué tan hondo está el fondo.',
      familia: 'sonda, sondear, insondable',
      nace: 'Préstamo con cambio de sentido',
      nota: 'Es la más famosa del libro y la mejor puerta: pregunta quién ha sentido eso en la combi o en la terminal. Koenig tomó un verbo francés y le estrenó sentido: préstamo y cambio de sentido a la vez, como loguearse.' },
    { id: 'kenopsia', palabra: 'kenopsia', dice: 'kenopsia', tipo: 'img', img: 'kenopsia.jpg',
      alt: 'El mismo salón en dos cuadros. A la izquierda, «lunes, 8 de la mañana»: lleno de estudiantes, ruido y un balón volando. A la derecha, «vacaciones»: vacío, con una mochila olvidada y el balón quieto. Abajo: «mismo salón, pero se siente raro».',
      pregunta: 'Este salón no tiene nada raro. Entonces, ¿por qué se siente raro?',
      def: 'El aire extraño de un lugar que siempre está lleno de gente y de ruido, cuando lo encuentras vacío y callado.',
      piezas: 'El griego <b>kenós</b>, «vacío», + <b>-opsía</b>, «vista».',
      familia: 'cenotafio («sepulcro vacío»), autopsia, biopsia, sinopsis',
      nace: 'Composición culta, griega con griega',
      nota: 'La de manual: dos piezas griegas bien pegadas. Que encuentren la pieza en cenotafio y en autopsia. Pregunta por la escuela en vacaciones, la cancha un lunes, la plaza después de la fiesta.' },
    { id: 'chrysalism', palabra: 'chrysalism', dice: 'crisalismo', tipo: 'img', img: 'chrysalism.jpg',
      alt: 'Una casita con techo de lámina, cortada para ver adentro. Afuera, nubes negras, lluvia y un rayo: «afuera, tormenta». Adentro, alguien envuelto en una cobija, con una taza caliente, un foco prendido y un perro dormido: «adentro, a gusto». Abajo: «que llueva todo lo que quiera».',
      pregunta: 'Afuera se está cayendo el cielo. ¿Qué se siente adentro?',
      def: 'La paz de estar bajo techo, seco y a gusto, mientras afuera cae la tormenta.',
      piezas: 'El latín <b>chrysalis</b>, «crisálida», que viene del griego <b>chrysós</b>, «oro», + <b>-ismo</b>.',
      familia: 'crisálida: el capullo donde la oruga espera, quieta, a que pase todo',
      nace: 'Derivación',
      nota: 'La única alegre del mazo de dibujos, y la más serrana: la lluvia en la lámina. En español se dejaría decir crisalismo. Pregunta por qué una crisálida: quien lo explique ya defendió una palabra.' },
    { id: 'opia', palabra: 'opia', dice: 'opia', tipo: 'img', img: 'opia.jpg',
      alt: 'Dos caras de perfil, sonrojadas y nerviosas, se miran de frente unidas por una línea punteada. Un cronómetro: «1, 2, 3 segundos». Una lupa sobre un ojo con una figurita reflejada: «tú, en su pupila». Abajo: «¿quién está viendo a quién?».',
      pregunta: 'Cuenta tres segundos mirando a alguien a los ojos. ¿Qué pasa en el segundo tres?',
      def: 'La intensidad incómoda de sostenerle la mirada a alguien: sientes que te asomas a la otra persona y, al mismo tiempo, que te están viendo por dentro.',
      piezas: 'El griego <b>ópion</b>, «opio», + <b>-opía</b>, «de los ojos», como en miopía.',
      familia: 'miopía, opio y pupila, del latín <i>pupilla</i>, «niña»',
      nace: 'Composición con piezas griegas',
      nota: 'Si el grupo se presta, que lo prueben por parejas tres segundos: la risa nerviosa es la definición. Dato para soltar: pupila viene del latín pupilla, «niña», y se suele explicar por la figurita que ves reflejada en el ojo del otro.' },
    { id: 'morii', palabra: 'morii', dice: 'mori', tipo: 'img', img: 'morii.jpg',
      alt: 'Cinco monitos de espaldas frente a un atardecer. Cuatro levantan el celular: «4 lo graban». El de en medio, pintado de rosa, no trae celular: «1 lo ve». Abajo: «se va en dos minutos».',
      pregunta: '¿Qué les pasa a los cuatro de los celulares? ¿Y al de rosa?',
      def: 'Las ganas de atrapar un momento que se está yendo: sacar el celular antes que mirar.',
      piezas: 'El latín <b>memento mori</b>, «recuerda que morirás», + el japonés <b>torii</b>, la puerta que marca la entrada a un lugar sagrado.',
      familia: 'memento mori: la locución de la semana 14, la de Porcio',
      nace: 'Cruce de dos palabras, latín con japonés',
      nota: 'Regresa a la semana 14: memento mori ya lo conocen. Aquí la mezcla no es griego con latín sino latín con japonés, y la palabra vive igual. Pregunta cuántas fotos de atardeceres traen en el celular y cuántas han vuelto a ver.' },

    { id: 'jouska', palabra: 'jouska', dice: 'yuska', tipo: 'txt',
      texto: 'En la regadera ya se lo dijiste todo. Empezaste tranquila, con el argumento perfecto. Ella se quedó callada, luego te dio la razón y hasta te pidió perdón. Ensayaste dos finales. Después saliste, la viste en la entrada de la escuela y lo único que te salió fue: «¿Qué onda? ¿Sí hiciste la tarea?».',
      pregunta: '¿Qué nombre le pondrías a eso que pasó en la regadera?',
      def: 'La conversación que ensayas en tu cabeza y que nunca ocurre: el reclamo perfecto, la respuesta que debiste dar.',
      piezas: 'El francés <b>jusqu’à</b>, «hasta», escrito como suena.',
      familia: 'ninguna: llegó de fuera y sin parientes',
      nace: 'Préstamo adaptado',
      nota: 'Lee el texto en voz alta y calla tres segundos. Casi todos tienen una conversación así pendiente: no pidas que la cuenten, solo que levanten la mano. Es préstamo adaptado, como pódcast: se escribe como se oye.' },
    { id: 'enouement', palabra: 'énouement', dice: 'enumán', tipo: 'txt',
      texto: 'Si pudieras mandarle un solo mensaje a quien eras el primer día de secundaria, sería corto: «Sí pasas mate. El grupo que hoy te da miedo va a ser el tuyo. Y ve más seguido a ver a tu abuelo». Ya sabes cómo termina ese capítulo. Lo único que no se puede es avisarle.',
      pregunta: 'Lo agridulce de saber cómo acabó y no poder avisarte: ¿cómo lo llamarías?',
      def: 'Lo agridulce de haber llegado al futuro y saber por fin cómo terminó todo, sin poder contárselo a quien eras entonces.',
      piezas: 'El francés <b>énouer</b>, quitarle los nudos a una tela, + <b>dénouement</b>, «desenlace».',
      familia: 'desenlace: donde se sueltan los lazos de la historia',
      nace: 'Cruce de dos palabras francesas',
      nota: 'Buen momento para que escriban, en una línea y para ellos, el mensaje que se mandarían. No se comparte. Fíjate que en español desenlace hace la misma imagen que el francés: desatar.' },
    { id: 'anemoia', palabra: 'anemoia', dice: 'anemoia', tipo: 'txt',
      texto: 'En la foto, tu mamá tiene tu edad. Está en la plaza, recargada en un vocho que ya no existe, y atrás se alcanza a ver un baile al que nunca fuiste. En la bocina del vecino suena una canción de esas, y de pronto extrañas esa tarde. Tú todavía no nacías.',
      pregunta: '¿Se puede extrañar algo que no viviste? ¿Cómo se llama eso?',
      def: 'Nostalgia de una época que nunca viviste.',
      piezas: 'El griego <b>ánemos</b>, «viento», + <b>nóos</b>, «mente».',
      familia: 'anemómetro, el aparato que mide el viento; y nostalgia, que también se armó con piezas griegas',
      nace: 'Composición culta, griega con griega',
      nota: 'Pregunta qué música de sus papás o abuelos sienten suya. Luego la jugada de la clase: nostalgia también fue neologismo, armado con el griego nóstos, «regreso», y -algia, «dolor». A la nostalgia le faltaba una hermana y alguien se la inventó.' },
    { id: 'exulansis', palabra: 'exulansis', dice: 'exulansis', tipo: 'txt',
      texto: 'Regresaste de tres meses en el Norte con tu tío y quisiste contarlo: la pizca a las cinco de la mañana, el frío, lo que se siente no entender los letreros. A la segunda frase alguien preguntó cuánto pagaban. Dijiste «bien» y cambiaste de tema. Ahora esa historia vive sola contigo, y cada día se parece más a un sueño.',
      pregunta: '¿Qué le pasó a esa historia? ¿Qué nombre le das a dejar de contarla?',
      def: 'Dejar de contar algo que viviste porque nadie alcanza a entenderlo, hasta que el recuerdo se queda sin dónde aterrizar.',
      piezas: 'El latín <b>exsulans</b>, «desterrado, errante»: así se apellida el albatros viajero, <i>Diomedea exulans</i>, que pasa casi toda la vida en el aire.',
      familia: 'exilio, exiliado',
      nace: 'Derivación sobre una palabra latina',
      nota: 'Es la que más toca a este grupo: casi todos tienen a alguien que fue y volvió del Norte. No preguntes por el suyo; pregunta qué historia de su casa ya nadie cuenta. Koenig tomó la pieza del nombre científico de un ave.' },
    { id: 'monachopsis', palabra: 'monachopsis', dice: 'monacopsis', tipo: 'txt',
      texto: 'Son los quince de tu prima. Todos saben los pasos del vals, a quién se saluda de beso y de qué hay que reírse. Tú traes la camisa prestada, el vaso en la mano y la sensación de pez en la milpa: entero, sano y en el lugar equivocado. En el cerro, con tus perros, eso nunca te pasa.',
      pregunta: 'Pez en la milpa. ¿Cómo se llamaría ese sentimiento en una sola palabra?',
      def: 'La sensación, leve pero terca, de estar fuera de lugar: de no encajar donde estás y saber que en otro sitio te moverías sin esfuerzo.',
      piezas: 'El griego <b>monachós</b>, «único, solo», + <b>ópsis</b>, «vista».',
      familia: 'monje (el que vive solo), monasterio, sinopsis',
      nace: 'Composición culta, griega con griega',
      nota: 'Cierra con esta y con la pregunta: ¿dónde es tu cerro, el lugar donde no te pasa? Que encuentren el monje escondido en la palabra. De aquí al acta de nacimiento: ya vieron diez huecos bautizados, ahora les toca el suyo.' }
  ];

  var CREDITO = 'Las diez palabras son de John Koenig, <em>The Dictionary of Obscure Sorrows</em> (Simon &amp; Schuster, 2021). Las definiciones y los textos están escritos para este curso, no traducidos del libro. Dibujos generados con Gemini en el formato de <a href="https://sketchplanations.com" target="_blank" rel="noopener">Sketchplanations</a>, de Jono Hey: una idea, un dibujo.';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function ficha(id) { for (var i = 0; i < FICHAS.length; i++) if (FICHAS[i].id === id) return FICHAS[i]; return null; }
  function imagen(f, floja) { return f.img ? '<img src="' + IMG + f.img + '" alt="' + esc(f.alt) + '"' + (floja ? ' loading="lazy"' : '') + '>' : ''; }

  (function () {
    if (document.getElementById('sin16-estilo')) return;
    var st = document.createElement('style');
    st.id = 'sin16-estilo';
    st.textContent = '.sin16g{display:grid;grid-template-columns:repeat(auto-fill,minmax(17rem,1fr));gap:1rem;margin:1rem 0}'
      + '.sin16g-titulo{font-weight:800;color:#6b1e5a;margin:1.4rem 0 .2rem;font-size:1.05rem}'
      + '.sin16f{border:1px solid #eadce6;border-radius:.9rem;background:#fff;overflow:hidden;display:flex;flex-direction:column}'
      + '.sin16f img{display:block;width:100%;height:auto;border-bottom:1px solid #eadce6}'
      + '.sin16f-texto{margin:0;padding:1rem 1.1rem;background:#fbf4f9;border-bottom:1px solid #eadce6;color:#3a2f48;line-height:1.55;font-size:.97rem}'
      + '.sin16f-cuerpo{padding:.9rem 1.1rem 1.1rem}'
      + '.sin16f-pal{font-size:1.5rem;font-weight:800;font-style:italic;color:#c8127a;line-height:1.1}'
      + '.sin16f-dice{font-size:.8rem;color:#6f6578;margin:.15rem 0 .5rem}'
      + '.sin16f-def{margin:0 0 .6rem;color:#221a3a;font-weight:600;line-height:1.45}'
      + '.sin16f-fila{margin:.3rem 0 0;font-size:.9rem;line-height:1.5;color:#333}'
      + '.sin16f-fila b.k{color:#6b1e5a}'
      + '.sin16f-nace{display:inline-block;margin-top:.6rem;font-size:.7rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:.15rem .55rem;border-radius:2rem;background:#fdeaf5;border:1px solid #f4a8ce;color:#c8127a}'
      + '.sin16-credito{font-size:.85rem;color:#6f6578;margin-top:.4rem}';
    document.head.appendChild(st);
  })();

  function tarjeta(f) {
    return '<article class="sin16f" id="palabra-' + f.id + '">'
      + (f.tipo === 'img' ? imagen(f, true) : '<p class="sin16f-texto">' + esc(f.texto) + '</p>')
      + '<div class="sin16f-cuerpo">'
      + '<div class="sin16f-pal">' + esc(f.palabra) + '</div>'
      + '<div class="sin16f-dice">se dice «' + esc(f.dice) + '»</div>'
      + '<p class="sin16f-def">' + esc(f.def) + '</p>'
      + '<p class="sin16f-fila"><b class="k">Piezas:</b> ' + f.piezas + '</p>'
      + '<p class="sin16f-fila"><b class="k">En español ya tenías:</b> ' + f.familia + '</p>'
      + '<span class="sin16f-nace">' + esc(f.nace) + '</span>'
      + '</div></article>';
  }

  function galeria(el) {
    if (!el) return;
    var dib = FICHAS.filter(function (f) { return f.tipo === 'img'; });
    var txt = FICHAS.filter(function (f) { return f.tipo === 'txt'; });
    el.innerHTML = '<div class="sin16g-titulo">Cinco con dibujo</div><div class="sin16g">' + dib.map(tarjeta).join('') + '</div>'
      + '<div class="sin16g-titulo">Cinco con un texto corto</div><div class="sin16g">' + txt.map(tarjeta).join('') + '</div>'
      + '<p class="sin16-credito">' + CREDITO + '</p>';
  }

  function pinta(raiz) {
    raiz = raiz || document;
    Array.prototype.forEach.call(raiz.querySelectorAll('[data-galeria16]'), function (el) {
      if (!el.firstChild) galeria(el);
    });
    Array.prototype.forEach.call(raiz.querySelectorAll('[data-sin16]'), function (el) {
      var f = ficha(el.getAttribute('data-sin16'));
      if (f && !el.firstChild) el.innerHTML = tarjeta(f);
    });
    Array.prototype.forEach.call(raiz.querySelectorAll('[data-img16]'), function (el) {
      var f = ficha(el.getAttribute('data-img16'));
      if (f && !el.firstChild) el.innerHTML = imagen(f);
    });
  }

  window.SIN16 = { FICHAS: FICHAS, ficha: ficha, imagen: imagen, tarjeta: tarjeta, galeria: galeria, pinta: pinta, credito: CREDITO, IMG: IMG };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { pinta(); });
  else pinta();
})();
