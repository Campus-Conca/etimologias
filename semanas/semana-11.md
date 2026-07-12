---
title: "Semana 11 · Cazadores de mitos"
parent: Semanas
nav_order: 12
---

# Semana 11 · Cazadores de mitos

> **La pregunta de la semana:** ¿cómo sé si una etimología es verdadera?

<div id="wk-gate" data-abre="2026-10-05"></div>

**Esta semana podrás:** distinguir una etimología documentada de un puro cuento, incluso cuando el cuento lo repite la IA con cara de seguridad.

Hay historias preciosas sobre el origen de las palabras que son mentira, y circulan más que las verdaderas porque son bonitas. Hoy aprendes a cazarlas.

---

## Herramientas de la semana

### Las señales de un mito

1. **Es un acrónimo.** Los acrónimos son del siglo XX. Ninguna palabra antigua nació de iniciales.
2. **La historia es demasiado buena.** Demasiado redonda, demasiado macabra, demasiado perfecta.
3. **Explica una palabra con otra lengua sin razón.** ¿Por qué una palabra española vendría del inglés?
4. **No la respalda ninguna fuente.** Verifica en Corominas o [DECEL](http://etimologias.dechile.net), nunca en el primer resultado ni en la IA.

---

## El gimnasio de la semana

Los ejercicios de esta semana, para tu celular o el centro de cómputo. Sin nota y sin registro: puro entrenamiento.

- [Cacería guiada](../ejercicios/semana-11/ejercicio-11A-caceria-guiada.html) · martes
- [El expediente de mitos](../ejercicios/semana-11/ejercicio-11B-expediente-de-mitos.html) · miércoles
- [El gran tribunal de los mitos](../ejercicios/semana-11/ejercicio-11C-gran-tribunal.html) · jueves, centro de cómputo
- [La palabra con leyenda](../ejercicios/semana-11/ejercicio-11D-la-palabra-con-leyenda.html) · viernes
- [Quiz de gimnasio](../ejercicios/semana-11/quiz-gimnasio-semana-11.html) · para ensayar cuando quieras

## Hoja de consulta

Adivina primero, revela después. ¿Cuál de estas historias es verdad?

<div id="mb11">
  <div class="mb11-head"><strong>Cazador de mitos</strong><span id="mb11-score">0 / 0</span></div>
  <div id="mb11-cards"></div>
</div>

<style>
#mb11{margin:1rem 0}
#mb11 *{box-sizing:border-box}
#mb11 .mb11-head{display:flex;justify-content:space-between;align-items:center;color:#6b1e5a;margin-bottom:.6rem}
#mb11 .mb11-card{border:1px solid #eadce6;border-radius:.8rem;padding:.9rem 1rem;background:#fff;margin-bottom:.6rem}
#mb11 .mb11-claim{color:#333;font-weight:700}
#mb11 .mb11-btns{display:flex;gap:.5rem;margin-top:.6rem}
#mb11 .mb11-btns button{flex:1;padding:.55rem;border:1px solid #d9c3d4;border-radius:.5rem;background:#fbf4f9;color:#6b1e5a;font-weight:700;cursor:pointer}
#mb11 .mb11-ans{margin-top:.6rem;padding:.6rem .8rem;border-radius:.5rem;font-size:.95rem;display:none}
#mb11 .mb11-ans.show{display:block}
#mb11 .mb11-ans.v{background:#e4f5ec;color:#1f6b43}
#mb11 .mb11-ans.f{background:#fdecec;color:#a3312b}
</style>

<script>
(function(){
  var C=[
   {claim:"cadáver viene de 'Caro Data Vermibus' (carne dada a los gusanos).",real:false,txt:"Falso. Viene de cadere (caer): el que cayó. Es un acrónimo, y los acrónimos son modernos."},
   {claim:"gringo viene de 'green go home' gritado a los soldados.",real:false,txt:"Falso. Viene de griego: 'hablar en griego' era hablar raro, incomprensible."},
   {claim:"sincero viene de 'sin cera' (mármol sin rellenar grietas).",real:false,txt:"Falso. Viene del latín sincerus (puro, sin mezcla). Bonita historia, pero cuento."},
   {claim:"OK viene de '0 killed' (cero muertos) en la guerra.",real:false,txt:"Falso. Nació como broma en EUA hacia 1839: 'oll korrect', all correct mal escrito."},
   {claim:"siesta viene de la 'hora sexta' de los romanos.",real:true,txt:"Verdadero. Del latín sexta (hora): el mediodía, cuando el sol obliga a parar."},
   {claim:"adiós viene de 'a Dios (te encomiendo)'.",real:true,txt:"Verdadero. Despedida que encomienda a la otra persona a Dios."},
   {claim:"bárbaro viene del sonido 'bar-bar' del que hablaba raro.",real:true,txt:"Verdadero. Los griegos oían 'bar-bar' en las lenguas que no entendían."},
   {claim:"tiza viene del náhuatl tizatl (tierra blanca).",real:true,txt:"Verdadero. En España dicen tiza (palabra mexicana) y en México decimos gis (palabra griega). La historia completa está en la semana 9."},
   {claim:"morfina viene de Morfeo, el dios griego del sueño.",real:true,txt:"Verdadero. La bautizó así un farmacéutico en 1806 porque produce sopor. A veces la historia increíble es la documentada: por eso se verifica."}
  ];
  C.sort(function(){return Math.random()-.5;});
  var box=document.getElementById('mb11-cards'),sc=document.getElementById('mb11-score');
  var score=0,total=0;
  C.forEach(function(c){
    var card=document.createElement('div');card.className='mb11-card';
    card.innerHTML='<div class="mb11-claim">'+c.claim+'</div><div class="mb11-btns"><button data-v="true">Verdadero</button><button data-v="false">Falso</button></div><div class="mb11-ans '+(c.real?'v':'f')+'">'+c.txt+'</div>';
    var btns=card.querySelectorAll('button'),ans=card.querySelector('.mb11-ans');
    Array.prototype.forEach.call(btns,function(b){
      b.addEventListener('click',function(){
        total++;var said=(b.getAttribute('data-v')==='true');
        if(said===c.real)score++;
        Array.prototype.forEach.call(btns,function(x){x.disabled=true;});
        ans.classList.add('show');sc.textContent=score+' / '+total;
      });
    });
    box.appendChild(card);
  });
})();
</script>

---

## Las tarjetas de la semana

| Frente | Reverso (significado · ejemplo ancla) |
|---|---|
| paretimología | etimología popular falsa · "sin cera" |
| fuente de autoridad | Corominas, DLE, DECEL · lo que decide |
| acrónimo | palabra hecha de iniciales · señal de mito |
| etimología popular | historia que circula sin fuente · gringo |

## Lo que produjimos

*Los mejores mitos que cazamos y las verdades increíbles que confirmamos. Se llena al cerrar la semana.*

## El postre 🍨

Le preguntas a una IA el origen de una palabra que acabas de inventar y te lo responde con seguridad total, historia incluida. La IA no sabe cuándo no sabe. Tú, si verificas, sí. Esa es toda la diferencia, y no es poca.

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
