---
title: "Semana 16 · Quién decide qué palabras existen"
parent: Semanas
nav_order: 17
---

# Semana 16 · Quién decide qué palabras existen

> **La pregunta de la semana:** ¿quién decide qué palabras existen?

<div id="wk-gate" data-abre="2026-11-09"></div>

**Esta semana podrás:** inventar la palabra que al español le falta, con raíces reales y bien pegadas, y defenderla sin banco de preguntas.

Todo el semestre descompusiste palabras que ya existían. Hoy creas las que faltan. Y descubres que quién decide qué palabras existen tiene una respuesta incómoda: la gente que las usa.

Esta semana también llega el tercer círculo de lectura, el del balance: qué libro te llevas, cuál regalarías. Tu testamento lector se publica en [Leemos](../leemos.html).

---

## Herramientas de la semana

### Cómo se crea un neologismo que sirva

1. Raíces reales y bien pegadas (griega con griega, latina con latina).
2. Que se entienda sin que lo expliques.
3. Que suene.
4. Que nombre algo que de verdad falte.

Toca un vacío del español y mira una palabra posible para llenarlo.

<div id="ne16">
  <div class="ne16-grid" id="ne16-grid"></div>
  <div class="ne16-out" id="ne16-out">Toca un concepto sin nombre.</div>
</div>

<style>
#ne16{margin:1rem 0}
#ne16 *{box-sizing:border-box}
#ne16 .ne16-grid{display:flex;flex-direction:column;gap:.4rem}
#ne16 .ne16-grid button{padding:.6rem .8rem;border:1px solid #d9c3d4;border-radius:.5rem;background:#fff;color:#333;font-weight:700;cursor:pointer;text-align:left}
#ne16 .ne16-grid button.on{background:#fdeaf5;border-color:#c8127a;color:#6b1e5a}
#ne16 .ne16-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1.1rem;background:#fbf4f9;min-height:4rem}
#ne16 .ne16-word{font-size:1.4rem;color:#6b1e5a;font-weight:800}
#ne16 .ne16-parts{margin-top:.35rem;color:#333}
</style>

<script>
(function(){
  var N=[
   ["El miedo a quedarte sin batería","acumulofobia","acumulo (de acumulador, batería) + fobia (miedo). Propuesta; invéntale una mejor."],
   ["La rabia de que te dejen en visto","alexiria","a- (sin) + lexis (palabra) + -iria (estado): quedarse sin respuesta. Propuesta abierta."],
   ["El gusto por el olor a lluvia","petricor","petra (piedra) + icor (la sangre de los dioses). Esta ya existe: la inventaron dos geólogos en 1964."],
   ["Leer y no recordar nada de lo leído","amnesialexia","a- (sin) + mnem (memoria) + lexis (lectura). Propuesta; mejórala."],
   ["El cansancio de tantas pantallas","pantoxenia","panto (todo) + oxis... propón tú las raíces exactas."]
  ];
  var grid=document.getElementById('ne16-grid'),out=document.getElementById('ne16-out');
  N.forEach(function(x){
    var b=document.createElement('button');b.textContent=x[0];
    b.addEventListener('click',function(){
      Array.prototype.forEach.call(grid.children,function(c){c.classList.remove('on');});
      b.classList.add('on');
      out.innerHTML='<div class="ne16-word">'+x[1]+'</div><div class="ne16-parts">'+x[2]+'</div>';
    });
    grid.appendChild(b);
  });
})();
</script>

{: .reto }
Ninguna de estas es definitiva. Inventa la tuya con raíces del semestre, justifícala y súbela a [Palabras recién nacidas](../vitrina/palabras-recien-nacidas.html).

---

## Las tarjetas de la semana

Sin tarjetas nuevas: es cierre. Repasa el mazo completo del semestre para el quiz integrador y para tu defensa.

## Lo que produjimos

*Las palabras recién nacidas del grupo: las que inventamos para nombrar lo que faltaba. Se llena al cerrar la semana.*

## El postre 🍨

*selfie*, *tuitear*, *googlear*: nadie pidió permiso a la RAE para decirlas. Primero las dijo la gente; el diccionario llegó años después, corriendo. Tú también puedes hacer eso: si tu palabra es buena y alguien más la usa, ya empezó a existir. Así nacen todas.

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
