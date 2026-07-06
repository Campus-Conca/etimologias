---
title: "Semana 0 · Encendiendo motores"
parent: Semanas
nav_order: 1
---

# Semana 0 · Encendiendo motores

> **La pregunta de la semana:** ¿de qué vive este curso?

<div id="wk-gate" data-abre="2026-07-27"></div>

Lo que quedó instalado:

- **Tu gimnasio de palabras**: Anki o caja Leitner, con el [estándar de tarjeta](../recursos/anki.html). 10 minutos al día.
- **El pacto de IA**, firmado y pegado en tu cuaderno.
- **El pacto de evaluación**, la tercera firma: en este curso ningún trabajo lleva calificación, y las que pide la universidad las propones tú. Cómo funciona todo, en [Tu calificación](../evaluacion.html).
- **Tu expediente**: el cuadernillo que vive en tu portafolio. Ahí registras tus quizzes, tu suelo y tus autoevaluaciones. Es tuyo.
- Las [tres fuentes de cabecera](../recursos/fuentes.html) y el protocolo: nada se acepta sin fuente.
- **Tu primer libro**, elegido por ti. Si no sabes por dónde empezar, está la mesa de libros y la página [Leemos](../leemos.html).
- **Tus derechos como lector**, firmados junto al pacto de IA. Están completos en [Leemos](../leemos.html).
- **La tarea fundadora**: *la palabra que ya nadie usa*. Pregúntale a un abuelo, a tu mamá o a un vecino por una palabra de antes. Trae la palabra, qué significaba y quién te la regaló.

## Lo que produjimos

*Aquí va el primer inventario del grupo: las palabras favoritas de la ronda inaugural.*

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
  n.innerHTML='<strong>El curso todavía no arranca.</strong><br>Nos vemos el lunes '+abre.getDate()+' de '+meses[abre.getMonth()]+' de '+abre.getFullYear()+'. Descansa, que vienen palabras.';
  m.parentNode.appendChild(n);
})();
</script>
