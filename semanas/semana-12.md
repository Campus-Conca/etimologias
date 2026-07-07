---
title: "Semana 12 · Cierre de U2"
parent: Semanas
nav_order: 13
---

# Semana 12 · Cierre de U2: ¿quién es dueño del español?

> **La pregunta de la semana:** ¿quién es dueño del español?

<div id="wk-gate" data-abre="2026-10-12"></div>

**Esta semana podrás:** debatir sobre los extranjerismos cambiando de bando, cerrar la unidad en el quiz integrador y defender solo, sin sorpresas.

Las palabras vienen de todas partes y algunas ni están en el diccionario. Entonces, ¿quién manda en la lengua? Hoy se debate.

Esta semana también es el segundo círculo de lectura: nuevas fichas al tendedero de [Leemos](../leemos.html).

---

## Herramientas de la semana

### Banco de preguntas de tu defensa (peldaño 2)

Defensa individual, 3 minutos, ante el profesor. Ya no en pareja, pero sabes qué te pueden preguntar. Prepara respuesta a estas:

1. ¿De qué lengua viene tu palabra y cómo lo verificaste?
2. ¿Qué ley fonética la transformó desde su origen?
3. ¿Por qué la elegiste tú?
4. ¿Se cuenta alguna historia falsa sobre su origen?
5. ¿Dónde la verificaste y qué dijo la fuente?

Traes tu palabra y una ficha de apoyo. No se lee todo. Lo que cuenta es que puedas sostenerlo.

### Tu segundo parcial

Igual que en la semana 7: quiz y defensa son evidencia, no nota. Autoevaluación de unidad en tu expediente el fin de semana, y el bloque final al [formulario de parciales](https://docs.google.com/forms/d/e/1FAIpQLSc32h4aoWfVteMZkbvdmHb0NNEsG3KrhUAi2Y2LYqOqIEEsHw/viewform) antes del lunes. Las reglas, por si las quieres releer: [Tu calificación](../evaluacion.html).

---

## El gimnasio de la semana

Los ejercicios de esta semana, para tu celular o el centro de cómputo. Sin nota y sin registro: puro entrenamiento.

- [La armería de la disputatio](../ejercicios/semana-12/ejercicio-12A-armeria-de-la-disputatio.html) · martes
- [Tu defensa, sin sorpresas](../ejercicios/semana-12/ejercicio-12B-tu-defensa-sin-sorpresas.html) · miércoles
- [Cosecha y puente](../ejercicios/semana-12/ejercicio-12D-cosecha-y-puente.html) · viernes
- [Quiz de gimnasio · Integrador de la Unidad 2](../ejercicios/semana-12/quiz-gimnasio-semana-12.html) · para ensayar cuando quieras

## Hoja de consulta

Repaso integrador de la unidad. Responde y checa qué tan claro tienes el viaje de las palabras.

<div id="rp12">
  <div class="rp12-head"><strong>Repaso integrador</strong><span id="rp12-score">0 / 0</span></div>
  <div class="rp12-q" id="rp12-q"></div>
  <div class="rp12-opts" id="rp12-opts"></div>
  <button class="rp12-next" id="rp12-next" hidden>Siguiente</button>
  <div class="rp12-done" id="rp12-done" hidden></div>
</div>

<style>
#rp12{margin:1rem 0;border:1px solid #eadce6;border-radius:.9rem;padding:1rem;background:#fbf4f9}
#rp12 *{box-sizing:border-box}
#rp12 .rp12-head{display:flex;justify-content:space-between;align-items:center;color:#6b1e5a}
#rp12 .rp12-q{margin:.8rem 0;font-size:1.05rem;color:#333;font-weight:700}
#rp12 .rp12-opts{display:flex;flex-direction:column;gap:.5rem}
#rp12 .rp12-opts button{padding:.7rem .9rem;border:1px solid #d9c3d4;border-radius:.6rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer;text-align:left}
#rp12 .rp12-opts button.ok{background:#1f8a4c;color:#fff;border-color:#1f8a4c}
#rp12 .rp12-opts button.no{background:#c0392b;color:#fff;border-color:#c0392b}
#rp12 .rp12-opts button:disabled{cursor:default;opacity:.9}
#rp12 .rp12-next{margin-top:.8rem;padding:.6rem 1.3rem;border:none;border-radius:.6rem;background:#c8127a;color:#fff;font-weight:700;cursor:pointer}
#rp12 .rp12-done{margin-top:.6rem;color:#6b1e5a;font-weight:700}
</style>

<script>
(function(){
  var Q=[
    {q:"NOCTE dio 'noche' por la ley:",o:["CT se volvió ch","F se volvió h","O diptongó"],a:0},
    {q:"'ojalá' viene del árabe y significa:",o:["si Dios quiere","buena suerte","hasta pronto"],a:0},
    {q:"'cadáver' NO viene de un acrónimo. Viene de:",o:["cadere (caer)","carne + gusanos","caja + verme"],a:0},
    {q:"Una palabra viva que no está en el DLE:",o:["existe igual; el diccionario va detrás","no existe","está mal dicha"],a:0},
    {q:"'chocolate' viene del:",o:["náhuatl (xocolatl)","árabe","francés"],a:0},
    {q:"Señal casi segura de etimología falsa:",o:["que sea un acrónimo antiguo","que tenga fuente","que sea larga"],a:0},
    {q:"Reconstruye: si hoy dices 'hecho', el latín era:",o:["FACTU","HECHUM","FETCHU"],a:0},
    {q:"En el debate de extranjerismos, cambiar de bando sirve para:",o:["revisar tu propio marco","ganar el debate","confundir al rival"],a:0}
  ];
  Q.sort(function(){return Math.random()-.5;});
  var i=0,score=0,total=0;
  var qEl=document.getElementById('rp12-q'),opts=document.getElementById('rp12-opts'),sc=document.getElementById('rp12-score'),nx=document.getElementById('rp12-next'),done=document.getElementById('rp12-done');
  function show(){
    var item=Q[i];qEl.textContent=item.q;opts.innerHTML='';nx.hidden=true;
    item.o.map(function(t,idx){return [t,idx];}).sort(function(){return Math.random()-.5;}).forEach(function(pair){
      var b=document.createElement('button');b.textContent=pair[0];
      b.addEventListener('click',function(){
        total++;Array.prototype.forEach.call(opts.children,function(c){c.disabled=true;});
        if(pair[1]===item.a){b.className='ok';score++;}
        else{b.className='no';Array.prototype.forEach.call(opts.children,function(c){if(c.textContent===item.o[item.a])c.className='ok';});}
        sc.textContent=score+' / '+total;nx.hidden=false;
      });
      opts.appendChild(b);
    });
  }
  nx.addEventListener('click',function(){i++;if(i<Q.length){show();}else{opts.innerHTML='';qEl.textContent='';nx.hidden=true;done.hidden=false;done.textContent='Terminaste: '+score+' de '+Q.length+'. Lo que falle, repásalo antes del quiz.';}});
  if(qEl)show();
})();
</script>

---

## Las tarjetas de la semana

Sin tarjetas nuevas. Repasa el mazo completo de las dos unidades: alfabeto, raíces, leyes fonéticas, préstamos.

## Lo que produjimos

*Los mejores argumentos del debate, de los dos lados. Se llena al cerrar la semana.*

## El postre 🍨

La RAE dice "limpia, fija y da esplendor". Pero el español que hablas hoy es latín "sucio", náhuatl "prestado" y árabe "colado". Si lo hubieran limpiado del todo, no tendrías con qué hablar. La lengua no es de la Academia: es de quien la usa.

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
