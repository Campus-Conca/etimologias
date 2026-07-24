/* ============================================================
   COSECHA · recolector de aportaciones del grupo
   ------------------------------------------------------------
   Convierte cualquier <div class="cosecha" data-...> de una página
   del curso en un formulario con el estilo del sitio, que guarda
   lo que escriben los estudiantes en la hoja de cálculo del curso.

   Cómo se usa en una página (markdown o html):

     <div class="cosecha"
          data-tipo="palabra-heredada"
          data-titulo="Sube tu palabra que ya nadie usa"
          data-nota="La vas a compartir el martes en clase; esto es para que no se pierda."
          data-campos='[
            {"n":"palabra","t":"La palabra","req":true},
            {"n":"significado","t":"Qué significaba","req":true},
            {"n":"quien","t":"Quién te la regaló","req":true},
            {"n":"nota","t":"Algo más que quieras contar","tipo":"larga"}
          ]'></div>

   El campo "tipo" decide en qué pestaña de la hoja cae. El nombre
   del estudiante se pide siempre y no hace falta declararlo.
   La URL del endpoint vive en _config.yml → cosecha_url.
   ============================================================ */
(function () {
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function montar(caja) {
    var url = (window.COSECHA_URL || '').trim();
    var tipo = caja.getAttribute('data-tipo') || 'general';
    var titulo = caja.getAttribute('data-titulo') || 'Sube tu aportación';
    var nota = caja.getAttribute('data-nota') || '';
    var campos = [];
    try { campos = JSON.parse(caja.getAttribute('data-campos') || '[]'); } catch (e) { campos = []; }

    if (!url || url.indexOf('PENDIENTE') > -1) {
      caja.innerHTML = '<div class="cos-box cos-off"><b>' + esc(titulo) + '</b>' +
        '<p>Este formulario se abre cuando empiece el curso. Mientras tanto, trae tu aportación anotada en papel: sirve igual.</p></div>';
      return;
    }

    var id = 'cos' + Math.abs(tipo.split('').reduce(function (a, c) { return a + c.charCodeAt(0); }, 0)) + '_' + (montar.n = (montar.n || 0) + 1);

    var html = '<div class="cos-box">' +
      '<b>' + esc(titulo) + '</b>' +
      (nota ? '<p class="cos-nota">' + esc(nota) + '</p>' : '') +
      '<form target="' + id + '_f" method="POST" action="' + esc(url) + '">' +
      '<input type="hidden" name="tipo" value="' + esc(tipo) + '">' +
      '<input type="text" name="_trampa" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px" aria-hidden="true">' +
      '<label>Tu nombre<input type="text" name="nombre" required></label>';

    campos.forEach(function (c) {
      var req = c.req ? ' required' : '';
      if (c.tipo === 'larga') {
        html += '<label>' + esc(c.t) + '<textarea name="' + esc(c.n) + '" rows="2"' + req + '></textarea></label>';
      } else {
        html += '<label>' + esc(c.t) + '<input type="text" name="' + esc(c.n) + '"' + req + '></label>';
      }
    });

    html += '<button type="submit">Enviar</button>' +
      '<span class="cos-msg" hidden></span>' +
      '</form>' +
      '<iframe name="' + id + '_f" style="display:none"></iframe>' +
      '</div>';

    caja.innerHTML = html;

    var form = caja.querySelector('form');
    var marco = caja.querySelector('iframe');
    var msg = caja.querySelector('.cos-msg');
    var btn = caja.querySelector('button');
    var enviando = false;

    form.addEventListener('submit', function () {
      if (form.querySelector('[name=_trampa]').value) return; // bot
      enviando = true;
      btn.disabled = true;
      btn.textContent = 'Enviando…';
    });

    marco.addEventListener('load', function () {
      if (!enviando) return;      // la primera carga del iframe no cuenta
      enviando = false;
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Enviar otra';
      msg.hidden = false;
      msg.textContent = '¡Listo! Quedó guardada. Gracias.';
      setTimeout(function () { msg.hidden = true; }, 6000);
    });
  }

  /* Muro: publica lo que ya cosechaste.
     <div class="cosecha-muro" data-var="HEREDADAS"
          data-vacio="Aquí van a aparecer las palabras del grupo."
          data-campos="palabra|significado|quien"></div>
     El bloque window.HEREDADAS = [...] lo genera la hoja de cálculo. */
  function montarMuro(el) {
    var datos = window[el.getAttribute('data-var')] || [];
    var vacio = el.getAttribute('data-vacio') || 'Todavía no hay nada aquí. Pronto.';
    var campos = (el.getAttribute('data-campos') || 'palabra|significado|quien').split('|');
    if (!datos.length) {
      el.innerHTML = '<div class="cos-vacio">' + esc(vacio) + '</div>';
      return;
    }
    el.innerHTML = '<div class="cos-muro">' + datos.map(function (d) {
      var t = '<div class="cos-ficha"><b>' + esc(d[campos[0]] || '') + '</b>';
      if (campos[1] && d[campos[1]]) t += '<span class="cos-sig">' + esc(d[campos[1]]) + '</span>';
      if (d.nota) t += '<span class="cos-nota2">' + esc(d.nota) + '</span>';
      var firma = d[campos[2]] ? esc(d[campos[2]]) : '';
      if (firma) t += '<span class="cos-quien">' + firma + '</span>';
      return t + '</div>';
    }).join('') + '</div>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var cajas = document.querySelectorAll('.cosecha');
    for (var i = 0; i < cajas.length; i++) montar(cajas[i]);
    var muros = document.querySelectorAll('.cosecha-muro');
    for (var j = 0; j < muros.length; j++) montarMuro(muros[j]);
  });
})();
