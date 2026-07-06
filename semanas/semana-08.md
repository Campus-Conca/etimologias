---
title: "Semana 8 · La máquina del tiempo fonética"
parent: Semanas
nav_order: 9
---

# Semana 8 · La máquina del tiempo fonética

> **La pregunta de la semana:** ¿cómo se convirtió el latín en esto que hablo?

<div id="wk-gate" data-abre="2026-09-14"></div>

**Esta semana podrás:** predecir cómo una palabra latina se volvió española (y al revés), aplicando las leyes del cambio de sonido.

El español no se inventó: es latín gastado durante mil años en la boca de la gente. Y ese desgaste tuvo reglas.

---

## Herramientas de la semana

### En el centro de cómputo (jueves)

1. Toma 3 pares dudosos de tu equipo. Verifica en el [DECEL](http://etimologias.dechile.net) que el español venga de ese latín y qué ley operó.
2. Busca un **doblete**: una palabra latina que dio dos españolas, una popular y una culta (*AURICULA* → oreja y aurícula).
3. Captura: palabra, étimo latino, ley, fuente.

---

## Hoja de consulta

Toca una palabra latina y viaja mil años hasta el español. Fíjate en la ley que la transformó.

<div id="tm8">
  <div class="tm8-words" id="tm8-words"></div>
  <div class="tm8-out" id="tm8-out">Toca una palabra latina.</div>
</div>

<style>
#tm8{margin:1rem 0}
#tm8 *{box-sizing:border-box}
#tm8 .tm8-words{display:flex;flex-wrap:wrap;gap:.5rem}
#tm8 .tm8-words button{padding:.5rem .9rem;border:1px solid #d9c3d4;border-radius:.5rem;background:#fff;color:#6b1e5a;font-weight:700;cursor:pointer;font-style:italic}
#tm8 .tm8-words button.on{background:#c8127a;color:#fff;border-color:#c8127a}
#tm8 .tm8-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1.1rem;background:#fbf4f9;min-height:4rem}
#tm8 .tm8-line{font-size:1.3rem;color:#6b1e5a;font-weight:800}
#tm8 .tm8-line .arrow{color:#c8127a;margin:0 .5rem}
#tm8 .tm8-law{margin-top:.5rem;color:#333}
</style>

<script>
(function(){
  var P=[
   ["FILIU","hijo","F inicial se volvió h muda; la -LI- se volvió j"],
   ["FARINA","harina","F inicial se volvió h muda"],
   ["FACERE","hacer","F inicial se volvió h muda"],
   ["NOCTE","noche","el grupo CT se volvió ch"],
   ["LACTE","leche","el grupo CT se volvió ch"],
   ["OCTO","ocho","el grupo CT se volvió ch"],
   ["PLUVIA","lluvia","PL inicial se volvió ll"],
   ["CLAMARE","llamar","CL inicial se volvió ll"],
   ["FLAMMA","llama","FL inicial se volvió ll"],
   ["PORTA","puerta","la O breve diptongó en ue"],
   ["FOCU","fuego","la O breve diptongó en ue"],
   ["TERRA","tierra","la E breve diptongó en ie"],
   ["OCULU","ojo","el grupo -CUL- se volvió j"],
   ["VITA","vida","la T entre vocales se suavizó en d"]
  ];
  var box=document.getElementById('tm8-words'),out=document.getElementById('tm8-out');
  P.forEach(function(x){
    var b=document.createElement('button');b.textContent=x[0];
    b.addEventListener('click',function(){
      Array.prototype.forEach.call(box.children,function(c){c.classList.remove('on');});
      b.classList.add('on');
      out.innerHTML='<div class="tm8-line">'+x[0].toLowerCase()+'<span class="arrow">→</span>'+x[1]+'</div><div class="tm8-law">Ley: '+x[2]+'.</div>';
    });
    box.appendChild(b);
  });
})();
</script>

{: .reto }
Al revés es más difícil: si hoy dices *hecho*, ¿cuál era el latín? (Pista: CT y F. Respuesta: *FACTU*.)

---

## Las tarjetas de la semana

| Frente | Reverso (significado · palabra ancla) |
|---|---|
| F inicial → h | FARINA → harina |
| CT → ch | NOCTE → noche |
| PL / CL / FL → ll | PLUVIA → lluvia |
| vocal breve → diptongo | PORTA → puerta |
| consonante suave | VITA → vida |
| doblete | AURICULA → oreja / aurícula |

## Lo que produjimos

*Las tablas de leyes de cada equipo y los dobletes más sorprendentes. Se llena al cerrar la semana.*

## El postre 🍨

*hablar* viene de *FABULARI* (contar fábulas). Hablar era, literalmente, andar contando historias. La F se volvió h, y de contar mentiras hermosas nos quedó la palabra para todo lo que decimos. No está tan mal como origen.

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
