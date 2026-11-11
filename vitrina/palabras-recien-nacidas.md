---
title: Palabras recién nacidas
parent: Nuestra vitrina
nav_order: 2
---

# Palabras recién nacidas

<span class="viva">Se inaugura el martes 17 de noviembre · semana 16</span>

El diccionario no da a luz palabras: les levanta el acta cuando ya viven en la boca de la gente. Aquí vive el Registro Civil del grupo, con las palabras que bautizamos, sus piezas verificadas en el DLE y sus testigos, y el muro de la Academia del salón, con los dictámenes sobre palabras que acaban de entrar al diccionario o que andan sueltas por la calle.

Una palabra empieza a existir el día que alguien más la dice sin que se lo pidas. Los testigos aparecen con nombre de pila o parentesco, nunca con apellido, y nada se publica sin revisión.

## La palabra del salón 2026

<div id="ps-2026"></div>

<!-- Palabra del salón · se escribe a mano. El viernes 20, después de la votación, cambia
     null por la ganadora entre llaves, con estas llaves: palabra, nombre (quien la bautizó),
     significado, origen (sus piezas), testigos (cuántos, en número) y nota (opcional).
     Ejemplo de forma: {"palabra":"...","nombre":"...","significado":"...","origen":"...","testigos":3}
     Comentarios solo entre barra-asterisco. -->
<script>
window.PALABRA_DEL_SALON = null;
</script>
<!-- /Palabra del salón -->

## El Registro Civil del grupo

Cada acta lleva la palabra, sus piezas con su lengua y su significado, la definición como la escribiría el diccionario, un ejemplo y los testigos que va juntando. Las que todavía no tienen testigos están esperando: casi ninguna palabra sobrevive su primera semana, y por eso pesan las que sí.

<div id="rc-cifras" class="rc-cifras"></div>
<div id="rc-filtros" class="rc-filtros"></div>
<div id="rc-muro"></div>

<!-- COSECHA:neologismo · el bloque de abajo lo genera la hoja de cálculo del curso
     (pestaña neologismo → menú Cosecha → Bloque para la web), con las filas que palomeaste.
     Pégalo aquí con el nombre de variable ACTAS. En esa pestaña caen dos cosas: las actas
     (de El acta de nacimiento o del formulario de abajo: palabra, origen, significado,
     ejemplo, nota, quien y nombre) y las firmas de testigos (palabra, quien, nota y nombre).
     No hace falta juntarlas a mano: la página une cada firma con su acta por la palabra y
     por el nombre de quien la bautizó, y cuenta un testigo por fila; si en quien vienen
     varios, sepáralos con punto y coma. Para fijar la cuenta a mano, agrega la llave
     testigos con un número. Comentarios solo entre barra-asterisco. -->
<script>
window.ACTAS = [
];
</script>
<!-- /COSECHA -->

### Manda tu acta

Si la mandaste desde [El acta de nacimiento](../ejercicios/semana-16/ejercicio-16A-acta-de-nacimiento.html), ya está aquí y no hace falta otra vez. Este formulario es para quien la armó en cuaderno.

<div class="cosecha"
     data-tipo="neologismo"
     data-titulo="Manda tu acta al Registro Civil"
     data-nota="Escribe tu nombre de pila como quieras que aparezca, o 'anónimo'. Usa el mismo nombre cuando firmes tus testigos."
     data-campos='[
       {"n":"palabra","t":"Tu palabra recién nacida","req":true},
       {"n":"origen","t":"Sus piezas: cada una con su lengua y su significado, verificados en el DLE","req":true},
       {"n":"significado","t":"Categoría y definición, sin usar la palabra (empieza con f., m., adj., intr. o tr.)","req":true},
       {"n":"ejemplo","t":"Un ejemplo de uso, entre comillas","req":true},
       {"n":"nota","t":"El hueco que llena y tu apuesta: cuántos testigos, de 0 a 5","req":true},
       {"n":"quien","t":"Testigos que ya tengas: nombre de pila o parentesco, dónde y cuándo (opcional)"}
     ]'></div>

### Firma tus testigos

Cada vez que alguien diga tu palabra sin que se lo pidas, fírmalo aquí: un testigo por envío y con el mismo nombre que usaste en tu acta. Rogar no cuenta, y pagar menos.

<div class="cosecha"
     data-tipo="neologismo"
     data-titulo="Firma un testigo"
     data-nota="Tu nombre, igual que en tu acta. Del testigo, solo nombre de pila o parentesco, nunca apellido."
     data-campos='[
       {"n":"palabra","t":"Tu palabra, escrita igual que en tu acta","req":true},
       {"n":"quien","t":"Quién la dijo, dónde y cuándo: por ejemplo, mi tía, en la cocina, el miércoles en la noche","req":true},
       {"n":"nota","t":"La frase en que la dijo, si te acuerdas (opcional)","tipo":"larga"}
     ]'></div>

## Los dictámenes de la Academia del salón

Ocho comisiones revisaron dos clases de palabras con cuatro filtros (uso, tiempo, necesidad y forma): las que acaban de entrar al diccionario o siguen en estudio, y las que andan en la calle sin acta. Cuando la palabra ya tenía acta, la comisión dictaminó si la Academia hizo bien, si la aceptó con asegunes o si se apresuró; cuando no la tenía, si entra, si se queda en observación o si no entra. No hay dictamen correcto: hay dictámenes bien argumentados.

<div id="dic-filtros" class="rc-filtros"></div>
<div id="dic-muro"></div>

<!-- COSECHA:general (dictámenes) · el bloque de abajo lo genera la hoja de cálculo del curso
     (pestaña general → menú Cosecha → Bloque para la web). Pégalo aquí con el nombre de
     variable DICTAMENES. Cada dictamen: palabra, fuente (lo que la comisión encontró en el
     DLE o en el Observatorio), veredicto, historia (el argumento, con los cuatro filtros
     entre paréntesis al final), nota (el número de comisión) y nombre (los nombres de pila
     de la comisión). En la pestaña general caen también otras cosas del semestre: palomea
     solo las filas cuya nota diga «dictamen de la Academia del salón» o traiga un número de
     comisión. Comentarios solo entre barra-asterisco. -->
<script>
window.DICTAMENES = [
];
</script>
<!-- /COSECHA -->

### Sube el dictamen de tu comisión

Si lo mandaron desde [La Academia sesiona](../ejercicios/semana-16/ejercicio-16B-la-academia-sesiona.html), ya está aquí. Este formulario es para la comisión que trabajó en cuaderno.

<div class="cosecha"
     data-tipo="general"
     data-titulo="Sube el dictamen de tu comisión"
     data-nota="En tu nombre van los nombres de pila de toda la comisión."
     data-campos='[
       {"n":"palabra","t":"La palabra dictaminada","req":true},
       {"n":"fuente","t":"¿Tiene acta? Sí, no o está en el Observatorio, y lo que encontraron","req":true},
       {"n":"veredicto","t":"El veredicto: entra, en observación o no entra; si ya tenía acta, la Academia hizo bien, sí con asegunes o la Academia se apresuró","req":true},
       {"n":"historia","t":"El argumento, con al menos dos de los cuatro filtros","req":true,"tipo":"larga"},
       {"n":"nota","t":"Número de comisión","req":true}
     ]'></div>

<style>
.ps-espera{display:flex;gap:1rem;align-items:center;border:1px dashed #d9c3d4;border-radius:1rem;background:#fdf9fc;padding:1rem 1.2rem;margin:.8rem 0 1.4rem}
.ps-espera .ps-n{flex:none;font-family:"Bricolage Grotesque","Inter",sans-serif;font-size:3.2rem;line-height:1;color:#c8127a;width:4.6rem;height:4.6rem;border-radius:1rem;background:#fff;border:2px solid #f4a8ce;display:flex;align-items:center;justify-content:center}
.ps-espera p{margin:0;color:#6b1e5a;font-style:italic}
.ps-rot{display:block;font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:#8a7f93;font-weight:800;margin-bottom:.2rem}
.ps-gana{position:relative;overflow:hidden;border-radius:1.2rem;background:linear-gradient(135deg,#6b1e5a 0,#a3135f 60%,#c8127a 100%);color:#fff;padding:1.4rem 1.5rem 1.2rem;margin:.8rem 0 1.6rem;box-shadow:0 10px 30px rgba(107,30,90,.25)}
.ps-gana:after{content:"Ñ";position:absolute;right:-.3rem;bottom:-2.6rem;font-family:"Bricolage Grotesque","Inter",sans-serif;font-size:11rem;line-height:1;color:rgba(255,255,255,.13);pointer-events:none}
.ps-gana .ps-rot{color:#ffd6ea}
.ps-gana .ps-pal{display:block;font-family:"Bricolage Grotesque","Inter",sans-serif;font-size:2.8rem;line-height:1.05;letter-spacing:-.01em;margin:.1rem 0 .5rem;position:relative}
.ps-gana .ps-def{font-size:1.05rem;max-width:36rem;position:relative}
.ps-gana .ps-pz{font-size:.9rem;opacity:.9;margin-top:.4rem;position:relative}
.ps-gana .ps-pie{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.8rem;font-size:.85rem;font-weight:700;position:relative}
.ps-gana .ps-pie span{background:rgba(255,255,255,.16);border-radius:2rem;padding:.25rem .75rem}
.ps-gana .ps-nota{font-size:.88rem;margin-top:.6rem;opacity:.9;position:relative}
.rc-cifras{display:flex;flex-wrap:wrap;gap:.6rem;margin:1.1rem 0 .4rem}
.rc-cifras .mc{flex:1 1 7rem;min-width:7rem;border:1px solid #ead9e6;border-radius:.9rem;background:linear-gradient(180deg,#fff,#fdf6fb);padding:.6rem .8rem .5rem}
.rc-cifras .mc b{display:block;font-family:"Bricolage Grotesque","Inter",sans-serif;font-size:1.7rem;line-height:1;color:#c8127a}
.rc-cifras .mc span{font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:#8a7f93;font-weight:700}
.rc-filtros{display:flex;flex-wrap:wrap;gap:.4rem;margin:.8rem 0 .6rem;align-items:center}
.rc-filtros .rc-frot{font-size:.72rem;text-transform:uppercase;letter-spacing:.07em;color:#8a7f93;font-weight:700;margin-right:.2rem}
.rc-filtros button{padding:.35rem .85rem;border:1px solid #d9c3d4;border-radius:2rem;background:#fff;color:#6b1e5a;font-weight:700;font-size:.82rem;cursor:pointer;transition:transform .12s,background .12s}
.rc-filtros button:hover{transform:translateY(-1px)}
.rc-filtros button.on{background:#c8127a;color:#fff;border-color:#c8127a}
.rc-filtros button i{font-style:normal;opacity:.65;font-weight:600;margin-left:.25rem}
.rc-muro{display:grid;grid-template-columns:repeat(auto-fill,minmax(17.5rem,1fr));gap:.9rem;margin:1.1rem 0 1.6rem}
.rc-rot{display:block;font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:#8a7f93;font-weight:800;margin-bottom:.15rem}
.rc-acta{position:relative;border:1px solid #e6dff0;border-top:5px solid var(--sel,#c8127a);border-radius:1rem;background:#fff;padding:1rem 1.1rem;box-shadow:0 1px 4px rgba(107,30,90,.07);display:flex;flex-direction:column;gap:.45rem;transition:transform .15s,box-shadow .15s}
.rc-acta:hover{transform:translateY(-3px);box-shadow:0 10px 24px rgba(107,30,90,.14)}
.rc-acta.rc-con{--sel:#2e8b57}
.rc-acta.rc-esp{--sel:#c8127a}
.rc-acta.rc-pend{--sel:#8a7f93}
.rc-acta.rc-gana{grid-column:1/-1;--sel:#6b1e5a;border-top-width:6px;background:linear-gradient(135deg,#fff 0,#fff 55%,#fdf4f9 100%);box-shadow:0 6px 22px rgba(200,18,122,.12)}
.rc-acta .rc-silla{position:absolute;top:-.75rem;left:1rem;background:#6b1e5a;color:#fff;font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:.25rem .7rem;border-radius:2rem;box-shadow:0 2px 6px rgba(107,30,90,.3)}
.rc-cab{display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;flex-wrap:wrap}
.rc-pal{font-family:"Bricolage Grotesque","Inter",sans-serif;font-size:1.55rem;line-height:1.05;color:#6b1e5a;letter-spacing:-.01em;word-break:break-word}
.rc-gana .rc-pal{font-size:2.3rem}
.rc-sello{font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;font-weight:800;border-radius:2rem;padding:.25rem .65rem;white-space:nowrap;margin-top:.3rem}
.rc-con .rc-sello{background:#dff5ee;color:#0b5f52}
.rc-esp .rc-sello{background:#ffe3f0;color:#a30058}
.rc-pend .rc-sello{background:#eeeaf3;color:#5b5370;border:1px dashed #b9afc9}
.rc-def{color:#2b2440;font-size:.97rem;line-height:1.5}
.rc-def .rc-cat{color:#8a7f93;font-weight:600}
.rc-ej{position:relative;color:#4a2440;font-style:italic;font-size:1rem;line-height:1.45;background:#fdf4f9;border-left:3px solid #f4a8ce;border-radius:0 .6rem .6rem 0;padding:.55rem .8rem .55rem 1.9rem}
.rc-ej:before{content:"“";position:absolute;left:.45rem;top:-.15rem;font-family:"Bricolage Grotesque",serif;font-size:2.4rem;line-height:1;color:#f4a8ce;font-style:normal}
.rc-pz{font-size:.86rem;color:#3f3552;line-height:1.45;border-top:1px dashed #e6dff0;padding-top:.5rem}
.rc-nota{font-size:.84rem;color:#555;line-height:1.45}
.rc-tes{font-size:.86rem;border-top:1px dashed #e6dff0;padding-top:.5rem}
.rc-tes ul{margin:.1rem 0 0;padding:0;list-style:none}
.rc-tes li{position:relative;padding-left:1.2rem;margin:.25rem 0;color:#2b2440}
.rc-tes li:before{content:"";position:absolute;left:.15rem;top:.42rem;width:.55rem;height:.55rem;border-radius:50%;background:#2e8b57;opacity:.8}
.rc-tes .rc-frase{display:block;font-style:italic;color:#6d5a68;font-size:.82rem}
.rc-pie{display:flex;justify-content:space-between;align-items:center;gap:.5rem;flex-wrap:wrap;margin-top:auto;padding-top:.3rem}
.rc-bau{font-size:.76rem;color:#c4006a;font-weight:700}
.rc-cal{font-size:.72rem;color:#5b5370;font-weight:700;background:#f3eef7;border-radius:2rem;padding:.2rem .6rem}
.rc-vacio{border:1px dashed #d9c3d4;border-radius:.9rem;padding:1rem 1.1rem;background:#fdf9fc;color:#6b1e5a;font-style:italic;margin:.6rem 0 1.4rem}
.dic-card{border:1px solid #e6dff0;border-left:5px solid var(--ver,#8a7f93);border-radius:1rem;background:#fff;padding:.95rem 1.05rem;box-shadow:0 1px 4px rgba(107,30,90,.07);display:flex;flex-direction:column;gap:.45rem}
.dic-card.dic-si{--ver:#2e8b57}
.dic-card.dic-medio{--ver:#b8860b}
.dic-card.dic-no{--ver:#c8127a}
.dic-cab{display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;flex-wrap:wrap}
.dic-pal{font-family:"Bricolage Grotesque","Inter",sans-serif;font-size:1.45rem;line-height:1.05;color:#6b1e5a}
.dic-ver{font-size:.7rem;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:.25rem .65rem;border-radius:2rem;color:#fff;background:var(--ver,#8a7f93);margin-top:.25rem}
.dic-acta{font-size:.86rem;color:#3f3552;line-height:1.45}
.dic-arg{font-family:"Bricolage Grotesque","Inter",sans-serif;font-weight:700;font-size:1.02rem;line-height:1.4;color:#2b2440}
.dic-fil{display:flex;flex-wrap:wrap;gap:.3rem}
.dic-fil span{font-size:.72rem;color:#5b5370;background:#f3eef7;border-radius:2rem;padding:.18rem .55rem}
.dic-pie{display:flex;justify-content:space-between;gap:.5rem;flex-wrap:wrap;margin-top:auto;padding-top:.2rem;font-size:.76rem;font-weight:700}
.dic-com{color:#6b1e5a}
.dic-quien{color:#c4006a}
@media (max-width:40rem){.ps-gana .ps-pal{font-size:2.2rem}.ps-gana:after{font-size:8rem;bottom:-1.9rem}.rc-gana .rc-pal{font-size:1.9rem}}
</style>

<script>
(function(){
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function norm(s){s=String(s==null?'':s).toLowerCase();if(s.normalize)s=s.normalize('NFD').replace(/[̀-ͯ]/g,'');return s.replace(/\s+/g,' ').trim();}
  function lleno(v){return String(v==null?'':v).trim()!=='';}
  function plural(n,uno,varios){return n+' '+(n===1?uno:varios);}
  function botones(caja,ops,alElegir){
    caja.innerHTML='<span class="rc-frot">Ver</span>'+ops.map(function(o,i){return '<button type="button" data-v="'+esc(o[0])+'"'+(i===0?' class="on"':'')+'>'+esc(o[1])+'<i>'+o[2]+'</i></button>';}).join('');
    Array.prototype.forEach.call(caja.querySelectorAll('button'),function(b){
      b.addEventListener('click',function(){
        Array.prototype.forEach.call(caja.querySelectorAll('button'),function(x){x.classList.toggle('on',x===b);});
        alElegir(b.getAttribute('data-v'));
      });
    });
  }

  /* La palabra del salón 2026 */
  var P=window.PALABRA_DEL_SALON,ps=document.getElementById('ps-2026');
  var PS=(P&&lleno(P.palabra))?norm(P.palabra):'';
  if(ps){
    if(PS){
      var g='<div class="ps-gana"><span class="ps-rot">La palabra del salón 2026</span><b class="ps-pal">'+esc(P.palabra)+'</b>';
      if(lleno(P.significado))g+='<div class="ps-def">'+esc(P.significado)+'</div>';
      if(lleno(P.origen))g+='<div class="ps-pz">'+esc(P.origen)+'</div>';
      g+='<div class="ps-pie">';
      if(lleno(P.nombre))g+='<span>La bautizó '+esc(P.nombre)+': suya es la silla Ñ</span>';
      if(lleno(P.testigos)&&!isNaN(+P.testigos))g+='<span>'+esc(plural(+P.testigos,'testigo','testigos'))+'</span>';
      g+='</div>';
      if(lleno(P.nota))g+='<div class="ps-nota">'+esc(P.nota)+'</div>';
      ps.innerHTML=g+'</div>';
    }else{
      ps.innerHTML='<div class="ps-espera"><b class="ps-n">Ñ</b><div><span class="ps-rot">La palabra del salón 2026</span><p>Se elige el viernes 20 de noviembre, a mano alzada, entre las palabras que tengan testigos. Quien la bautizó se gana la silla Ñ, la que la Real Academia nunca ha dado.</p></div></div>';
    }
  }

  /* El Registro Civil: une actas y firmas de testigos */
  var ESTADOS={con:'con testigos',esp:'esperando testigos',pend:'acta pendiente'};
  function esActa(f){return lleno(f.origen)||lleno(f.significado)||lleno(f.ejemplo);}
  function firmas(txt,frase){return String(txt==null?'':txt).split(';').map(function(x){return x.trim();}).filter(function(x){return x;}).map(function(x){return {quien:x,frase:frase||''};});}
  function defin(s){var m=/^\s*(f\.|m\.|adj\.|intr\.|tr\.)\s+/.exec(s||'');return m?'<i class="rc-cat">'+esc(m[1])+'</i> '+esc(String(s).slice(m[0].length)):esc(s);}
  function notaActa(a){
    if(!lleno(a.nota))return '';
    return String(a.nota).split(' · ').filter(function(p){return lleno(p)&&!/^\s*apuest/i.test(p);}).map(function(p){
      var m=/^\s*(hueco|naci[oó] en)\s*:\s*/i.exec(p);
      if(m)return '<div class="rc-nota"><span class="rc-rot">'+(/^\s*h/i.test(m[1])?'El hueco':'Nació en')+'</span>'+esc(p.slice(m[0].length))+'</div>';
      return '<div class="rc-nota">'+esc(p)+'</div>';
    }).join('');
  }
  function tarjeta(a){
    var t='<article class="rc-acta rc-'+a.estado+(a.gana?' rc-gana':'')+'">';
    if(a.gana)t+='<span class="rc-silla">Palabra del salón 2026 · silla Ñ</span>';
    t+='<div class="rc-cab"><b class="rc-pal">'+esc(a.palabra)+'</b><span class="rc-sello">'+esc(a.estado==='con'?plural(a.n,'testigo','testigos'):ESTADOS[a.estado])+'</span></div>';
    if(lleno(a.significado))t+='<div class="rc-def">'+defin(a.significado)+'</div>';
    if(lleno(a.ejemplo))t+='<div class="rc-ej">'+esc(a.ejemplo)+'</div>';
    if(lleno(a.origen))t+='<div class="rc-pz"><span class="rc-rot">Sus piezas</span>'+esc(a.origen)+'</div>';
    t+=notaActa(a);
    if(a.testigos.length)t+='<div class="rc-tes"><span class="rc-rot">Testigos</span><ul>'+a.testigos.map(function(x){return '<li>'+esc(x.quien)+(lleno(x.frase)?'<span class="rc-frase">'+esc(x.frase)+'</span>':'')+'</li>';}).join('')+'</ul></div>';
    t+='<div class="rc-pie">'+(lleno(a.nombre)?'<span class="rc-bau">La bautizó: '+esc(a.nombre)+'</span>':'<span></span>')+(a.apuesta!=null?'<span class="rc-cal">Apostó '+a.apuesta+' · tiene '+a.n+'</span>':'')+'</div>';
    return t+'</article>';
  }
  var filas=window.ACTAS||[],muro=document.getElementById('rc-muro'),cif=document.getElementById('rc-cifras'),fil=document.getElementById('rc-filtros');
  if(muro){
    var actas=[],porClave={},porPal={};
    var nueva=function(f,sinActa){
      var a={palabra:f.palabra,nombre:f.nombre,testigos:[],sinActa:sinActa};
      porClave[norm(f.palabra)+'|'+norm(f.nombre)]=a;
      (porPal[norm(f.palabra)]=porPal[norm(f.palabra)]||[]).push(a);
      actas.push(a);return a;
    };
    var fija=function(a,f){if(lleno(f.testigos)&&!isNaN(+f.testigos))a.fijo=+f.testigos;};
    /* Primero las actas y luego las firmas: así cada firma encuentra su acta aunque haya llegado antes a la hoja. */
    filas.filter(esActa).forEach(function(f){
      var a=porClave[norm(f.palabra)+'|'+norm(f.nombre)]||nueva(f,false);
      ['palabra','nombre','origen','significado','ejemplo','nota'].forEach(function(c){if(lleno(f[c]))a[c]=f[c];});
      if(lleno(f.quien))a.testigos=a.testigos.concat(firmas(f.quien,''));
      fija(a,f);
    });
    filas.filter(function(f){return !esActa(f)&&lleno(f.palabra);}).forEach(function(f){
      var a=porClave[norm(f.palabra)+'|'+norm(f.nombre)];
      if(!a){var mismas=porPal[norm(f.palabra)]||[];if(mismas.length===1)a=mismas[0];}
      if(!a)a=nueva(f,true);
      a.testigos=a.testigos.concat(firmas(f.quien,f.nota));
      fija(a,f);
    });
    actas.forEach(function(a){
      a.n=(a.fijo!=null)?a.fijo:a.testigos.length;
      var m=/apuest[ao]\D{0,14}(\d+)/i.exec(a.nota||'');a.apuesta=m?+m[1]:null;
      a.gana=!!PS&&norm(a.palabra)===PS;
      a.estado=a.sinActa?'pend':(a.n>0?'con':'esp');
    });
    if(!actas.length){
      muro.innerHTML='<div class="rc-vacio">El Registro Civil abre el martes 17 de noviembre. La primera acta que llegue estrena el libro.</div>';
    }else{
      if(cif){
        var tot=0,con=0,reales=0,cumplen=0,conApuesta=0;
        actas.forEach(function(a){tot+=a.n;if(a.estado!=='pend')reales++;if(a.estado==='con')con++;if(a.apuesta!=null){conApuesta++;if(a.n>=a.apuesta)cumplen++;}});
        var c=[[reales,reales===1?'acta':'actas'],[con,'con testigos'],[tot,tot===1?'testigo en total':'testigos en total']];
        /* Las apuestas se cuentan hasta que el viernes se publique la palabra del salón. */
        if(PS&&conApuesta)c.push([cumplen+' de '+conApuesta,'apuestas cumplidas']);
        cif.innerHTML=c.map(function(x){return '<div class="mc"><b>'+esc(x[0])+'</b><span>'+esc(x[1])+'</span></div>';}).join('');
      }
      var F='';
      var pinta=function(){
        var lista=actas.filter(function(a){return !F||a.estado===F;}).slice().sort(function(x,y){return ((y.gana?1:0)-(x.gana?1:0))||(y.n-x.n)||norm(x.palabra).localeCompare(norm(y.palabra));});
        muro.className='rc-muro';
        muro.innerHTML=lista.length?lista.map(tarjeta).join(''):'<div class="rc-vacio">Ninguna acta con ese filtro todavía.</div>';
      };
      if(fil){
        var cuenta={};actas.forEach(function(a){cuenta[a.estado]=(cuenta[a.estado]||0)+1;});
        var ops=[['','todas',actas.length]].concat(['con','esp','pend'].filter(function(k){return cuenta[k];}).map(function(k){return [k,ESTADOS[k],cuenta[k]];}));
        if(ops.length>2)botones(fil,ops,function(v){F=v;pinta();});
      }
      pinta();
    }
  }

  /* Los dictámenes de la Academia del salón */
  var CLASES={si:'a favor',medio:'con asegunes',no:'en contra',otro:'otro veredicto'};
  function clase(v){v=norm(v);if(v.indexOf('no entra')>-1||v.indexOf('apresur')>-1)return 'no';if(v.indexOf('observ')>-1||v.indexOf('asegun')>-1)return 'medio';if(v.indexOf('entra')>-1||v.indexOf('hizo bien')>-1)return 'si';return 'otro';}
  function comision(n){var s=String(n==null?'':n);var m=/comisi[oó]n\s*(\d+)/i.exec(s)||/^\s*(\d+)\s*$/.exec(s);return m?'Comisión '+m[1]:'';}
  function argumento(h){var s=String(h==null?'':h);var m=/^([\s\S]*?)\s*\((uso:[\s\S]*)\)\s*$/i.exec(s);return m?{txt:m[1],fil:m[2].split(' · ')}:{txt:s,fil:[]};}
  function dictamen(d){
    var a=argumento(d.historia);
    var t='<article class="dic-card dic-'+d._c+'"><div class="dic-cab"><b class="dic-pal">'+esc(d.palabra)+'</b>'+(lleno(d.veredicto)?'<span class="dic-ver">'+esc(d.veredicto)+'</span>':'')+'</div>';
    if(lleno(d.fuente))t+='<div class="dic-acta"><span class="rc-rot">¿Tiene acta?</span>'+esc(d.fuente)+'</div>';
    if(lleno(a.txt))t+='<div class="dic-arg">'+esc(a.txt)+'</div>';
    if(a.fil.length)t+='<div class="dic-fil">'+a.fil.map(function(x){return '<span>'+esc(x)+'</span>';}).join('')+'</div>';
    var com=comision(d.nota);
    t+='<div class="dic-pie">'+(com?'<span class="dic-com">'+esc(com)+'</span>':'<span></span>')+(lleno(d.nombre)?'<span class="dic-quien">Dictaminaron: '+esc(d.nombre)+'</span>':'')+'</div>';
    return t+'</article>';
  }
  var D=window.DICTAMENES||[],dm=document.getElementById('dic-muro'),dfil=document.getElementById('dic-filtros');
  if(dm){
    if(!D.length){
      dm.innerHTML='<div class="rc-vacio">La Academia del salón sesiona el jueves 19 de noviembre, en el centro de cómputo. Sus dictámenes aparecen aquí.</div>';
    }else{
      D.forEach(function(d){d._c=clase(d.veredicto);});
      var G='';
      var pintaD=function(){
        var l=D.filter(function(d){return !G||d._c===G;});
        dm.className='rc-muro';
        dm.innerHTML=l.length?l.map(dictamen).join(''):'<div class="rc-vacio">Ningún dictamen con ese veredicto todavía.</div>';
      };
      if(dfil){
        var cd={};D.forEach(function(d){cd[d._c]=(cd[d._c]||0)+1;});
        var od=[['','todos',D.length]].concat(['si','medio','no','otro'].filter(function(k){return cd[k];}).map(function(k){return [k,CLASES[k],cd[k]];}));
        if(od.length>2)botones(dfil,od,function(v){G=v;pintaD();});
      }
      pintaD();
    }
  }
})();
</script>
