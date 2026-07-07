---
title: "Semana 14 · La letra chiquita"
parent: Semanas
nav_order: 15
---

# Semana 14 · La letra chiquita

> **La pregunta de la semana:** ¿qué dice la letra chiquita?

<div id="wk-gate" data-abre="2026-10-26"></div>

**Esta semana podrás:** entender las frases latinas de los contratos, las leyes y las noticias, y detectar cuándo alguien las usa mal.

El griego abrió la medicina. El latín abre los tribunales. Entender la letra chiquita es no firmar lo que no entiendes.

---

## Herramientas de la semana

### En el centro de cómputo (jueves)

1. Confirma en el [DLE](https://dle.rae.es) la forma correcta de 4 locuciones (cómo se escriben, si llevan tilde).
2. Caza una locución latina "en libertad": una noticia, un contrato, un meme, una canción. Documenta: dónde apareció, qué significa, si se usó bien o mal.
3. Los errores de figuras públicas son trofeos: captura y corrección.

---

## El gimnasio de la semana

Los ejercicios de esta semana, para tu celular o el centro de cómputo. Sin nota y sin registro: puro entrenamiento.

- [¿Bien o mal dicho?](../ejercicios/semana-14/ejercicio-14A-bien-o-mal-dicho.html) · martes
- [Taller de locuciones](../ejercicios/semana-14/ejercicio-14B-taller-de-locuciones.html) · miércoles
- [Cazadores de locuciones](../ejercicios/semana-14/ejercicio-14C-cazadores-de-locuciones.html) · jueves, centro de cómputo
- [Quiz de gimnasio](../ejercicios/semana-14/quiz-gimnasio-semana-14.html) · para ensayar cuando quieras

## Hoja de consulta

Toca una locución para ver qué significa y cómo se usa bien. Ojo con las que se dicen mal.

<div id="lc14">
  <div class="lc14-grid" id="lc14-grid"></div>
  <div class="lc14-out" id="lc14-out">Toca una locución.</div>
</div>

<style>
#lc14{margin:1rem 0}
#lc14 *{box-sizing:border-box}
#lc14 .lc14-grid{display:flex;flex-wrap:wrap;gap:.45rem}
#lc14 .lc14-grid button{padding:.45rem .8rem;border:1px solid #d9c3d4;border-radius:.5rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer;font-style:italic}
#lc14 .lc14-grid button.on{background:#c8127a;color:#fff;border-color:#c8127a}
#lc14 .lc14-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1.1rem;background:#fbf4f9;min-height:4.5rem}
#lc14 .lc14-mean{color:#6b1e5a;font-weight:700}
#lc14 .lc14-use{margin-top:.35rem;color:#333}
#lc14 .lc14-warn{margin-top:.5rem;color:#a3312b;font-size:.9rem;font-weight:700}
</style>

<script>
(function(){
  var L=[
   ["motu proprio","por voluntad propia, sin que nadie te lo pida","Renunció motu proprio.","Se dice mal: NO es 'de motu propio'. Sin 'de' y con dos erres."],
   ["grosso modo","a grandes rasgos, sin detalle","Grosso modo, ya entendí de qué va.","Se dice mal: NO es 'a grosso modo'. Sin 'a'."],
   ["habeas corpus","que tengas el cuerpo: no te pueden detener sin justificar","Pidió un habeas corpus.",""],
   ["de facto","de hecho, en la práctica (aunque no en la ley)","Es el líder de facto.",""],
   ["ipso facto","en el acto, inmediatamente","Lo resolvió ipso facto.",""],
   ["statu quo","el estado actual de las cosas","No querían cambiar el statu quo.","Se dice mal: en español la norma es 'statu quo', no 'status quo'."],
   ["per se","por sí mismo","El dato per se no dice nada.",""],
   ["ad hoc","hecho a propósito para esto","Formaron un comité ad hoc.",""],
   ["in fraganti","en el momento justo del hecho","Lo agarraron in fraganti.",""],
   ["a priori","antes de comprobarlo, de entrada","A priori parece buena idea.",""],
   ["carpe diem","aprovecha el día","Se tatuó carpe diem.",""],
   ["alea iacta est","la suerte está echada","Firmó y dijo: alea iacta est.",""]
  ];
  var grid=document.getElementById('lc14-grid'),out=document.getElementById('lc14-out');
  L.forEach(function(x){
    var b=document.createElement('button');b.textContent=x[0];
    b.addEventListener('click',function(){
      Array.prototype.forEach.call(grid.children,function(c){c.classList.remove('on');});
      b.classList.add('on');
      out.innerHTML='<div class="lc14-mean">'+x[1]+'</div><div class="lc14-use">Ejemplo: '+x[2]+'</div>'+(x[3]?'<div class="lc14-warn">'+x[3]+'</div>':'');
    });
    grid.appendChild(b);
  });
})();
</script>

{: .ojo }
Tres errores que oirás toda tu vida: "a grosso modo", "de motu propio" y "status quo". Ahora ya sabes por qué están mal.

---

## Las tarjetas de la semana

| Frente | Reverso (significado · uso) |
|---|---|
| motu proprio | por voluntad propia · sin "de" |
| grosso modo | a grandes rasgos · sin "a" |
| habeas corpus | derecho a no ser detenido sin causa |
| de facto | de hecho, en la práctica |
| statu quo | el estado actual |
| ipso facto | en el acto |

## Lo que produjimos

*La galería de locuciones latinas cazadas en el mundo real, con sus correcciones. Se llena al cerrar la semana.*

## El postre 🍨

*et cetera* es latín: "y lo demás". Cuando escribes "etc." estás abreviando una frase latina de hace dos mil años sin darte cuenta. También *versus* (contra), *alias* (de otro nombre) y *currículum* (lo que se ha corrido, la carrera). Hablas más latín del que crees.

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
