---
title: "Semana 15 · Mis raíces hablan inglés"
parent: Semanas
nav_order: 16
---

# Semana 15 · Mis raíces hablan inglés

> **La pregunta de la semana:** ¿mis raíces grecolatinas hablan inglés?

<div id="wk-gate" data-abre="2026-11-02"></div>

**Esta semana podrás:** leer inglés académico casi sin saber inglés, apoyándote en las raíces que ya tienes, y esquivar los falsos amigos.

El inglés de la ciencia y la universidad está hecho de las mismas raíces griegas y latinas que llevas doce semanas memorizando. Tus raíces tienen pasaporte.

---

## Herramientas de la semana

### Los patrones de cognado

| Inglés | Español | Ejemplo |
|---|---|---|
| -tion | -ción | function → función |
| -ity | -idad | university → universidad |
| -ous | -oso | famous → famoso |
| -y | -ía | biology → biología |
| -ly | -mente | rapidly → rápidamente |

Con el patrón conviertes cientos de palabras al vuelo. Es la misma álgebra, con sufijos ingleses.

---

## El gimnasio de la semana

Los ejercicios de esta semana, para tu celular o el centro de cómputo. Sin nota y sin registro: puro entrenamiento.

- [El abstract imposible](../ejercicios/semana-15/ejercicio-15A-el-abstract-imposible.html) · martes
- [Taller de cognados](../ejercicios/semana-15/ejercicio-15B-taller-de-cognados.html) · miércoles
- [Lee lo tuyo](../ejercicios/semana-15/ejercicio-15C-lee-lo-tuyo.html) · jueves, centro de cómputo
- [Quiz de gimnasio](../ejercicios/semana-15/quiz-gimnasio-semana-15.html) · para ensayar cuando quieras

## Hoja de consulta

Toca una palabra inglesa y crúzala al español por su raíz. Luego prueba los falsos amigos: esos engañan.

<div id="cg15">
  <p class="cg15-lbl">Cognados (se parecen y significan lo mismo):</p>
  <div class="cg15-grid" id="cg15-true"></div>
  <p class="cg15-lbl">Falsos amigos (se parecen pero engañan):</p>
  <div class="cg15-grid" id="cg15-false"></div>
  <div class="cg15-out" id="cg15-out">Toca una palabra.</div>
</div>

<style>
#cg15{margin:1rem 0}
#cg15 *{box-sizing:border-box}
#cg15 .cg15-lbl{margin:.6rem 0 .3rem;color:#6b1e5a;font-weight:700;font-size:.9rem}
#cg15 .cg15-grid{display:flex;flex-wrap:wrap;gap:.45rem}
#cg15 .cg15-grid button{padding:.45rem .8rem;border:1px solid #d9c3d4;border-radius:.5rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer}
#cg15 .cg15-grid button.on{background:#c8127a;color:#fff;border-color:#c8127a}
#cg15 .cg15-grid.false button{border-color:#e6b7b0}
#cg15 .cg15-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1.1rem;background:#fbf4f9;min-height:3.5rem}
#cg15 .cg15-es{font-size:1.2rem;color:#6b1e5a;font-weight:800}
#cg15 .cg15-note{margin-top:.35rem;color:#333}
#cg15 .cg15-warn{color:#a3312b;font-weight:700}
</style>

<script>
(function(){
  var T=[["structure","estructura","de struere, construir"],["function","función","de fungi, cumplir"],["analysis","análisis","griego: soltar, descomponer"],["hypothesis","hipótesis","griego: lo que se pone debajo"],["observation","observación","de observare, vigilar"],["democracy","democracia","griego: poder del pueblo"],["biology","biología","griego: estudio de la vida"],["conclusion","conclusión","de concludere, cerrar"]];
  var F=[["library","biblioteca","NO es librería (bookstore)"],["actually","en realidad","NO es actualmente (currently)"],["sensible","sensato","NO es sensible (sensitive)"],["assist","ayudar / asistir","cuidado: a veces es 'atender'"],["lecture","conferencia, clase","NO es lectura (reading)"],["parents","padres","NO es parientes (relatives)"],["fabric","tela","NO es fábrica (factory)"],["exit","salida","NO es éxito (success)"]];
  var out=document.getElementById('cg15-out');
  function fill(list,box,isFalse){
    list.forEach(function(x){
      var b=document.createElement('button');b.textContent=x[0];
      b.addEventListener('click',function(){
        document.querySelectorAll('#cg15 button').forEach(function(c){c.classList.remove('on');});
        b.classList.add('on');
        if(isFalse){out.innerHTML='<div class="cg15-es">'+x[0]+' = '+x[1]+'</div><div class="cg15-note cg15-warn">'+x[2]+'</div>';}
        else{out.innerHTML='<div class="cg15-es">'+x[0]+' = '+x[1]+'</div><div class="cg15-note">'+x[2]+'</div>';}
      });
      box.appendChild(b);
    });
  }
  fill(T,document.getElementById('cg15-true'),false);
  fill(F,document.getElementById('cg15-false'),true);
})();
</script>

{: .reto }
Convierte con el patrón, sin diccionario: *productivity*, *curiosity*, *photography*, *rapidly*. (productividad, curiosidad, fotografía, rápidamente).

### Palabras de ida y vuelta

Hay palabras españolas que se fueron de viaje al inglés y regresaron con acento. Y peor: hay palabras que teníamos y el contacto con el inglés les cambió el significado.

*Barbecue* viene del taíno *barbacoa*, que el inglés tomó del español y luego nos devolvió como "barbiquiú". *Cachar* venía de *cacho* (cuerno) y significaba cornear; hoy significa atrapar al vuelo, por *to catch*. *Ganga* era lo barato; en la frontera es pandilla, por *gang*. Y en el Caribe, *guagua* dejó de ser el llanto del bebé para ser el autobús, por *wagon*.

El contacto entre lenguas no es una calle de un solo sentido: es un tianguis donde todo va y viene.

### El doblete: cuando el griego y el latín dieron la misma palabra

A veces las dos lenguas madre le regalaron al español una palabra para el mismo concepto, y el inglés heredó las mismas dos. Mira los pares:

| Raíz griega | Raíz latina | El mismo concepto |
|---|---|---|
| hipo (hipódromo) | equi (equitación) | caballo |
| poli (polígono) | multi (multitud) | muchos |
| bio (biología) | vita (vitamina) | vida |
| fono (teléfono) | voc (vocal) | voz, sonido |
| piro (pirotecnia) | igni (ignífugo) | fuego |

Ver el mismo concepto con dos ropajes fija los dos. Y en inglés funcionan igual: *hippodrome*, *equestrian*, *polyglot*, *multitude*.

---

## Las tarjetas de la semana

| Frente | Reverso |
|---|---|
| -tion → -ción | function → función |
| -ity → -idad | university → universidad |
| library | falso amigo: biblioteca |
| actually | falso amigo: en realidad |
| sensible (inglés) | falso amigo: sensato |
| lecture | falso amigo: conferencia |

## Lo que produjimos

*Cuánto inglés académico leyó el grupo con solo sus raíces, y el cartel de falsos amigos. Se llena al cerrar la semana.*

## El postre 🍨

La palabra más larga que casi todos entienden en inglés sin saber inglés es *internationalization*: inter + nation + al + iz + ation. Cinco piezas, todas latinas, todas tuyas. La lees entera y ni pestañeas. Eso es tener pasaporte.

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
