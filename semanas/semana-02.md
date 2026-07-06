---
title: "Semana 2 · Las palabras tienen anatomía"
parent: Semanas
nav_order: 3
---

# Semana 2 · Las palabras tienen anatomía

> **La pregunta de la semana:** ¿qué hay dentro de una palabra?

<div id="wk-gate" data-abre="2026-08-03"></div>

**Esta semana podrás:** distinguir la definición real de la etimológica, y nombrar las piezas de una palabra: prefijo, raíz, sufijo, étimo.

Toda palabra se puede abrir. La IA define cualquier palabra en un segundo; lo que no puede es memorizar por ti, leer por ti, ni querer una palabra. De eso vive el curso.

---

## Herramientas de la semana

### En el centro de cómputo (jueves)

1. Toma una hipótesis del martes (tu definición etimológica) y verifícala: [DLE](https://dle.rae.es) para el origen, [DECEL](http://etimologias.dechile.net) para la historia.
2. Verifica también **tu palabra heredada** (la que ya nadie usa). Algunas no estarán en el diccionario: documentarlas es tu trabajo.
3. Captura: palabra, hipótesis, veredicto, fuente.

---

## Hoja de consulta

Toca una palabra y ábrela. Cada pieza tiene su nombre y su significado.

<div id="an2">
  <div class="an2-words" id="an2-words"></div>
  <div class="an2-out" id="an2-out">Toca una palabra para diseccionarla.</div>
  <div class="an2-legend">
    <span class="an2-tag pre">prefijo</span>
    <span class="an2-tag raiz">raíz</span>
    <span class="an2-tag suf">sufijo</span>
  </div>
</div>

<style>
#an2{margin:1rem 0}
#an2 *{box-sizing:border-box}
#an2 .an2-words{display:flex;flex-wrap:wrap;gap:.5rem}
#an2 .an2-words button{padding:.5rem .9rem;border:1px solid #d9c3d4;border-radius:.5rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer}
#an2 .an2-words button.on{background:#c8127a;color:#fff;border-color:#c8127a}
#an2 .an2-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1.1rem;background:#fbf4f9;min-height:4.5rem}
#an2 .an2-pieces{display:flex;flex-wrap:wrap;gap:.4rem;align-items:center}
#an2 .pz{padding:.3rem .6rem;border-radius:.5rem;font-weight:700;font-size:.95rem}
#an2 .pz small{display:block;font-weight:400;font-size:.72rem;opacity:.85}
#an2 .pz.pre{background:#e6f1fb;color:#0c447c}
#an2 .pz.raiz{background:#fbeaf0;color:#72243e}
#an2 .pz.suf{background:#eaf3de;color:#27500a}
#an2 .an2-eq{margin-top:.6rem;color:#333;font-style:italic}
#an2 .an2-legend{margin-top:.7rem;display:flex;gap:.4rem}
#an2 .an2-tag{font-size:.72rem;padding:.15rem .5rem;border-radius:1rem}
#an2 .an2-tag.pre{background:#e6f1fb;color:#0c447c}
#an2 .an2-tag.raiz{background:#fbeaf0;color:#72243e}
#an2 .an2-tag.suf{background:#eaf3de;color:#27500a}
</style>

<script>
(function(){
  var W=[
   {w:"amnesia",p:[["a-","sin","pre"],["mnem","memoria","raiz"],["-ia","cualidad","suf"]],eq:"cualidad de estar sin memoria"},
   {w:"biología",p:[["bio","vida","raiz"],["-logía","estudio","suf"]],eq:"estudio de la vida"},
   {w:"teléfono",p:[["tele-","lejos","pre"],["fono","sonido","raiz"]],eq:"sonido a distancia"},
   {w:"hipopótamo",p:[["hipo","caballo","raiz"],["pótamo","río","raiz"]],eq:"caballo de río"},
   {w:"cronómetro",p:[["crono","tiempo","raiz"],["metro","medir","raiz"]],eq:"medidor de tiempo"},
   {w:"democracia",p:[["demo","pueblo","raiz"],["-cracia","poder","suf"]],eq:"poder del pueblo"}
  ];
  var box=document.getElementById('an2-words'),out=document.getElementById('an2-out');
  W.forEach(function(x){
    var b=document.createElement('button');b.textContent=x.w;
    b.addEventListener('click',function(){
      Array.prototype.forEach.call(box.children,function(c){c.classList.remove('on');});
      b.classList.add('on');
      var pcs=x.p.map(function(pz){return '<span class="pz '+pz[2]+'">'+pz[0]+'<small>'+pz[1]+'</small></span>';}).join('<span>+</span>');
      out.innerHTML='<div class="an2-pieces">'+pcs+'</div><div class="an2-eq">= '+x.eq+'</div>';
    });
    box.appendChild(b);
  });
})();
</script>

{: .ojo }
Definición **real**: cómo se usa hoy. Definición **etimológica**: de dónde vienen sus piezas. No son rivales: son dos linternas sobre la misma palabra.

---

## Las tarjetas de la semana

| Frente | Reverso (significado · palabra ancla) |
|---|---|
| étimo | palabra de origen · étimo de amnesia es mnem |
| prefijo | pieza al inicio · a- en amnesia |
| raíz | pieza central con el significado · mnem |
| sufijo | pieza al final · -ia en amnesia |
| a- | sin · amnesia |
| mnem- | memoria · amnesia |

## Lo que produjimos

*Las primeras palabras heredadas del grupo, ya verificadas. Se llena al cerrar la semana.*

## El postre 🍨

*amnistía* y *amnesia* son la misma raíz: *mnem*, memoria. Una amnistía es un olvido, pero jurídico: el Estado decide "no recordar" un delito. Perdonar, a veces, es solo memoria que se apaga a propósito.

<script>
(function(){
  var m=document.getElementById('wk-gate'); if(!m) return;
  try{if(new URLSearchParams(location.search).has('preview'))return;}catch(e){}
  var p=(m.getAttribute('data-abre')||'').split('-'); if(p.length!==3) return;
  var abre=new Date(+p[0],+p[1]-1,+p[2]);
  if(new Date()>=abre) return;
  var meses=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  var el=m.nextElementSibling; while(el){var nx=el.nextElementSibling; el.style.display='none'; el=nx;}
  var n=document.createElement('div');
  n.setAttribute('style','border:1px solid #eadce6;border-radius:.9rem;padding:1.2rem 1.3rem;background:#fbf4f9;color:#6b1e5a;line-height:1.55');
  n.innerHTML='<strong>Esta semana todavía no abre.</strong><br>Disponible a partir del lunes '+abre.getDate()+' de '+meses[abre.getMonth()]+' de '+abre.getFullYear()+'. Mientras tanto, dale a tu mazo.';
  m.parentNode.appendChild(n);
})();
</script>
