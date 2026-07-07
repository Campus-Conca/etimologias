---
title: "Semana 3 · Sumas de palabras"
parent: Semanas
nav_order: 4
---

# Semana 3 · Sumas de palabras

> **La pregunta de la semana:** ¿cómo se arma y se desarma una palabra?

<div id="wk-gate" data-abre="2026-08-10"></div>

**Esta semana podrás:** escribir la suma de una palabra, armar una matriz morfológica y distinguir un corte real de un espejismo.

La regla de oro: un corte es real solo si la pieza reaparece en otras palabras con el mismo significado, y la fuente lo confirma.

---

## Herramientas de la semana

### En el centro de cómputo (jueves)

1. Toma 3 cortes dudosos del juego del martes. Verifica en el [DLE](https://dle.rae.es) y el [DECEL](http://etimologias.dechile.net): ¿el corte era real?
2. Resuelve el caso *mango*: ¿el de la sartén y el de comer son la misma palabra? (Ojo: son dos.)
3. Captura: corte propuesto, veredicto del martes, veredicto de las fuentes, fuente.

---

## El gimnasio de la semana

Los ejercicios de esta semana, para tu celular o el centro de cómputo. Sin nota y sin registro: puro entrenamiento.

- [Sumas de palabras](../ejercicios/semana-03/ejercicio-3A-sumas-de-palabras.html) · martes
- [La fábrica de matrices](../ejercicios/semana-03/ejercicio-3B-fabrica-de-matrices.html) · miércoles
- [El detector de espejismos](../ejercicios/semana-03/ejercicio-3C-detector-de-espejismos.html) · jueves, centro de cómputo
- [Quiz de gimnasio](../ejercicios/semana-03/quiz-gimnasio-semana-03.html) · para ensayar cuando quieras

## Hoja de consulta

Antes de verificar, apuesta. ¿El corte es real o es un espejismo?

<div id="es3">
  <div class="es3-head"><strong>¿Corte real o espejismo?</strong><span id="es3-score">0 / 0</span></div>
  <div id="es3-cards"></div>
</div>

<style>
#es3{margin:1rem 0}
#es3 *{box-sizing:border-box}
#es3 .es3-head{display:flex;justify-content:space-between;align-items:center;color:#6b1e5a;margin-bottom:.6rem}
#es3 .es3-card{border:1px solid #eadce6;border-radius:.8rem;padding:.9rem 1rem;background:#fff;margin-bottom:.6rem}
#es3 .es3-cut{color:#333;font-weight:700;font-size:1.05rem}
#es3 .es3-btns{display:flex;gap:.5rem;margin-top:.6rem}
#es3 .es3-btns button{flex:1;padding:.55rem;border:1px solid #d9c3d4;border-radius:.5rem;background:#fbf4f9;color:#6b1e5a;font-weight:700;cursor:pointer}
#es3 .es3-ans{margin-top:.6rem;padding:.6rem .8rem;border-radius:.5rem;font-size:.95rem;display:none}
#es3 .es3-ans.show{display:block}
#es3 .es3-ans.real{background:#e4f5ec;color:#1f6b43}
#es3 .es3-ans.esp{background:#fdecec;color:#a3312b}
</style>

<script>
(function(){
  var C=[
   {cut:"des + ayuno",real:true,txt:"Real. Desayunar es romper (des-) el ayuno. Nadie lo cree, pero ahí está."},
   {cut:"de + bate",real:true,txt:"Real. De batir: en un debate se baten las ideas."},
   {cut:"in + vierno",real:false,txt:"Espejismo. Invierno viene de hibernum; ese 'in' no es el prefijo de negación."},
   {cut:"a + migo",real:false,txt:"Espejismo. Amigo viene de amicus; no hay prefijo a- ni raíz 'migo'."},
   {cut:"man + go",real:false,txt:"Espejismo doble. El mango de la sartén sí viene de manus (mano), pero el mango que comes llegó del tamil. Dos palabras distintas."},
   {cut:"re + loj",real:false,txt:"Espejismo con sorpresa. No es el prefijo re-. La respuesta completa, en la semana 5. Que duela la espera."}
  ];
  C.sort(function(){return Math.random()-.5;});
  var box=document.getElementById('es3-cards'),sc=document.getElementById('es3-score');
  var score=0,total=0;
  C.forEach(function(c){
    var card=document.createElement('div');card.className='es3-card';
    card.innerHTML='<div class="es3-cut">'+c.cut+'</div><div class="es3-btns"><button data-v="real">Real</button><button data-v="esp">Espejismo</button></div><div class="es3-ans '+(c.real?'real':'esp')+'">'+c.txt+'</div>';
    var btns=card.querySelectorAll('button'),ans=card.querySelector('.es3-ans');
    Array.prototype.forEach.call(btns,function(b){
      b.addEventListener('click',function(){
        total++;var said=(b.getAttribute('data-v')==='real');
        if(said===c.real)score++;
        Array.prototype.forEach.call(btns,function(x){x.disabled=true;});
        ans.classList.add('show');sc.textContent=score+' / '+total;
      });
    });
    box.appendChild(card);
  });
})();
</script>

{: .reto }
Una raíz no es una palabra: es una fábrica. La raíz *port-* (llevar) da exportar, importar, transporte, portátil, portero, portal, reportero. ¿Cuántas más?

---

## Las tarjetas de la semana

| Frente | Reverso (significado · palabra ancla) |
|---|---|
| suma de palabras | des + arm + ar → desarmar |
| matriz morfológica | una raíz por muchos afijos · port- |
| evidencia de familia | la pieza reaparece · des- en deshacer |
| espejismo | corte falso · in-vierno |
| port- | llevar · transporte |
| graf- | escribir · fotografía |

## Lo que produjimos

*La mejor matriz del grupo y los veredictos más sorprendentes del tribunal. Se llena al cerrar la semana.*

## El postre 🍨

*desayuno* es romper el ayuno, igual que el inglés *breakfast* (break + fast) y el francés *déjeuner*. Tres lenguas distintas tuvieron la misma idea: la primera comida del día es, literalmente, dejar de ayunar. Las lenguas piensan parecido más seguido de lo que creemos.

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
