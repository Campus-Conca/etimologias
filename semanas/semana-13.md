---
title: "Semana 13 · Entender a los médicos"
parent: Semanas
nav_order: 14
---

# Semana 13 · Entender a los médicos

> **La pregunta de la semana:** ¿puedo entender a los médicos y a los científicos?

<div id="wk-gate" data-abre="2026-10-19"></div>

**Esta semana podrás:** descomponer un tecnicismo médico y traducirlo al español llano, como para explicárselo a tu abuela.

Los médicos hablan en griego. Y el griego se descifra. Entender lo que te pasa en el cuerpo es poder, y ese poder está en las raíces.

---

## Herramientas de la semana

### El código de la medicina

**Órganos:** cardio (corazón), gastro (estómago), hepato (hígado), nefro (riñón), dermo (piel), cefalo (cabeza), neumo (pulmón), osteo (hueso), neuro (nervio), hemo (sangre).

**Padecimientos:** -itis (inflamación), -algia (dolor), -patía (enfermedad), -oma (tumor), -ectomía (extirpación), -rragia (sangrado), -scopia (mirar dentro).

Un tecnicismo médico casi siempre es órgano + padecimiento. Es álgebra de palabras con bata.

---

## Hoja de consulta

Toca un tecnicismo y velo en español llano. Cuenta cuántos dejan de darte miedo.

<div id="md13">
  <div class="md13-grid" id="md13-grid"></div>
  <div class="md13-out" id="md13-out">Toca un tecnicismo.</div>
</div>

<style>
#md13{margin:1rem 0}
#md13 *{box-sizing:border-box}
#md13 .md13-grid{display:flex;flex-wrap:wrap;gap:.45rem}
#md13 .md13-grid button{padding:.45rem .8rem;border:1px solid #d9c3d4;border-radius:2rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer}
#md13 .md13-grid button.on{background:#c8127a;color:#fff;border-color:#c8127a}
#md13 .md13-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1.1rem;background:#fbf4f9;min-height:4rem}
#md13 .md13-parts{color:#6b1e5a;font-weight:700}
#md13 .md13-plain{margin-top:.4rem;color:#333;font-size:1.05rem}
</style>

<script>
(function(){
  var T=[
   ["gastritis","gastro (estómago) + -itis (inflamación)","Inflamación del estómago."],
   ["hepatomegalia","hepato (hígado) + megalia (agrandamiento)","El hígado está más grande de lo normal."],
   ["cardiopatía","cardio (corazón) + -patía (enfermedad)","Enfermedad del corazón."],
   ["dermatitis","dermato (piel) + -itis (inflamación)","Inflamación de la piel."],
   ["cefalalgia","cefalo (cabeza) + -algia (dolor)","Dolor de cabeza."],
   ["nefrectomía","nefro (riñón) + -ectomía (extirpar)","Operación para quitar un riñón."],
   ["hemorragia","hemo (sangre) + -rragia (flujo)","Salida abundante de sangre."],
   ["neuralgia","neuro (nervio) + -algia (dolor)","Dolor de un nervio."],
   ["gastroscopia","gastro (estómago) + -scopia (mirar dentro)","Mirar el estómago por dentro con una cámara."],
   ["osteoporosis","osteo (hueso) + porosis (porosidad)","Huesos porosos, más frágiles."],
   ["otitis","oto (oído) + -itis (inflamación)","Inflamación del oído."],
   ["carcinoma","carcino (cáncer) + -oma (tumor)","Un tipo de tumor maligno."]
  ];
  var grid=document.getElementById('md13-grid'),out=document.getElementById('md13-out');
  T.forEach(function(x){
    var b=document.createElement('button');b.textContent=x[0];
    b.addEventListener('click',function(){
      Array.prototype.forEach.call(grid.children,function(c){c.classList.remove('on');});
      b.classList.add('on');
      out.innerHTML='<div class="md13-parts">'+x[1]+'</div><div class="md13-plain">'+x[2]+'</div>';
    });
    grid.appendChild(b);
  });
})();
</script>

{: .reto }
Al revés: ¿cómo diría un médico "inflamación del hígado"? (hepato + itis = hepatitis). ¿Y "mirar el colon por dentro"? (colonoscopia).

---

## Las tarjetas de la semana

| Frente | Reverso (significado · palabra ancla) |
|---|---|
| -itis | inflamación · gastritis |
| -algia | dolor · neuralgia |
| -ectomía | extirpación · apendicectomía |
| -patía | enfermedad · cardiopatía |
| cardio- | corazón · cardiología |
| gastro- | estómago · gastritis |
| hepato- | hígado · hepatitis |
| nefro- | riñón · nefrología |

## Lo que produjimos

*Las infografías que tradujeron diagnósticos reales al español de todos. Se llena al cerrar la semana.*

## El postre 🍨

*hospital*, *hostal*, *hotel* y *hospedaje* son la misma palabra latina (*hospes*, huésped) vestida de cuatro maneras. Y *hostil* también viene de ahí: el huésped y el enemigo eran, para el latín, el mismo extraño en la puerta. De cómo lo trataras dependía todo.

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
