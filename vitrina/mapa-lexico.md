---
title: Mapa léxico del grupo
parent: Nuestra vitrina
nav_order: 1
---

# Mapa léxico del grupo

<span class="viva">Se inaugura en la semana 10 · se llena con el semestre</span>

Las voces de nuestras casas y nuestros barrios: nahuatlismos, palabras de antes, voces de la región, nombres de lugares. Recolectadas en entrevistas, con el ejemplo dicho tal como lo dijo quien la regaló, y con el origen verificado en tres diccionarios (o con la nota honesta de que no aparece en ninguno). Nuestro diccionario, hecho desde aquí.

Cada ficha lleva un sello: **verificada** (el origen está en la fuente), **voz viva no registrada** (no aparece en ningún diccionario: documentación original del grupo) o **otro significado** (el uso de la región se desvió del registrado). Una ficha con **fuente pendiente** ya tiene palabra, definición y voz, pero todavía le falta la verificación en los diccionarios. Los nombres son de pila y aparecen solo con permiso.

<div id="mapa-cifras" class="mapa-cifras"></div>
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
  /* Campos de una ficha: palabra, significado, ejemplo, quien, origen, fuente,
     ambito, nota, nombre (quien la documentó). Opcionales: destacada (marco
     grande arriba del muro) y modelo (etiqueta "ficha modelo"). El sello se
     deduce del origen y la fuente: "no está" o "no registr" = voz viva;
     "otro significado" = otro significado; sin fuente = fuente pendiente. */

  {"palabra":"Guau","ambito":"campo","destacada":true,"modelo":true,
   "significado":"Nombre local de la hiedra venenosa, la cual crece cerca de orillas de arroyos y causa alergias en la mayoría de las personas.",
   "quien":"Campesinos de la Sierra Gorda.",
   "nombre":"Eduardo"},

  /* Primera cosecha: 4 y 5 de octubre de 2026. El recolector de entonces solo
     guardaba palabra, definición y quién la dice; el ejemplo, el origen, la
     fuente y el ámbito de estas tres fichas se perdieron en el camino. Por eso
     llevan el sello "fuente pendiente": se completan cuando el grupo las
     vuelva a verificar. El ámbito lo puso la curaduría. */
  {"palabra":"Tarabilla","ambito":"oficios","significado":"Pieza de madera que se utilizaba para hacer mecates de ixtle, que se saca de la lechuguilla, un maguey que hay en el cerro.","quien":"Antes así le decían a esa pieza; a mí me la dijo mi bisabuela.","nombre":"Yuritza"},
  {"palabra":"Guaparra","ambito":"campo","significado":"Machete o cuchilla.","quien":"Me la dijo mi vecina cuando llegó a vivir cerca de mi casa.","nombre":"Alan"},
  {"palabra":"Crush","ambito":"jóvenes","significado":"Persona por la que se siente atracción o gusto amoroso, generalmente en la adolescencia.","quien":"Los jóvenes.","origen":"Anglicismo juvenil; sustantivo.","nombre":"Monserrat"}
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
.mapa-cifras{display:flex;flex-wrap:wrap;gap:.6rem;margin:1.1rem 0 .4rem}
.mapa-cifras .mc{flex:1 1 7rem;min-width:7rem;border:1px solid #ead9e6;border-radius:.9rem;background:linear-gradient(180deg,#fff,#fdf6fb);padding:.6rem .8rem .5rem;text-align:left}
.mapa-cifras .mc b{display:block;font-family:"Bricolage Grotesque","Inter",sans-serif;font-size:1.7rem;line-height:1;color:#c8127a}
.mapa-cifras .mc span{font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:#8a7f93;font-weight:700}
.mapa-filtros{display:flex;flex-wrap:wrap;gap:.4rem;margin:.8rem 0 .6rem;align-items:center}
.mapa-filtros .mf-rot{font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:#8a7f93;font-weight:700;margin-right:.2rem}
.mapa-filtros .mf-sep{flex-basis:100%;height:0}
.mapa-filtros button{padding:.35rem .85rem;border:1px solid #d9c3d4;border-radius:2rem;background:#fff;color:#6b1e5a;font-weight:700;font-size:.82rem;cursor:pointer;transition:transform .12s,background .12s}
.mapa-filtros button:hover{transform:translateY(-1px)}
.mapa-filtros button.on{background:#c8127a;color:#fff;border-color:#c8127a}
.mapa-filtros button i{font-style:normal;opacity:.65;font-weight:600;margin-left:.25rem}
.mapa-muro{display:grid;grid-template-columns:repeat(auto-fill,minmax(17.5rem,1fr));gap:.9rem;margin:.6rem 0 1.6rem}
.mapa-ficha{position:relative;border:1px solid #e6dff0;border-top:5px solid var(--amb,#c8127a);border-radius:1rem;background:#fff;padding:1rem 1.1rem 1rem;box-shadow:0 1px 4px rgba(107,30,90,.07);display:flex;flex-direction:column;gap:.45rem;transition:transform .15s,box-shadow .15s}
.mapa-ficha:hover{transform:translateY(-3px);box-shadow:0 10px 24px rgba(107,30,90,.14)}
.mapa-ficha .mf-cab{display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;flex-wrap:wrap}
.mapa-ficha b.mf-pal{font-family:"Bricolage Grotesque","Inter",sans-serif;font-size:1.55rem;line-height:1.05;color:#6b1e5a;letter-spacing:-.01em}
.mapa-ficha .mf-amb{font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:var(--amb,#8a7f93);font-weight:800;border:1px solid currentColor;border-radius:2rem;padding:.15rem .55rem;white-space:nowrap;margin-top:.3rem}
.mapa-ficha .mf-def{color:#2b2440;font-size:.97rem;line-height:1.5}
.mapa-ficha .mf-ej{position:relative;color:#4a2440;font-style:italic;font-size:1rem;line-height:1.45;background:#fdf4f9;border-left:3px solid #f4a8ce;border-radius:0 .6rem .6rem 0;padding:.55rem .8rem .55rem 1.9rem;margin:.1rem 0}
.mapa-ficha .mf-ej:before{content:"“";position:absolute;left:.45rem;top:-.15rem;font-family:"Bricolage Grotesque",serif;font-size:2.4rem;line-height:1;color:#f4a8ce;font-style:normal}
.mapa-ficha .mf-quien{font-size:.86rem;color:#555;display:flex;gap:.4rem;align-items:flex-start}
.mapa-ficha .mf-quien:before{content:"";flex:none;width:.9rem;height:.9rem;margin-top:.15rem;border-radius:50% 50% 50% 0;background:#c8127a;transform:rotate(-45deg);opacity:.8}
.mapa-ficha .mf-ori{font-size:.86rem;color:#3f3552;line-height:1.45;border-top:1px dashed #e6dff0;padding-top:.5rem;margin-top:.1rem}
.mapa-ficha .mf-ori .mf-rot{display:block;font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:#8a7f93;font-weight:800;margin-bottom:.15rem}
.mapa-ficha .mf-fue{font-size:.78rem;color:#7a6f85;margin-top:.25rem}
.mapa-ficha .mf-pie{display:flex;justify-content:space-between;align-items:center;gap:.5rem;flex-wrap:wrap;margin-top:auto;padding-top:.3rem}
.mapa-ficha .mf-sello{display:inline-block;font-size:.68rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;padding:.25rem .65rem;border-radius:2rem}
.mapa-ficha .mf-sello.verif{background:#dff5ee;color:#0b5f52}
.mapa-ficha .mf-sello.viva{background:#fbf0d9;color:#7a5a0b}
.mapa-ficha .mf-sello.otro{background:#ffe3f0;color:#a30058}
.mapa-ficha .mf-sello.pend{background:#eeeaf3;color:#5b5370;border:1px dashed #b9afc9}
.mapa-ficha .mf-nota{font-size:.84rem;color:#666;line-height:1.45}
.mapa-ficha .mf-doc{font-size:.76rem;color:#c4006a;font-weight:700}
.mapa-ficha.mf-destacada{grid-column:1/-1;border-top-width:6px;background:linear-gradient(135deg,#fff 0,#fff 55%,#fdf4f9 100%);padding:1.3rem 1.4rem 1.2rem;box-shadow:0 6px 22px rgba(200,18,122,.12)}
.mapa-ficha.mf-destacada b.mf-pal{font-size:2.6rem}
.mapa-ficha.mf-destacada .mf-cuerpo{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:.4rem 1.6rem}
.mapa-ficha.mf-destacada .mf-col{display:flex;flex-direction:column;gap:.45rem;min-width:0}
.mapa-ficha.mf-destacada .mf-ori{border-top:0;border-left:1px dashed #e6dff0;padding:0 0 0 1.2rem;margin:0}
.mapa-ficha.mf-destacada .mf-def{font-size:1.05rem}
.mapa-ficha .mf-modelo{position:absolute;top:-.75rem;left:1rem;background:#6b1e5a;color:#fff;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:.25rem .7rem;border-radius:2rem;box-shadow:0 2px 6px rgba(107,30,90,.3)}
@media (max-width:40rem){.mapa-ficha.mf-destacada .mf-cuerpo{grid-template-columns:1fr}.mapa-ficha.mf-destacada .mf-ori{border-left:0;border-top:1px dashed #e6dff0;padding:.5rem 0 0}.mapa-ficha.mf-destacada b.mf-pal{font-size:2.1rem}}
.mapa-vacio{border:1px dashed #d9c3d4;border-radius:.9rem;padding:1rem 1.1rem;background:#fdf9fc;color:#6b1e5a;font-style:italic}
</style>

<script>
(function(){
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  var datos=window.MAPA_LEXICO||[];
  var muro=document.getElementById('mapa-muro'),filtros=document.getElementById('mapa-filtros'),cifras=document.getElementById('mapa-cifras');
  if(!muro)return;
  if(!datos.length){
    muro.innerHTML='<div class="mapa-vacio">El mapa se inaugura con las fichas que el grupo verifique en el centro de cómputo. Mientras tanto, entrevista a tu gente.</div>';
    return;
  }
  /* Un color por ámbito: la franja de arriba de cada ficha y su etiqueta. */
  var COLOR={cocina:'#d9642b',campo:'#2e8b57',oficios:'#2f6db5',dichos:'#8a3fb0',lugares:'#b8860b','jóvenes':'#c8127a',otro:'#8a7f93'};
  var SELLOS={verif:'verificada',viva:'voz viva no registrada',otro:'otro significado',pend:'fuente pendiente'};
  function amb(f){return (f.ambito||'otro').toLowerCase().trim();}
  function sello(f){
    var o=((f.origen||'')+' '+(f.fuente||'')).toLowerCase();
    if(o.indexOf('no está')>-1||o.indexOf('no esta')>-1||o.indexOf('no registr')>-1||o.indexOf('original')>-1)return 'viva';
    if(o.indexOf('otro significado')>-1||o.indexOf('otra acepci')>-1||o.indexOf('se desvi')>-1)return 'otro';
    if(!(f.fuente||'').trim())return 'pend';
    return 'verif';
  }
  datos.forEach(function(f){f._amb=amb(f);f._sello=sello(f);});
  var ambitos=[],conteoA={},conteoS={};
  datos.forEach(function(f){if(ambitos.indexOf(f._amb)<0)ambitos.push(f._amb);conteoA[f._amb]=(conteoA[f._amb]||0)+1;conteoS[f._sello]=(conteoS[f._sello]||0)+1;});
  var F={amb:'',sello:''};

  /* Cifras de la cabecera */
  if(cifras){
    var docs={};datos.forEach(function(f){if(f.nombre)docs[f.nombre]=1;});
    var c=[[datos.length,datos.length===1?'ficha':'fichas'],[ambitos.length,ambitos.length===1?'ámbito':'ámbitos'],[Object.keys(docs).length,'voces que documentan']];
    if(conteoS.viva)c.push([conteoS.viva,'no estaban en ningún diccionario']);
    if(conteoS.otro)c.push([conteoS.otro,conteoS.otro===1?'con otro significado':'con otro significado']);
    cifras.innerHTML=c.map(function(x){return '<div class="mc"><b>'+x[0]+'</b><span>'+esc(x[1])+'</span></div>';}).join('');
  }

  function ficha(f){
    var col=COLOR[f._amb]||COLOR.otro;
    var t='<article class="mapa-ficha'+(f.destacada?' mf-destacada':'')+'" style="--amb:'+col+'">';
    if(f.modelo)t+='<span class="mf-modelo">ficha modelo</span>';
    t+='<div class="mf-cab"><b class="mf-pal">'+esc(f.palabra)+'</b><span class="mf-amb">'+esc(f._amb)+'</span></div>';
    var izq='',der='';
    if(f.significado)izq+='<div class="mf-def">'+esc(f.significado)+'</div>';
    if(f.ejemplo)izq+='<div class="mf-ej">'+esc(f.ejemplo)+'</div>';
    if(f.quien)izq+='<div class="mf-quien"><span>'+esc(f.quien)+'</span></div>';
    if(f.origen||f.fuente){
      der+='<div class="mf-ori"><span class="mf-rot">De dónde viene</span>'+(f.origen?esc(f.origen):'<em>Origen por verificar.</em>');
      if(f.fuente)der+='<div class="mf-fue">Fuente: '+esc(f.fuente)+'</div>';
      der+='</div>';
    }
    if(f.nota)der+='<div class="mf-nota">'+esc(f.nota)+'</div>';
    if(f.destacada)t+='<div class="mf-cuerpo"><div class="mf-col">'+izq+'</div><div class="mf-col">'+der+'</div></div>';
    else t+=izq+der;
    t+='<div class="mf-pie"><span class="mf-sello '+f._sello+'">'+SELLOS[f._sello]+'</span>'+(f.nombre?'<span class="mf-doc">Documentó: '+esc(f.nombre)+'</span>':'')+'</div>';
    return t+'</article>';
  }
  function pinta(){
    var lista=datos.filter(function(f){return (!F.amb||f._amb===F.amb)&&(!F.sello||f._sello===F.sello);});
    /* La destacada va primero, y solo cuando no hay filtro: con filtro todas son iguales. */
    var filtrando=!!(F.amb||F.sello);
    lista=lista.slice().sort(function(a,b){return (filtrando?0:(b.destacada?1:0)-(a.destacada?1:0));});
    muro.className='mapa-muro';
    muro.innerHTML=lista.length?lista.map(function(f){if(filtrando){f=Object.assign({},f);f.destacada=false;}return ficha(f);}).join(''):'<div class="mapa-vacio">Ninguna ficha con ese filtro todavía.</div>';
  }
  function boton(txt,n,on,fn){
    var b=document.createElement('button');b.innerHTML=esc(txt)+(n!=null?'<i>'+n+'</i>':'');if(on)b.className='on';
    b.addEventListener('click',fn);return b;
  }
  function marca(grupo){
    Array.prototype.forEach.call(filtros.querySelectorAll('button[data-g="'+grupo+'"]'),function(b){
      b.classList.toggle('on',b.getAttribute('data-v')===F[grupo]);
    });
  }
  function grupo(nombre,rot,opciones){
    if(opciones.length<2)return;
    var r=document.createElement('span');r.className='mf-rot';r.textContent=rot;filtros.appendChild(r);
    var todas=boton('todas',datos.length,true,function(){F[nombre]='';marca(nombre);pinta();});
    todas.setAttribute('data-g',nombre);todas.setAttribute('data-v','');filtros.appendChild(todas);
    opciones.forEach(function(o){
      var b=boton(o[0],o[1],false,function(){F[nombre]=(F[nombre]===o[2]?'':o[2]);marca(nombre);pinta();});
      b.setAttribute('data-g',nombre);b.setAttribute('data-v',o[2]);filtros.appendChild(b);
    });
    var sep=document.createElement('span');sep.className='mf-sep';filtros.appendChild(sep);
  }
  grupo('amb','Ámbito',ambitos.map(function(a){return [a,conteoA[a],a];}));
  grupo('sello','Sello',Object.keys(conteoS).map(function(k){return [SELLOS[k],conteoS[k],k];}));
  pinta();
})();
</script>
