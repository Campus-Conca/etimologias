/* ============================================================
   SEMANA 14 · Las locuciones en un dibujo y la tira de Porcio
   ------------------------------------------------------------
   Un solo archivo para la página de la semana 14, el proyectable
   «Las locuciones en un dibujo» y los ejercicios 14D y 14E.
   Cada dibujo es SVG en línea, rotulado a mano (Patrick Hand) y
   en español: nada que traducir, nada que se deforme al crecer.

   Tira y dibujos: Claude (Anthropic), hechos para este curso.
   El formato de explicar una idea con un dibujo es el de
   Sketchplanations, de Jono Hey. La idea de un cerdo con pies de
   viñeta en latín viene de «Pig Latin», de Grant Snider.

   Uso:
     LOC14.dibujo('ipso facto')  el SVG de una locución
     LOC14.vineta(0)             la viñeta 1 de la tira, sin pie
     LOC14.FICHAS, LOC14.VINETAS los textos de cada una
     <div data-dib14="carpe diem"></div> y <div data-vin14="3"></div>
     se llenan solos al cargar la página.
   ============================================================ */
(function () {
  if (window.LOC14) return;

  var TINTA = '#2d2733', ROSA = '#c8127a', GRIS = '#6f6578', JADE = '#0b7a5e', ROJO = '#c0392b';
  var PAPEL = '#fffdf8', LODO = '#8e6b4b';
  var PIEL = ['#e8b48e', '#c98d62', '#9a6342'];

  /* La letra a mano se pide una sola vez, la use quien la use. */
  (function () {
    if (document.getElementById('dib14-fuente')) return;
    var l = document.createElement('link');
    l.id = 'dib14-fuente';
    l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap';
    document.head.appendChild(l);
    var st = document.createElement('style');
    st.textContent = '.dib14{display:block;width:100%;height:auto}'
      + '.dib14 text{font-family:"Patrick Hand","Comic Neue","Comic Sans MS",cursive}';
    document.head.appendChild(st);
  })();

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function n(v) { return Math.round(v * 10) / 10; }

  /* ---------- El lienzo: trazos con temblor de mano, letras sin temblor ---------- */
  var cuenta = 0;
  function Lienzo(w, h, papel) {
    this.w = w; this.h = h; this.d = []; this.t = [];
    if (papel) this.d.push(`<rect x="-10" y="-10" width="${w + 20}" height="${h + 20}" fill="${papel}" stroke="none"/>`);
  }
  Lienzo.prototype.dib = function (s) { this.d.push(s); return this; };
  Lienzo.prototype.txt = function (s) { this.t.push(s); return this; };
  Lienzo.prototype.svg = function (alt) {
    cuenta++;
    var id = 'dib14g' + cuenta;
    return `<svg class="dib14" viewBox="0 0 ${this.w} ${this.h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(alt)}">`
      + `<defs><filter id="${id}" x="-2%" y="-2%" width="104%" height="104%"><feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="${cuenta % 9 + 2}"/><feDisplacementMap in="SourceGraphic" scale="2" xChannelSelector="R" yChannelSelector="G"/></filter></defs>`
      + `<g filter="url(#${id})" fill="none" stroke="${TINTA}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${this.d.join('')}</g>`
      + `<g>${this.t.join('')}</g></svg>`;
  };

  function tx(L, x, y, lineas, o) {
    o = o || {};
    var fs = o.fs || 16, lh = (o.lh || 1.12) * fs;
    lineas = [].concat(lineas);
    var a = `x="${x}" y="${y}" font-size="${fs}" text-anchor="${o.a || 'middle'}" fill="${o.c || TINTA}"`;
    if (o.i) a += ' font-style="italic"';
    if (o.ls) a += ` letter-spacing="${o.ls}"`;
    if (o.rot) a += ` transform="rotate(${o.rot} ${x} ${y})"`;
    var s = `<text ${a}>`;
    lineas.forEach(function (ln, k) { s += `<tspan x="${x}" dy="${k ? n(lh) : 0}">${esc(ln)}</tspan>`; });
    L.txt(s + '</text>');
  }

  function nube(x, y, w, h) {
    var cx = x + w / 2, cy = y + h / 2, rx = w / 2, ry = h / 2;
    var m = Math.max(9, Math.round((w + h) / 26)), d = '', lx = 0, ly = 0;
    for (var k = 0; k <= m; k++) {
      var a = -Math.PI / 2 + k * 2 * Math.PI / m;
      var px = cx + rx * Math.cos(a), py = cy + ry * Math.sin(a);
      if (!k) d = `M${n(px)} ${n(py)}`;
      else { var sg = Math.hypot(px - lx, py - ly) * 0.62; d += ` A${n(sg)} ${n(sg)} 0 0 1 ${n(px)} ${n(py)}`; }
      lx = px; ly = py;
    }
    return d + 'Z';
  }

  /* Globo de diálogo (o de pensamiento) con la cola hacia quien habla. */
  function globo(L, o) {
    var x = o.x, y = o.y, w = o.w, h = o.h, fs = o.fs || 17;
    var px = o.cola ? o.cola[0] : x + w / 2, py = o.cola ? o.cola[1] : y + h + 18;
    if (o.piensa) {
      L.dib(`<path d="${nube(x, y, w, h)}" fill="#fff"/>`);
      var bx = x + w / 2 + (px - x - w / 2) * 0.3, by = y + h - 2;
      for (var k = 1; k <= 3; k++) {
        var t = k / 3.4;
        L.dib(`<circle cx="${n(bx + (px - bx) * t)}" cy="${n(by + (py - by) * t)}" r="${n(7 - k * 1.7)}" fill="#fff"/>`);
      }
    } else {
      var r = Math.min(16, h / 2.2), b1, b2, d;
      var arriba = `M${x + r} ${y}`, der = `H${x + w - r} Q${x + w} ${y} ${x + w} ${y + r}`;
      if (py > y + h) {
        b1 = Math.max(x + r + 2, Math.min(x + w - r - 22, px - 10)); b2 = b1 + 20;
        d = `${arriba} ${der} V${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} H${n(b2)} L${n(px)} ${n(py)} L${n(b1)} ${y + h} H${x + r} Q${x} ${y + h} ${x} ${y + h - r} V${y + r} Q${x} ${y} ${x + r} ${y} Z`;
      } else if (py < y) {
        b1 = Math.max(x + r + 2, Math.min(x + w - r - 22, px - 10)); b2 = b1 + 20;
        d = `${arriba} H${n(b1)} L${n(px)} ${n(py)} L${n(b2)} ${y} ${der} V${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} H${x + r} Q${x} ${y + h} ${x} ${y + h - r} V${y + r} Q${x} ${y} ${x + r} ${y} Z`;
      } else if (px > x + w) {
        b1 = Math.max(y + r, Math.min(y + h - r - 16, py - 8)); b2 = b1 + 16;
        d = `${arriba} ${der} V${n(b1)} L${n(px)} ${n(py)} L${x + w} ${n(b2)} V${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} H${x + r} Q${x} ${y + h} ${x} ${y + h - r} V${y + r} Q${x} ${y} ${x + r} ${y} Z`;
      } else {
        b1 = Math.max(y + r, Math.min(y + h - r - 16, py - 8)); b2 = b1 + 16;
        d = `${arriba} ${der} V${y + h - r} Q${x + w} ${y + h} ${x + w - r} ${y + h} H${x + r} Q${x} ${y + h} ${x} ${y + h - r} V${n(b2)} L${n(px)} ${n(py)} L${x} ${n(b1)} V${y + r} Q${x} ${y} ${x + r} ${y} Z`;
      }
      L.dib(`<path d="${d}" fill="#fff"/>`);
    }
    var lineas = [].concat(o.lineas), lh = fs * 1.1;
    tx(L, x + w / 2, n(y + h / 2 - (lineas.length - 1) * lh / 2 + fs * 0.33), lineas, { fs: fs, lh: 1.1, c: o.c, i: o.i });
  }

  function flecha(L, x1, y1, x2, y2, o) {
    o = o || {};
    var dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy) || 1, cv = o.curva || 0;
    var cx = (x1 + x2) / 2 - dy / len * cv, cy = (y1 + y2) / 2 + dx / len * cv;
    var col = o.c || TINTA, w = o.w || 2.2, t = o.punta || 10;
    var ang = Math.atan2(y2 - cy, x2 - cx), a1 = ang + 2.6, a2 = ang - 2.6;
    L.dib(`<path d="M${n(x1)} ${n(y1)} Q${n(cx)} ${n(cy)} ${n(x2)} ${n(y2)}" stroke="${col}" stroke-width="${w}"${o.guiones ? ' stroke-dasharray="6 6"' : ''}/>`
      + `<path d="M${n(x2 + t * Math.cos(a1))} ${n(y2 + t * Math.sin(a1))} L${n(x2)} ${n(y2)} L${n(x2 + t * Math.cos(a2))} ${n(y2 + t * Math.sin(a2))}" stroke="${col}" stroke-width="${w}"/>`);
  }

  function tache(L, x, y, r, col) {
    L.dib(`<path d="M${x - r} ${y - r} L${x + r} ${y + r} M${x + r} ${y - r} L${x - r} ${y + r}" stroke="${col || ROSA}" stroke-width="4"/>`);
  }
  function palomita(L, x, y, r, col) {
    L.dib(`<path d="M${x - r} ${y} L${n(x - r / 3)} ${n(y + r * 0.7)} L${x + r} ${n(y - r * 0.8)}" stroke="${col || JADE}" stroke-width="4.5"/>`);
  }

  /* ---------- El escenario del rancho ---------- */
  function fondo(L, o) {
    o = o || {};
    var W = L.w, H = L.h, sy = o.suelo || 212, noche = !!o.noche;
    L.dib(`<rect x="-10" y="-10" width="${W + 20}" height="${H + 20}" fill="${noche ? '#2c2e5c' : '#eaf3f8'}" stroke="none"/>`);
    if (noche) {
      [[30, 30], [84, 74], [140, 24], [186, 96], [332, 120], [372, 28], [58, 124], [300, 16], [118, 150], [362, 160]].forEach(function (p) {
        L.dib(`<path d="M${p[0] - 4} ${p[1]} h8 M${p[0]} ${p[1] - 4} v8" stroke="#fff4b8" stroke-width="1.8"/>`);
      });
      if (o.luna !== false) L.dib(`<path d="M352 40 a22 22 0 1 0 22 30 a17 17 0 1 1 -22 -30z" fill="#fff1a8" stroke="#e8d17a" stroke-width="1.6"/>`);
    } else if (o.sol) {
      L.dib(`<circle cx="48" cy="46" r="17" fill="#ffd970" stroke="#e6b23a" stroke-width="2"/>`);
      for (var k = 0; k < 8; k++) {
        var a = k * Math.PI / 4;
        L.dib(`<path d="M${n(48 + 24 * Math.cos(a))} ${n(46 + 24 * Math.sin(a))} L${n(48 + 32 * Math.cos(a))} ${n(46 + 32 * Math.sin(a))}" stroke="#e6b23a" stroke-width="2"/>`);
      }
    }
    if (o.cerros !== false) {
      L.dib(`<path d="M-10 ${sy - 34} Q 40 ${sy - 86} 105 ${sy - 50} T 230 ${sy - 58} T 335 ${sy - 80} T 430 ${sy - 44} V ${sy + 4} H -10 Z" fill="${noche ? '#3a3d70' : '#d6e7c8'}" stroke="${noche ? '#55598f' : '#a9c596'}" stroke-width="1.6"/>`);
      L.dib(`<path d="M-10 ${sy - 10} Q 60 ${sy - 40} 150 ${sy - 16} T 300 ${sy - 22} T 430 ${sy - 12} V ${sy + 4} H -10 Z" fill="${noche ? '#444884' : '#bddaa9'}" stroke="${noche ? '#5d62a0' : '#93b97f'}" stroke-width="1.6"/>`);
    }
    L.dib(`<rect x="-10" y="${sy}" width="${W + 20}" height="${H - sy + 10}" fill="${noche ? '#4a4970' : '#ece0c4'}" stroke="none"/>`);
    L.dib(`<path d="M-10 ${sy} H ${W + 10}" stroke="${noche ? '#6a6a99' : '#b9a783'}" stroke-width="1.6"/>`);
    (o.matas || [[24, sy + 30], [136, sy + 64], [262, sy + 22], [356, sy + 58], [76, sy + 82]]).forEach(function (p) {
      L.dib(`<path d="M${p[0]} ${p[1]} l-4 -9 M${p[0] + 3} ${p[1]} l0 -12 M${p[0] + 6} ${p[1]} l4 -9" stroke="${noche ? '#7c7caa' : '#7ea86a'}" stroke-width="1.8"/>`);
    });
  }
  function marco(L) { L.dib(`<rect x="3" y="3" width="${L.w - 6}" height="${L.h - 6}" rx="7" fill="none" stroke-width="3.2"/>`); }

  function cerca(L, x1, x2, y, alto, paso) {
    paso = paso || 38;
    var s = '';
    for (var px = x1; px <= x2 + 1; px += paso) s += `<rect x="${px - 4}" y="${y - alto}" width="8" height="${alto}" rx="2" fill="#c49a6c"/>`;
    s += `<rect x="${x1 - 6}" y="${n(y - alto * 0.82)}" width="${x2 - x1 + 12}" height="7" rx="2.5" fill="#d6b285"/>`;
    s += `<rect x="${x1 - 6}" y="${n(y - alto * 0.46)}" width="${x2 - x1 + 12}" height="7" rx="2.5" fill="#d6b285"/>`;
    L.dib(s);
  }
  function charco(L, cx, cy, rx, ry) { L.dib(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${LODO}" stroke-width="2"/>`); }
  function comedero(L, x, y, w) {
    L.dib(`<path d="M${x} ${y} L${x + w} ${y} L${x + w - 10} ${y + 30} L${x + 10} ${y + 30} Z" fill="#a3774d"/><path d="M${x + 4} ${y + 8} H${x + w - 4}" stroke="#7d5a38" stroke-width="1.6"/>`);
  }
  function sombrero(L, cx, cy, rot, s) {
    s = s || 1;
    L.dib(`<g transform="translate(${cx} ${cy}) rotate(${rot || 0}) scale(${s})"><ellipse cx="0" cy="0" rx="27" ry="6" fill="#e9cf92"/><path d="M-14 -1 Q-12 -19 0 -19 Q12 -19 14 -1 Z" fill="#e9cf92"/><path d="M-13 -4 H13" stroke="#8b5a2b" stroke-width="2.6"/></g>`);
  }

  /* ---------- Porcio y compañía ---------- */
  function ojosCerdo(hx, hy, t) {
    var a = [hx + 6, hy - 6], b = [hx - 6, hy - 7];
    switch (t) {
      case 'cerrados': return `<path d="M${a[0] - 3} ${a[1]} q3 -4 6 0 M${b[0] - 3} ${b[1]} q3 -4 6 0" stroke-width="2"/>`;
      case 'asustados': return `<circle cx="${a[0]}" cy="${a[1]}" r="4.8" fill="#fff" stroke-width="1.8"/><circle cx="${b[0]}" cy="${b[1]}" r="4.5" fill="#fff" stroke-width="1.8"/><circle cx="${a[0] + 1.2}" cy="${a[1]}" r="2" fill="${TINTA}" stroke="none"/><circle cx="${b[0] + 1.2}" cy="${b[1]}" r="2" fill="${TINTA}" stroke="none"/>`;
      case 'lentes': return `<rect x="${hx - 1}" y="${hy - 12}" width="15" height="10" rx="4" fill="${TINTA}"/><rect x="${hx - 15}" y="${hy - 13}" width="12" height="10" rx="4" fill="${TINTA}"/><path d="M${hx - 3} ${hy - 9} h2 M${hx - 15} ${hy - 10} l-7 -3" stroke-width="2"/><path d="M${hx + 3} ${hy - 9} l5 -1" stroke="#fff" stroke-width="1.5"/>`;
      case 'medio': return `<path d="M${a[0] - 4} ${a[1] - 1} h8 M${b[0] - 4} ${b[1] - 1} h8" stroke-width="2"/><path d="M${a[0] - 3} ${a[1] - 1} q3 4 6 0 M${b[0] - 3} ${b[1] - 1} q3 4 6 0" fill="${TINTA}" stroke-width="1.2"/>`;
      case 'pillo': return `<circle cx="${a[0] + 1}" cy="${a[1] - 1}" r="2.6" fill="${TINTA}" stroke="none"/><circle cx="${b[0] + 1}" cy="${b[1] - 1}" r="2.5" fill="${TINTA}" stroke="none"/><path d="M${a[0] - 4} ${a[1] - 7} q4 -3 8 0 M${b[0] - 4} ${b[1] - 8} q4 -3 8 0" stroke-width="1.6"/>`;
      default: return `<circle cx="${a[0]}" cy="${a[1]}" r="2.8" fill="${TINTA}" stroke="none"/><circle cx="${b[0]}" cy="${b[1]}" r="2.6" fill="${TINTA}" stroke="none"/>`;
    }
  }
  function bocaCerdo(hx, hy, t) {
    var mx = hx + 12, my = hy + 16;
    switch (t) {
      case 'o': return `<ellipse cx="${mx + 2}" cy="${my + 1}" rx="2.8" ry="3.6" fill="#7a2943" stroke-width="1.6"/>`;
      case 'plana': return `<path d="M${mx - 3} ${my} h9" stroke-width="2"/>`;
      case 'triste': return `<path d="M${mx - 3} ${my + 2} q5 -4 10 0" stroke-width="2"/>`;
      case 'llena': return `<circle cx="${hx - 3}" cy="${hy + 11}" r="7.5" fill="#f6b6c8" stroke-width="1.6"/><path d="M${mx - 3} ${my} q5 3 10 0" stroke-width="2"/><g fill="#f2d27a" stroke="none"><circle cx="${mx + 10}" cy="${my + 3}" r="1.7"/><circle cx="${mx + 6}" cy="${my + 7}" r="1.5"/></g>`;
      case 'silba': return `<circle cx="${mx + 3}" cy="${my}" r="2.5" fill="#7a2943" stroke-width="1.4"/><path d="M${mx + 14} ${my - 10} v-9 l5 2 M${mx + 22} ${my - 4} v-8 l5 2" stroke-width="1.6"/><circle cx="${mx + 13}" cy="${my - 10}" r="2" fill="${TINTA}" stroke="none"/><circle cx="${mx + 21}" cy="${my - 4}" r="2" fill="${TINTA}" stroke="none"/>`;
      default: return `<path d="M${mx - 3} ${my - 1} q5 5 10 0" stroke-width="2"/>`;
    }
  }
  /* Porcio. o: x, y (el suelo bajo su panza), s, izq, echado, ojos, boca, lodo, sudor, rot, color */
  function cerdo(L, o) {
    var s = o.s || 1, fx = o.izq ? -s : s;
    var P = o.color || '#f6b6c8', P2 = '#efa0b9', P3 = '#ea8aa8';
    var c = '', hx, hy;
    if (o.echado) {
      if (o.charco !== false) c += `<ellipse cx="2" cy="-3" rx="80" ry="13" fill="${LODO}" stroke-width="2"/>`;
      c += `<path d="M-49 -30 q-13 -3 -11 -13 q3 -7 9 -2 q4 5 -3 8" stroke-width="2.2"/>`;
      c += `<ellipse cx="-2" cy="-25" rx="52" ry="23" fill="${P}"/>`;
      c += `<path d="M-53 -14 q9 -7 18 -2 q8 -7 18 -1 q9 -7 19 0 q9 -6 18 0 q9 -5 16 2 L50 -2 L-53 -2 Z" fill="${LODO}" stroke="none"/>`;
      hx = 44; hy = -36;
    } else {
      c += `<rect x="-36" y="-23" width="11" height="23" rx="4" fill="${P2}"/><rect x="17" y="-23" width="11" height="23" rx="4" fill="${P2}"/>`;
      c += `<path d="M-49 -47 q-14 -4 -11 -15 q4 -8 10 -2 q4 6 -4 9" stroke-width="2.2"/>`;
      c += `<ellipse cx="0" cy="-43" rx="47" ry="29" fill="${P}"/>`;
      c += `<rect x="-21" y="-23" width="11" height="23" rx="4" fill="${P}"/><rect x="31" y="-23" width="11" height="23" rx="4" fill="${P}"/>`;
      c += `<path d="M-21 -6 h11 M31 -6 h11 M-36 -6 h11 M17 -6 h11" stroke-width="1.6"/>`;
      hx = 40; hy = -55;
    }
    if (o.lodo) c += `<g fill="${LODO}" stroke="none" opacity=".9"><ellipse cx="-22" cy="${hy + 22}" rx="10" ry="6"/><ellipse cx="4" cy="${hy + 36}" rx="13" ry="5"/><ellipse cx="-34" cy="${hy + 42}" rx="7" ry="4"/><ellipse cx="22" cy="${hy + 20}" rx="5" ry="4"/></g>`;
    c += `<path d="M${hx - 17} ${hy - 13} l0 -20 l16 11 z" fill="${P2}"/>`;
    c += `<circle cx="${hx}" cy="${hy}" r="23" fill="${P}"/>`;
    c += `<path d="M${hx + 1} ${hy - 19} l10 -17 l8 17 z" fill="${P2}"/>`;
    c += `<ellipse cx="${hx + 20}" cy="${hy + 4}" rx="11" ry="9" fill="${P3}"/>`;
    c += `<ellipse cx="${hx + 17}" cy="${hy + 4}" rx="1.7" ry="2.8" fill="${TINTA}" stroke="none"/><ellipse cx="${hx + 23}" cy="${hy + 4}" rx="1.7" ry="2.8" fill="${TINTA}" stroke="none"/>`;
    c += `<ellipse cx="${hx + 4}" cy="${hy + 10}" rx="5" ry="3.2" fill="#ef89a9" stroke="none" opacity=".7"/>`;
    c += ojosCerdo(hx, hy, o.ojos || 'abiertos');
    c += bocaCerdo(hx, hy, o.boca || 'sonrisa');
    if (o.lodo) c += `<ellipse cx="${hx - 9}" cy="${hy + 12}" rx="5" ry="3.5" fill="${LODO}" stroke="none"/>`;
    if (o.sudor) c += `<path d="M${hx - 25} ${hy - 26} q-6 9 0 11 q6 -2 0 -11z" fill="#a9dcf4" stroke-width="1.6"/>`;
    if (o.granos) c += `<g fill="#f2d27a" stroke-width="1"><circle cx="${hx + 8}" cy="${hy + 12}" r="2.2"/><circle cx="${hx + 14}" cy="${hy + 18}" r="2"/><circle cx="${hx - 2}" cy="${hy + 6}" r="2"/></g>`;
    L.dib(`<g transform="translate(${o.x} ${o.y}) rotate(${o.rot || 0}) scale(${fx} ${s})">${c}</g>`);
    return { cabeza: [n(o.x + hx * fx), n(o.y + hy * s)] };
  }

  function gallina(L, o) {
    var s = o.s || 1, fx = o.izq ? -s : s, c = '', B = '#fff8ec';
    c += `<path d="M-4 -10 v10 m-5 0 h10 M6 -10 v10 m-4 0 h9" stroke="#d98e2a" stroke-width="2.3"/>`;
    c += `<path d="M-15 -25 q-13 -9 -9 -24 q6 7 11 9 q-4 -11 3 -17 q4 10 9 15" fill="${B}"/>`;
    c += `<ellipse cx="0" cy="-22" rx="18" ry="14" fill="${B}"/>`;
    c += `<circle cx="13" cy="-39" r="9" fill="${B}"/>`;
    c += `<path d="M7 -47 q0 -8 5 -4 q2 -8 6 -2 q5 -5 5 3" fill="#e2533f" stroke-width="1.8"/>`;
    c += `<path d="M21 -41 l9 2.5 l-9 3.5 z" fill="#f2a33a" stroke-width="1.6"/>`;
    c += `<path d="M20 -35 q4 6 -1 7 q-3 -4 1 -7" fill="#e2533f" stroke-width="1.4"/>`;
    c += `<circle cx="15" cy="-41" r="1.8" fill="${TINTA}" stroke="none"/>`;
    if (o.lentes) c += `<circle cx="15" cy="-41" r="4.4" stroke-width="1.5"/><path d="M11 -42 l-7 -1" stroke-width="1.4"/>`;
    if (o.senala) c += `<path d="M2 -27 Q16 -36 40 -37 L39 -31 Q20 -28 5 -19 Z" fill="${B}"/><path d="M31 -36 l7 -1 M32 -32 l7 0" stroke-width="1.4"/>`;
    else c += `<path d="M-8 -25 q9 -8 17 1 q-7 7 -17 -1z" fill="#f4e6cf"/>`;
    if (o.tabla) c += `<path d="M6 -24 q8 -2 15 -6" stroke-width="2"/><rect x="20" y="-34" width="16" height="21" rx="2" fill="#fff" stroke-width="1.8"/><rect x="24.5" y="-36" width="7" height="4" rx="1" fill="#c9ccd6" stroke-width="1.2"/><path d="M23 -28 h10 M23 -24 h10 M23 -20 h7" stroke-width="1.2"/>`;
    L.dib(`<g transform="translate(${o.x} ${o.y}) scale(${fx} ${s})">${c}</g>`);
    return { cabeza: [n(o.x + 13 * fx), n(o.y - 39 * s)], punta: [n(o.x + 40 * fx), n(o.y - 34 * s)] };
  }

  /* Una persona de frente. mi y md: dónde quedan las manos, en coordenadas propias. */
  function persona(L, o) {
    var s = o.s || 1, fx = o.izq ? -s : s, c = '';
    var piel = o.piel || PIEL[0], ropa = o.ropa || '#86b9d9', pant = o.pant || '#56638f', pelo = o.pelo || '#3b2a20';
    var mi = o.mi || [-22, -50], md = o.md || [22, -50];
    if (!o.sinPiernas) {
      c += `<ellipse cx="-9" cy="-3" rx="8.5" ry="4.2" fill="#5b4636"/><ellipse cx="9" cy="-3" rx="8.5" ry="4.2" fill="#5b4636"/>`;
      if (o.falda) c += `<path d="M-9 -26 V-7 M9 -26 V-7" stroke-width="6.5"/><path d="M-9 -26 V-7 M9 -26 V-7" stroke="${piel}" stroke-width="3.6"/><path d="M-14 -52 Q-19 -36 -22 -20 L22 -20 Q19 -36 14 -52 Z" fill="${o.falda}"/>`;
      else c += `<path d="M-14 -52 L-13 -6 L-3 -6 L0 -36 L3 -6 L13 -6 L14 -52 Z" fill="${pant}"/>`;
    }
    c += `<path d="M-17 -88 Q-21 -68 -15 -48 L15 -48 Q21 -68 17 -88 Q0 -95 -17 -88 Z" fill="${ropa}"/>`;
    if (o.toga) c += `<path d="M-18 -89 Q-26 -50 -22 ${o.sinPiernas ? -46 : -4} L22 ${o.sinPiernas ? -46 : -4} Q26 -50 18 -89 Q0 -96 -18 -89 Z" fill="#fffaf0"/><path d="M-16 -86 L14 -50 M-6 -90 L18 -62" stroke="#d9cbb0" stroke-width="1.6"/>`;
    if (o.bata) c += `<path d="M-19 -89 Q-24 -58 -21 ${o.sinPiernas ? -46 : -22} L21 ${o.sinPiernas ? -46 : -22} Q24 -58 19 -89 Q0 -96 -19 -89 Z" fill="#fbfbf6"/><path d="M0 -91 V${o.sinPiernas ? -46 : -22} M-8 -90 L0 -75 L8 -90" stroke-width="1.6"/>`;
    if (o.mandil) c += `<path d="M-12 -80 Q-14 -60 -16 -26 L16 -26 Q14 -60 12 -80 Z" fill="#fffdf4"/><path d="M-15 -31 H15" stroke="${ROSA}" stroke-width="2"/><path d="M-6 -64 h12 v10 h-12z" stroke-width="1.4"/>`;
    if (o.manchas) c += `<g fill="${LODO}" stroke="none"><ellipse cx="-10" cy="-58" rx="5" ry="3"/><ellipse cx="9" cy="-68" rx="3.5" ry="2.5"/><ellipse cx="5" cy="-52" rx="6" ry="3"/></g>`;
    if (o.estetoscopio) c += `<path d="M-7 -90 Q-11 -70 -2 -66 Q7 -64 6 -76 Q6 -86 7 -90" stroke="#5a5a66" stroke-width="2"/><circle cx="-2" cy="-66" r="3.2" fill="#bdbdc7" stroke-width="1.4"/>`;
    if (o.diana) c += `<circle cx="0" cy="-70" r="13" fill="${ROSA}" stroke-width="1.6"/><circle cx="0" cy="-70" r="8.5" fill="#fff" stroke="none"/><circle cx="0" cy="-70" r="4" fill="${ROSA}" stroke="none"/>`;
    if (o.corazon) c += `<path d="M0 -62 q-12 -9 -8 -16 q4 -6 8 1 q4 -7 8 -1 q4 7 -8 16z" fill="${ROSA}" stroke-width="1.4"/><path d="M-16 -74 l-6 -3 M16 -74 l6 -3 M0 -86 v-6" stroke="${ROSA}" stroke-width="1.8"/>`;
    var manga = o.bata ? '#fbfbf6' : (o.toga ? '#fffaf0' : ropa);
    function brazo(h, lado) {
      var sx = lado * 15, sy = -84, ex = (sx + h[0]) / 2 + lado * 7, ey = (sy + h[1]) / 2 + 7;
      var d = `M${sx} ${sy} Q${n(ex)} ${n(ey)} ${h[0]} ${h[1]}`;
      return `<path d="${d}" stroke-width="9.5"/><path d="${d}" stroke="${manga}" stroke-width="6"/><circle cx="${h[0]}" cy="${h[1]}" r="4.6" fill="${piel}" stroke-width="1.8"/>`;
    }
    c += brazo(mi, -1) + brazo(md, 1);
    c += `<circle cx="0" cy="-106" r="14" fill="${piel}"/>`;
    var p = o.peinado || 'corto';
    var gorro = `<path d="M-14 -106 Q-15 -122 0 -122 Q15 -122 14 -106 Q9 -114 0 -114 Q-9 -114 -14 -106 Z" fill="${pelo}"/>`;
    if (p === 'corto') c += `<path d="M-14 -108 Q-15 -123 0 -123 Q15 -123 14 -108 Q8 -116 0 -116 Q-8 -116 -14 -108 Z" fill="${pelo}"/>`;
    if (p === 'chongo') c += `<circle cx="0" cy="-124" r="7" fill="${pelo}"/>` + gorro;
    if (p === 'cola') c += `<path d="M10 -116 q16 4 12 26 q-6 -10 -12 -14" fill="${pelo}"/>` + gorro;
    if (p === 'largo') c += `<path d="M-14 -108 Q-18 -86 -16 -80 L-8 -82 L-10 -104 M14 -108 Q18 -86 16 -80 L8 -82 L10 -104" fill="${pelo}"/>` + gorro;
    var cara = o.cara || 'feliz';
    c += `<circle cx="-5" cy="-107" r="1.9" fill="${TINTA}" stroke="none"/><circle cx="5" cy="-107" r="1.9" fill="${TINTA}" stroke="none"/>`;
    if (cara === 'feliz') c += `<path d="M-5 -100 q5 4 10 0" stroke-width="1.8"/>`;
    if (cara === 'seria') c += `<path d="M-4 -99 h8" stroke-width="1.8"/>`;
    if (cara === 'triste') c += `<path d="M-5 -97 q5 -4 10 0" stroke-width="1.8"/>`;
    if (cara === 'enojada') c += `<path d="M-9 -113 l7 3 M9 -113 l-7 3" stroke-width="1.8"/><path d="M-5 -97 q5 -4 10 0" stroke-width="1.8"/>`;
    if (cara === 'sorpresa') c += `<path d="M-9 -114 q4 -3 7 -1 M9 -114 q-4 -3 -7 -1" stroke-width="1.6"/><ellipse cx="0" cy="-99" rx="3" ry="3.8" fill="#7a2943" stroke-width="1.4"/>`;
    if (cara === 'grita') c += `<path d="M-9 -113 l7 3 M9 -113 l-7 3" stroke-width="1.8"/><path d="M-6 -101 q6 9 12 0 z" fill="#7a2943" stroke-width="1.6"/>`;
    if (o.bigote) c += `<path d="M-8 -101 q4 -4 8 0 q4 -4 8 0 q-4 3 -8 0 q-4 3 -8 0z" fill="#3b2a20" stroke-width="1.2"/>`;
    if (o.barba) c += `<path d="M-13 -102 Q-12 -84 0 -82 Q12 -84 13 -102 Q6 -94 0 -96 Q-6 -94 -13 -102 Z" fill="${pelo}"/>`;
    if (o.lentes) c += `<circle cx="-5" cy="-107" r="4.4" stroke-width="1.5"/><circle cx="5" cy="-107" r="4.4" stroke-width="1.5"/>`;
    if (o.laurel) c += `<path d="M-15 -112 q15 -14 30 0" stroke="#5f9e4f" stroke-width="2"/><g fill="#8cc47a" stroke-width="1.2"><ellipse cx="-12" cy="-117" rx="4" ry="2.2" transform="rotate(-40 -12 -117)"/><ellipse cx="-5" cy="-122" rx="4" ry="2.2" transform="rotate(-15 -5 -122)"/><ellipse cx="5" cy="-122" rx="4" ry="2.2" transform="rotate(15 5 -122)"/><ellipse cx="12" cy="-117" rx="4" ry="2.2" transform="rotate(40 12 -117)"/></g>`;
    if (o.gorra) c += `<path d="M-14 -112 Q-14 -126 0 -126 Q14 -126 14 -112 Z" fill="${o.gorra}"/><path d="M8 -112 h17" stroke-width="3.6"/>`;
    L.dib(`<g transform="translate(${o.x} ${o.y}) scale(${fx} ${s})">${c}</g>`);
    if (o.sombrero) sombrero(L, o.x, n(o.y - 117 * s), 0, s);
    return { mi: [n(o.x + mi[0] * fx), n(o.y + mi[1] * s)], md: [n(o.x + md[0] * fx), n(o.y + md[1] * s)], cabeza: [o.x, n(o.y - 106 * s)] };
  }

  function vaca(L, x, y, s, izq) {
    var f = izq ? -s : s, c = '';
    c += `<rect x="-44" y="-40" width="12" height="40" rx="3" fill="#f1ede4"/><rect x="18" y="-40" width="12" height="40" rx="3" fill="#f1ede4"/>`;
    c += `<path d="M-56 -78 q-14 10 -10 40" stroke-width="2.2"/><path d="M-70 -40 q4 -9 8 0 q-2 8 -8 0" fill="${TINTA}"/>`;
    c += `<path d="M-58 -84 Q-60 -40 -40 -38 L36 -38 Q56 -40 54 -84 Q50 -100 0 -98 Q-54 -100 -58 -84 Z" fill="#fff"/>`;
    c += `<path d="M-40 -92 q14 -4 18 8 q-4 14 -18 8 q-8 -8 0 -16z M4 -72 q16 -6 20 6 q-2 12 -16 8 q-10 -6 -4 -14z M-30 -60 q8 -4 12 4 q-4 8 -12 2z" fill="${TINTA}" stroke="none"/>`;
    c += `<path d="M-6 -40 q8 14 18 0" fill="#f7b9cc"/>`;
    c += `<rect x="-32" y="-40" width="12" height="40" rx="3" fill="#fff"/><rect x="31" y="-40" width="12" height="40" rx="3" fill="#fff"/>`;
    c += `<path d="M-32 -6 h12 M31 -6 h12 M-44 -6 h12 M18 -6 h12" stroke-width="3"/>`;
    c += `<path d="M52 -96 l-8 -12 M72 -96 l8 -12" stroke-width="3"/>`;
    c += `<ellipse cx="44" cy="-90" rx="9" ry="5" fill="#fff" transform="rotate(-20 44 -90)"/><ellipse cx="80" cy="-90" rx="9" ry="5" fill="#fff" transform="rotate(20 80 -90)"/>`;
    c += `<path d="M48 -98 Q62 -104 76 -98 L78 -66 Q62 -56 46 -66 Z" fill="#fff"/>`;
    c += `<ellipse cx="62" cy="-64" rx="17" ry="11" fill="#f7b9cc"/><ellipse cx="56" cy="-64" rx="2" ry="3" fill="${TINTA}" stroke="none"/><ellipse cx="68" cy="-64" rx="2" ry="3" fill="${TINTA}" stroke="none"/>`;
    c += `<circle cx="55" cy="-84" r="2.4" fill="${TINTA}" stroke="none"/><circle cx="69" cy="-84" r="2.4" fill="${TINTA}" stroke="none"/>`;
    L.dib(`<g transform="translate(${x} ${y}) scale(${f} ${s})">${c}</g>`);
  }

  function caritaCerdo(L, cx, cy, r) {
    var s = '';
    s += `<path d="M${cx - r * 0.8} ${cy - r * 0.55} l-3 ${-r * 0.7} l${r * 0.65} ${r * 0.35} z M${cx + r * 0.8} ${cy - r * 0.55} l3 ${-r * 0.7} l${-r * 0.65} ${r * 0.35} z" fill="#efa0b9" stroke-width="1.6"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#f6b6c8" stroke-width="1.8"/>`;
    s += `<ellipse cx="${cx}" cy="${cy + r * 0.25}" rx="${r * 0.42}" ry="${r * 0.3}" fill="#ea8aa8" stroke-width="1.5"/><circle cx="${cx - r * 0.14}" cy="${cy + r * 0.25}" r="1.3" fill="${TINTA}" stroke="none"/><circle cx="${cx + r * 0.14}" cy="${cy + r * 0.25}" r="1.3" fill="${TINTA}" stroke="none"/>`;
    s += `<path d="M${cx - r * 0.5} ${cy - r * 0.25} q${r * 0.12} ${-r * 0.2} ${r * 0.24} 0 M${cx + r * 0.26} ${cy - r * 0.25} q${r * 0.12} ${-r * 0.2} ${r * 0.24} 0" stroke-width="1.5"/>`;
    s += `<path d="M${cx - r * 0.3} ${cy + r * 0.62} q${r * 0.3} ${r * 0.22} ${r * 0.6} 0" stroke-width="1.5"/>`;
    s += `<circle cx="${cx - 7}" cy="${cy - r - 5}" r="6.5" fill="#fff" stroke-width="1.6"/><circle cx="${cx + 7}" cy="${cy - r - 5}" r="6.5" fill="#fff" stroke-width="1.6"/><circle cx="${cx}" cy="${cy - r - 9}" r="7.5" fill="#fff" stroke-width="1.6"/><rect x="${cx - 9}" y="${cy - r - 4}" width="18" height="6" rx="2" fill="#fff" stroke-width="1.6"/>`;
    L.dib(s);
  }

  function cubeta(L, x, y, rotulo) {
    L.dib(`<path d="M${x - 17} ${y + 12} Q${x} ${y - 8} ${x + 17} ${y + 12}" stroke-width="2"/><path d="M${x - 17} ${y + 12} L${x + 17} ${y + 12} L${x + 13} ${y + 44} L${x - 13} ${y + 44} Z" fill="#b9c4cc"/><path d="M${x - 16} ${y + 18} H${x + 16}" stroke-width="1.4"/>`);
    L.dib(`<path d="M${x - 26} ${y + 6} q-4 8 0 16 M${x + 26} ${y + 6} q4 8 0 16 M${x - 32} ${y + 2} q-5 12 0 24" stroke="${GRIS}" stroke-width="1.8"/>`);
    tx(L, x, y + 34, rotulo, { fs: 9.5 });
  }

  function elote(L, x, y, rot, s, mordido) {
    s = s || 1;
    var c = `<path d="M0 -16 Q8 -14 7 0 Q8 14 0 16 Q-8 14 -7 0 Q-8 -14 0 -16 Z" fill="#f6d55c"/>`;
    if (mordido) c += `<path d="M7 -6 q-5 3 0 6 q-5 3 0 6" fill="#fff6d8" stroke-width="1.4"/>`;
    c += `<path d="M-3 -9 h6 M-4 -3 h8 M-4 3 h8 M-3 9 h6" stroke="#d7b33c" stroke-width="1.3"/>`;
    c += `<path d="M-2 14 Q-14 20 -12 30 Q-4 24 0 16 M2 14 Q14 20 12 30 Q4 24 0 16" fill="#a8cf7f" stroke-width="1.6"/>`;
    L.dib(`<g transform="translate(${x} ${y}) rotate(${rot || 0}) scale(${s})">${c}</g>`);
  }
  function hoja(L, x, y, rot) {
    L.dib(`<path d="M${x} ${y} q14 -10 30 -2 q-16 8 -30 2z" fill="#c3dc9a" stroke-width="1.6" transform="rotate(${rot || 0} ${x} ${y})"/>`);
  }

  /* ============================================================
     LA TIRA: Porcio, el cerdo que habla latín (8 viñetas, 400 × 300)
     ============================================================ */
  function vCarpe() {
    var L = new Lienzo(400, 300);
    fondo(L, { sol: true });
    cerca(L, 254, 400, 212, 58);
    var p = cerdo(L, { x: 158, y: 258, s: 1.12, echado: true, ojos: 'lentes', boca: 'sonrisa' });
    L.dib(`<path d="M266 236 l4 26 h16 l4 -26 z" fill="#d94a76" fill-opacity=".85"/><path d="M266 236 h24" stroke-width="2"/><path d="M282 238 l9 -20 l6 2" stroke="#3aa0c8" stroke-width="2.6"/>`);
    var g = gallina(L, { x: 368, y: 155, s: 1.15, izq: true });
    globo(L, { x: 210, y: 16, w: 182, h: 68, cola: [g.cabeza[0] - 6, g.cabeza[1] - 12], lineas: ['Porcio, ¿no te', 'preocupa el futuro?'], fs: 18 });
    globo(L, { x: 24, y: 96, w: 142, h: 48, cola: [p.cabeza[0] - 12, p.cabeza[1] - 20], lineas: ['¿Cuál futuro?'], fs: 20 });
    marco(L);
    return L.svg('Porcio toma el sol en el charco de lodo, con lentes oscuros y un vaso de agua de jamaica. La gallina, desde la cerca, le pregunta si no le preocupa el futuro. Porcio contesta: ¿cuál futuro?');
  }

  function vMemento() {
    var L = new Lienzo(400, 300);
    fondo(L, {});
    L.dib(`<rect x="252" y="140" width="9" height="90" fill="#b48a5e"/><rect x="352" y="140" width="9" height="90" fill="#b48a5e"/>`);
    L.dib(`<rect x="212" y="18" width="184" height="128" rx="6" fill="#fff4dc"/><rect x="220" y="26" width="168" height="112" rx="4" stroke="#c0392b" stroke-width="1.6"/>`);
    tx(L, 304, 56, 'CARNITAS', { fs: 27, c: '#b8332a', ls: 1.5 });
    caritaCerdo(L, 304, 98, 15);
    tx(L, 304, 132, '«El Cerdito Feliz» · domingos', { fs: 13.5 });
    cerca(L, -6, 196, 214, 50);
    var p = cerdo(L, { x: 118, y: 270, s: 1.1, ojos: 'asustados', boca: 'o', sudor: true });
    globo(L, { x: 14, y: 20, w: 182, h: 78, piensa: true, cola: [p.cabeza[0] - 8, p.cabeza[1] - 30], lineas: ['Ese se parece', 'a mi primo…'], fs: 18 });
    marco(L);
    return L.svg('Porcio, asustado y sudando, mira el letrero de una carnicería: CARNITAS «El Cerdito Feliz», con un cerdito sonriente y gorro de cocinero. Porcio piensa: ese se parece a mi primo.');
  }

  function vNonGrata() {
    var L = new Lienzo(400, 300);
    fondo(L, {});
    L.dib(`<rect x="-10" y="46" width="196" height="170" fill="#f1dfc2"/>`);
    L.dib(`<path d="M-10 48 L196 48 L208 30 L-10 30 Z" fill="#cf7a52"/><path d="M14 30 v18 M44 30 v18 M74 30 v18 M104 30 v18 M134 30 v18 M164 30 v18" stroke-width="1.4"/>`);
    L.dib(`<rect x="40" y="96" width="92" height="120" fill="#fbf7ee"/><path d="M40 198 H132 M40 180 H132 M70 180 V216 M102 180 V216" stroke="#d9d2c4" stroke-width="1.4"/>`);
    L.dib(`<path d="M54 206 l3 -6 l3 6 l-3 6 z M120 190 l3 -6 l3 6 l-3 6 z" fill="#bfe6f6" stroke-width="1.2"/>`);
    L.dib(`<path d="M132 96 L158 104 L158 222 L132 216 Z" fill="#9b6a43"/><circle cx="152" cy="160" r="2.6" fill="${TINTA}" stroke="none"/>`);
    var dc = persona(L, { x: 82, y: 214, s: 0.92, piel: PIEL[1], ropa: '#7c5ea8', mandil: true, peinado: 'chongo', pelo: '#4a3a33', cara: 'grita', mi: [-18, -56], md: [26, -78] });
    L.dib(`<path d="M${dc.md[0]} ${dc.md[1] - 30} L${dc.md[0] + 5} 208" stroke="#b08a5a" stroke-width="4"/><path d="M${dc.md[0] - 6} 204 q11 -8 22 0 l2 9 h-26z" fill="#e8e3d6"/>`);
    L.dib(`<path d="M164 216 L180 160 L196 216 Z" fill="#f7d248"/>`);
    tx(L, 180, 194, ['PISO', 'MOJADO'], { fs: 8.5 });
    L.dib(`<g fill="${LODO}" stroke="none"><ellipse cx="392" cy="278" rx="5" ry="3"/><ellipse cx="372" cy="268" rx="5" ry="3"/><ellipse cx="396" cy="258" rx="4" ry="2.6"/></g>`);
    var p = cerdo(L, { x: 300, y: 270, s: 1.05, izq: true, lodo: true, ojos: 'pillo', boca: 'sonrisa' });
    globo(L, { x: 8, y: 4, w: 190, h: 62, cola: [dc.cabeza[0] + 8, dc.cabeza[1] - 16], lineas: ['¡Vade retro, cochino!', 'Acabo de trapear.'], fs: 17 });
    globo(L, { x: 232, y: 100, w: 150, h: 44, cola: [p.cabeza[0] + 8, p.cabeza[1] - 20], lineas: ['¿Puedo pasar?'], fs: 19 });
    marco(L);
    return L.svg('Doña Cuca, con mandil y trapeador, le grita desde la puerta de la cocina recién trapeada: ¡Vade retro, cochino! Acabo de trapear. Porcio, embarrado de lodo y con cara de inocente, pregunta: ¿puedo pasar?');
  }

  function vAdHominem() {
    var L = new Lienzo(400, 300);
    fondo(L, {});
    cerca(L, -6, 406, 206, 48);
    comedero(L, 150, 238, 112);
    L.dib(`<g fill="#f3dc9a" stroke-width="1.6"><ellipse cx="180" cy="238" rx="15" ry="5"/><ellipse cx="206" cy="235" rx="15" ry="5"/><ellipse cx="232" cy="238" rx="15" ry="5"/></g><g fill="#fff" stroke="none"><circle cx="176" cy="236" r="1.3"/><circle cx="208" cy="233" r="1.3"/><circle cx="230" cy="236" r="1.3"/><circle cx="214" cy="236" r="1.2"/></g>`);
    L.dib(`<path d="M268 270 q-6 -30 4 -42 q14 -6 26 0 q8 14 2 42 z" fill="#f3efe6"/><path d="M276 230 q10 6 20 0" stroke-width="1.6"/>`);
    tx(L, 286, 256, 'AZÚCAR', { fs: 9.5 });
    var p = cerdo(L, { x: 92, y: 272, s: 1.05, ojos: 'abiertos', boca: 'llena' });
    var g = gallina(L, { x: 346, y: 272, s: 1.3, izq: true, lentes: true, tabla: true });
    globo(L, { x: 192, y: 12, w: 200, h: 66, cola: [g.cabeza[0] - 2, g.cabeza[1] - 14], lineas: ['Porcio, tanta tortilla', 'con azúcar te hace daño.'], fs: 16.5 });
    globo(L, { x: 10, y: 86, w: 188, h: 84, cola: [p.cabeza[0] + 6, p.cabeza[1] - 22], lineas: ['¿Y tú qué sabes', 'de comida, si ni', 'dientes tienes?'], fs: 18 });
    marco(L);
    return L.svg('La gallina, con lentes y tabla de apuntes, le dice a Porcio que tanta tortilla con azúcar le hace daño. Porcio, con la boca llena, le contesta: ¿y tú qué sabes de comida, si ni dientes tienes?');
  }

  function vIpso() {
    var L = new Lienzo(400, 300);
    fondo(L, {});
    comedero(L, 160, 244, 132);
    L.dib(`<g fill="#efe5d2" stroke="#b9a783" stroke-width="1.8"><circle cx="378" cy="228" r="22"/><circle cx="396" cy="200" r="18"/><circle cx="356" cy="252" r="15"/><circle cx="398" cy="258" r="20"/></g>`);
    L.dib(`<path d="M318 196 h40 M326 210 h44 M330 274 h34" stroke="#b9a783" stroke-width="2"/>`);
    cerdo(L, { x: 330, y: 258, s: 0.8, izq: true, ojos: 'cerrados', boca: 'sonrisa', color: '#f3b0c4' });
    cerdo(L, { x: 262, y: 278, s: 0.95, izq: true, ojos: 'abiertos', boca: 'o' });
    cerdo(L, { x: 312, y: 290, s: 0.72, izq: true, ojos: 'cerrados', boca: 'sonrisa', color: '#f8c3d2' });
    var dc = persona(L, { x: 82, y: 282, s: 1.05, piel: PIEL[1], ropa: '#d4684a', peinado: 'corto', bigote: true, cara: 'sorpresa', mi: [-24, -60], md: [30, -80] });
    sombrero(L, dc.cabeza[0] - 18, dc.cabeza[1] - 34, -24, 1.05);
    L.dib(`<path d="M${dc.cabeza[0] - 2} ${dc.cabeza[1] - 46} q8 -4 14 2 M${dc.cabeza[0] + 6} ${dc.cabeza[1] - 36} q8 -4 14 2" stroke="${GRIS}" stroke-width="1.8"/>`);
    cubeta(L, dc.md[0] + 4, dc.md[1] + 2, 'MAÍZ');
    globo(L, { x: 10, y: 10, w: 178, h: 66, cola: [dc.cabeza[0] + 20, dc.cabeza[1] - 40], lineas: ['¡Cochi, cochi,', 'co…!'], fs: 20 });
    tx(L, 314, 150, '¡FIUUUM!', { fs: 27, c: ROSA, rot: -8 });
    marco(L);
    return L.svg('Don Chema sacude la cubeta del maíz y apenas alcanza a gritar «¡cochi, cochi, co…!» cuando los tres cerdos ya llegaron al comedero en una nube de polvo, ¡fiuuum!, y a él se le vuela el sombrero.');
  }

  function vInSitu() {
    var L = new Lienzo(400, 300);
    fondo(L, {});
    var v = persona(L, { x: 92, y: 322, s: 1.22, sinPiernas: true, bata: true, manchas: true, estetoscopio: true, piel: PIEL[0], ropa: '#9ccfc0', peinado: 'cola', pelo: '#5a3a28', cara: 'seria', mi: [-26, -58], md: [44, -52] });
    charco(L, 214, 270, 182, 26);
    var p = cerdo(L, { x: 214, y: 284, s: 1.1, echado: true, charco: false, ojos: 'medio', boca: 'plana', sudor: true });
    L.dib(`<path d="M${v.md[0] - 2} ${v.md[1] + 2} q-14 -6 -26 -30" stroke="#5a5a66" stroke-width="2"/><circle cx="${v.md[0] + 3}" cy="${v.md[1] + 4}" r="4.4" fill="#bdbdc7" stroke-width="1.6"/>`);
    L.dib(`<rect x="306" y="216" width="80" height="50" rx="7" fill="#7a4b2f"/><path d="M333 216 q13 -16 26 0" stroke-width="3"/><rect x="313" y="227" width="66" height="31" rx="3" fill="#f6efe3" stroke-width="1.4"/>`);
    tx(L, 346, 240, ['PRIMUM', 'NON NOCERE'], { fs: 10.5, lh: 1.1 });
    globo(L, { x: 8, y: 10, w: 186, h: 66, cola: [v.cabeza[0] + 6, v.cabeza[1] - 20], lineas: ['¿De veras no puedes', 'salir del lodo?'], fs: 17.5 });
    globo(L, { x: 200, y: 92, w: 192, h: 66, cola: [p.cabeza[0] + 4, p.cabeza[1] - 22], lineas: ['Consulta a domicilio,', 'doctora.'], fs: 17.5 });
    marco(L);
    return L.svg('La veterinaria, con la bata manchada, se hinca en el lodo para revisar a Porcio, que no quiere salir del charco. Ella pregunta: ¿de veras no puedes salir del lodo? Él contesta: consulta a domicilio, doctora. En su maletín dice PRIMUM NON NOCERE.');
  }

  function vVox() {
    var L = new Lienzo(400, 300);
    fondo(L, {});
    for (var k = 0; k < 8; k++) {
      var x = 18 + k * 52, alto = 96 + (k % 3) * 12;
      L.dib(`<path d="M${x} 214 L${x + 3} ${214 - alto}" stroke="#6e9e4f" stroke-width="3"/><path d="M${x + 1} ${200 - alto / 3} q14 -10 24 -2 M${x + 2} ${210 - alto / 1.6} q-14 -10 -24 -2 M${x + 2} ${220 - alto} q10 -8 18 -2" stroke="#6e9e4f" stroke-width="2.2"/>`);
    }
    var dc = persona(L, { x: 62, y: 282, s: 1.02, piel: PIEL[2], ropa: '#d4684a', sombrero: true, bigote: true, cara: 'enojada', mi: [-20, -54], md: [28, -96] });
    elote(L, dc.md[0] + 4, dc.md[1] - 14, 15, 0.9, true);
    hoja(L, 160, 282, -10); hoja(L, 238, 276, 20); hoja(L, 196, 290, 5);
    var p = cerdo(L, { x: 210, y: 280, s: 1.05, izq: true, ojos: 'pillo', boca: 'silba', granos: true });
    var g = gallina(L, { x: 330, y: 280, s: 1.25, izq: true, senala: true });
    L.dib(`<path d="M${g.punta[0] - 10} ${g.punta[1] - 6} l-14 -6 M${g.punta[0] - 10} ${g.punta[1] + 2} l-16 2" stroke="${GRIS}" stroke-width="1.8"/>`);
    cerdo(L, { x: 376, y: 266, s: 0.6, izq: true, ojos: 'abiertos', boca: 'o', color: '#f3b0c4' });
    globo(L, { x: 8, y: 8, w: 192, h: 64, cola: [dc.cabeza[0] + 8, dc.cabeza[1] - 38], lineas: ['¿Quién se comió', 'los elotes?'], fs: 18.5 });
    globo(L, { x: 110, y: 120, w: 104, h: 42, cola: [p.cabeza[0] + 4, p.cabeza[1] - 20], lineas: ['Ni idea.'], fs: 19 });
    globo(L, { x: 240, y: 70, w: 152, h: 46, cola: [g.cabeza[0] + 6, g.cabeza[1] - 14], lineas: ['¡Ecce porcus!'], fs: 19, i: true });
    marco(L);
    return L.svg('En la milpa, don Chema enseña un elote mordido y pregunta: ¿quién se comió los elotes? Porcio, con granos de maíz en el cachete y hojas de elote alrededor, silba y dice: ni idea. La gallina lo señala con el ala y grita: ¡Ecce porcus!');
  }

  function vDeus() {
    var L = new Lienzo(400, 300);
    fondo(L, { noche: true, luna: false });
    L.dib(`<path d="M214 72 L286 72 L340 274 L160 274 Z" fill="#fff0a0" fill-opacity=".45" stroke="none"/>`);
    L.dib(`<path d="M212 50 Q250 2 288 50 Z" fill="#bfe8f5"/><ellipse cx="250" cy="58" rx="80" ry="19" fill="#c8cbd6"/>`);
    L.dib(`<g fill="#ffe066" stroke-width="1.4"><circle cx="186" cy="62" r="3.6"/><circle cx="314" cy="62" r="3.6"/><circle cx="206" cy="70" r="3.4"/><circle cx="294" cy="70" r="3.4"/></g>`);
    tx(L, 250, 66, 'S·P·Q·R', { fs: 14, ls: 1 });
    cerdo(L, { x: 254, y: 218, s: 0.95, rot: -12, ojos: 'asustados', boca: 'o' });
    L.dib(`<path d="M196 160 q-8 -4 -10 -12 M310 150 q8 -4 10 -12 M208 214 q-8 2 -14 -2 M312 196 q8 2 14 -2" stroke="#fff4b8" stroke-width="2"/>`);
    var dc = persona(L, { x: 76, y: 284, s: 1.02, piel: PIEL[1], ropa: '#d4684a', sombrero: true, bigote: true, cara: 'sorpresa', mi: [-26, -48], md: [28, -66] });
    L.dib(`<ellipse cx="${dc.md[0] + 20}" cy="${dc.md[1] - 10}" rx="17" ry="11" stroke="#d6b285" stroke-width="3.2"/><path d="M${dc.md[0]} ${dc.md[1]} q8 -2 6 -6" stroke="#d6b285" stroke-width="3.2"/>`);
    L.dib(`<path d="M${dc.mi[0] - 14} ${dc.mi[1] + 2} q-4 26 4 34 q16 4 22 -2 q4 -18 -6 -32 z" fill="#d9c9a3"/>`);
    globo(L, { x: 12, y: 70, w: 132, h: 50, cola: [dc.cabeza[0] + 8, dc.cabeza[1] - 36], lineas: ['¿¡Y ora!?'], fs: 23 });
    marco(L);
    return L.svg('De noche, don Chema llega con la reata y un costal. De la nada baja un platillo volador que dice S·P·Q·R y se lleva a Porcio en un rayo de luz. Don Chema grita: ¿¡Y ora!?');
  }

  /* ============================================================
     LAS LOCUCIONES EN UN DIBUJO (480 × 300, en papel)
     ============================================================ */
  function sIpso() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M138 122 C 210 122 250 206 334 194" stroke="#a79db0" stroke-width="2.2"/>`);
    L.dib(`<rect x="62" y="76" width="76" height="114" rx="10" fill="#fff"/><rect x="88" y="102" width="24" height="62" rx="6" fill="#efe9f3"/><rect x="90" y="134" width="20" height="27" rx="4" fill="#f4d27a"/>`);
    L.dib(`<path d="M-6 142 H84 Q96 142 96 150 Q96 158 84 158 H-6 Z" fill="${PIEL[0]}"/><path d="M62 142 v16 M72 143 v14" stroke-width="1.4"/>`);
    L.dib(`<circle cx="232" cy="86" r="28" fill="#fff"/><rect x="226" y="50" width="12" height="9" rx="2" fill="#efe9f3"/><path d="M232 86 V66" stroke="${ROSA}" stroke-width="2.8"/><circle cx="232" cy="86" r="2.6" fill="${TINTA}" stroke="none"/>`);
    for (var k = 0; k <= 6; k++) {
      var a = Math.PI + k * Math.PI / 6;
      L.dib(`<path d="M${n(372 + 47 * Math.cos(a))} ${n(116 + 47 * Math.sin(a))} L${n(372 + 60 * Math.cos(a))} ${n(116 + 60 * Math.sin(a))}" stroke="#e6b23a" stroke-width="2.4"/>`);
    }
    L.dib(`<circle cx="372" cy="116" r="38" fill="#ffe680"/><path d="M356 148 h32 v26 h-32z" fill="#cfd3db"/><path d="M356 156 h32 M356 164 h32" stroke-width="1.4"/><path d="M362 174 q10 8 20 0" stroke-width="2"/><path d="M362 120 q10 -14 20 0" stroke="#d9a400" stroke-width="2"/>`);
    tx(L, 100, 226, 'aprietas', { fs: 25, c: ROSA });
    tx(L, 100, 252, 'el hecho', { fs: 17, c: GRIS });
    tx(L, 232, 142, '0 segundos', { fs: 20, c: ROSA });
    tx(L, 372, 226, 'se prende', { fs: 25, c: ROSA });
    tx(L, 372, 252, 'la consecuencia', { fs: 17, c: GRIS });
    return L.svg('Un dedo aprieta el apagador y el foco se prende en el mismo instante: el cronómetro marca cero segundos entre el hecho y la consecuencia.');
  }

  function sStatu() {
    var L = new Lienzo(480, 300, PAPEL);
    [30, 176, 322].forEach(function (x, k) {
      var y = 66;
      L.dib(`<rect x="${x}" y="${y}" width="128" height="118" rx="6" fill="#fff"/>`);
      L.dib(`<circle cx="${x + 104}" cy="${y + 24}" r="9" fill="#ffd970" stroke="#e6b23a" stroke-width="1.6"/>`);
      L.dib(`<path d="M${x + 4} ${y + 94} H${x + 124}" stroke="#b9a783" stroke-width="1.6"/>`);
      L.dib(`<rect x="${x + 18}" y="${y + 60}" width="38" height="34" fill="#f1dfc2"/><path d="M${x + 13} ${y + 62} L${x + 37} ${y + 42} L${x + 61} ${y + 62} Z" fill="#cf7a52"/><rect x="${x + 31}" y="${y + 74}" width="12" height="20" fill="#9b6a43"/>`);
      L.dib(`<path d="M${x + 94} ${y + 94} V${y + 72}" stroke="#8b5a2b" stroke-width="3"/><circle cx="${x + 94}" cy="${y + 60}" r="15" fill="#a6d08f"/>`);
      tx(L, x + 64, y - 14, ['ayer', 'hoy', 'mañana'][k], { fs: 23 });
    });
    tx(L, 167, 134, '=', { fs: 36, c: ROSA });
    tx(L, 313, 134, '=', { fs: 36, c: ROSA });
    tx(L, 240, 236, 'todo se queda como está', { fs: 26, c: ROSA });
    tx(L, 240, 264, 'quien defiende el statu quo no quiere que nada cambie', { fs: 16, c: GRIS });
    return L.svg('Tres cuadros idénticos, rotulados ayer, hoy y mañana, con la misma casa y el mismo árbol, unidos por signos de igual: todo se queda como está.');
  }

  function llave(x, y) {
    return `<circle cx="${x}" cy="${y}" r="11" fill="#e8c35a"/><circle cx="${x}" cy="${y}" r="4" fill="${PAPEL}" stroke-width="1.6"/><path d="M${x + 11} ${y - 3} H${x + 48} V${y + 3} H${x + 11} Z" fill="#e8c35a" stroke-width="1.8"/><path d="M${x + 36} ${y + 3} v7 h5 v-7 M${x + 44} ${y + 3} v5 h4 v-5" fill="#e8c35a" stroke-width="1.6"/>`;
  }
  function sSine() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M34 146 L132 86 L230 146 L132 206 Z" fill="#fff3f9"/>`);
    tx(L, 132, 140, ['¿hay', 'depósito?'], { fs: 22, lh: 1.05 });
    flecha(L, 232, 140, 318, 84, { curva: -12 });
    flecha(L, 232, 152, 318, 214, { curva: 12 });
    tx(L, 266, 96, 'sí', { fs: 24, c: JADE });
    tx(L, 266, 214, 'no', { fs: 24, c: ROJO });
    L.dib(llave(338, 66) + llave(352, 86));
    tx(L, 420, 132, 'te dan', { fs: 18 });
    tx(L, 420, 152, 'las llaves', { fs: 18 });
    L.dib(`<rect x="336" y="176" width="54" height="80" rx="3" fill="#c99d6e"/><circle cx="380" cy="218" r="2.6" fill="${TINTA}" stroke="none"/>`);
    tache(L, 363, 216, 30);
    tx(L, 440, 212, 'no hay', { fs: 18 });
    tx(L, 440, 232, 'trato', { fs: 18 });
    tx(L, 132, 262, 'sin la cual, no', { fs: 26, c: ROSA });
    return L.svg('Un diagrama: ¿hay depósito? Si sí, te dan las llaves; si no, la puerta queda cerrada y tachada: no hay trato. Sin la cual, no.');
  }

  function sAdHoc() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M360 292 Q352 226 362 168 M358 226 q-20 -20 -34 -28 M362 200 q16 -14 30 -18" stroke="#8b5a2b" stroke-width="7"/>`);
    L.dib(`<path d="${nube(262, 22, 206, 156)}" fill="#a6d08f" stroke="#6e9e4f"/>`);
    [[316, 96], [352, 62], [398, 98], [430, 70], [372, 134], [424, 132], [300, 136]].forEach(function (m, k) {
      L.dib(`<ellipse cx="${m[0]}" cy="${m[1]}" rx="8" ry="11" fill="#f5b041" stroke-width="1.6" transform="rotate(${k * 17 - 30} ${m[0]} ${m[1]})"/>`);
    });
    var p = persona(L, { x: 112, y: 288, s: 1.05, piel: PIEL[1], ropa: '#f0c75e', gorra: '#5c8fbf', cara: 'feliz', mi: [-2, -92], md: [16, -110] });
    L.dib(`<path d="M${p.mi[0] - 8} ${p.mi[1] + 16} L284 66" stroke="#b08a5a" stroke-width="5"/>`);
    L.dib(`<g transform="translate(288 60) rotate(-38)"><path d="M-11 -16 L11 -16 L13 16 Q0 23 -13 16 Z" fill="#cfeef7" fill-opacity=".95"/><path d="M-11 -16 l4 -8 M11 -16 l-4 -8 M-11 -16 h22" stroke-width="1.6"/></g>`);
    L.dib(`<ellipse cx="294" cy="50" rx="8" ry="11" fill="#f5b041" stroke-width="1.6" transform="rotate(-20 294 50)"/>`);
    tx(L, 150, 150, 'un palo', { fs: 20, c: ROSA });
    flecha(L, 182, 144, 208, 128, { c: ROSA });
    tx(L, 176, 46, 'una botella cortada', { fs: 20, c: ROSA });
    flecha(L, 256, 52, 274, 58, { c: ROSA });
    tx(L, 246, 226, ['hecho solo para', 'bajar mangos'], { fs: 21, lh: 1.15 });
    return L.svg('Una persona baja mangos de un árbol con un palo largo que en la punta tiene una botella de plástico cortada: una herramienta hecha solo para eso.');
  }

  function sMotu() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M240 22 V284" stroke="#cbbfd6" stroke-width="2" stroke-dasharray="7 7"/>`);
    tx(L, 120, 38, 'porque te mandan', { fs: 21, c: GRIS });
    tx(L, 360, 38, 'motu proprio', { fs: 25, c: ROSA, i: true });
    L.dib(`<path d="M18 164 h38 v-15 l28 27 l-28 27 v-15 h-38 z" fill="#ffd6e9" stroke="${ROSA}"/>`);
    tx(L, 52, 224, 'te empujan', { fs: 17, c: GRIS });
    persona(L, { x: 132, y: 274, s: 0.98, ropa: '#9fb7d9', cara: 'triste', mi: [-16, -56], md: [20, -56] });
    L.dib(`<path d="M190 274 L204 150" stroke="#b08a5a" stroke-width="4"/><path d="M180 274 L200 274 L206 290 L174 290 Z" fill="#e9cf92" transform="rotate(-6 190 280)"/>`);
    var b = persona(L, { x: 352, y: 274, s: 0.98, ropa: '#f2a7c3', cara: 'feliz', corazon: true, mi: [-22, -58], md: [26, -78] });
    L.dib(`<path d="M${b.md[0]} ${b.md[1] - 40} L${b.md[0] + 8} 270" stroke="#b08a5a" stroke-width="4"/><path d="M${b.md[0] - 4} 268 L${b.md[0] + 20} 268 L${b.md[0] + 26} 286 L${b.md[0] - 10} 286 Z" fill="#e9cf92"/>`);
    tx(L, 430, 150, ['el impulso', 'sale de ti'], { fs: 17, c: ROSA });
    flecha(L, 410, 166, 372, 196, { c: ROSA, curva: 8 });
    return L.svg('A la izquierda, una persona triste va hacia la escoba porque una flecha grande la empuja: porque te mandan. A la derecha, otra toma la escoba sola y contenta, con un corazón en el pecho: motu proprio, el impulso sale de ti.');
  }

  function sGrosso() {
    var L = new Lienzo(480, 300, PAPEL);
    vaca(L, 112, 210, 1);
    L.dib(`<g stroke-width="6.5"><rect x="298" y="118" width="108" height="56" fill="#fff"/><path d="M312 174 V212 M332 174 V212 M378 174 V212 M398 174 V212"/><circle cx="420" cy="116" r="21" fill="#fff"/><path d="M410 96 l-6 -14 M430 96 l6 -14"/><circle cx="350" cy="144" r="10" fill="${TINTA}"/></g>`);
    L.dib(`<g transform="rotate(-35 452 214)"><rect x="436" y="206" width="44" height="14" rx="3" fill="${TINTA}"/><rect x="424" y="208" width="14" height="10" rx="2" fill="#555"/></g>`);
    tx(L, 122, 254, 'con detalle', { fs: 21 });
    tx(L, 356, 254, 'grosso modo', { fs: 25, c: ROSA, i: true });
    tx(L, 356, 280, 'a trazo grueso, sin detalle', { fs: 16, c: GRIS });
    return L.svg('Dos dibujos de la misma vaca: uno con detalle, con manchas, ubre y pezuñas; otro hecho con plumón grueso, un rectángulo con cuatro palitos y una cabeza redonda. El segundo es grosso modo: a trazo grueso.');
  }

  function sHabeas() {
    var L = new Lienzo(480, 300, PAPEL);
    var j = persona(L, { x: 372, y: 214, s: 1, sinPiernas: true, ropa: TINTA, peinado: 'corto', pelo: '#a8a8a8', lentes: true, cara: 'seria', mi: [-24, -62], md: [26, -72] });
    L.dib(`<path d="M${j.md[0]} ${j.md[1]} l10 -16" stroke="#8b5a2b" stroke-width="4"/><rect x="${j.md[0] + 2}" y="${j.md[1] - 28}" width="24" height="11" rx="3" fill="#a87443" transform="rotate(32 ${j.md[0] + 14} ${j.md[1] - 22})"/>`);
    L.dib(`<rect x="290" y="152" width="172" height="128" rx="4" fill="#c49a6c"/><rect x="334" y="178" width="80" height="28" rx="3" fill="#fff4dc"/>`);
    tx(L, 374, 199, 'JUEZ', { fs: 18, ls: 2 });
    var d = persona(L, { x: 196, y: 286, s: 1, ropa: '#e9d8b8', pant: '#7b6a58', cara: 'seria', peinado: 'corto', mi: [-6, -60], md: [7, -60] });
    L.dib(`<circle cx="${d.mi[0]}" cy="${d.mi[1]}" r="6" stroke="#8a8a96" stroke-width="2.4"/><circle cx="${d.md[0]}" cy="${d.md[1]}" r="6" stroke="#8a8a96" stroke-width="2.4"/>`);
    persona(L, { x: 100, y: 286, s: 1.02, ropa: '#3f5f8f', pant: '#2f3f63', gorra: '#2f3f63', cara: 'seria', mi: [-22, -52], md: [58, -70] });
    globo(L, { x: 252, y: 12, w: 216, h: 64, cola: [366, 94], lineas: ['¿Por qué lo tienen', 'detenido? A ver.'], fs: 19 });
    tx(L, 120, 40, 'que presenten', { fs: 19, c: ROSA });
    tx(L, 120, 62, 'a la persona…', { fs: 19, c: ROSA });
    tx(L, 120, 92, '…y que el juez decida', { fs: 16, c: GRIS });
    tx(L, 120, 112, 'si su detención es legal', { fs: 16, c: GRIS });
    return L.svg('Un policía lleva a una persona esposada ante el juez, que desde su estrado pregunta: ¿por qué lo tienen detenido? Que presenten a la persona y que el juez decida si su detención es legal.');
  }

  function sFraganti() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<rect x="-10" y="-10" width="500" height="320" fill="#2f3058" stroke="none"/>`);
    L.dib(`<path d="M490 -10 L490 70 L330 252 L176 252 Z" fill="#fff3b0" fill-opacity=".5" stroke="none"/>`);
    L.dib(`<rect x="120" y="238" width="300" height="14" rx="3" fill="#a3774d"/>`);
    L.dib(`<path d="M214 236 v-14 h12 v14 M276 236 v-14 h12 v14" fill="#ea8aa8"/><ellipse cx="252" cy="196" rx="58" ry="40" fill="#f39bb6"/><path d="M226 162 l-6 -14 l16 6 z" fill="#ea8aa8"/><ellipse cx="308" cy="200" rx="10" ry="12" fill="#ea8aa8"/><circle cx="306" cy="196" r="1.6" fill="${TINTA}" stroke="none"/><circle cx="306" cy="204" r="1.6" fill="${TINTA}" stroke="none"/><circle cx="288" cy="184" r="2.6" fill="${TINTA}" stroke="none"/><path d="M234 158 h28" stroke-width="4"/>`);
    L.dib(`<path d="M-10 128 Q110 120 236 146" stroke-width="16"/><path d="M-10 128 Q110 120 236 146" stroke="#7fa7d6" stroke-width="11"/><ellipse cx="244" cy="150" rx="13" ry="10" fill="${PIEL[1]}"/><circle cx="250" cy="160" r="7" fill="#f2c84b"/>`);
    L.dib(`<path d="M212 118 q-8 -12 0 -24 q8 12 0 24z M240 112 q-6 -10 0 -20 q6 10 0 20z M266 122 q-7 -11 0 -22 q7 11 0 22z" fill="#ff9a3c" stroke="#ffd39a" stroke-width="1.4"/>`);
    globo(L, { x: 300, y: 16, w: 162, h: 52, cola: [474, 0], lineas: ['¡Te caché!'], fs: 25 });
    tx(L, 110, 70, 'flagrante:', { fs: 18, c: '#ffd39a' });
    tx(L, 110, 92, '¡todavía arde!', { fs: 18, c: '#ffd39a' });
    tx(L, 240, 286, 'en el mismo momento del hecho', { fs: 21, c: '#ffd6e9' });
    return L.svg('De noche, una linterna alumbra una mano metida en la alcancía de cochinito, con unas llamitas encima. Alguien grita: ¡te caché! Fue en el mismo momento del hecho.');
  }

  function sDeFacto() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M34 34 H186 L204 52 V222 H34 Z" fill="#fff"/><path d="M186 34 V52 H204" stroke-width="1.6"/>`);
    tx(L, 119, 70, 'ACTA', { fs: 23, ls: 3 });
    tx(L, 119, 102, ['Jefe de la casa:', 'don Beto'], { fs: 18 });
    L.dib(`<path d="M52 152 H186 M52 166 H168 M52 180 H180" stroke="#cbbfd6" stroke-width="1.6"/><circle cx="164" cy="200" r="15" stroke="${ROSA}" stroke-width="2.2"/>`);
    tx(L, 164, 204, 'sello', { fs: 11, c: ROSA });
    tx(L, 119, 258, 'de iure', { fs: 26, c: ROSA, i: true });
    tx(L, 119, 282, 'lo que dice el papel', { fs: 16, c: GRIS });
    L.dib(`<path d="M258 118 Q258 88 288 88 H384 Q414 88 414 118 V186 H258 Z" fill="#c96f6f"/>`);
    var ab = persona(L, { x: 336, y: 232, s: 0.95, sinPiernas: true, ropa: '#8fa8c9', peinado: 'chongo', pelo: '#c9c9c9', lentes: true, cara: 'feliz', mi: [-22, -54], md: [24, -66] });
    L.dib(`<rect x="${ab.md[0] - 4}" y="${ab.md[1] - 18}" width="10" height="22" rx="3" fill="#444" stroke-width="1.6"/><circle cx="${ab.md[0] + 1}" cy="${ab.md[1] - 13}" r="1.6" fill="${ROJO}" stroke="none"/>`);
    L.dib(`<path d="M246 176 H426 V232 H246 Z" fill="#b65c5c"/><rect x="238" y="150" width="28" height="82" rx="10" fill="#c96f6f"/><rect x="406" y="150" width="28" height="82" rx="10" fill="#c96f6f"/>`);
    persona(L, { x: 452, y: 262, s: 0.72, ropa: '#d4684a', bigote: true, peinado: 'corto', cara: 'triste', mi: [-14, -48], md: [14, -48] });
    tx(L, 336, 258, 'de facto', { fs: 26, c: ROSA, i: true });
    tx(L, 336, 282, 'lo que pasa de hecho', { fs: 16, c: GRIS });
    return L.svg('A la izquierda, un acta dice que el jefe de la casa es don Beto: eso es de iure, lo que dice el papel. A la derecha, la abuela está en el sillón grande con el control de la tele y don Beto, chiquito, parado a un lado: de facto, lo que pasa de hecho.');
  }

  function sModus() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<rect x="18" y="14" width="444" height="238" rx="6" fill="#d9b382"/><rect x="26" y="22" width="428" height="222" rx="4" stroke="#b08a5a" stroke-width="2"/>`);
    L.dib(`<path d="M100 40 L240 196 M238 32 L240 196 M376 44 L240 196" stroke="${ROJO}" stroke-width="1.8"/>`);
    [[48, 42, -4, 'lunes'], [186, 34, 3, 'miércoles'], [324, 46, -2, 'viernes']].forEach(function (f) {
      var x = f[0], y = f[1];
      var g = `<g transform="rotate(${f[2]} ${x + 52} ${y + 58})"><rect x="${x}" y="${y}" width="104" height="116" fill="#fff"/><rect x="${x + 8}" y="${y + 8}" width="88" height="76" fill="#e8f1e0" stroke-width="1.6"/>`;
      g += `<path d="M${x + 12} ${y + 40} H${x + 38} M${x + 66} ${y + 40} H${x + 92} M${x + 12} ${y + 60} H${x + 38} M${x + 66} ${y + 60} H${x + 92} M${x + 18} ${y + 28} V${y + 78} M${x + 86} ${y + 28} V${y + 78}" stroke="#a87443" stroke-width="3"/>`;
      g += `<g fill="${TINTA}" stroke="none"><path d="M${x + 45} ${y + 76} q-3 -6 0 -9 q2 3 0 9z M${x + 50} ${y + 76} q3 -6 0 -9 q-2 3 0 9z M${x + 55} ${y + 60} q-3 -6 0 -9 q2 3 0 9z M${x + 60} ${y + 60} q3 -6 0 -9 q-2 3 0 9z"/></g>`;
      g += `<circle cx="${x + 52}" cy="${y - 1}" r="5" fill="${ROJO}"/></g>`;
      L.dib(g);
      tx(L, x + 52, y + 104, f[3] + ' · 3 a. m.', { fs: 14, rot: f[2] });
    });
    L.dib(`<rect x="168" y="178" width="144" height="46" rx="3" fill="#fff8b8"/>`);
    tx(L, 240, 208, 'mismo patrón', { fs: 22, c: ROSA });
    tx(L, 240, 280, 'mismo hoyo, misma hora, mismas pezuñas', { fs: 18, c: GRIS });
    return L.svg('Un tablero de detective con tres fotos: lunes, miércoles y viernes, siempre a las tres de la mañana, el mismo hoyo en la cerca y las mismas huellas de pezuña. Hilos rojos llevan a una tarjeta: mismo patrón.');
  }

  function sVox() {
    var L = new Lienzo(480, 300, PAPEL);
    var ropas = ['#86b9d9', '#f2a7c3', '#f0c75e', '#9ccfc0', '#c7a6e0', '#f4a582', '#a6d08f'];
    var cabezas = [[PIEL[0], '#3b2a20'], [PIEL[1], '#1f1a17'], [PIEL[2], '#2b1d14'], [PIEL[0], '#7a4b2f'], [PIEL[1], '#3b2a20'], [PIEL[2], '#1f1a17'], [PIEL[0], '#c9a36b']];
    L.dib(`<path d="M80 168 L190 92 M160 160 L210 96 M240 172 L240 98 M320 160 L270 96 M400 168 L290 92" stroke="#cbbfd6" stroke-width="2" stroke-dasharray="5 6"/>`);
    for (var k = 0; k < 7; k++) {
      var x = 50 + k * 63, y = 262 - (k % 2) * 16;
      L.dib(`<path d="M${x - 24} ${y + 30} Q${x - 22} ${y - 2} ${x} ${y - 4} Q${x + 22} ${y - 2} ${x + 24} ${y + 30} Z" fill="${ropas[k]}"/><circle cx="${x}" cy="${y - 20}" r="15" fill="${cabezas[k][0]}"/><path d="M${x - 15} ${y - 22} Q${x - 15} ${y - 37} ${x} ${y - 37} Q${x + 15} ${y - 37} ${x + 15} ${y - 22} Q${x + 8} ${y - 30} ${x} ${y - 30} Q${x - 8} ${y - 30} ${x - 15} ${y - 22} Z" fill="${cabezas[k][1]}"/><circle cx="${x - 5}" cy="${y - 20}" r="1.8" fill="${TINTA}" stroke="none"/><circle cx="${x + 5}" cy="${y - 20}" r="1.8" fill="${TINTA}" stroke="none"/><ellipse cx="${x}" cy="${y - 12}" rx="3" ry="2.6" fill="#7a2943" stroke-width="1.2"/>`);
      if (k % 2 === 0 || k === 3) {
        var bx = x, by = y - 92;
        L.dib(`<path d="M${bx - 30} ${by} h60 q6 0 6 6 v18 q0 6 -6 6 h-22 l-8 12 l-2 -12 h-28 q-6 0 -6 -6 v-18 q0 -6 6 -6z" fill="#fff"/>`);
        tx(L, bx, by + 21, 'bla bla', { fs: 15 });
      }
    }
    globo(L, { x: 120, y: 12, w: 240, h: 66, lineas: ['todo el pueblo lo sabe', 'y lo repite'], fs: 21, cola: [240, 96] });
    return L.svg('Siete personas de la plaza platican al mismo tiempo, «bla bla», y todas sus voces se juntan en un solo globo grande: todo el pueblo lo sabe y lo repite.');
  }

  function sInSitu() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M240 22 V284" stroke="#cbbfd6" stroke-width="2" stroke-dasharray="7 7"/>`);
    vaca(L, 62, 196, 0.6);
    flecha(L, 120, 150, 150, 150, { c: GRIS });
    L.dib(`<rect x="156" y="104" width="72" height="92" fill="#f1f4f7"/><path d="M150 106 L192 80 L234 106 Z" fill="#9fb7d9"/><rect x="184" y="160" width="16" height="36" fill="#9b6a43"/><path d="M192 118 v20 M182 128 h20" stroke="${ROJO}" stroke-width="4"/>`);
    tache(L, 120, 150, 54);
    tx(L, 120, 246, 'llevarla al consultorio', { fs: 18, c: GRIS });
    L.dib(`<path d="M30 240 H210" stroke="${GRIS}" stroke-width="2"/>`);
    vaca(L, 330, 214, 0.72);
    persona(L, { x: 430, y: 228, s: 0.78, bata: true, estetoscopio: true, peinado: 'cola', pelo: '#5a3a28', ropa: '#9ccfc0', cara: 'feliz', mi: [-36, -60], md: [20, -54] });
    L.dib(`<path d="M352 52 q-16 0 -16 16 q0 14 16 30 q16 -16 16 -30 q0 -16 -16 -16z" fill="${ROSA}"/><circle cx="352" cy="68" r="5.5" fill="#fff" stroke="none"/>`);
    tx(L, 392, 70, 'aquí', { fs: 21, c: ROSA });
    palomita(L, 296, 64, 16);
    tx(L, 360, 262, 'revisarla en el lugar', { fs: 21, c: ROSA });
    return L.svg('A la izquierda, tachado: llevar la vaca al consultorio. A la derecha, con palomita: la veterinaria la revisa ahí mismo, en el potrero, bajo un marcador que dice aquí.');
  }

  function sCarpe() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M168 292 Q162 232 172 174 M170 232 q-24 -18 -40 -22 M172 204 q20 -12 36 -14" stroke="#8b5a2b" stroke-width="8"/>`);
    L.dib(`<path d="${nube(40, 16, 270, 172)}" fill="#a6d08f" stroke="#6e9e4f"/>`);
    [[90, 70, 12], [142, 52, 13], [196, 66, 14], [118, 122, 16], [178, 124, 17], [236, 106, 15]].forEach(function (h) {
      L.dib(`<path d="M${h[0] + 13} ${h[1] - 10} v10" stroke="#6e9e4f" stroke-width="2"/><rect x="${h[0]}" y="${h[1]}" width="26" height="30" rx="2" fill="#fff" stroke-width="1.8"/><rect x="${h[0]}" y="${h[1]}" width="26" height="8" fill="${ROSA}" stroke-width="1.8"/>`);
      tx(L, h[0] + 13, h[1] + 25, String(h[2]), { fs: 14 });
    });
    L.dib(`<path d="M300 104 v10" stroke="#6e9e4f" stroke-width="2"/><rect x="282" y="114" width="38" height="44" rx="3" fill="#ffd6e9" stroke-width="2"/><rect x="282" y="114" width="38" height="10" fill="${ROSA}" stroke-width="2"/>`);
    tx(L, 301, 148, 'HOY', { fs: 16, c: ROSA });
    L.dib(`<path d="M490 176 Q400 170 334 146" stroke-width="15"/><path d="M490 176 Q400 170 334 146" stroke="#9fb7d9" stroke-width="10"/><ellipse cx="326" cy="142" rx="12" ry="10" fill="${PIEL[1]}"/>`);
    L.dib(`<path d="M300 246 h110 l-10 40 h-90 z" fill="#d9b382"/><path d="M306 258 h98 M310 270 h90" stroke="#b08a5a" stroke-width="1.6"/><rect x="318" y="232" width="20" height="22" rx="2" fill="#fff" stroke-width="1.6" transform="rotate(-12 328 243)"/><rect x="356" y="230" width="20" height="22" rx="2" fill="#fff" stroke-width="1.6" transform="rotate(10 366 241)"/>`);
    tx(L, 410, 40, 'carpe:', { fs: 24, c: ROSA, i: true });
    tx(L, 410, 64, 'arranca, cosecha', { fs: 17 });
    tx(L, 410, 84, '(como fruta)', { fs: 15, c: GRIS });
    tx(L, 420, 222, 'diem: el día', { fs: 20, c: ROSA, i: true });
    flecha(L, 400, 206, 324, 160, { c: ROSA, curva: -14 });
    return L.svg('Un árbol cuyos frutos son hojas de calendario. Una mano arranca la hoja que dice HOY, como quien cosecha una fruta madura, y abajo espera una canasta. Carpe: arranca, cosecha. Diem: el día.');
  }

  function flor(L, cx, cy, col) {
    var s = '';
    for (var k = 0; k < 6; k++) {
      var a = k * Math.PI / 3;
      s += `<circle cx="${n(cx + 9 * Math.cos(a))}" cy="${n(cy + 9 * Math.sin(a))}" r="6.5" fill="${col}" stroke-width="1.4"/>`;
    }
    L.dib(s + `<circle cx="${cx}" cy="${cy}" r="7" fill="${TINTA}" stroke-width="1.4"/><circle cx="${cx - 2}" cy="${cy - 2}" r="1.6" fill="#fff" stroke="none"/>`);
  }
  function sMemento() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M156 74 Q156 26 220 26 Q284 26 284 74 Q288 116 264 130 L264 156 Q264 166 252 166 L188 166 Q176 166 176 156 L176 130 Q152 116 156 74 Z" fill="#fffaf2"/>`);
    L.dib(`<path d="M168 70 q8 -12 16 0 M256 70 q8 -12 16 0" stroke="#6fbf73" stroke-width="2.2"/><g fill="#f28cab" stroke="none"><circle cx="172" cy="118" r="3.4"/><circle cx="268" cy="118" r="3.4"/><circle cx="220" cy="34" r="3"/></g>`);
    L.dib(`<rect x="184" y="42" width="72" height="24" rx="5" fill="#ffd6e9"/>`);
    tx(L, 220, 60, 'TÚ', { fs: 20, c: ROSA, ls: 2 });
    flor(L, 194, 98, '#5cc3e8');
    flor(L, 246, 98, '#f6b23a');
    L.dib(`<path d="M220 134 q-9 -8 -5 -13 q4 -4 5 2 q1 -6 5 -2 q4 5 -5 13z" fill="${ROSA}" stroke-width="1.4"/>`);
    L.dib(`<path d="M190 148 H250 M198 141 v14 M206 141 v14 M214 141 v14 M222 141 v14 M230 141 v14 M238 141 v14 M246 141 v14" stroke-width="1.6"/>`);
    L.dib(`<path d="M350 66 H414 M350 172 H414" stroke-width="4"/><path d="M357 66 Q357 112 382 120 Q357 128 357 172 M407 66 Q407 112 382 120 Q407 128 407 172" fill="#fff"/><path d="M367 90 Q382 106 397 90 Z M364 170 Q382 140 400 170 Z" fill="#f2c26b" stroke="none"/><path d="M382 120 V150" stroke="#f2c26b" stroke-width="2"/>`);
    tx(L, 240, 218, 'recuerda que vas a morir', { fs: 27, c: ROSA });
    tx(L, 240, 248, '…y vive sin dejar pendientes', { fs: 19, c: GRIS });
    return L.svg('Una calaverita de azúcar con flores en los ojos y TÚ escrito en la frente, junto a un reloj de arena: recuerda que vas a morir, y vive sin dejar pendientes.');
  }

  function sNonGrata() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<rect x="56" y="30" width="206" height="226" fill="#f1dfc2"/><rect x="116" y="88" width="88" height="168" rx="3" fill="#9b6a43"/><circle cx="192" cy="176" r="3.4" fill="#e8c35a"/>`);
    L.dib(`<path d="M160 98 L136 120 M160 98 L184 120" stroke-width="1.6"/><circle cx="160" cy="98" r="2.4" fill="${TINTA}" stroke="none"/><rect x="122" y="118" width="76" height="34" rx="4" fill="#fff8e6"/>`);
    tx(L, 160, 141, 'menos tú', { fs: 20, c: ROSA });
    L.dib(`<rect x="96" y="258" width="128" height="24" rx="4" fill="#c8a26c"/>`);
    tx(L, 160, 275, 'BIENVENIDOS', { fs: 14, ls: 1 });
    var p = persona(L, { x: 372, y: 270, s: 1, ropa: '#9fb7d9', cara: 'triste', mi: [-22, -52], md: [26, -46] });
    L.dib(`<rect x="${p.md[0] - 2}" y="${p.md[1] + 4}" width="40" height="30" rx="4" fill="#c96f4a"/><path d="M${p.md[0] + 10} ${p.md[1] + 4} q8 -8 16 0" stroke-width="2.4"/><path d="M434 180 h26 M440 196 h22 M432 212 h28" stroke="${GRIS}" stroke-width="2"/>`);
    tx(L, 372, 60, 'persona', { fs: 23, c: ROSA });
    tx(L, 372, 86, 'no bienvenida', { fs: 23, c: ROSA });
    return L.svg('Una puerta con tapete de BIENVENIDOS, pero colgado en ella un letrero que dice: menos tú. Una persona triste se va con su maleta. Persona no bienvenida.');
  }

  function sAdHominem() {
    var L = new Lienzo(480, 300, PAPEL);
    var a = persona(L, { x: 118, y: 288, s: 1, ropa: '#9ccfc0', peinado: 'cola', pelo: '#3b2a20', cara: 'seria', diana: true, mi: [-24, -58], md: [30, -84] });
    L.dib(`<rect x="${a.md[0] - 2}" y="${a.md[1] - 34}" width="40" height="46" rx="2" fill="#fff"/><path d="M${a.md[0] + 6} ${a.md[1] + 4} v-12 M${a.md[0] + 16} ${a.md[1] + 4} v-22 M${a.md[0] + 26} ${a.md[1] + 4} v-30" stroke="${JADE}" stroke-width="5"/>`);
    var b = persona(L, { x: 384, y: 288, s: 1, izq: true, ropa: '#f4a582', peinado: 'corto', cara: 'enojada', mi: [-22, -54], md: [46, -84] });
    globo(L, { x: 8, y: 14, w: 208, h: 70, cola: [a.cabeza[0] + 4, a.cabeza[1] - 20], lineas: ['El río está contaminado:', 'aquí están los análisis.'], fs: 17 });
    globo(L, { x: 270, y: 14, w: 200, h: 70, cola: [b.cabeza[0] - 4, b.cabeza[1] - 20], lineas: ['¡Tú qué sabes,', 'si ni eres de aquí!'], fs: 18 });
    tx(L, 240, 150, 'la idea', { fs: 19, c: JADE });
    flecha(L, 214, 154, 180, 172, { c: JADE });
    tx(L, 230, 252, 'el ataque', { fs: 19, c: ROSA });
    flecha(L, 196, 244, 138, 222, { c: ROSA, curva: 8 });
    return L.svg('Una persona muestra los análisis del río: está contaminado. Otra, en vez de discutir los análisis, la señala y le dice: ¡tú qué sabes, si ni eres de aquí! Tiene una diana pintada en el pecho: ataca a la persona, no a la idea.');
  }

  function sDeus() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<rect x="14" y="232" width="452" height="22" fill="#e9d9bd"/>`);
    [30, 410].forEach(function (x) { L.dib(`<rect x="${x}" y="122" width="32" height="110" fill="#fffaf0"/><rect x="${x - 6}" y="112" width="44" height="12" fill="#fffaf0"/><path d="M${x + 10} 128 V228 M${x + 22} 128 V228" stroke="#d9cbb0" stroke-width="1.6"/>`); });
    /* La grúa: mástil, pluma en diagonal y polea; de la polea cuelga una nube de utilería. */
    L.dib(`<path d="M462 236 V44 L272 14" stroke="#8b5a2b" stroke-width="7"/><circle cx="272" cy="14" r="7" fill="#b08a5a"/><path d="M272 21 V38" stroke="#b08a5a" stroke-width="2.4"/><circle cx="272" cy="41" r="3.4" fill="#b08a5a"/>`);
    L.dib(`<path d="M272 44 L214 164 M272 44 L330 164" stroke="#b08a5a" stroke-width="2"/>`);
    L.dib(`<path d="M232 76 l-10 -6 M312 76 l10 -6 M238 104 l-12 0 M306 104 l12 0 M244 60 l-6 -9 M300 60 l6 -9" stroke="#e6b23a" stroke-width="2.2"/>`);
    var d = persona(L, { x: 272, y: 160, s: 0.68, toga: true, ropa: '#fffaf0', pant: '#fffaf0', peinado: 'corto', pelo: '#e3e3e3', barba: true, laurel: true, cara: 'feliz', mi: [-30, -98], md: [32, -70] });
    L.dib(`<path d="M${d.md[0]} ${d.md[1]} l8 -11 l-7 0 l8 -13" stroke="#e6b23a" stroke-width="3.4"/>`);
    L.dib(`<path d="${nube(200, 150, 144, 34)}" fill="#fff"/>`);
    persona(L, { x: 120, y: 236, s: 0.92, ropa: '#c96f4a', cara: 'sorpresa', mi: [-26, -104], md: [26, -104] });
    globo(L, { x: 14, y: 22, w: 168, h: 46, cola: [116, 104], lineas: ['¡No hay salida!'], fs: 20 });
    tx(L, 392, 84, 'la máquina:', { fs: 18, c: ROSA });
    tx(L, 392, 104, 'una grúa', { fs: 18, c: ROSA });
    tx(L, 240, 284, 'el dios baja y lo arregla todo', { fs: 21 });
    return L.svg('Un escenario griego con columnas. El héroe grita ¡no hay salida! y una grúa de madera baja desde arriba una nube de utilería con un dios de barba, laurel y rayo, que llega sonriendo: el dios baja y lo arregla todo.');
  }

  function bloque(L, x, y, palabra, latin) {
    var w = Math.round(palabra.length * 10.6 + 30);
    L.dib(`<rect x="${x}" y="${y}" width="${w}" height="48" rx="7" fill="${latin ? '#ffd6e9' : '#fff'}"${latin ? ` stroke="${ROSA}" stroke-width="2.6"` : ''}/>`);
    tx(L, x + w / 2, y + 32, palabra, { fs: 23, i: latin, c: latin ? ROSA : TINTA });
    return w;
  }
  function dDefinicion() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M72 30 h36 v10 q26 16 24 58 q-2 42 -42 60 q-40 -18 -42 -60 q-2 -42 24 -58 z" fill="#e3a36f"/><path d="M72 42 q-18 0 -16 22 M108 42 q18 0 16 22" stroke-width="3"/><path d="M58 96 h64" stroke="#b9774a" stroke-width="2"/>`);
    tx(L, 90, 124, 'latín', { fs: 20 });
    flecha(L, 136, 92, 226, 160, { curva: -24, c: ROSA });
    var x = 24;
    x += bloque(L, x, 176, 'Renunció', false) + 10;
    x += bloque(L, x, 176, 'motu proprio', true) + 10;
    bloque(L, x, 176, 'y se fue.', false);
    tx(L, 330, 74, 'una pieza del latín,', { fs: 20, c: ROSA });
    tx(L, 330, 98, 'entera, que no se traduce', { fs: 17 });
    tx(L, 330, 118, 'palabra por palabra', { fs: 17 });
    tx(L, 240, 268, 'se usa tal cual, como si fuera una sola palabra', { fs: 18, c: GRIS });
    return L.svg('De un ánfora con la palabra latín sale una pieza rosa, motu proprio, que entra entera en una oración en español: Renunció motu proprio y se fue. Se usa tal cual, como si fuera una sola palabra.');
  }

  /* La preposición que sobra: una cajita blanca con su letra, tachada por encima del texto. */
  function sobra(L, x, y, letra) {
    var w = letra.length > 1 ? 50 : 40;
    L.dib(`<rect x="${x}" y="${y}" width="${w}" height="48" rx="7" fill="#fff" stroke="#b9afc4" stroke-dasharray="5 4"/>`);
    tx(L, x + w / 2, y + 33, letra, { fs: 27 });
    L.txt(`<path d="M${x + 3} ${y + 42} L${x + w - 3} ${y + 6}" stroke="${ROSA}" stroke-width="3.6" stroke-linecap="round" fill="none" opacity=".9"/>`);
    return w;
  }
  function dPreposicion() {
    var L = new Lienzo(480, 300, PAPEL);
    var x = 20, y = 30;
    x += sobra(L, x, y, 'a') + 10;
    x += bloque(L, x, y, 'grosso', true) + 8;
    L.dib(`<rect x="${x}" y="${y}" width="70" height="48" rx="7" fill="#ffd6e9" stroke="${ROSA}" stroke-width="2.6"/>`);
    tx(L, x + 35, y + 32, 'mod', { fs: 23, i: true, c: ROSA });
    L.dib(`<rect x="${x + 76}" y="${y - 6}" width="44" height="60" rx="9" fill="#fff8b8" stroke-width="2.6"/>`);
    tx(L, x + 98, y + 34, '-o', { fs: 27, i: true, c: ROSA });
    flecha(L, x + 98, y + 58, x + 98, y + 82, { c: GRIS, w: 2, punta: 8 });
    tx(L, x + 98, y + 104, 'ya dice «de modo»', { fs: 18 });
    var x2 = 20, y2 = 158;
    x2 += sobra(L, x2, y2, 'de') + 10;
    L.dib(`<rect x="${x2}" y="${y2}" width="70" height="48" rx="7" fill="#ffd6e9" stroke="${ROSA}" stroke-width="2.6"/>`);
    tx(L, x2 + 35, y2 + 32, 'mot', { fs: 23, i: true, c: ROSA });
    L.dib(`<rect x="${x2 + 76}" y="${y2 - 6}" width="44" height="60" rx="9" fill="#fff8b8" stroke-width="2.6"/>`);
    tx(L, x2 + 98, y2 + 34, '-u', { fs: 27, i: true, c: ROSA });
    bloque(L, x2 + 128, y2, 'proprio', true);
    flecha(L, x2 + 98, y2 + 58, x2 + 98, y2 + 82, { c: GRIS, w: 2, punta: 8 });
    tx(L, x2 + 98, y2 + 104, 'ya dice «con movimiento»', { fs: 18 });
    tx(L, 392, 70, ['la preposición', 'ya venía', 'por dentro'], { fs: 24, c: ROSA, lh: 1.1 });
    return L.svg('Dos locuciones partidas en piezas. En grosso modo, la terminación -o de modo ya dice «de modo», así que la «a» de adelante sale tachada. En motu proprio, la terminación -u de motu ya dice «con movimiento», así que el «de» sale tachado. La preposición ya venía por dentro.');
  }

  function dLetra() {
    var L = new Lienzo(480, 300, PAPEL);
    L.dib(`<path d="M120 30 H300 V196 Q300 224 272 236 L150 286 H96 Q120 270 120 232 Z" fill="#fff"/>`);
    var s = '';
    for (var y = 64; y <= 214; y += 7) s += `M136 ${y} H${y % 3 ? 284 : 262} `;
    L.dib(`<path d="${s}" stroke="#d7cfe0" stroke-width="1.4"/>`);
    tx(L, 210, 54, 'REGLAMENTO', { fs: 18, ls: 2 });
    L.dib(`<path d="M150 262 q12 -14 20 -2 q8 10 18 -6 q6 -8 14 2" stroke="#3a4f9a" stroke-width="2"/><path d="M206 258 L250 216" stroke="${TINTA}" stroke-width="5"/>`);
    L.dib(`<path d="M326 312 Q300 260 262 226" stroke-width="18"/><path d="M326 312 Q300 260 262 226" stroke="#9fb7d9" stroke-width="13"/><ellipse cx="254" cy="220" rx="15" ry="11" fill="${PIEL[0]}" transform="rotate(-40 254 220)"/>`);
    L.dib(`<path d="M398 170 L452 224" stroke="#8b5a2b" stroke-width="11"/><circle cx="360" cy="132" r="56" fill="#fffdf2" fill-opacity=".96" stroke-width="4.5"/>`);
    tx(L, 360, 112, 'sustentar', { fs: 21, c: ROSA });
    tx(L, 360, 138, 'acreditar', { fs: 21, c: ROSA });
    tx(L, 360, 164, 'vigente', { fs: 21, c: ROSA });
    tx(L, 404, 258, ['lo que no entiendes', 'también lo firmaste'], { fs: 19, lh: 1.15 });
    return L.svg('Un reglamento larguísimo de letra diminuta se desenrolla hasta el piso; una mano lo firma abajo. Una lupa agranda una línea: sustentar, acreditar, vigente. Lo que no entiendes también lo firmaste.');
  }

  /* ============================================================
     LOS TEXTOS
     ============================================================ */
  var GRUPOS = [
    { id: 'contratos', titulo: 'En los contratos y los papeles' },
    { id: 'juzgados', titulo: 'En los juzgados y las noticias' },
    { id: 'vida', titulo: 'En la vida (y en la tira de Porcio)' }
  ];

  var FICHAS = [
    { loc: 'ipso facto', grupo: 'contratos', lit: 'por el hecho mismo',
      sig: 'En el acto, inmediatamente: la consecuencia llega en el mismo instante que el hecho.',
      ej: '«Firmado el contrato, aceptas ipso facto todas sus cláusulas.»',
      ojo: 'No quiere decir «por lo tanto»: quiere decir «en ese mismo instante».',
      nota: '¿Cuánto tarda el foco en prenderse después de apretar? Nada. Eso es ipso facto: en un contrato, lo que pasa en cuanto firmas.' },
    { loc: 'statu quo', grupo: 'contratos', lit: 'en el estado en que [están las cosas]',
      sig: 'Las cosas como están ahora. Quien defiende el statu quo no quiere que nada cambie.',
      ej: '«Mientras nadie firme, el terreno se queda en su statu quo: ni se vende ni se cerca.»',
      ojo: 'Es statu quo, sin ese final. «Status quo» nos llegó rebotado del inglés.',
      nota: 'Pregunta qué cambió entre ayer, hoy y mañana. Nada: esa es la definición. Siembra la trampa del status.' },
    { loc: 'sine qua non', grupo: 'contratos', lit: 'sin la cual no',
      sig: 'La condición indispensable: si falta, no hay trato.',
      ej: '«El depósito es condición sine qua non para que te den las llaves.»',
      ojo: 'Casi siempre viene pegada a «condición»: condición sine qua non.',
      nota: 'Que lean el diagrama en voz alta: ¿hay depósito? Si no, no hay llaves. Es la misma cláusula del cuarto que renta la tía Lupe en el ejercicio de hoy.' },
    { loc: 'ad hoc', grupo: 'contratos', lit: 'para esto',
      sig: 'Hecho a propósito para un fin concreto, y solo para ese.',
      ej: '«Mi abuelo armó un gancho ad hoc para bajar mangos: un palo y una botella cortada.»',
      ojo: 'En México también se oye por «adecuado»: «ese traje te queda ad hoc». El DLE acepta los dos usos.',
      nota: '¿Quién ha bajado mangos así? Ese palo con botella no sirve para nada más: es ad hoc. Un comité ad hoc es lo mismo, pero con gente.' },
    { loc: 'motu proprio', grupo: 'contratos', lit: 'con movimiento propio',
      sig: 'Por iniciativa propia, sin que nadie te lo pida.',
      ej: '«Lavé los trastes motu proprio, y mi mamá no lo podía creer.»',
      ojo: 'Ni «de» ni «propio»: es motu proprio, sin preposición y con dos erres.',
      nota: 'La diferencia entre los dos lados es de dónde sale el empujón. Y aquí va la trampa más famosa: «de motu propio» lleva dos errores en tres palabras.' },
    { loc: 'grosso modo', grupo: 'contratos', lit: 'de modo grueso',
      sig: 'A grandes rasgos, más o menos, sin entrar en detalle.',
      ej: '«Grosso modo, son cuarenta hectáreas; el topógrafo dirá cuántas exactas.»',
      ojo: 'Sin «a»: «a grosso modo» dice la preposición dos veces.',
      nota: 'Las dos son la misma vaca. La de la derecha está hecha a trazo grueso: grosso modo. Pide que la digan sin «a», tres veces.' },
    { loc: 'habeas corpus', grupo: 'juzgados', lit: 'que tengas el cuerpo [para presentarlo]',
      sig: 'El derecho de quien está detenido a que lo lleven ante un juez, que decide si su detención es legal.',
      ej: '«La familia pidió un habeas corpus y, como no había cargos, lo soltaron.»',
      ojo: 'No es cualquier trámite: es la defensa contra una detención sin justificar.',
      nota: 'El cuerpo que se pide es el del detenido: que lo presenten y que digan por qué lo tienen. Si nadie lo justifica, sale libre.' },
    { loc: 'in fraganti', grupo: 'juzgados', lit: 'en flagrante: ardiendo',
      sig: 'En el mismo momento en que se está haciendo algo indebido, con el delito todavía caliente.',
      ej: '«Lo cacharon in fraganti, con la mano en la alcancía.»',
      ojo: 'Es una forma que el español ya adaptó del latín in flagranti: va sin cursiva, y también se vale junta, infraganti.',
      nota: 'Flagrare es arder: por eso las llamitas. Lo agarran mientras el hecho todavía arde, no después.' },
    { loc: 'de facto', grupo: 'juzgados', lit: 'de hecho',
      sig: 'Lo que pasa en la práctica, aunque el papel diga otra cosa. Su pareja es de iure, «de derecho»: lo que dice la ley.',
      ej: '«En el acta, el jefe de la casa es don Beto; de facto, manda la abuela.»',
      ojo: 'No la confundas con ipso facto: se parecen en el sonido, no en el sentido.',
      nota: 'Pregunta quién manda en su casa de iure y quién de facto. Se van a reír, y ya no se les olvida.' },
    { loc: 'modus operandi', grupo: 'juzgados', lit: 'modo de obrar',
      sig: 'La manera en que alguien hace siempre las cosas: su patrón.',
      ej: '«Tres robos de gallinas, siempre a las tres de la mañana y por el mismo hoyo de la cerca: mismo modus operandi.»',
      ojo: 'No es modus vivendi, que es «modo de vivir», la forma de ganarse la vida.',
      nota: 'Mismo hoyo, misma hora, mismas pezuñas. ¿Quién será? Guárdalo: Porcio sale en un rato.' },
    { loc: 'vox populi', grupo: 'juzgados', lit: 'voz del pueblo',
      sig: 'Algo que todo el mundo sabe y repite, aunque nadie lo haya anunciado.',
      ej: '«Que van a cerrar la tienda de la esquina ya es vox populi.»',
      ojo: 'Hoy se escribe en cursiva y sin tilde: vox populi. Con tilde, vox pópuli, es la grafía vieja.',
      nota: 'Nadie lo anunció en la radio, pero todo el pueblo lo sabe. ¿Qué es vox populi hoy en Concá?' },
    { loc: 'in situ', grupo: 'juzgados', lit: 'en el sitio',
      sig: 'En el lugar mismo, sin llevarse la cosa a otra parte.',
      ej: '«El veterinario revisó a la vaca in situ, en el potrero.»',
      nota: 'Para gente de campo es la más fácil: no te llevas la vaca, vas tú. Un análisis de suelo in situ se hace en la parcela.' },
    { loc: 'carpe diem', grupo: 'vida', lit: 'cosecha el día',
      sig: 'Aprovecha el presente, porque el tiempo se va. Carpere es arrancar la fruta del árbol, y por eso el DLE lo traduce «coge el día»: el día se cosecha cuando está maduro.',
      ej: '«Carpe diem: hoy que el río trae agua, vámonos a nadar.»',
      ojo: 'No es «haz lo que quieras sin pensar»: es no dejar pasar lo que el día trae.',
      nota: 'Horacio era de campo: su verbo es el de la cosecha. Pregunta qué se cosecha en su casa y cuándo: así se cosecha el día.' },
    { loc: 'memento mori', grupo: 'vida', lit: 'recuerda que vas a morir',
      sig: 'El recordatorio de que la vida se acaba, para vivirla sin dejar pendientes.',
      ej: '«La calaverita de azúcar con tu nombre es un memento mori que se come.»',
      ojo: 'No está en el DLE, pero está en todas partes: en los cuadros antiguos, en los relojes de sol, en el Día de Muertos.',
      nota: 'Es la semana de Muertos: ¿quién tiene calaverita con su nombre? No es para asustar: es para no dejar nada pendiente.' },
    { loc: 'persona non grata', grupo: 'vida', lit: 'persona no grata',
      sig: 'La persona que no es bienvenida. En diplomacia, el embajador al que un país le pide que se vaya.',
      ej: '«Desde que se comió el pastel antes de la fiesta, mi primo es persona non grata en casa de la tía.»',
      nota: 'El tapete dice bienvenidos, el letrero dice menos tú. Pregunta quién es persona non grata en su casa, y por qué.' },
    { loc: 'argumentum ad hominem', grupo: 'vida', lit: 'argumento dirigido a la persona',
      sig: 'Atacar a quien habla en vez de responder a lo que dice.',
      ej: '«¿Tú qué opinas, si ni votas?» es un ad hominem: que no vote no hace falsa su idea.',
      ojo: 'El DLE lo registra como argumento ad hominem; en la calle se oye solo «un ad hominem».',
      nota: 'Fíjate dónde está la diana: en la persona, no en los análisis. Pregunta cuál fue el último ad hominem que oyeron en su casa o en la tele.' },
    { loc: 'deus ex machina', grupo: 'vida', lit: 'el dios desde la máquina',
      sig: 'La salida que aparece de la nada y lo resuelve todo, sin que la historia la anunciara. En el teatro griego, una grúa bajaba a un dios para arreglar el final.',
      ej: '«La telenovela iba perfecta, pero el final fue un deus ex machina: apareció un tío rico que nadie conocía y pagó todo.»',
      nota: 'La máquina era una grúa de verdad. Pide un deus ex machina de una película o una serie que hayan visto.' }
  ];

  var VINETAS = [
    { loc: 'carpe diem', lit: 'cosecha el día', sig: 'aprovecha el presente, porque el tiempo se va',
      porque: 'Porcio toma el sol en el lodo, sin pendientes. La gallina le pregunta por el futuro y él contesta «¿cuál futuro?». Un cerdo de rancho sabe cómo acaba su historia: por eso vive el hoy. Sin el pie es un cerdo flojo; con el pie es un filósofo.' },
    { loc: 'memento mori', lit: 'recuerda que vas a morir', sig: 'el recordatorio de que la vida se acaba',
      porque: 'El letrero de las carnitas tiene un cerdito feliz con gorro de cocinero, y Porcio le encuentra parecido con su primo. Su memento mori no es una calavera: es un letrero de domingo.' },
    { loc: 'persona non grata', lit: 'persona no grata', sig: 'la persona que no es bienvenida',
      porque: 'Doña Cuca acaba de trapear y Porcio llega embarrado hasta las orejas. En diplomacia declaran persona non grata a un embajador; en esta cocina, al cerdo con lodo. Y oye lo que grita doña Cuca: «¡vade retro!» también es latín.',
      extra: 'Latín escondido: vade retro, «vete atrás». El DLE la registra: se usa para rechazar a alguien.' },
    { loc: 'argumentum ad hominem', lit: 'argumento dirigido a la persona', sig: 'atacar a quien habla en vez de responder a lo que dice',
      porque: 'La gallina le habla de las tortillas con azúcar y Porcio no contesta eso: le echa en cara que no tiene dientes. Que la gallina no tenga dientes no vuelve falso lo que dijo. Chiste de regalo: «cuando las gallinas tengan dientes» quiere decir «nunca».' },
    { loc: 'ipso facto', lit: 'por el hecho mismo', sig: 'en el acto, inmediatamente',
      porque: 'Don Chema apenas alcanza a gritar «¡cochi, cochi, co…!» y los cerdos ya están en el comedero. El llamado y la llegada pasan al mismo tiempo: eso es ipso facto. En un contrato, es lo que queda hecho en cuanto firmas.' },
    { loc: 'in situ', lit: 'en el sitio', sig: 'en el lugar mismo, sin llevarse la cosa a otra parte',
      porque: 'Porcio no sale del charco, así que la doctora lo revisa ahí mismo, hincada en el lodo: consulta in situ. Mira su maletín: primum non nocere, «lo primero es no hacer daño», el lema de los médicos.',
      extra: 'Latín escondido: primum non nocere, «lo primero es no hacer daño». Lo vas a volver a ver cuando la unidad llegue a los médicos.' },
    { loc: 'vox populi', lit: 'voz del pueblo', sig: 'algo que todo el mundo sabe y repite',
      porque: 'Porcio dice «ni idea» rodeado de hojas de elote y con granos en el cachete, y todo el corral lo señala. Nadie lo anunció, pero todos lo saben: vox populi. La gallina hasta lo grita en latín.',
      extra: 'Latín escondido: ecce porcus, «he aquí el cerdo». Es una broma con ecce homo, «he aquí el hombre», lo que dijo Pilato al presentar a Jesús; el DLE registra eccehomo.' },
    { loc: 'deus ex machina', lit: 'el dios desde la máquina', sig: 'la salida que aparece de la nada y lo resuelve todo',
      porque: 'Don Chema ya traía la reata y el costal, y de la nada baja un platillo volador y se lleva a Porcio. En el teatro griego, una grúa bajaba a un dios para arreglar el final; aquí la grúa es un ovni. Nada en la historia lo anunciaba: por eso da risa.',
      extra: 'Latín escondido: S·P·Q·R, Senatus Populusque Romanus, «el Senado y el pueblo romano», el sello de Roma. Los extraterrestres eran romanos.' }
  ];

  var DIBUJOS = {
    'ipso facto': sIpso, 'statu quo': sStatu, 'sine qua non': sSine, 'ad hoc': sAdHoc,
    'motu proprio': sMotu, 'grosso modo': sGrosso, 'habeas corpus': sHabeas, 'in fraganti': sFraganti,
    'de facto': sDeFacto, 'modus operandi': sModus, 'vox populi': sVox, 'in situ': sInSitu,
    'carpe diem': sCarpe, 'memento mori': sMemento, 'persona non grata': sNonGrata,
    'argumentum ad hominem': sAdHominem, 'deus ex machina': sDeus,
    'definicion': dDefinicion, 'preposicion': dPreposicion, 'letra chiquita': dLetra
  };
  var TIRA = [vCarpe, vMemento, vNonGrata, vAdHominem, vIpso, vInSitu, vVox, vDeus];

  function dibujo(k) { var f = DIBUJOS[k]; return f ? f() : ''; }
  function vineta(i) { var f = TIRA[i]; return f ? f() : ''; }
  function ficha(k) { for (var i = 0; i < FICHAS.length; i++) if (FICHAS[i].loc === k) return FICHAS[i]; return null; }

  /* La galería de fichas, agrupada: dibujo, al pie de la letra, significado, ejemplo y trampa. */
  function galeria(el) {
    if (!el) return;
    el.innerHTML = GRUPOS.map(function (g) {
      return '<div class="lc14g-grupo">' + esc(g.titulo) + '</div><div class="lc14g">'
        + FICHAS.filter(function (f) { return f.grupo === g.id; }).map(function (f) {
          return '<article class="lc14f" id="dibujo-' + f.loc.replace(/ /g, '-') + '">'
            + '<div class="lc14f-dib">' + dibujo(f.loc) + '</div>'
            + '<div class="lc14f-loc"><em>' + esc(f.loc) + '</em></div>'
            + '<p class="lc14f-lit">Al pie de la letra: «' + esc(f.lit) + '»</p>'
            + '<p class="lc14f-sig">' + esc(f.sig) + '</p>'
            + '<p class="lc14f-ej">' + esc(f.ej) + '</p>'
            + (f.ojo ? '<p class="lc14f-ojo">' + esc(f.ojo) + '</p>' : '')
            + '</article>';
        }).join('') + '</div>';
    }).join('');
  }

  function pinta(raiz) {
    raiz = raiz || document;
    Array.prototype.forEach.call(raiz.querySelectorAll('[data-dib14]'), function (el) {
      if (!el.firstChild) el.innerHTML = dibujo(el.getAttribute('data-dib14'));
    });
    Array.prototype.forEach.call(raiz.querySelectorAll('[data-vin14]'), function (el) {
      if (!el.firstChild) el.innerHTML = vineta(+el.getAttribute('data-vin14'));
    });
    Array.prototype.forEach.call(raiz.querySelectorAll('[data-galeria14]'), function (el) {
      if (!el.firstChild) galeria(el);
    });
  }

  window.LOC14 = {
    FICHAS: FICHAS, VINETAS: VINETAS, GRUPOS: GRUPOS,
    dibujo: dibujo, vineta: vineta, ficha: ficha, galeria: galeria, pinta: pinta,
    credito: 'Tira y dibujos: Claude (Anthropic), hechos para este curso. El formato de explicar una idea con un dibujo es el de <a href="https://sketchplanations.com" target="_blank" rel="noopener">Sketchplanations</a>, de Jono Hey; la idea de un cerdo con pies de viñeta en latín viene de <em>Pig Latin</em>, de <a href="https://www.incidentalcomics.com" target="_blank" rel="noopener">Grant Snider</a>.'
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { pinta(); });
  else pinta();
})();
