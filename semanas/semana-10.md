---
title: "Semana 10 · El diccionario lo hacemos nosotros"
parent: Semanas
nav_order: 11
---

# Semana 10 · El diccionario lo hacemos nosotros

> **La pregunta de la semana:** ¿y si el diccionario lo hiciéramos nosotros?

<div id="wk-gate" data-abre="2026-09-28"></div>

**Esta semana podrás:** hacer la ficha de una palabra de tu región con rigor de diccionario, y sumarla al mapa léxico del grupo.

Hay palabras vivas en la Sierra, en el barrio, en la cocina de tu abuela, que ningún diccionario registra. Si nadie las anota, se pierden. Hoy las anotamos nosotros.

---

## Herramientas de la semana

### Cómo se hace una ficha (plantilla)

Cada palabra de campo lleva estos seis datos. Toca los ejemplos para ver una ficha completa.

<div id="fx10">
  <div class="fx10-words" id="fx10-words"></div>
  <div class="fx10-out" id="fx10-out">Toca una palabra de ejemplo.</div>
</div>

### En el centro de cómputo (jueves)

1. Busca tus palabras de campo en el [DLE](https://dle.rae.es) y el [DECEL](http://etimologias.dechile.net). Tres posibles resultados: está, no está, o está con otro significado.
2. Las que **no están** son documentación original tuya. Márcalas con orgullo.
3. Sube tu mejor ficha al mapa léxico del grupo.

<style>
#fx10{margin:1rem 0}
#fx10 *{box-sizing:border-box}
#fx10 .fx10-words{display:flex;flex-wrap:wrap;gap:.45rem}
#fx10 .fx10-words button{padding:.45rem .8rem;border:1px solid #d9c3d4;border-radius:2rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer}
#fx10 .fx10-words button.on{background:#c8127a;color:#fff;border-color:#c8127a}
#fx10 .fx10-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1.1rem;background:#fbf4f9;min-height:5rem}
#fx10 .fx10-out dl{margin:0}
#fx10 .fx10-out dt{color:#c8127a;font-weight:700;font-size:.8rem;margin-top:.5rem}
#fx10 .fx10-out dd{margin:.1rem 0 0;color:#333}
</style>

<script>
(function(){
  var F=[
   {w:"molote",cat:"sustantivo",def:"Bulto o envoltorio hecho enrollando algo sobre sí mismo; también, antojito de masa rellena y enrollada.",ej:"Hazte un molote con la cobija.",quien:"Mi abuela, en la cocina.",ori:"Náhuatl, de molotic (cosa enrollada)."},
   {w:"tapanco",cat:"sustantivo",def:"Piso alto de madera construido bajo el techo para almacenar cosas.",ej:"El maíz está en el tapanco.",quien:"Mi tío, en el rancho.",ori:"Náhuatl, de tlapantli (azotea, terrado)."},
   {w:"apapachar",cat:"verbo",def:"Abrazar o mimar con ternura.",ej:"Ven, deja que te apapache.",quien:"Mi mamá.",ori:"Náhuatl, de papatzoa (ablandar); se dice que es 'abrazar con el alma'."}
  ];
  var box=document.getElementById('fx10-words'),out=document.getElementById('fx10-out');
  F.forEach(function(f){
    var b=document.createElement('button');b.textContent=f.w;
    b.addEventListener('click',function(){
      Array.prototype.forEach.call(box.children,function(c){c.classList.remove('on');});
      b.classList.add('on');
      out.innerHTML='<dl><dt>Entrada</dt><dd>'+f.w+' ('+f.cat+')</dd><dt>Definición</dt><dd>'+f.def+'</dd><dt>Ejemplo de uso</dt><dd>"'+f.ej+'"</dd><dt>Quién y dónde</dt><dd>'+f.quien+'</dd><dt>Origen</dt><dd>'+f.ori+'</dd></dl>';
    });
    box.appendChild(b);
  });
})();
</script>

{: .ojo }
Regla de la definición: no puedes usar la palabra dentro de su propia definición. "Molote: un molote de cobija" no vale.

### El mapa empieza bajo tus pies

Los nombres de los lugares también son palabras con biografía. Se llaman topónimos, y la Sierra Gorda está sembrada de ellos.

**Jalpan** viene del náhuatl *Xalpan*, sobre la arena. **Ahuacatlán** es náhuatl puro: lugar de aguacates. Pero **Concá** no es náhuatl: es un topónimo pame, de la lengua de los xi'úi que vivían aquí mucho antes que nadie.

Misión de campo: ¿qué significa Concá? ¿Y Tancoyol, Tilaco, Saldiveña? No lo respondas con el celular: pregunta a los mayores de tu comunidad, anota lo que te digan y compara versiones. Los nombres pames y huastecos de la Sierra casi no están documentados. Tu ficha puede ser de las primeras.

{: .reto }
Ficha extra para el mapa léxico: haz la ficha de un topónimo. Entrada, qué lugar nombra, qué dicen los mayores que significa, y de qué lengua parece venir.

---

## El gimnasio de la semana

Los ejercicios de esta semana, para tu celular o el centro de cómputo. Sin nota y sin registro: puro entrenamiento.

- [Definir es un oficio](../ejercicios/semana-10/ejercicio-10A-definir-es-un-oficio.html) · martes
- [Taller de fichas](../ejercicios/semana-10/ejercicio-10B-taller-de-fichas.html) · miércoles
- [¿Está o no está?](../ejercicios/semana-10/ejercicio-10C-esta-o-no-esta.html) · jueves, centro de cómputo
- [La palabra que salvé](../ejercicios/semana-10/ejercicio-10D-la-palabra-que-salve.html) · viernes
- [Quiz de gimnasio](../ejercicios/semana-10/quiz-gimnasio-semana-10.html) · para ensayar cuando quieras

## Las tarjetas de la semana

Esta semana el trabajo es hacer fichas, no tarjetas. Si quieres, suma al mazo tus dos palabras regionales favoritas, con su origen verificado.

## Lo que produjimos

*El mapa léxico de nuestra región: las palabras que salvamos del olvido. Se llena al cerrar la semana.* Míralo en [Mapa léxico del grupo](../vitrina/mapa-lexico.html).

## El postre 🍨

La RAE tardó siglos en aceptar *apapachar*. Millones de personas la decían mucho antes de que un diccionario les diera permiso. Una palabra no espera al diccionario para existir: el diccionario corre detrás de la gente.

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
