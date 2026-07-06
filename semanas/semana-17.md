---
title: "Semana 17 · El Museo de Palabras"
parent: Semanas
nav_order: 18
---

# Semana 17 · El Museo de Palabras

> **La pregunta de la semana:** ¿qué palabras te llevas?

<div id="wk-gate" data-abre="2026-11-16"></div>

**Esta semana podrás:** montar tu sala del Museo (12 a 15 palabras que te conmovieron) y defenderla en 8 a 10 minutos.

El Museo no es un examen: es la declaración de quién te volviste como lector y como dueño de tu lengua. La defensa es indelegable. Nadie más que tú quiere tus palabras.

---

## Herramientas de la semana

### Cómo se evalúa tu defensa (peldaño 4)

Recorres tu sala 8 a 10 minutos: por qué estas palabras, cuál te sorprendió, cuál regalarías y a quién. Esto cuenta:

| Se evalúa | No se evalúa |
|---|---|
| Que domines la etimología de tus palabras (verificada) | Que hables como orador |
| Tu criterio: por qué estas y no otras | Que no te pongas nervioso |
| La honestidad del "por qué la elegí" | Cuántas palabras raras metiste |

La defensa no lleva nota, como nada en este curso. Es la evidencia mayor de tu conversación final de diciembre. Después del Museo escribes tu autoevaluación final en el expediente (empieza con: ¿qué sabes hoy que no sabías en agosto?) y propones tu calificación del semestre. La conversación dura unos diez minutos y llevas tu portafolio y tu expediente. Detalles: [Tu calificación](../evaluacion.html).

### Lista de tu sala

Toca para ir marcando. Tu sala está lista cuando todo tiene palomita.

<div id="ck17">
  <div id="ck17-list"></div>
  <div class="ck17-bar"><div class="ck17-fill" id="ck17-fill"></div></div>
  <div class="ck17-msg" id="ck17-msg">0 de 6 listos</div>
</div>

<style>
#ck17{margin:1rem 0}
#ck17 *{box-sizing:border-box}
#ck17 .ck17-item{display:flex;align-items:center;gap:.6rem;padding:.6rem .8rem;border:1px solid #eadce6;border-radius:.6rem;background:#fff;margin-bottom:.4rem;cursor:pointer}
#ck17 .ck17-item .box{width:22px;height:22px;border:2px solid #d9c3d4;border-radius:.35rem;flex:none;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800}
#ck17 .ck17-item.on{background:#fbf4f9;border-color:#c8127a}
#ck17 .ck17-item.on .box{background:#1f8a4c;border-color:#1f8a4c}
#ck17 .ck17-item .txt{color:#333}
#ck17 .ck17-bar{height:10px;background:#eadce6;border-radius:1rem;overflow:hidden;margin-top:.6rem}
#ck17 .ck17-fill{height:100%;width:0;background:#c8127a;transition:.3s}
#ck17 .ck17-msg{margin-top:.4rem;color:#6b1e5a;font-weight:700}
</style>

<script>
(function(){
  var items=[
   "12 a 15 palabras elegidas por mí",
   "Cada una con su cita o testimonio: dónde la encontré",
   "Cada una con su etimología verificada en fuente",
   "Cada una con mi nota: por qué la elegí",
   "Sé cuál regalaría y a quién",
   "Ensayé mi defensa en voz alta"
  ];
  var list=document.getElementById('ck17-list'),fill=document.getElementById('ck17-fill'),msg=document.getElementById('ck17-msg');
  var done=0;
  items.forEach(function(t){
    var d=document.createElement('div');d.className='ck17-item';
    d.innerHTML='<span class="box"></span><span class="txt">'+t+'</span>';
    d.addEventListener('click',function(){
      d.classList.toggle('on');
      d.querySelector('.box').textContent=d.classList.contains('on')?'✓':'';
      done=document.querySelectorAll('#ck17 .ck17-item.on').length;
      fill.style.width=(done/items.length*100)+'%';
      msg.textContent=done+' de '+items.length+' listos'+(done===items.length?'. Tu sala está lista.':'');
    });
    list.appendChild(d);
  });
})();
</script>

---

## Las tarjetas de la semana

Sin tarjetas nuevas. El mazo del semestre ya es tuyo. Esta semana solo hay palabras que defender.

## Lo que produjimos

*La galería del Museo: las salas de la generación. Míralas en [Galería del Museo](../museo/galeria.html). Se llena al cerrar el semestre.*

## El postre 🍨

En la semana 2 escribiste tu respuesta a "¿para qué memorizar en la era de la IA?". La guardó el profesor todo el semestre. Hoy la relees. Esa hoja, con tu letra de septiembre, es la única prueba que necesitas de cuánto cambiaste. Las máquinas definen palabras en un segundo. Tú te llevas las que memorizaste, las que leíste y las que quisiste. Eso no te lo quita nadie.

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
