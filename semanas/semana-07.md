---
title: "Semana 7 · Cierre de unidad"
parent: Semanas
nav_order: 8
---

# Semana 7 · Cierre de unidad: qué tan hondo veo ya

> **La pregunta de la semana:** ¿qué tan hondo veo ya dentro de las palabras?

<div id="wk-gate" data-abre="2026-09-07"></div>

**Esta semana podrás:** demostrar todo lo de la unidad en el quiz integrador y en tu primera defensa oral, y estrenar el círculo de lectura.

No hay tema nuevo. Esta semana se ve lo que ya sabes.

---

## Herramientas de la semana

### Cómo se evalúa tu defensa (rúbrica)

Peldaño 1: en parejas, ante el profesor. Los dos hablan. Dura 3 a 4 minutos. Esto es lo que cuenta:

| Se evalúa | No se evalúa |
|---|---|
| Que la descomposición sea correcta (raíz, prefijo, sufijo) | Que estés nervioso |
| Que uses una fuente de autoridad | Que actúes o memorices un discurso |
| Que expliques por qué elegiste esa palabra | Que hables bonito |

Traes tu palabra, su descomposición y tu fuente anotada. Puedes apoyarte en una ficha. No se vale leer todo.

---

## Hoja de consulta

Repaso integrador de la unidad. Responde y checa cuánto ves ya dentro de las palabras.

<div id="rp7">
  <div class="rp7-head"><strong>Repaso integrador</strong><span id="rp7-score">0 / 0</span></div>
  <div class="rp7-q" id="rp7-q"></div>
  <div class="rp7-opts" id="rp7-opts"></div>
  <button class="rp7-next" id="rp7-next" hidden>Siguiente</button>
  <div class="rp7-done" id="rp7-done" hidden></div>
</div>

<style>
#rp7{margin:1rem 0;border:1px solid #eadce6;border-radius:.9rem;padding:1rem;background:#fbf4f9}
#rp7 *{box-sizing:border-box}
#rp7 .rp7-head{display:flex;justify-content:space-between;align-items:center;color:#6b1e5a}
#rp7 .rp7-q{margin:.8rem 0;font-size:1.05rem;color:#333;font-weight:700}
#rp7 .rp7-opts{display:flex;flex-direction:column;gap:.5rem}
#rp7 .rp7-opts button{padding:.7rem .9rem;border:1px solid #d9c3d4;border-radius:.6rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer;text-align:left}
#rp7 .rp7-opts button.ok{background:#1f8a4c;color:#fff;border-color:#1f8a4c}
#rp7 .rp7-opts button.no{background:#c0392b;color:#fff;border-color:#c0392b}
#rp7 .rp7-opts button:disabled{cursor:default;opacity:.9}
#rp7 .rp7-next{margin-top:.8rem;padding:.6rem 1.3rem;border:none;border-radius:.6rem;background:#c8127a;color:#fff;font-weight:700;cursor:pointer}
#rp7 .rp7-done{margin-top:.6rem;color:#6b1e5a;font-weight:700}
</style>

<script>
(function(){
  var Q=[
    {q:"¿Qué letra griega es η?",o:["e (larga)","n","i"],a:0},
    {q:"La raíz graf- significa:",o:["escribir","medir","tiempo"],a:0},
    {q:"Descompón: telescopio",o:["tele (lejos) + scopio (observar)","tele (tres) + copio","telo + scopio"],a:0},
    {q:"gerontocracia (nunca vista) significa:",o:["gobierno de los viejos","miedo a envejecer","estudio de la vejez"],a:0},
    {q:"En 'invierno', ¿el in- es prefijo de negación?",o:["No, es un espejismo","Sí","Solo a veces"],a:0},
    {q:"reloj esconde las raíces:",o:["hora + contar (logos)","re- + loj","reloj es palabra simple"],a:0},
    {q:"¿Cuántas palabras da, mínimo, una raíz de alto rendimiento?",o:["muchas: es una fábrica","una","dos"],a:0},
    {q:"La raíz -fobia significa:",o:["miedo","amor","dolor"],a:0}
  ];
  Q.sort(function(){return Math.random()-.5;});
  var i=0,score=0,total=0;
  var qEl=document.getElementById('rp7-q'),opts=document.getElementById('rp7-opts'),sc=document.getElementById('rp7-score'),nx=document.getElementById('rp7-next'),done=document.getElementById('rp7-done');
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
  nx.addEventListener('click',function(){i++;if(i<Q.length){show();}else{opts.innerHTML='';qEl.textContent='';nx.hidden=true;done.hidden=false;done.textContent='Terminaste: '+score+' de '+Q.length+'. Lo que falle hoy, repásalo antes del quiz.';}});
  if(qEl)show();
})();
</script>

---

## Las tarjetas de la semana

Sin tarjetas nuevas. Esta semana es de consolidación: repasa el mazo completo de la unidad (alfabeto, raíces, descomposición).

## Lo que produjimos

*Los mejores crucigramas del grupo y las palabras que trajimos de nuestras lecturas. Se llena al cerrar la semana.*

## El postre 🍨

*almohada* sigue sin explicarse desde la semana 2. Pista: no es griega ni latina, y empieza con *al-*, como *álgebra*, *alcohol*, *almohada*, *alcalde*. Ese *al-* delata a una lengua entera que vivió aquí ochocientos años. La respuesta abre la Unidad 2.

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
