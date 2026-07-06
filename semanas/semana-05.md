---
title: "Semana 5 · Una raíz, veinte palabras"
parent: Semanas
nav_order: 6
---

# Semana 5 · Una raíz, veinte palabras

> **La pregunta de la semana:** ¿cuántas palabras me regala una sola raíz?

<div id="wk-gate" data-abre="2026-08-24"></div>

**Esta semana podrás:** sacar en cadena la familia entera de una raíz, y resolver de una vez el enigma del *reloj*.

Una raíz no es un dato: es una llave maestra. Quien sabe *graf-* (escribir) ya lee geografía, biografía, ortografía, telégrafo y seis más, sin haberlas estudiado.

---

## Herramientas de la semana

### En el centro de cómputo (jueves)

1. Abre el [DECEL](http://etimologias.dechile.net) y busca **reloj**. Anota qué dos raíces griegas esconde (te va a sorprender).
2. Toma 3 palabras dudosas del árbol de tu equipo. Verifica en el [DLE](https://dle.rae.es) que existan y en el DECEL que la raíz sea la que creías.
3. Captura: palabra, raíz propuesta, veredicto, fuente.
4. Sube el mejor árbol de tu equipo a la vitrina.

---

## Hoja de consulta

Toca una raíz para ver a su familia. Cuenta cuántas palabras te regala cada una.

<div id="rt5">
  <div class="rt5-roots" id="rt5-roots"></div>
  <div class="rt5-out" id="rt5-out">Toca una raíz.</div>

  <div class="rt5-reloj">
    <button id="rt5-reveal">Resolver el enigma del reloj</button>
    <div id="rt5-answer" hidden>
      <p><strong>reloj</strong> no lleva el prefijo <em>re-</em>. Viene del latín <em>horologium</em>, y este del griego <em>hōrológion</em>: <strong>hōra</strong> (hora) + <strong>lógos</strong> (contar). El "re" es <em>horo-</em> gastado por los siglos. Un reloj es, literal, "el que cuenta las horas". Dos raíces griegas disfrazadas de palabra corta.</p>
    </div>
  </div>
</div>

<style>
#rt5{margin:1rem 0}
#rt5 *{box-sizing:border-box}
#rt5 .rt5-roots{display:flex;flex-wrap:wrap;gap:.5rem}
#rt5 .rt5-roots button{padding:.55rem .9rem;border:1px solid #d9c3d4;border-radius:2rem;background:#fff;font-weight:700;color:#6b1e5a;cursor:pointer;font-size:1rem}
#rt5 .rt5-roots button.on{background:#c8127a;color:#fff;border-color:#c8127a}
#rt5 .rt5-out{margin-top:1rem;border:1px solid #eadce6;border-radius:.9rem;padding:1rem;background:#fbf4f9;min-height:3.5rem}
#rt5 .rt5-out .mean{color:#6b1e5a;font-weight:700;margin-bottom:.5rem}
#rt5 .rt5-out .chips{display:flex;flex-wrap:wrap;gap:.4rem}
#rt5 .rt5-out .chip{background:#fff;border:1px solid #ecd7e4;border-radius:1rem;padding:.25rem .7rem;font-size:.9rem;color:#333}
#rt5 .rt5-out .count{margin-top:.6rem;color:#c8127a;font-weight:700}
#rt5 .rt5-reloj{margin-top:1.2rem}
#rt5 .rt5-reloj button{padding:.7rem 1.2rem;border:none;border-radius:.6rem;background:#6b1e5a;color:#fff;font-weight:700;cursor:pointer}
#rt5 #rt5-answer{margin-top:.9rem;border-left:3px solid #c8127a;background:#fbf4f9;padding:.8rem 1rem;border-radius:0}
</style>

<script>
(function(){
  var R={
   "graf- (escribir)":["geografía","biografía","ortografía","caligrafía","fotografía","telégrafo","autógrafo","grafólogo","grafiti"],
   "foto- (luz)":["fotografía","fotosíntesis","fotón","fotocopia","fototeca","fotómetro","fotofobia"],
   "fono- (sonido)":["teléfono","micrófono","sinfonía","fonética","megáfono","afonía","fonología"],
   "crono- (tiempo)":["cronómetro","cronología","crónica","sincronía","anacronismo","cronista"],
   "bio- (vida)":["biología","biografía","microbio","antibiótico","biosfera","simbiosis","biopsia"],
   "tele- (lejos)":["teléfono","televisión","telescopio","telepatía","telégrafo","teletrabajo"],
   "scopio- (observar)":["microscopio","telescopio","periscopio","caleidoscopio","endoscopio"],
   "antropo- (hombre)":["antropología","filántropo","misántropo","antropomorfo","antropófago"]
  };
  var roots=document.getElementById('rt5-roots'),out=document.getElementById('rt5-out');
  Object.keys(R).forEach(function(k){
    var b=document.createElement('button');b.textContent=k.split(' ')[0];
    b.addEventListener('click',function(){
      Array.prototype.forEach.call(roots.children,function(c){c.classList.remove('on');});
      b.classList.add('on');
      var mean=k.match(/\(([^)]+)\)/)[1];
      out.innerHTML='<div class="mean">'+k.split(' ')[0]+' = '+mean+'</div><div class="chips">'+R[k].map(function(w){return '<span class="chip">'+w+'</span>';}).join('')+'</div><div class="count">'+R[k].length+' palabras de una sola raíz</div>';
    });
    roots.appendChild(b);
  });
  var rev=document.getElementById('rt5-reveal'),ans=document.getElementById('rt5-answer');
  rev.addEventListener('click',function(){ans.hidden=!ans.hidden;rev.textContent=ans.hidden?'Resolver el enigma del reloj':'Ocultar';});
})();
</script>

---

## Las tarjetas de la semana

| Frente | Reverso (significado · palabra ancla) |
|---|---|
| graf- | escribir · fotografía |
| foto- | luz · fotografía |
| fono- | sonido · teléfono |
| crono- | tiempo · cronómetro |
| bio- | vida · biología |
| tele- | lejos · televisión |
| scopio- | observar · microscopio |
| logos- | palabra, estudio · biología |

## Lo que produjimos

*El árbol de raíz más grande del grupo y la resolución del reloj. Se llena al cerrar la semana.*

## El postre 🍨

*Filosofía* es *filo* (amor) + *sofía* (sabiduría): amor a la sabiduría. Ahora mira *filatelia* (amor a los sellos), *filantropía* (amor a la humanidad), *hemofilia* (afinidad con la sangre). La misma raíz que ama la sabiduría ama los timbres postales. Las raíces no tienen prejuicios.

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
