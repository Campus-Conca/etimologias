---
title: "Semana 6 · Descifrar a ciegas"
parent: Semanas
nav_order: 7
---

# Semana 6 · Descifrar a ciegas

> **La pregunta de la semana:** ¿puedo descifrar una palabra que nunca he visto?

<div id="wk-gate" data-abre="2026-08-31"></div>

**Esta semana podrás:** leer una palabra desconocida solo con tus piezas, y armar palabras nuevas que se entiendan aunque no estén en el diccionario.

*hēmera* (día) + *opía* (visión) = *hemeralopía*: problema para ver de día. Nunca la habías visto y ya la lees. Eso es el curso funcionando.

---

## Herramientas de la semana

### En el centro de cómputo (jueves)

1. Toma las palabras desconocidas que descifraste el martes. Búscalas en el [DLE](https://dle.rae.es): ¿existían? ¿acertaste el significado?
2. Busca tu "monstruo" inventado. Sorpresa frecuente: a veces ya existe.
3. Captura: palabra, significado que dedujiste, veredicto, fuente.
4. Suma tu acierto al marcador del grupo.

---

## El gimnasio de la semana

Los ejercicios de esta semana, para tu celular o el centro de cómputo. Sin nota y sin registro: puro entrenamiento.

- [La prueba de fuego](../ejercicios/semana-06/ejercicio-6A-la-prueba-de-fuego.html) · martes
- [Taller de descifrado](../ejercicios/semana-06/ejercicio-6B-taller-de-descifrado.html) · miércoles
- [¿Existían de verdad?](../ejercicios/semana-06/ejercicio-6C-existian-de-verdad.html) · jueves, centro de cómputo
- [Quiz de gimnasio](../ejercicios/semana-06/quiz-gimnasio-semana-06.html) · para ensayar cuando quieras

## Hoja de consulta

Combina una raíz de la izquierda con una de la derecha. Descubre qué palabra forman y qué significa.

<div id="al6">
  <div class="al6-cols">
    <div class="al6-col" id="al6-left"></div>
    <div class="al6-col" id="al6-right"></div>
  </div>
  <div class="al6-out" id="al6-out">Elige una pieza de cada lado.</div>
</div>

<style>
#al6{margin:1rem 0}
#al6 *{box-sizing:border-box}
#al6 .al6-cols{display:grid;grid-template-columns:1fr 1fr;gap:.8rem}
#al6 .al6-col{display:flex;flex-direction:column;gap:.4rem}
#al6 .al6-col button{padding:.5rem .6rem;border:1px solid #d9c3d4;border-radius:.5rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer;text-align:left;font-size:.95rem}
#al6 .al6-col button.on{background:#c8127a;color:#fff;border-color:#c8127a}
#al6 .al6-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1rem;background:#fbf4f9;min-height:4rem}
#al6 .al6-out .word{font-size:1.4rem;color:#6b1e5a;font-weight:800}
#al6 .al6-out .lit{color:#333;margin-top:.3rem}
#al6 .al6-out .tag{display:inline-block;margin-top:.5rem;font-size:.8rem;font-weight:700;padding:.2rem .6rem;border-radius:1rem}
#al6 .al6-out .real{background:#e4f5ec;color:#1f8a4c}
#al6 .al6-out .coin{background:#fdeaf5;color:#c8127a}
</style>

<script>
(function(){
  var LEFT=[["helio","sol"],["geo","tierra"],["crono","tiempo"],["termo","calor"],["tele","lejos"],["micro","pequeño"],["piro","fuego"],["xeno","extraño"],["antropo","ser humano"],["biblio","libro"]];
  var RIGHT=[["-metro","medir"],["-scopio","observar"],["-fobia","miedo"],["-filia","amor"],["-manía","obsesión"],["-logía","estudio"],["-cracia","poder"],["-fagia","comer"],["-latría","adoración"],["-centro","centro"]];
  var REAL={"helio|-centro":"heliocéntrico","geo|-centro":"geocéntrico","crono|-metro":"cronómetro","termo|-metro":"termómetro","tele|-scopio":"telescopio","micro|-scopio":"microscopio","piro|-manía":"piromanía","xeno|-fobia":"xenofobia","antropo|-fagia":"antropofagia","antropo|-logía":"antropología","biblio|-filia":"bibliofilia","biblio|-manía":"bibliomanía","helio|-latría":"heliolatría","geo|-logía":"geología","geo|-metro":"geometría","xeno|-filia":"xenofilia","piro|-fobia":"pirofobia","helio|-metro":"heliómetro","antropo|-logía2":""};
  var lc=null,rc=null;
  var left=document.getElementById('al6-left'),right=document.getElementById('al6-right'),out=document.getElementById('al6-out');
  function mk(arr,box,side){
    arr.forEach(function(x){
      var b=document.createElement('button');b.textContent=x[0]+' ('+x[1]+')';
      b.addEventListener('click',function(){
        Array.prototype.forEach.call(box.children,function(c){c.classList.remove('on');});
        b.classList.add('on');
        if(side==='l')lc=x;else rc=x;
        combine();
      });
      box.appendChild(b);
    });
  }
  function combine(){
    if(!lc||!rc){return;}
    var key=lc[0]+'|'+rc[0];
    var lit=lc[1]+' + '+rc[1];
    if(REAL[key]){
      out.innerHTML='<div class="word">'+REAL[key]+'</div><div class="lit">'+lit+'</div><span class="tag real">Está en el diccionario</span>';
    }else{
      out.innerHTML='<div class="word">'+lc[0]+rc[0].replace('-','')+'</div><div class="lit">'+lit+'</div><span class="tag coin">No está en el diccionario, pero se entiende</span>';
    }
  }
  mk(LEFT,left,'l');mk(RIGHT,right,'r');
})();
</script>

{: .ojo }
Cuando una combinación no está en el diccionario pero se entiende, acabas de inventar un neologismo. Guárdalo: en la semana 16 hacemos concurso.

---

## Las tarjetas de la semana

| Frente | Reverso (significado · palabra ancla) |
|---|---|
| -opía | visión · miopía |
| -cracia | poder, gobierno · democracia |
| -fagia | comer · antropofagia |
| -latría | adoración · idolatría |
| -fobia | miedo · claustrofobia |
| -filia | amor, afinidad · bibliofilia |

## Por si hay tiempo: la tanda del cuaderno

Ocho palabras que probablemente nunca has visto. Deduce el significado con las pistas y luego toca para comprobar.

<details><summary><strong>cefalalgia</strong> · si <em>kephalé</em> = cabeza y <em>algos</em> = dolor...</summary>Dolor de cabeza. La próxima vez que digas "me duele la cabeza", ya sabes cómo lo escribe un médico.</details>

<details><summary><strong>gerontocracia</strong> · si <em>géron</em> = anciano y <em>cracia</em> = poder...</summary>Gobierno de los viejos. Pregunta para discutir: ¿vivimos en una?</details>

<details><summary><strong>burocracia</strong> · si <em>bureau</em> = oficina (francés) y <em>cracia</em> = poder...</summary>El poder de las oficinas. Palabra híbrida: mitad francesa, mitad griega. Las raíces no piden pasaporte.</details>

<details><summary><strong>iatrofobia</strong> · si <em>iatrós</em> = médico y <em>fobia</em> = miedo...</summary>Miedo al médico. La raíz <em>iatro</em> es vieja conocida tuya: pediatra, geriatra.</details>

<details><summary><strong>egolatría</strong> · si <em>ego</em> = yo y <em>latría</em> = adoración...</summary>Adoración de uno mismo. Conoces a alguien, no lo niegues.</details>

<details><summary><strong>quiromancia</strong> · si <em>quiro</em> = mano y <em>mancia</em> = adivinación...</summary>Leer la suerte en las manos. La misma <em>mancia</em> de cartomancia y nigromancia.</details>

<details><summary><strong>hemorragia</strong> · si <em>hemo</em> = sangre y <em>rragia</em> = brotar...</summary>Sangre que brota. La conocías de oído; ahora la conoces por dentro.</details>

<details><summary><strong>barómetro</strong> · si <em>baros</em> = presión, peso y <em>metro</em> = medir...</summary>El que mide la presión atmosférica. Primo del termómetro y del cronómetro.</details>

## Lo que produjimos

*El marcador de acierto del grupo descifrando palabras nunca vistas, y los mejores monstruos inventados. Se llena al cerrar la semana.*

## El postre 🍨

*Dinosaurio* es *deinós* (terrible) + *saûros* (lagarto): "lagarto terrible". La inventó el paleontólogo Richard Owen en 1842, armándola con piezas griegas, igual que tú esta semana. Los científicos llevan siglos jugando este juego.

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
