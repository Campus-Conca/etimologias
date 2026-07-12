---
title: "Semana 9 · Las lenguas escondidas"
parent: Semanas
nav_order: 10
---

# Semana 9 · Las lenguas escondidas

> **La pregunta de la semana:** ¿qué lenguas viven escondidas en mi habla?

<div id="wk-gate" data-abre="2026-09-21"></div>

**Esta semana podrás:** reconocer el náhuatl, el árabe y otras lenguas que viven en las palabras que dices todos los días.

Tu habla es un sitio arqueológico. Debajo de lo que dices hay latín, náhuatl, árabe y siglos de viajes.

Esta semana también se estrenan los primeros booktubers: los autorizados se publican en [Leemos](../leemos.html).

---

## Herramientas de la semana

### En el centro de cómputo (jueves)

1. Verifica en el [DLE](https://dle.rae.es) el origen de 4 palabras dudosas. El origen viene entre paréntesis al inicio de la entrada.
2. Elige **una palabra de tu casa o tu región** (un nahuatlismo local, un arcaísmo, una voz de tu pueblo) para investigar con tu familia. La traes el martes: es tu aporte al mapa léxico del grupo.
3. Captura: palabra, origen que apostaste, origen real, fuente.

---

## El gimnasio de la semana

Los ejercicios de esta semana, para tu celular o el centro de cómputo. Sin nota y sin registro: puro entrenamiento.

- [Cacería en tu propia habla](../ejercicios/semana-09/ejercicio-9A-caceria-de-lenguas.html) · martes
- [La lista de tu lengua](../ejercicios/semana-09/ejercicio-9B-la-lista-de-tu-lengua.html) · miércoles
- [El origen a juicio](../ejercicios/semana-09/ejercicio-9C-el-origen-a-juicio.html) · jueves, centro de cómputo
- [La palabra viajera](../ejercicios/semana-09/ejercicio-9D-la-palabra-viajera.html) · viernes
- [Quiz de gimnasio](../ejercicios/semana-09/quiz-gimnasio-semana-09.html) · para ensayar cuando quieras

## Hoja de consulta

Toca una palabra y descubre de qué lengua viene. Cuenta cuántas creías "de siempre".

<div id="lg9">
  <div class="lg9-grid" id="lg9-grid"></div>
  <div class="lg9-out" id="lg9-out">Toca una palabra.</div>
</div>

<style>
#lg9{margin:1rem 0}
#lg9 *{box-sizing:border-box}
#lg9 .lg9-grid{display:flex;flex-wrap:wrap;gap:.45rem}
#lg9 .lg9-grid button{padding:.45rem .8rem;border:1px solid #d9c3d4;border-radius:2rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer}
#lg9 .lg9-grid button.on{background:#c8127a;color:#fff;border-color:#c8127a}
#lg9 .lg9-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1.1rem;background:#fbf4f9;min-height:4rem}
#lg9 .lg9-lang{display:inline-block;font-size:.8rem;font-weight:700;padding:.2rem .7rem;border-radius:1rem;background:#fdeaf5;color:#c8127a}
#lg9 .lg9-mean{margin-top:.5rem;color:#333}
</style>

<script>
(function(){
  var W=[
   ["almohada","árabe","de al-mihadda, la que se pone bajo la mejilla"],
   ["ojalá","árabe","de law sha Allah, si Dios quiere"],
   ["álgebra","árabe","de al-yabr, la reducción, la reunión de partes rotas"],
   ["aceite","árabe","de az-zayt, el jugo de la oliva"],
   ["azúcar","árabe","de as-sukkar"],
   ["naranja","árabe","de naranya (y este del persa)"],
   ["alberca","árabe","de al-birka, el estanque"],
   ["chocolate","náhuatl","de xocolatl, agua amarga"],
   ["aguacate","náhuatl","de ahuacatl"],
   ["tomate","náhuatl","de tomatl"],
   ["cuate","náhuatl","de coatl, serpiente, gemelo"],
   ["tianguis","náhuatl","de tianquiztli, mercado"],
   ["elote","náhuatl","de elotl"],
   ["papalote","náhuatl","de papalotl, mariposa"],
   ["tiza","náhuatl","de tizatl, tierra blanca (así le dicen en España al gis)"],
   ["gis","griego","de gypsos, yeso, que viajó por el latín gypsum"],
   ["apapacho","náhuatl","de papatzoa, ablandar con los dedos"],
   ["tocayo","náhuatl","de tocaitl, nombre"],
   ["escuincle","náhuatl","de itzcuintli, perro"],
   ["chapulín","náhuatl","de chapolin, insecto que rebota"],
   ["jamón","francés","de jambon"],
   ["futbol","inglés","de football"]
  ];
  var grid=document.getElementById('lg9-grid'),out=document.getElementById('lg9-out');
  W.forEach(function(x){
    var b=document.createElement('button');b.textContent=x[0];
    b.addEventListener('click',function(){
      Array.prototype.forEach.call(grid.children,function(c){c.classList.remove('on');});
      b.classList.add('on');
      out.innerHTML='<span class="lg9-lang">'+x[1]+'</span><div class="lg9-mean">'+x[2]+'</div>';
    });
    grid.appendChild(b);
  });
})();
</script>

{: .ojo }
El *al-* delata al árabe (álgebra, alcohol, alcalde). Muchas palabras en *-tl* delatan al náhuatl (elotl, papalotl). Aprende a ver las marcas.

### El caso de la semana: gis y tiza

En el alto Egipto había una isla llamada Gypso, famosa por un material blanco que servía para construir. Los griegos lo llamaron *gypsos*, los romanos lo volvieron *gypsum*, y de esa palabra el castellano sacó dos hijas: *yeso* y *gis*.

A *gis* le fue mal en España: dejó de usarse. Pero en México los españoles aprendieron la palabra náhuatl *tizatl* (tierra blanca) y de ahí nació *tiza*.

El final es una broma de la historia: hoy en España dicen *tiza*, una palabra mexicana, y en México decimos *gis*, una palabra griega que pasó por Roma y Egipto. Cada quien usa la palabra del otro. Verifícalo el jueves en el DECEL: la historia es tan buena que merece fuente.

### Una palabra que abraza

*Apapacho* viene del náhuatl *papatzoa*, ablandar algo con los dedos. Pero los hablantes cultos del náhuatl le daban un sentido más hondo, el mismo que le damos hoy: abrazar o acariciar con el alma. Hay palabras que el español no tenía y que esta tierra le regaló.

---

## Las tarjetas de la semana

| Frente | Reverso (origen · significado) |
|---|---|
| almohada | árabe · al-mihadda, bajo la mejilla |
| ojalá | árabe · si Dios quiere |
| chocolate | náhuatl · xocolatl, agua amarga |
| cuate | náhuatl · coatl, gemelo |
| tianguis | náhuatl · tianquiztli, mercado |
| naranja | árabe (del persa) · naranya |
| tiza | náhuatl · tizatl, tierra blanca |
| gis | griego · gypsos, yeso (vía latín gypsum) |
| apapacho | náhuatl · papatzoa, acariciar con el alma |

## Por si hay tiempo: la bolsa grande de nahuatlismos

Todas estas palabras salieron del náhuatl y siguen vivas en tu boca. Cuenta cuántas dices en una semana normal:

aguacate, achichincle, ajolote, cacahuate, cacao, calabaza, camote, capulín, cenzontle, chapulín, chichicuilote, chicle, chirimoya, coyote, cuate, elote, epazote, escuincle, esquite, guacamole, huacal, huitlacoche, itacate, jacal, jícama, jícara, malacate, matatena, mecate, memela, mole, nopal, papalote, pilmama, popote, pozole, pulque, quelite, quetzal, tatemar, tejocote, temazcal, tianguis, tiza, tlacuache, tlapalería, tocayo, tomate, zapote, zopilote.

Reto para la casa: léele la lista a la persona más grande de tu familia y pregúntale cuáles usaba de niña o niño y cuáles ya no oye. Lo que te cuente vale oro para el mapa léxico de la semana 10.

## Lo que produjimos

*Las listas por lengua y las primeras palabras de nuestra región para el mapa léxico. Se llena al cerrar la semana.*

## El postre 🍨

*ojalá* le pide a Dios en árabe: viene de *law sha Allah*, "si Dios quiere". Cada vez que un mexicano dice "ojalá llueva", reza sin saberlo en la lengua de Al-Ándalus. Las palabras tienen mejor memoria que nosotros.

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
