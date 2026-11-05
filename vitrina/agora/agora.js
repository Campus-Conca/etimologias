(function(){
  /* fecha de hoy, en español, en la barra */
  var hoy=document.getElementById('hoy');
  if(hoy){try{var d=new Date();var t=d.toLocaleDateString('es-MX',{weekday:'long',day:'numeric',month:'long',year:'numeric'});hoy.textContent=t.charAt(0).toUpperCase()+t.slice(1);}catch(e){}}
  /* portada: la apertura cambia cada día */
  var raw=document.getElementById('agora-data');
  if(raw){
    try{
      var cols=JSON.parse(raw.textContent);var n=cols.length;
      var now=new Date();var dia=Math.floor((now.getTime()-now.getTimezoneOffset()*60000)/86400000);
      var i=((dia%n)+n)%n;
      var q=new URLSearchParams(location.search).get('abre');
      if(q){for(var k=0;k<n;k++){if(cols[k].slug===q){i=k;break;}}}
      var c=cols[i];
      var set=function(id,v){var el=document.getElementById(id);if(el)el.textContent=v;};
      var a=document.querySelector('#apertura-titulo a');if(a){a.textContent=c.titulo;a.href='columnas/'+c.slug+'.html';}
      set('apertura-sec',c.sec);set('apertura-deck',c.deck);set('apertura-excerpt',c.excerpt);
      var by=document.getElementById('apertura-by');if(by){by.innerHTML='Por <i></i> · '+c.min+' min de lectura';by.querySelector('i').textContent=c.firma;}
      var leer=document.getElementById('apertura-leer');if(leer)leer.href='columnas/'+c.slug+'.html';
      var p=document.getElementById('apertura-prop');if(p){p.innerHTML='<b>La propuesta</b>';p.appendChild(document.createTextNode(c.propuesta));}
    }catch(e){}
  }
  /* columna: compartir */
  var wa=document.getElementById('wa');
  if(wa){var tt=document.title.replace(' · Ágora','');wa.href='https://wa.me/?text='+encodeURIComponent('“'+tt+'” — una columna de Ágora, el periódico del campus: '+location.href);}
  var cp=document.getElementById('copiar');
  if(cp){cp.addEventListener('click',function(){
    var done=function(){cp.textContent='Enlace copiado';setTimeout(function(){cp.textContent='Copiar enlace';},1800);};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(location.href).then(done,function(){prompt('Copia el enlace:',location.href);});}
    else{prompt('Copia el enlace:',location.href);}
  });}
})();
