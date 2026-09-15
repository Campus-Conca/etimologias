---
title: Mapa léxico del grupo
parent: Nuestra vitrina
nav_order: 1
---

# Mapa léxico del grupo

<span class="viva">Se inaugura en la semana 10 · se llena con el semestre</span>

Las voces de nuestras casas y nuestros barrios: nahuatlismos, palabras de antes, voces de la región, nombres de lugares. Recolectadas en entrevistas, con el ejemplo dicho tal como lo dijo quien la regaló, y con el origen verificado en tres diccionarios (o con la nota honesta de que no aparece en ninguno). Nuestro diccionario, hecho desde aquí.

Cada ficha lleva un sello: **verificada** (el origen está en la fuente), **voz viva no registrada** (no aparece en ningún diccionario: documentación original del grupo) o **otro significado** (el uso de la región se desvió del registrado). Los nombres son de pila y aparecen solo con permiso.

<div id="mapa-filtros" class="mapa-filtros"></div>
<div id="mapa-muro"></div>

<!-- ============================================================
     COSECHA:mapa-lexico
     El bloque de abajo lo genera la hoja de cálculo del curso
     (pestaña mapa-lexico → menú Cosecha → Bloque para la web),
     con las fichas que palomeaste. Pega aquí lo que te dé,
     reemplazando la lista. Cada ficha es un objeto con las
     llaves del formulario: palabra, significado, ejemplo, quien,
     origen, fuente, ambito, nota y nombre (quien la documentó).
     Si el bloque trae menos llaves, la ficha se pinta con las
     que haya. Los comentarios de estos scripts van siempre entre
     barra-asterisco: el compresor de Jekyll se comería el resto
     con una doble barra.
     ============================================================ -->
<script>
window.MAPA_LEXICO = [
];
</script>
<!-- /COSECHA:mapa-lexico -->

## Sube tu ficha

El formulario es el mismo de la [semana 10](../semanas/semana-10.html): los seis renglones de la ficha, ya verificada. Se puede usar todo el semestre: cada palabra que se te cruce y que no esté en el diccionario cabe aquí.

<div class="cosecha"
     data-tipo="mapa-lexico"
     data-titulo="Sube tu ficha al mapa léxico"
     data-nota="Es la ficha definitiva de una palabra de campo, verificada en las fuentes. Escribe tu nombre de pila como quieras que aparezca, o 'anónimo'."
     data-campos='[
       {"n":"palabra","t":"Entrada (la palabra) y categoría","req":true},
       {"n":"significado","t":"Definición, sin usar la palabra","req":true},
       {"n":"ejemplo","t":"Ejemplo de uso, tal como se dijo, entre comillas","req":true},
       {"n":"quien","t":"Quién la dice y dónde","req":true},
       {"n":"origen","t":"Origen verificado, o el hallazgo (no está / está con otro significado)","req":true},
       {"n":"fuente","t":"Fuente de la verificación (DLE, DECEL, DEM, o en cuáles no apareció)","req":true},
       {"n":"ambito","t":"Ámbito: cocina, campo, oficios, dichos, lugares u otro","req":true},
       {"n":"nota","t":"Algo más que quieras contar (opcional)","tipo":"larga"}
     ]'></div>

<style>
.mapa-filtros{display:flex;flex-wrap:wrap;gap:.4rem;margin:1rem 0 .6rem}
.mapa-filtros button{padding:.35rem .8rem;border:1px solid #d9c3d4;border-radius:2rem;background:#fff;color:#6b1e5a;font-weight:700;font-size:.85rem;cursor:pointer}
.mapa-filtros button.on{background:#c8127a;color:#fff;border-color:#c8127a}
.mapa-muro{display:grid;grid-template-columns:repeat(auto-fill,minmax(17rem,1fr));gap:.8rem;margin:.6rem 0 1.4rem}
.mapa-ficha{border:1px solid #e6dff0;border-radius:.9rem;background:#fff;padding:.9rem 1rem;box-shadow:0 1px 4px rgba(107,30,90,.07);display:flex;flex-direction:column;gap:.3rem}
.mapa-ficha .mf-cab{display:flex;justify-content:space-between;align-items:baseline;gap:.5rem;flex-wrap:wrap}
.mapa-ficha b{font-family:"Bricolage Grotesque","Inter",sans-serif;font-size:1.25rem;color:#6b1e5a}
.mapa-ficha .mf-amb{font-size:.7rem;text-transform:uppercase;letter-spacing:.07em;color:#8a7f93;font-weight:700}
.mapa-ficha .mf-def{color:#2b2440;font-size:.95rem;line-height:1.45}
.mapa-ficha .mf-ej{color:#4a2440;font-style:italic;font-size:.92rem;border-left:3px solid #f4a8ce;padding-left:.6rem;margin:.2rem 0}
.mapa-ficha .mf-quien{font-size:.84rem;color:#555}
.mapa-ficha .mf-ori{font-size:.84rem;color:#4a3f5c}
.mapa-ficha .mf-sello{display:inline-block;align-self:flex-start;font-size:.7rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:.2rem .6rem;border-radius:2rem;margin-top:.2rem}
.mapa-ficha .mf-sello.verif{background:#dff5ee;color:#0b5f52}
.mapa-ficha .mf-sello.viva{background:#fbf0d9;color:#7a5a0b}
.mapa-ficha .mf-sello.otro{background:#ffe3f0;color:#a30058}
.mapa-ficha .mf-nota{font-size:.84rem;color:#666}
.mapa-ficha .mf-doc{font-size:.76rem;color:#c4006a;font-weight:700;margin-top:.3rem}
.mapa-vacio{border:1px dashed #d9c3d4;border-radius:.9rem;padding:1rem 1.1rem;background:#fdf9fc;color:#6b1e5a;font-style:italic}
</style>

<script>
(function(){
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  var datos=window.MAPA_LEXICO||[];
  var muro=document.getElementById('mapa-muro'),filtros=document.getElementById('mapa-filtros');
  if(!muro)return;
  if(!datos.length){
    muro.innerHTML='<div class="mapa-vacio">El mapa se inaugura el jueves 1 de octubre, con las fichas que el grupo verifique en el centro de cómputo. Mientras tanto, entrevista a tu gente.</div>';
    return;
  }
  function sello(f){
    var o=((f.origen||'')+' '+(f.fuente||'')).toLowerCase();
    if(o.indexOf('no está')>-1||o.indexOf('no esta')>-1||o.indexOf('no registr')>-1||o.indexOf('original')>-1)return ['viva','voz viva no registrada'];
    if(o.indexOf('otro significado')>-1||o.indexOf('otra acepci')>-1||o.indexOf('se desvi')>-1)return ['otro','otro significado'];
    return ['verif','verificada'];
  }
  var ambitos=[];
  datos.forEach(function(f){var a=(f.ambito||'otro').toLowerCase().trim();if(ambitos.indexOf(a)<0)ambitos.push(a);});
  var actual='';
  function pinta(){
    var lista=datos.filter(function(f){return !actual||(f.ambito||'otro').toLowerCase().trim()===actual;});
    muro.className='mapa-muro';
    muro.innerHTML=lista.map(function(f){
      var s=sello(f);
      var t='<div class="mapa-ficha"><div class="mf-cab"><b>'+esc(f.palabra)+'</b><span class="mf-amb">'+esc(f.ambito||'')+'</span></div>';
      if(f.significado)t+='<div class="mf-def">'+esc(f.significado)+'</div>';
      if(f.ejemplo)t+='<div class="mf-ej">'+esc(f.ejemplo)+'</div>';
      if(f.quien)t+='<div class="mf-quien">Lo dice: '+esc(f.quien)+'</div>';
      if(f.origen)t+='<div class="mf-ori">Origen: '+esc(f.origen)+(f.fuente?' · '+esc(f.fuente):'')+'</div>';
      t+='<span class="mf-sello '+s[0]+'">'+s[1]+'</span>';
      if(f.nota)t+='<div class="mf-nota">'+esc(f.nota)+'</div>';
      if(f.nombre)t+='<div class="mf-doc">Documentó: '+esc(f.nombre)+'</div>';
      return t+'</div>';
    }).join('');
  }
  if(ambitos.length>1){
    var todos=document.createElement('button');todos.textContent='todas ('+datos.length+')';todos.className='on';
    todos.addEventListener('click',function(){actual='';marca(todos);pinta();});
    filtros.appendChild(todos);
    ambitos.forEach(function(a){
      var b=document.createElement('button');b.textContent=a;
      b.addEventListener('click',function(){actual=a;marca(b);pinta();});
      filtros.appendChild(b);
    });
  }
  function marca(b){Array.prototype.forEach.call(filtros.children,function(c){c.classList.remove('on');});b.classList.add('on');}
  pinta();
})();
</script>
