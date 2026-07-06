---
title: "Semana 4 · El alfabeto de hace 2,800 años"
parent: Semanas
nav_order: 5
---

# Semana 4 · El alfabeto de hace 2,800 años

> **La pregunta de la semana:** ¿puedo leer un alfabeto de hace 2,800 años?

<div id="wk-gate" data-abre="2026-08-17"></div>

**Esta semana podrás:** leer las 24 letras griegas, escribir tu nombre en griego y decodificar palabras que ya conoces (museo, teatro, filosofía).

Ya lees griego y no lo sabías: la π de matemáticas, la Δ de un río, la Σ de una suma, el Ω de los ohms. No empezamos de cero. Le ponemos nombre a algo que ya te rodea.

---

## Herramientas de la semana

### Instala el teclado griego

Así escribes en griego desde tu celular. Tres minutos.

**Android (Gboard):** Ajustes › Sistema › Idiomas › Teclado en pantalla › Gboard › Idiomas › Agregar teclado › **Griego**. Para cambiar de teclado, mantén presionada la barra espaciadora o toca la tecla del globo.

**iPhone:** Ajustes › General › Teclado › Teclados › Añadir teclado nuevo › **Griego**. Cambia con la tecla del globo.

**Windows:** Configuración › Hora e idioma › Idioma y región › Agregar idioma › **Ελληνικά (Griego)**.

**Prueba:** escribe tu nombre y mándalo al grupo. Si sale, ya estás.

### En el centro de cómputo (jueves)

1. Escribe tu nombre en griego con el teclado nuevo.
2. Elige una palabra griega, léela letra por letra y busca qué significaba en el [DECEL](http://etimologias.dechile.net).
3. Captura en la plantilla: palabra en griego, cómo se lee, qué significa, fuente.
4. Sube tu nombre bien escrito al muro del grupo.

---

## Hoja de consulta

Toca una letra para ver su palabra ancla. El sonido siempre está a la vista.

<div id="gk4">
  <div class="gk4-grid" id="gk4-grid"></div>

  <div class="gk4-quiz" id="gk4-quiz">
    <div class="gk4-quiz-head">
      <strong>Ponte a prueba</strong>
      <span id="gk4-score">0 / 0</span>
    </div>
    <div class="gk4-letter" id="gk4-q-letter">α</div>
    <p class="gk4-ask">¿Cómo suena esta letra?</p>
    <div class="gk4-opts" id="gk4-opts"></div>
    <button class="gk4-next" id="gk4-next" hidden>Siguiente</button>
  </div>
</div>

<style>
#gk4{font-family:inherit;margin:1rem 0}
#gk4 *{box-sizing:border-box}
#gk4 .gk4-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:.5rem}
#gk4 .gk4-cell{border:1px solid #eadce6;border-radius:.7rem;padding:.5rem .3rem;text-align:center;cursor:pointer;background:#fff;transition:.15s;user-select:none}
#gk4 .gk4-cell:hover{border-color:#c8127a;transform:translateY(-2px)}
#gk4 .gk4-cell .gl{font-size:1.7rem;line-height:1;color:#6b1e5a;font-weight:700}
#gk4 .gk4-cell .nm{font-size:.72rem;color:#333;margin-top:.25rem}
#gk4 .gk4-cell .snd{font-size:.72rem;color:#c8127a;font-weight:700}
#gk4 .gk4-cell .anc{font-size:.68rem;color:#888;margin-top:.2rem;min-height:.9rem}
#gk4 .gk4-cell.on{background:#fdeaf5;border-color:#c8127a}
#gk4 .gk4-quiz{margin-top:1.2rem;border:1px solid #eadce6;border-radius:.9rem;padding:1rem;background:#fbf4f9}
#gk4 .gk4-quiz-head{display:flex;justify-content:space-between;align-items:center;color:#6b1e5a}
#gk4 .gk4-letter{font-size:3.4rem;text-align:center;color:#6b1e5a;font-weight:800;margin:.4rem 0}
#gk4 .gk4-ask{text-align:center;margin:.2rem 0 .7rem;color:#333}
#gk4 .gk4-opts{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem}
#gk4 .gk4-opts button{padding:.7rem .3rem;border:1px solid #d9c3d4;border-radius:.6rem;background:#fff;font-size:1rem;font-weight:700;color:#6b1e5a;cursor:pointer}
#gk4 .gk4-opts button:hover{border-color:#c8127a}
#gk4 .gk4-opts button.ok{background:#1f8a4c;color:#fff;border-color:#1f8a4c}
#gk4 .gk4-opts button.no{background:#c0392b;color:#fff;border-color:#c0392b}
#gk4 .gk4-opts button:disabled{cursor:default;opacity:.85}
#gk4 .gk4-next{margin:.8rem auto 0;display:block;padding:.6rem 1.4rem;border:none;border-radius:.6rem;background:#c8127a;color:#fff;font-weight:700;cursor:pointer}
</style>

<script>
(function(){
  var L=[
   ["Α α","alfa","a","alfabeto"],["Β β","beta","b/v","básico"],["Γ γ","gamma","g","gamma"],
   ["Δ δ","delta","d","delta"],["Ε ε","épsilon","e","energía"],["Ζ ζ","dseta","z","zodíaco"],
   ["Η η","eta","e","(e larga)"],["Θ θ","theta","z/th","teatro"],["Ι ι","iota","i","idea"],
   ["Κ κ","kappa","k","kilo"],["Λ λ","lambda","l","laberinto"],["Μ μ","my","m","museo"],
   ["Ν ν","ny","n","Nike"],["Ξ ξ","xi","x","xilófono"],["Ο ο","ómicron","o","cosmos"],
   ["Π π","pi","p","pi"],["Ρ ρ","ro","r","drama"],["Σ σ/ς","sigma","s","sumatoria"],
   ["Τ τ","tau","t","teatro"],["Υ υ","ípsilon","i/u","zodíaco"],["Φ φ","fi","f","filosofía"],
   ["Χ χ","ji","j","caos"],["Ψ ψ","psi","ps","psicología"],["Ω ω","omega","o","ohm"]
  ];
  var grid=document.getElementById('gk4-grid');
  if(grid){
    L.forEach(function(x){
      var d=document.createElement('div');d.className='gk4-cell';
      d.innerHTML='<div class="gl">'+x[0]+'</div><div class="nm">'+x[1]+'</div><div class="snd">'+x[2]+'</div><div class="anc"></div>';
      d.addEventListener('click',function(){
        var on=d.classList.contains('on');
        d.querySelector('.anc').textContent=on?'':x[3];
        d.classList.toggle('on');
      });
      grid.appendChild(d);
    });
  }
  var sounds=[];L.forEach(function(x){if(sounds.indexOf(x[2])<0)sounds.push(x[2]);});
  var score=0,total=0,cur;
  var qL=document.getElementById('gk4-q-letter'),opts=document.getElementById('gk4-opts'),
      sc=document.getElementById('gk4-score'),nx=document.getElementById('gk4-next');
  function pick(){
    cur=L[Math.floor(Math.random()*L.length)];
    qL.textContent=cur[0].split(' ')[1]||cur[0];
    var set=[cur[2]];
    while(set.length<3){var s=sounds[Math.floor(Math.random()*sounds.length)];if(set.indexOf(s)<0)set.push(s);}
    set.sort(function(){return Math.random()-.5;});
    opts.innerHTML='';nx.hidden=true;
    set.forEach(function(s){
      var b=document.createElement('button');b.textContent=s;
      b.addEventListener('click',function(){
        total++;
        Array.prototype.forEach.call(opts.children,function(c){c.disabled=true;});
        if(s===cur[2]){b.className='ok';score++;}
        else{b.className='no';Array.prototype.forEach.call(opts.children,function(c){if(c.textContent===cur[2])c.className='ok';});}
        sc.textContent=score+' / '+total;nx.hidden=false;
      });
      opts.appendChild(b);
    });
  }
  if(qL){nx.addEventListener('click',pick);pick();}
})();
</script>

---

## Las tarjetas de la semana

| Frente | Reverso (significado · palabra ancla) |
|---|---|
| θ | theta · z/th · teatro |
| ξ | xi · x/ks · xilófono |
| ψ | psi · ps · psicología |
| φ | fi · f · filosofía |
| ω | omega · o larga · ohm |
| η | eta · e larga · (frente a ε) |
| ρ | ro · r · drama |
| χ | ji · j/kh · caos |

Solo las que cuestan. Las gemelas (α, ε, ι, κ, ο, τ) no necesitan tarjeta: ya las lees.

## Lo que produjimos

*Nuestros nombres en griego y las primeras palabras que decodificamos. Se llena al cerrar la semana.*

## El postre 🍨

¿Por qué la misma letra suena distinto? La `β` que hoy leemos como *b* sonaba *b* en griego antiguo y pasó a *v* en griego moderno (por eso *biblioteca* pero también *Vasili* por *Βασίλης*). Las letras también envejecen.

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
