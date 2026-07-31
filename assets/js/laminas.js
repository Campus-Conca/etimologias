/* El telón · Etimologías Grecolatinas del Español · UAQ
   ------------------------------------------------------------------
   Cada día de clase es un <section class="mazo"> con su cabecera y sus
   láminas <section class="lam">. El botón Presentar abre el telón: una
   lámina a la vez, a pantalla completa, con portada autogenerada desde
   la cabecera del mazo.

     flechas · espacio · clicker   avanzan
     A                             oculta el texto de apoyo
     N                             muestra las notas del conductor
     Esc                           sale

   Un mazo con el atributo data-ticket cierra con la lámina del QR del
   ticket de salida. Los estilos viven en _sass/custom/custom.scss.
   ------------------------------------------------------------------ */
(function () {

  var ME = document.currentScript || (function () {
    var s = document.getElementsByTagName('script');
    return s[s.length - 1];
  })();
  /* Raíz del sitio, para armar rutas que sirvan desde cualquier carpeta. */
  var RAIZ = ME.src.replace(/assets\/js\/laminas\.js(\?.*)?$/, '');

  var TICKET_URL = window.TICKET_URL || '';
  var QR_TICKET = RAIZ + 'assets/img/qr-ticket-salida.png';

  function montarTelon() {
    if (!document.querySelector('.mazo .btn-presentar')) return;

    var telon = document.createElement('div');
    telon.id = 'telon';
    telon.innerHTML = '<div class="escenario"></div>'
      + '<div class="barra">'
      + '<button type="button" class="atras" aria-label="Lámina anterior">&#8592;</button>'
      + '<button type="button" class="sigue" aria-label="Lámina siguiente">&#8594;</button>'
      + '<span class="cont"></span>'
      + '<span class="pista-teclas">flechas o espacio avanzan · A oculta el apoyo · N muestra notas · Esc sale</span>'
      + '<button type="button" class="salir">Salir</button>'
      + '</div>';
    document.body.appendChild(telon);

    var escenario = telon.querySelector('.escenario');
    var cont = telon.querySelector('.cont');
    var lams = [], idx = 0;

    function pinta() {
      escenario.innerHTML = '';
      escenario.appendChild(lams[idx].cloneNode(true));
      cont.textContent = (idx + 1) + ' / ' + lams.length;
      escenario.scrollTop = 0;
    }

    function abrir(mazo) {
      var cab = mazo.querySelector('.mazo-cabeza');
      var portada = document.createElement('section');
      portada.className = 'lam lam--portada';
      portada.innerHTML = '<div class="cuando">' + cab.querySelector('.cuando').textContent + '</div>'
        + '<h3>' + cab.querySelector('h3').textContent + '</h3>'
        + '<p class="foco">' + cab.querySelector('.foco').textContent + '</p>';
      lams = [portada].concat(Array.prototype.slice.call(mazo.querySelectorAll('.lam')));

      if (TICKET_URL && mazo.hasAttribute('data-ticket')) {
        var tk = document.createElement('section');
        tk.className = 'lam lam--ticket';
        tk.innerHTML = '<h4>Ticket de salida</h4>'
          + '<p class="di">Qué te llevas · qué quedó turbio · cómo estuvo el ritmo</p>'
          + '<img class="qr-lam" alt="Código QR del ticket de salida" src="' + QR_TICKET + '">'
          + '<p class="apoyo">Noventa segundos, con nombre o sin él.</p>';
        lams.push(tk);
      }

      idx = 0;
      telon.classList.add('abierto');
      document.documentElement.classList.add('telon-abierto');
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(function () {});
      }
      pinta();
    }

    function cerrar() {
      telon.classList.remove('abierto');
      document.documentElement.classList.remove('telon-abierto');
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(function () {});
      }
    }

    function sigue() { if (idx < lams.length - 1) { idx++; pinta(); } }
    function atras() { if (idx > 0) { idx--; pinta(); } }

    telon.querySelector('.sigue').addEventListener('click', sigue);
    telon.querySelector('.atras').addEventListener('click', atras);
    telon.querySelector('.salir').addEventListener('click', cerrar);

    document.addEventListener('keydown', function (e) {
      if (!telon.classList.contains('abierto')) return;
      var k = (e.key || '').toLowerCase();
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); sigue(); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); atras(); }
      else if (e.key === 'Escape') { cerrar(); }
      else if (k === 'a') { telon.classList.toggle('sin-apoyo'); }
      else if (k === 'n') { telon.classList.toggle('con-notas'); }
    });

    Array.prototype.forEach.call(document.querySelectorAll('.btn-presentar'), function (b) {
      b.addEventListener('click', function () {
        var mazo = b.closest ? b.closest('.mazo') : null;
        if (mazo) abrir(mazo);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montarTelon);
  } else {
    montarTelon();
  }

})();
