/* ============================================================
   MUSEO · la galería del Museo de Palabras
   ------------------------------------------------------------
   Monta la pared de la galería (museo/galeria.md) a partir de los
   bloques window.MUSEO_SALAS y window.MUSEO_PIEZAS que se declaran
   en la propia página. Pinta los marcos sobre la pared, la cédula
   museográfica que se abre al tocar una pieza, los filtros por
   lengua de origen y el modo visita: el recorrido pieza por pieza
   pensado para proyectarse en clase.
   No se usa en ninguna otra página del sitio.
   ============================================================ */
(function () {
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* Para buscar sin pelearse con los acentos. */
  function norm(s) {
    return String(s == null ? '' : s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  var SALAS = [];
  var PIEZAS = [];
  var F = { lengua: '', sala: 0, q: '', orden: 'inv' };
  var raiz = null;

  function abiertas() {
    return SALAS.filter(function (s) { return s.abierta; });
  }

  function enSala() {
    var ok = {};
    abiertas().forEach(function (s) { ok[s.sala] = 1; });
    return PIEZAS.filter(function (p) { return ok[p.sala]; });
  }

  function hayFiltro() {
    return !!(F.lengua || F.sala || F.q);
  }

  function lista() {
    var v = enSala();
    if (F.sala) v = v.filter(function (p) { return p.sala === F.sala; });
    if (F.lengua) v = v.filter(function (p) { return p.lengua === F.lengua; });
    if (F.q) {
      var q = norm(F.q);
      v = v.filter(function (p) {
        return norm(p.palabra + ' ' + (p.nombre || '') + ' ' + (p.lema || '')).indexOf(q) > -1;
      });
    }
    v = v.slice();
    if (F.orden === 'az') {
      v.sort(function (a, b) { return a.palabra.localeCompare(b.palabra, 'es'); });
    } else if (F.orden === 'nuevas') {
      v.sort(function (a, b) { return b.inv.localeCompare(a.inv); });
    } else {
      v.sort(function (a, b) { return a.inv.localeCompare(b.inv); });
    }
    return v;
  }

  function firma(p) {
    return p.muestra ? 'Pieza de muestra · el profesor' : 'Donación de ' + esc(p.nombre);
  }

  function proximosInv(sala, cuantos) {
    var max = 0;
    PIEZAS.forEach(function (p) {
      if (p.sala !== sala) return;
      var m = /\.(\d+)$/.exec(p.inv);
      if (m) max = Math.max(max, parseInt(m[1], 10));
    });
    var res = [];
    for (var i = 1; i <= cuantos; i++) {
      res.push('2026.' + sala + '.' + ('00' + (max + i)).slice(-3));
    }
    return res;
  }

  /* ---------- la pared ---------- */

  function marcoHTML(p) {
    var t = '<button type="button" class="mu-marco' + (p.destacada ? ' mu-destacada' : '') +
      '" data-inv="' + esc(p.inv) + '" aria-label="Abrir la cédula de ' + esc(p.palabra) + '">';
    if (p.nueva) t += '<span class="mu-tag">nueva adquisición</span>';
    if (p.destacada) t += '<span class="mu-rot-dest">Pieza destacada de la semana</span>';
    t += '<span class="mu-m-palabra">' + esc(p.palabra) + '</span>';
    if (p.procedencia) t += '<span class="mu-m-proc">' + esc(p.procedencia) + '</span>';
    if (p.lema) t += '<span class="mu-m-lema">“' + esc(p.lema) + '”</span>';
    t += '<span class="mu-m-firma">' + firma(p) + ' · Inv. ' + esc(p.inv) + '</span>';
    return t + '</button>';
  }

  function reservadoHTML(inv) {
    return '<div class="mu-hueco"><span class="mu-h-t">Espacio reservado</span>' +
      '<span class="mu-h-p">para tu pieza · Inv. ' + esc(inv) + '</span></div>';
  }

  function cerradaHTML(s) {
    return '<div class="mu-cerrada"><span class="mu-c-rot">Sala ' + esc(s.sala) + ' · ' + esc(s.unidad) + '</span>' +
      '<span class="mu-c-t">' + esc(s.titulo) + '</span>' +
      '<span class="mu-c-p">próxima inauguración</span></div>';
  }

  function pintarPared() {
    var v = lista();
    var html = '';
    abiertas().forEach(function (s, idx, arr) {
      var piezas = v.filter(function (p) { return p.sala === s.sala; });
      html += '<section class="mu-sala"><div class="mu-placa">' +
        '<span class="mu-p-rot">Sala ' + esc(s.sala) + ' · ' + esc(s.unidad) + '</span>' +
        '<span class="mu-p-t">' + esc(s.titulo) + '</span>' +
        (s.placa ? '<span class="mu-p-p">' + esc(s.placa) + '</span>' : '') +
        '</div><div class="mu-muro">';
      if (piezas.length) {
        html += piezas.map(marcoHTML).join('');
      } else {
        html += '<div class="mu-vacio">Ninguna pieza en esta vitrina. Prueba con otro filtro o borra la búsqueda.</div>';
      }
      if (!hayFiltro()) {
        proximosInv(s.sala, 2).forEach(function (inv) { html += reservadoHTML(inv); });
        if (idx === arr.length - 1) {
          SALAS.forEach(function (c) { if (!c.abierta) html += cerradaHTML(c); });
        }
      }
      html += '</div></section>';
    });
    raiz.querySelector('.mu-salas').innerHTML = html;

    var marcos = raiz.querySelectorAll('.mu-marco');
    for (var i = 0; i < marcos.length; i++) {
      marcos[i].addEventListener('click', function () {
        abrirCedula(this.getAttribute('data-inv'), true);
      });
    }
  }

  /* ---------- la cédula ---------- */

  function viajeHTML(p) {
    if (!p.viaje || !p.viaje.length) return '';
    var t = '<div class="mu-v-rot">El viaje</div><div class="mu-viaje">';
    p.viaje.forEach(function (e, k) {
      if (k > 0) t += '<span class="mu-est mu-flecha" aria-hidden="true">→</span>';
      t += '<span class="mu-est mu-parada"><b>' + esc(e[0]) + '</b><i>' + esc(e[1]) + '</i><em>' + esc(e[2]) + '</em></span>';
    });
    return t + '</div>';
  }

  function cedulaHTML(p) {
    var t = '<div class="mu-ced-cab"><span class="mu-ced-rot">Cédula · Inv. ' + esc(p.inv) + '</span>' +
      '<span class="mu-ced-firma">' + firma(p) + '</span></div>' +
      '<div class="mu-ced-palabra">' + esc(p.palabra) + '</div>';
    if (p.cita) {
      t += '<p class="mu-ced-cita">“' + esc(p.cita) + '”</p>';
      if (p.citaPie) t += '<p class="mu-ced-citapie">' + esc(p.citaPie) + '</p>';
    }
    t += viajeHTML(p);
    if (p.adquisicion) {
      t += '<div class="mu-v-rot">Adquisición</div><p class="mu-ced-adq">' + esc(p.adquisicion) + '</p>';
    }
    if (p.curaduria) {
      t += '<div class="mu-cur"><span class="mu-cur-rot">Nota de curaduría</span><p>' + esc(p.curaduria) + '</p></div>';
    }
    if (p.fuente) t += '<p class="mu-ced-pie">' + esc(p.fuente) + '</p>';
    return t;
  }

  function animarViaje(caja) {
    var pasos = caja.querySelectorAll('.mu-est');
    for (var i = 0; i < pasos.length; i++) {
      (function (el, k) {
        setTimeout(function () { el.className += ' on'; }, 120 + k * 150);
      })(pasos[i], i);
    }
  }

  function abrirCedula(inv, conScroll) {
    var p = null;
    PIEZAS.forEach(function (x) { if (x.inv === inv) p = x; });
    if (!p) return;
    var caja = raiz.querySelector('.mu-cedula');
    caja.hidden = false;
    caja.innerHTML = cedulaHTML(p);
    animarViaje(caja);
    var marcos = raiz.querySelectorAll('.mu-marco');
    for (var i = 0; i < marcos.length; i++) {
      marcos[i].className = marcos[i].className.replace(' mu-abierta', '');
      if (marcos[i].getAttribute('data-inv') === inv) marcos[i].className += ' mu-abierta';
    }
    if (conScroll) caja.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ---------- los filtros ---------- */

  function pintarChips() {
    var caja = raiz.querySelector('.mu-chips');
    var piezas = enSala();
    var conteo = {};
    piezas.forEach(function (p) {
      if (p.lengua) conteo[p.lengua] = (conteo[p.lengua] || 0) + 1;
    });
    var t = '<button type="button" class="mu-chip' + (F.lengua ? '' : ' activa') + '" data-lengua="">Todas · ' + piezas.length + '</button>';
    Object.keys(conteo).sort(function (a, b) { return conteo[b] - conteo[a]; }).forEach(function (l) {
      t += '<button type="button" class="mu-chip' + (F.lengua === l ? ' activa' : '') + '" data-lengua="' + esc(l) + '">' +
        esc(l) + ' · ' + conteo[l] + '</button>';
    });
    if (abiertas().length > 1) {
      t += '<span class="mu-chip-sep" aria-hidden="true"></span>';
      t += '<button type="button" class="mu-chip' + (F.sala ? '' : ' activa') + '" data-sala="0">Todas las salas</button>';
      abiertas().forEach(function (s) {
        t += '<button type="button" class="mu-chip' + (F.sala === s.sala ? ' activa' : '') + '" data-sala="' + s.sala + '">Sala ' + s.sala + '</button>';
      });
    }
    caja.innerHTML = t;
    var chips = caja.querySelectorAll('.mu-chip');
    for (var i = 0; i < chips.length; i++) {
      chips[i].addEventListener('click', function () {
        if (this.hasAttribute('data-sala')) {
          F.sala = parseInt(this.getAttribute('data-sala'), 10) || 0;
        } else {
          F.lengua = this.getAttribute('data-lengua') || '';
        }
        pintarChips();
        pintarPared();
      });
    }
  }

  /* ---------- el modo visita ---------- */

  var visita = { activa: false, i: 0, orden: [], telon: null };

  function visitaPieza() {
    var p = visita.orden[visita.i];
    var cuerpo = visita.telon.querySelector('.mu-t-cuerpo');
    cuerpo.innerHTML = cedulaHTML(p);
    animarViaje(cuerpo);
    visita.telon.querySelector('.mu-t-n').textContent = 'Pieza ' + (visita.i + 1) + ' de ' + visita.orden.length;
    cuerpo.scrollTop = 0;
  }

  function visitaMover(paso) {
    var n = visita.orden.length;
    visita.i = (visita.i + paso + n) % n;
    visitaPieza();
  }

  function visitaTeclas(ev) {
    if (!visita.activa) return;
    if (ev.key === 'Escape') { cerrarVisita(); }
    else if (ev.key === 'ArrowRight' || ev.key === 'PageDown' || ev.key === ' ') { ev.preventDefault(); visitaMover(1); }
    else if (ev.key === 'ArrowLeft' || ev.key === 'PageUp') { ev.preventDefault(); visitaMover(-1); }
  }

  function abrirVisita() {
    var orden = lista();
    if (!orden.length) return;
    visita.orden = orden;
    visita.i = 0;
    visita.activa = true;
    if (!visita.telon) {
      var t = document.createElement('div');
      t.className = 'mu-telon';
      t.setAttribute('role', 'dialog');
      t.setAttribute('aria-label', 'Modo visita del museo');
      t.setAttribute('tabindex', '-1');
      t.innerHTML = '<button type="button" class="mu-t-x">✕ salir</button>' +
        '<div class="mu-t-cuerpo"></div>' +
        '<div class="mu-t-pie"><button type="button" class="mu-t-ant">‹ anterior</button>' +
        '<span class="mu-t-n"></span>' +
        '<button type="button" class="mu-t-sig">siguiente ›</button></div>' +
        '<p class="mu-t-ayuda">También sirven las flechas del teclado · Esc para salir</p>';
      document.body.appendChild(t);
      t.querySelector('.mu-t-x').addEventListener('click', cerrarVisita);
      t.querySelector('.mu-t-ant').addEventListener('click', function () { visitaMover(-1); });
      t.querySelector('.mu-t-sig').addEventListener('click', function () { visitaMover(1); });
      document.addEventListener('keydown', visitaTeclas);
      visita.telon = t;
    }
    visita.telon.hidden = false;
    document.body.style.overflow = 'hidden';
    visitaPieza();
    visita.telon.focus();
  }

  function cerrarVisita() {
    visita.activa = false;
    if (visita.telon) visita.telon.hidden = true;
    document.body.style.overflow = '';
    var btn = raiz.querySelector('.mu-visita');
    if (btn) btn.focus();
  }

  /* ---------- arranque ---------- */

  function montar() {
    raiz = document.getElementById('museo-galeria');
    if (!raiz) return;
    SALAS = window.MUSEO_SALAS || [];
    PIEZAS = window.MUSEO_PIEZAS || [];

    raiz.innerHTML = '<div class="mu-barra">' +
      '<div class="mu-chips"></div>' +
      '<div class="mu-controles">' +
      '<input class="mu-busca" type="search" placeholder="Busca palabra o donante" aria-label="Buscar en la galería">' +
      '<select class="mu-orden" aria-label="Orden de las piezas">' +
      '<option value="inv">Por número de inventario</option>' +
      '<option value="nuevas">Recién colgadas primero</option>' +
      '<option value="az">De la A a la Z</option>' +
      '</select>' +
      '<button type="button" class="mu-visita">Iniciar visita ▸</button>' +
      '</div></div>' +
      '<div class="mu-salas"></div>' +
      '<div class="mu-cedula" hidden></div>';

    raiz.querySelector('.mu-busca').addEventListener('input', function () {
      F.q = this.value.trim();
      pintarPared();
    });
    raiz.querySelector('.mu-orden').addEventListener('change', function () {
      F.orden = this.value;
      pintarPared();
    });
    raiz.querySelector('.mu-visita').addEventListener('click', abrirVisita);

    pintarChips();
    pintarPared();

    /* El contador de la cabecera y la cédula inicial: la pieza destacada. */
    var reales = enSala().filter(function (p) { return !p.muestra; }).length;
    var viva = document.getElementById('museo-viva');
    if (viva) {
      viva.textContent = reales === 1
        ? 'Primera pieza colgada · la sala se llena con el semestre'
        : reales + ' piezas en sala · la colección crece con el semestre';
    }
    var dest = enSala().filter(function (p) { return p.destacada; })[0] || lista()[0];
    if (dest) abrirCedula(dest.inv, false);
  }

  document.addEventListener('DOMContentLoaded', montar);
})();
