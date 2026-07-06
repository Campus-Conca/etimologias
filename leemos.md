---
title: "Leemos"
nav_order: 3
---

# Leemos

Este curso lee. Dos libros en el semestre y los eliges tú: nadie te dirá cuál, nadie medirá qué tan rápido vas, y abandonar un libro que no te gusta no es fracaso, es criterio. Esta página es la casa de todo lo que leemos juntos: lo que suena en voz alta los martes, lo que el grupo recomienda, lo que grabas al terminar una obra. No tiene candado: crece cada semana con lo que producimos.

<!-- ============================================================
     BLOQUE DE DATOS. Esta página se alimenta SOLO de aquí.
     Para publicar algo nuevo, agrega una línea en la lista que
     corresponda (copia el ejemplo comentado y cámbiale los datos).
     No hace falta tocar nada más abajo.
     ============================================================ -->
<script>
window.LEEMOS = {

  // Lo que suena los martes: una línea por lectura compartida.
  vozAlta: [
    // {fecha:"2026-08-04", titulo:"El llano en llamas", autor:"Juan Rulfo", nota:"un arranque que muerde"},
  ],

  // El tendedero: una ficha por obra terminada.
  tendedero: [
    // {libro:"Pedro Páramo", autor:"Juan Rulfo", si:"te gustan los pueblos con secreto", quien:"Ana"},
  ],

  // Vitrina de booktubers: solo los autorizados por su autor.
  booktubers: [
    // {obra:"Pedro Páramo", quien:"Luis", url:"https://youtu.be/..."},
  ],

  // Palabras cosechadas de los libros.
  palabras: [
    // {palabra:"tolvanera", libro:"Pedro Páramo", quien:"Sofía"},
  ],

  // Testamentos lectores (se escriben en la semana 16).
  testamentos: [
    // {texto:"Si te gustó el terror, lee esto. Vas a dormir con la luz prendida.", quien:"Marco"},
  ]
};
</script>

---

## El mapa lector del semestre

| Qué | Cuándo |
|---|---|
| Eliges tu primer libro | semana 0 |
| Primer círculo de lectura | semana 7 |
| Eliges tu segundo libro | semanas 7 y 8 |
| Primer booktuber | semana 9 |
| Segundo círculo | semana 12 |
| Segundo booktuber | semanas 13 a 15 |
| Tercer círculo y testamento lector | semana 16 |

{: .ojo }
Nada de esto se califica por gusto ni por velocidad. Cuenta que estés, que compartas y que entregues.

---

## Tus derechos como lector

Los firmamos en la semana 0 y valen todo el semestre (y toda la vida). Los escribió Daniel Pennac en *Como una novela*; aquí van, traducidos a este curso.

<div class="lee-derechos">
  <div class="lee-d"><b>1 · No leer</b><span>Hoy no quieres. Está bien, el libro sabe esperar.</span></div>
  <div class="lee-d"><b>2 · Saltarte páginas</b><span>Nadie las cuenta.</span></div>
  <div class="lee-d"><b>3 · No terminar un libro</b><span>Abandonar no es fracaso, es criterio.</span></div>
  <div class="lee-d"><b>4 · Releer</b><span>Volver a un libro es visitar una casa donde ya viviste.</span></div>
  <div class="lee-d"><b>5 · Leer cualquier cosa</b><span>Cómic, terror, recetas. Todo cuenta.</span></div>
  <div class="lee-d"><b>6 · Emocionarte de más</b><span>Llorar con una historia inventada. Nadie te juzga.</span></div>
  <div class="lee-d"><b>7 · Leer donde sea</b><span>La cama, el camión, la fila de las tortillas.</span></div>
  <div class="lee-d"><b>8 · Picotear</b><span>Abrir al azar y leer un rato, sin plan.</span></div>
  <div class="lee-d"><b>9 · Leer en voz alta</b><span>Como hacemos los martes.</span></div>
  <div class="lee-d"><b>10 · Callarte</b><span>No tienes que opinar de todo lo que lees.</span></div>
</div>

---

## Si no sabes qué leer

Tienes cuatro fuentes, en este orden: el tendedero de aquí abajo (recomendaciones del propio grupo), el préstamelo del salón (libros que tus compañeros ofrecen en préstamo), el minuto del lector (cada semana alguien cuenta qué está leyendo) y la mesa de libros del profesor. La mejor recomendación no está en internet: está sentada junto a ti.

---

## Lo que suena los martes

Cada martes, al cierre de la sesión, el profesor lee en voz alta 8 a 10 minutos. Sin preguntas después, sin tarea, solo el gusto. Aquí queda el rastro:

<div id="lee-voz"></div>

---

## El tendedero

Cada obra terminada deja aquí su ficha: a quién le va a gustar y quién la recomienda. Si una te llama, pide el libro prestado.

<div id="lee-tendedero"></div>

---

## Vitrina de booktubers

{: .ojo }
¿Terminaste una obra? Graba 2 a 3 minutos con tu celular (vertical vale) con cuatro cosas: quién eres, qué leíste, qué te dio el libro (no qué pasa en él) y una frase leída en voz alta desde tu ejemplar. ¿No quieres cámara? Vale audio o ficha ilustrada con lo mismo. Se publica aquí solo si tú lo autorizas.

<div id="lee-booktubers"></div>

---

## Palabras que salieron de los libros

La cosecha de los círculos de lectura. Todas son candidatas al Museo de Palabras.

<div id="lee-palabras"></div>

---

## Testamentos lectores

Al final del semestre, cada lector deja escrita una recomendación para quien tome este curso después. Esto no lo escribió un adulto: lo escribió alguien que estuvo en tu silla.

<div id="lee-testamentos"></div>

<style>
.lee-derechos{display:grid;grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));gap:.6rem;margin:1rem 0}
.lee-d{border:1px solid #eadce6;border-radius:.9rem;padding:.8rem .95rem;background:#fbf4f9}
.lee-d b{display:block;color:#6b1e5a;margin-bottom:.15rem}
.lee-d span{font-size:.88rem;color:#444;line-height:1.4}
.lee-vacio{border:1px dashed #d9c3d4;border-radius:.9rem;padding:1rem 1.1rem;background:#fdf9fc;color:#6b1e5a;font-style:italic}
.lee-voz-item{display:flex;gap:.8rem;align-items:baseline;padding:.55rem 0;border-bottom:1px solid #f2e7ef}
.lee-voz-item .f{font-size:.78rem;color:#c8127a;font-weight:700;white-space:nowrap}
.lee-voz-item .t b{color:#333}
.lee-voz-item .t i{color:#777;font-size:.9rem}
.lee-tend{display:flex;flex-wrap:wrap;gap:1rem;padding-top:1.4rem;position:relative;margin-top:.5rem}
.lee-tend::before{content:"";position:absolute;top:.5rem;left:0;right:0;border-top:2px solid #6b1e5a;opacity:.35}
.lee-ficha{position:relative;flex:1 1 14rem;max-width:18rem;border:1px solid #eadce6;border-radius:.7rem;background:#fff;padding:.9rem 1rem;box-shadow:0 2px 5px rgba(107,30,90,.08)}
.lee-ficha::before{content:"";position:absolute;top:-1.15rem;left:50%;width:.55rem;height:.9rem;background:#c8127a;border-radius:.15rem;transform:translateX(-50%)}
.lee-ficha b{color:#6b1e5a}
.lee-ficha .si{display:block;margin:.35rem 0;color:#444;font-size:.9rem}
.lee-ficha .q{font-size:.78rem;color:#c8127a;font-weight:700}
.lee-bt{display:flex;flex-wrap:wrap;gap:.7rem;margin-top:.8rem}
.lee-bt a{display:block;flex:1 1 13rem;max-width:16rem;border:1px solid #eadce6;border-radius:.7rem;padding:.8rem .95rem;background:#fbf4f9;text-decoration:none}
.lee-bt a b{display:block;color:#6b1e5a}
.lee-bt a span{font-size:.82rem;color:#c8127a;font-weight:700}
.lee-chips{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.8rem}
.lee-chip{border:1px solid #d9c3d4;border-radius:1rem;padding:.3rem .8rem;background:#fff;font-size:.88rem}
.lee-chip b{color:#c8127a}
.lee-chip small{color:#777}
.lee-testa{border-left:4px solid #c8127a;background:#fbf4f9;border-radius:0 .7rem .7rem 0;padding:.85rem 1rem;margin:.7rem 0}
.lee-testa .q{display:block;margin-top:.3rem;font-size:.8rem;color:#6b1e5a;font-weight:700}
</style>

<script>
(function(){
  var D=window.LEEMOS||{};
  function vacio(el,msg){el.innerHTML='<div class="lee-vacio">'+msg+'</div>';}
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function fecha(iso){
    var p=String(iso||'').split('-'); if(p.length!==3) return esc(iso);
    var meses=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return (+p[2])+' '+meses[+p[1]-1];
  }

  var voz=document.getElementById('lee-voz');
  if(voz){
    if(!(D.vozAlta||[]).length){vacio(voz,'La primera lectura suena el martes 4 de agosto.');}
    else{voz.innerHTML=D.vozAlta.map(function(x){
      return '<div class="lee-voz-item"><span class="f">'+fecha(x.fecha)+'</span><span class="t"><b>'+esc(x.titulo)+'</b> · <i>'+esc(x.autor)+'</i>'+(x.nota?' · '+esc(x.nota):'')+'</span></div>';
    }).join('');}
  }

  var ten=document.getElementById('lee-tendedero');
  if(ten){
    if(!(D.tendedero||[]).length){vacio(ten,'El tendedero se inaugura al cerrar el primer círculo de lectura (7 de septiembre). Cada obra terminada colgará aquí su ficha.');}
    else{ten.innerHTML='<div class="lee-tend">'+D.tendedero.map(function(x){
      return '<div class="lee-ficha"><b>'+esc(x.libro)+'</b> · <i>'+esc(x.autor)+'</i><span class="si">Te va a gustar si '+esc(x.si)+'.</span><span class="q">lo recomienda '+esc(x.quien)+'</span></div>';
    }).join('')+'</div>';}
  }

  var bt=document.getElementById('lee-booktubers');
  if(bt){
    if(!(D.booktubers||[]).length){vacio(bt,'Los primeros booktubers llegan en la semana 9 (21 de septiembre).');}
    else{bt.innerHTML='<div class="lee-bt">'+D.booktubers.map(function(x){
      return '<a href="'+esc(x.url)+'" target="_blank" rel="noopener"><b>'+esc(x.obra)+'</b><span>por '+esc(x.quien)+' · ver</span></a>';
    }).join('')+'</div>';}
  }

  var pa=document.getElementById('lee-palabras');
  if(pa){
    if(!(D.palabras||[]).length){vacio(pa,'La primera cosecha llega con el primer círculo de lectura.');}
    else{pa.innerHTML='<div class="lee-chips">'+D.palabras.map(function(x){
      return '<span class="lee-chip"><b>'+esc(x.palabra)+'</b> <small>· '+esc(x.libro)+' · '+esc(x.quien)+'</small></span>';
    }).join('')+'</div>';}
  }

  var te=document.getElementById('lee-testamentos');
  if(te){
    if(!(D.testamentos||[]).length){vacio(te,'Se escriben en la semana 16, para quien tome este curso después de ti.');}
    else{te.innerHTML=D.testamentos.map(function(x){
      return '<div class="lee-testa">'+esc(x.texto)+'<span class="q">'+esc(x.quien)+'</span></div>';
    }).join('');}
  }
})();
</script>
