---
title: "Leemos"
nav_order: 3
---

# Leemos

Este curso lee. Dos libros en el semestre y los eliges tú: nadie te dirá cuál, nadie medirá qué tan rápido vas, y abandonar un libro que no te gusta no es fracaso, es criterio. Esta página es la casa de todo lo que leemos juntos: lo que el grupo recomienda, lo que cosechamos de los libros, lo que grabas al terminar una obra. No tiene candado: crece cada semana con lo que producimos.

<!-- ============================================================
     BLOQUE DE DATOS. Esta página se alimenta SOLO de aquí.
     Para publicar algo nuevo, agrega una línea en la lista que
     corresponda (copia el ejemplo comentado y cámbiale los datos).
     No hace falta tocar nada más abajo.
     ============================================================ -->
<script>
window.LEEMOS = {

  /* OJO: en estos scripts los comentarios van SIEMPRE como este, entre
     barra-asterisco. El compresor de Jekyll junta todo el script en una
     sola linea, y un comentario de doble barra se comeria el resto. */

  /* El tendedero YA NO se llena desde aqui: sus fichas estan escritas
     directamente en HTML, mas abajo, en la seccion "El tendedero".
     Esta lista se conserva vacia solo por compatibilidad. */
  tendedero: [],

  /* Vitrina de booktubers: solo los autorizados por su autor.
     {obra:"Pedro Páramo", quien:"Luis", url:"https:..."}, */
  booktubers: [
  ],

  /* Libros prestados: quién presta, a quién y qué libro.
     {libro:"Pedro Páramo", presta:"Ana", a:"Luis"}, */
  prestamos: [
    {libro:"Los peligros de fumar en la cama", presta:"el profe Lalo", a:"Ramón"},
    {libro:"El tercer chimpancé", presta:"el profe Lalo", a:"Derek"},
  ],

  /* Palabras cosechadas de los libros.
     {palabra:"tolvanera", libro:"Pedro Páramo", quien:"Sofía"}, */
  palabras: [
  ],

  /* Testamentos lectores (se escriben en la semana 16).
     {texto:"Si te gustó el terror, lee esto. Vas a dormir con la luz prendida.", quien:"Marco"}, */
  testamentos: [
  ]
};
</script>

<!-- ============================================================
     LO QUE LLEGA DESDE LA BITÁCORA DEL LECTOR
     Estas dos listas NO se escriben a mano: las genera el recolector
     (hoja de cálculo → menú Cosecha → Bloque para la web) con lo que
     los estudiantes mandaron desde su bitácora y tú palomeaste.
     Pega el bloque tal cual, reemplazando la línea que corresponde,
     entre estas marcas. Si están vacías, no pasa nada: las vitrinas
     de abajo se alimentan igual de la lista de arriba.
     ============================================================ -->
<!-- COSECHA:palabra-libro -->
<script>window.PALABRAS_LIBRO = [];</script>
<!-- /COSECHA:palabra-libro -->

<!-- COSECHA:testamento -->
<script>window.TESTAMENTOS = [];</script>
<!-- /COSECHA:testamento -->

<script>
/* Las dos listas de arriba se suman a las de LEEMOS, sin pisarlas: lo que
   pegaste a mano y lo que llegó por el recolector conviven. Comentarios
   siempre entre barra-asterisco, como el resto de esta página: el compresor
   de Jekyll junta el script en una sola línea. */
(function(){
  var D = window.LEEMOS || {};
  if (window.PALABRAS_LIBRO && window.PALABRAS_LIBRO.length) {
    D.palabras = (D.palabras || []).concat(window.PALABRAS_LIBRO);
  }
  if (window.TESTAMENTOS && window.TESTAMENTOS.length) {
    D.testamentos = (D.testamentos || []).concat(window.TESTAMENTOS);
  }
})();
</script>

<p class="pista-mazos">Aquí abajo hay dos mazos de láminas: el <strong>programa lector</strong>, que vale todo el semestre, y <strong>la sesión del silencio</strong>, una hora suelta sobre lo que cuesta leer. En clase se proyectan con el botón <strong>Presentar</strong> y aquí se quedan, apilados, para volver a ellos cuando quieras. Debajo de los mazos están tus derechos completos y las vitrinas del grupo.</p>

<!-- ============================ EL PROGRAMA LECTOR ============================ -->
<section class="mazo" id="programa">
<div class="mazo-cabeza">
<div>
<div class="cuando">El programa lector · vale todo el semestre</div>
<h3>Dos libros, y los eliges tú</h3>
<p class="foco">Nadie mide qué tan rápido vas.</p>
</div>
<button class="btn-presentar" type="button">Presentar ▸</button>
</div>
<section class="lam">
<h4>Este curso lee</h4>
<p class="di">Dos obras en cuatro meses, elegidas por ti.</p>
<p class="apoyo">Novela, cuento, novela gráfica, poesía, crónica: lo que te llame. Nadie te dirá cuál, y puedes cambiar de libro las veces que haga falta hasta encontrar uno que sí.</p>
<p class="nota-conductor">Este mazo se proyecta dos veces: en la inaugural, antes de la cata, y al abrir la semana 7, cuando toca elegir el segundo libro. La segunda vez, salta directo al mapa y a las fuentes de recomendación.</p>
</section>
<section class="lam">
<h4>Lo que no hay</h4>
<p class="di">No hay control de lectura, ni resumen, ni ficha, ni fecha de entrega del libro.</p>
<p class="apoyo">Lo que sí hay: tres momentos en los que nos sentamos a platicar de lo que cada quien está leyendo, y dos en los que grabas algo tuyo. Ese es todo el andamiaje. El resto es tuyo y de tu libro.</p>
</section>
<section class="lam">
<h4>El mapa lector del semestre</h4>
<table>
<tr><th>Cuándo</th><th>Qué pasa</th></tr>
<tr><td><strong>Semana 0</strong></td><td>La cata de libros: circulas, lees umbrales y anotas tu primera elección. Puedes cambiarla en las dos semanas siguientes sin dar explicaciones.</td></tr>
<tr><td><strong>Cada martes</strong></td><td>El minuto del lector: un minuto, una persona, qué estoy leyendo y por dónde voy. Pasa uno por semana hasta que pasa el grupo entero.</td></tr>
<tr><td><strong>Semana 7</strong></td><td>Primer círculo de lectura, cerrando la unidad 1. Al cerrar el corro: tu ficha va al tendedero, se instala el préstamelo del salón y eliges tu segundo libro.</td></tr>
<tr><td><strong>Semanas 7 y 8</strong></td><td>Eliges tu segundo libro, con lo que oíste en el círculo.</td></tr>
<tr><td><strong>Semana 9</strong></td><td>Primer booktuber, sobre tu primera obra.</td></tr>
<tr><td><strong>Semana 12</strong></td><td>Segundo círculo, cierre de la unidad 2. Cosechamos palabras de los libros para el Museo.</td></tr>
<tr><td><strong>Semanas 13 a 15</strong></td><td>Segundo booktuber, sobre tu segunda obra.</td></tr>
<tr><td><strong>Semana 16</strong></td><td>Tercer círculo y testamento lector.</td></tr>
</table>
<p class="apoyo">Tres círculos y dos grabaciones en dieciocho semanas. Todo lo demás es tiempo de leer.</p>
</section>
<section class="lam">
<h4>El círculo de lectura</h4>
<p class="di">Se llega con el libro en la mano y una frase marcada.</p>
<p class="apoyo">Uno por unidad, 45 minutos en corro. Es una conversación, no una exposición: se habla de lo que el libro te está haciendo, no de lo que pasa en él. Nadie resume, nadie evalúa. No se califica el contenido de lo que digas: cuenta que estés y que participes.</p>
</section>
<section class="lam">
<h4>El booktuber</h4>
<p class="di">Tu recomendación grabada: dos a tres minutos con tu celular, vertical vale, sin edición.</p>
<p class="apoyo">Dos en el semestre, uno por obra. Cuatro cosas: quién eres, qué leíste, qué te dio el libro y una frase leída en voz alta desde tu ejemplar. ¿No quieres cámara? Vale audio o ficha ilustrada con lo mismo. Se publica en la vitrina de abajo solo si tú lo autorizas.</p>
</section>
<section class="lam">
<h4>El testamento lector</h4>
<p class="di">Una carta breve para quien se siente en tu silla el año que viene.</p>
<p class="apoyo">Se escribe en la semana 16 y se queda publicada al pie de esta página. Es la única parte que le habla a alguien que todavía no conoces.</p>
</section>
<section class="lam lam--oscura">
<h4>Lo único que cuenta</h4>
<p class="di">Nada de esto se califica por gusto ni por velocidad.</p>
<p class="apoyo">No importa si leíste 80 páginas o 800, ni si el libro es "difícil". Cuenta que estés, que compartas y que entregues.</p>
</section>
<section class="lam">
<h4>¿Y si no leo nada?</h4>
<p class="di">Entonces los círculos son incómodos y los booktubers imposibles, porque no hay de dónde sacarlos.</p>
<p class="apoyo">No hay castigo: hay una conversación contigo, y la posibilidad de cambiar de libro las veces que haga falta hasta encontrar uno que sí.</p>
</section>
<section class="lam">
<h4>Tus derechos como lector</h4>
<p class="di">Tienes diez, y el tercero es no terminar un libro.</p>
<p class="apoyo">Los escribió Daniel Pennac en <em>Como una novela</em> y los firmas en la semana 0, junto con los otros pactos. La lista completa vive aquí abajo, en esta misma página.</p>
</section>
<section class="lam">
<h4>Si no sabes qué leer</h4>
<p class="di">Tienes cuatro fuentes, en este orden: el **tendedero** de aquí abajo (recomendaciones del propio grupo), el **préstamelo del salón** (la mesa que se instala al cerrar el primer círculo, con el nombre de quien presta cada libro), el **minuto del lector** (cada martes alguien cuenta qué está leyendo) y la **mesa de libros del profesor**, la misma de la cata de la semana 0. La mejor recomendación no está en internet: está sentada junto a ti.
<ol>
<li><strong>El tendedero</strong> de esta página: recomendaciones del propio grupo.</li>
<li><strong>El préstamelo del salón</strong>: libros que tus compañeros ofrecen en préstamo.</li>
<li><strong>El minuto del lector</strong>: cada semana alguien cuenta qué está leyendo.</li>
<li><strong>La mesa de libros del profesor.</strong></li>
</ol>
</section>
<section class="lam lam--oscura">
<h4>Antes de buscar en internet</h4>
<p class="di">La mejor recomendación no está en internet: está sentada junto a ti.</p>
</section>
</section>


<p class="pista-mazos">Y una hora suelta, para cuando toque: la sesión del silencio. Empieza sin explicación y termina con una apuesta.</p>

<!-- ============================ LA SESIÓN DEL SILENCIO ============================ -->
<section class="mazo" id="silencio">
<div class="mazo-cabeza">
<div>
<div class="cuando">Sesión suelta · 1 hora</div>
<h3>La sesión del silencio</h3>
<p class="foco">¿De qué te alimentan y quién trae el aguijón?</p>
</div>
<button class="btn-presentar" type="button">Presentar ▸</button>
</div>
<section class="lam lam--actividad" data-crono="240">
<h4><span class="n">1</span> Cuatro minutos de nada <span class="reloj">5 min</span></h4>
<span class="senal">Actividad · en silencio</span>
<p class="di">Cuatro minutos. Sin teléfono, sin hablar, sin escribir.</p>
<p class="apoyo">Tampoco te recargues, ni juegues con algo, ni te acomodes el pelo. Solo estar sentado. El reloj está a la vista y yo también lo hago.</p>
<p class="nota-conductor">No anuncies el tema, no expliques para qué es, no prometas nada. Arranca el cronómetro con la tecla T (esta lámina ya lo dejó en 4:00) y siéntate a hacer lo mismo. La risa nerviosa del minuto uno y el fastidio del minuto tres no son fallas de la actividad: son el dato de la sesión. Si alguien saca el celular, se lo pides sin discutir y sigues.</p>
<p class="nota-conductor">Antes de entrar: video probado en el proyector con los subtítulos ya revisados, media hoja repartida en cada banca, la pregunta del minuto 35 escrita en el pizarrón y tapada, y tu propio dato decidido (tu tiempo de pantalla de ayer, o cuánto llevas sin leer una hora seguida sin interrumpirte).</p>
</section>
<section class="lam lam--actividad" data-crono="180">
<h4><span class="n">2</span> Escritura muda <span class="reloj">3 min</span></h4>
<span class="senal">Actividad · para ti</span>
<p class="di">¿Qué pasó en tu cuerpo, minuto por minuto?</p>
<p class="apoyo">Media hoja, y no la va a leer nadie más. Dónde lo sentiste: las manos, la mandíbula, la espalda, los ojos, las piernas. No escribas qué opinas del ejercicio. Escribe qué te pasó.</p>
<p class="nota-conductor">Insiste en lo físico dos veces, porque la primera van a escribir opiniones. Si preguntan de qué se trata todo esto, contesta que ahorita se ve. Nadie lee nada en voz alta todavía: eso es lo que hace que escriban de verdad.</p>
</section>
<section class="lam">
<h4><span class="n">3</span> El video <span class="reloj">5 min</span></h4>
<p class="di">Dos pases. En el segundo, cazas una frase.</p>
<p class="apoyo">Primer pase: solo míralo. Segundo pase: anota literal la frase que te pegue, la que sea, aunque no sepas explicar por qué te pegó.</p>
<p class="nota-conductor">David Foster Wallace, entrevista para la ZDF, 2003, dos minutos ocho segundos (archivo <em>H7KHIerQFHbHUDd_.mp4</em>). Los subtítulos son automáticos y vienen sucios, con líneas repetidas: revísalos antes y, si estorban, proyéctalo sin ellos y traduce en vivo. No presentes al autor, no aporta al punto. Si alguien lo busca en el celular y pregunta por su muerte, respuesta breve, factual, sin detalles, y de regreso al tema.</p>
</section>
<section class="lam">
<h4><span class="n">4</span> Lo que pasó en tu cuerpo <span class="reloj">5 min</span></h4>
<span class="senal senal--aire">Al aire</span>
<p class="di">Ahora sí, en voz alta: un pedazo de lo que escribiste.</p>
<p class="apoyo">No hace falta leer todo, una línea basta. Y se vale repetir lo que ya dijo alguien: si a tres les pasó lo mismo, eso significa algo.</p>
<p class="nota-conductor">Aquí confiesas tu dato, antes de pedirles nada: tu tiempo de pantalla de ayer, con número, o cuánto llevas sin leer una hora seguida sin interrumpirte. Si esto suena a adulto diagnosticando jóvenes, la sesión se acaba en el minuto tres. Tú solo enlazas: repites en voz alta lo que dicen y buscas las coincidencias, sin interpretar a nadie.</p>
</section>
<section class="lam lam--oscura">
<h4><span class="n">5</span> La frase que cazaste <span class="reloj">5 min</span></h4>
<span class="senal senal--aire">Al aire</span>
<p class="di">Lee la tuya. Sin explicarla.</p>
<p class="cita">Se hace sentir en el cuerpo.<cite>David Foster Wallace, entrevista para la ZDF, 2003</cite></p>
<p class="apoyo">Esta es la frase que a mí me interesa, y fíjate en el orden en que pasaron las cosas hoy: él dice que se siente en el cuerpo, y tú lo escribiste hace ocho minutos, antes de oírlo. No estás repitiendo lo que dijo un señor en la tele. Estás confirmando algo tuyo.</p>
<p class="nota-conductor">Este es el minuto que justifica el orden invertido de toda la sesión, y por eso el experimento va siempre antes que el video. Dilo despacio. Si nadie cazó esa frase, la traes tú y la lees, pero primero pasan todas las de ellos.</p>
</section>
<section class="lam lam--oscura">
<h4><span class="n">6</span> Antes de que lo diga el diccionario <span class="reloj">1 min</span></h4>
<p class="di">¿Qué crees que significaba <em>aburrir</em> hace ochocientos años?</p>
<p class="apoyo">No lo busques: apuesta. Aquí siempre se apuesta primero y se verifica después, y equivocarse en la apuesta no cuesta nada.</p>
<p class="nota-conductor">Pide tres apuestas en voz alta, no más, y no corrijas ninguna. Casi siempre dicen "no tener nada que hacer" o "estar sin gracia". Déjalas flotando y pasa a la siguiente lámina.</p>
</section>
<section class="lam">
<h4><span class="n">7</span> aburrir <span class="reloj">3 min</span></h4>
<p class="palabra-grande">abhorrēre</p>
<div class="dis"><span class="pz pz--pre">ab-<small>apartarse de</small></span> <span class="pz pz--raiz">horrēre<small>erizarse</small></span> <span class="eq">= aburrir</span></div>
<p class="di">Aburrirse no era no tener nada que hacer. Era espantarse.</p>
<p class="apoyo">De <em>horrēre</em>, erizarse, que se te pongan los pelos de punta. De ahí salen <strong>aborrecer</strong>, <strong>horror</strong>, <strong>horrible</strong>, <strong>horrendo</strong> y <strong>erizar</strong>. En el video no dice que sus amigos no lean por flojera: dice que hay un casi pavor. El pavor ya vivía dentro de la palabra, seiscientos años antes de que él naciera.</p>
<p class="aparte">Corominas la documenta en Berceo, como <em>aborrir</em>, con el sentido de aborrecer. El de fastidio llega en el siglo XVI, cuando aparece <em>aburrirse</em>.</p>
<p class="nota-conductor">Si alguien apostó cerca, dilo con su nombre: es la mejor propaganda que tiene la ley del curso. Verificada en Corominas y en el DLE antes de la sesión; si te piden la fuente, esa es.</p>
</section>
<section class="lam">
<h4><span class="n">8</span> estímulo <span class="reloj">2 min</span></h4>
<p class="palabra-grande">stimulus</p>
<p class="di">Un estímulo era un palo con punta para picar al ganado y que avance.</p>
<p class="apoyo">Del latín <em>stimulus</em>, aguijón. De ahí <strong>estimular</strong>, <strong>estimulante</strong> y <strong>estimulación</strong>. El video dice que ya casi nunca estamos sin ningún tipo de estimulación. Traducido a la palabra original: casi nunca estamos sin que algo nos pique para que avancemos. Así que la pregunta no es si te estimulan. La pregunta es quién trae el aguijón, y hacia dónde te está picando.</p>
<p class="nota-conductor">Esta es la palabra que sostiene la sesión entera y la que va a volver en la pregunta del minuto 35, así que no la pases rápido. Si el grupo se ríe con lo del ganado, aprovecha: la risa es que ya vieron la imagen, y la imagen es el argumento.</p>
</section>
<section class="lam">
<h4><span class="n">9</span> entretener <span class="reloj">2 min</span></h4>
<div class="dis"><span class="pz pz--pre">inter-<small>entre</small></span> <span class="pz pz--raiz">tenēre<small>sostener</small></span> <span class="eq">= entretener</span></div>
<p class="di">Entretener a alguien era, literalmente, detenerlo.</p>
<p class="apoyo">Tenerte entre, mantenerte donde estás. Mira la familia completa: <strong>retener</strong>, <strong>detener</strong>, <strong>contener</strong>, <strong>sostener</strong>, <strong>obtener</strong>, <strong>tenaz</strong>. Todas sujetan algo. El entretenimiento no te lleva a ningún lado, y no es que esté fallando: es exactamente lo que la palabra prometió desde el principio.</p>
<p class="nota-conductor">Buena para sacar familia en cadena: pide verbos terminados en tener y anótalos en el pizarrón. Salen seis o siete en veinte segundos y la raíz queda sola, a la vista. Cuida el matiz por si alguien pregunta: entretener se arma ya en romance sobre entre y tener (llega por el francés <em>entretenir</em>, y en el Quijote ya está), no viene de un verbo latino <em>intertenere</em> hecho y derecho.</p>
</section>
<section class="lam">
<h4><span class="n">10</span> escuela <span class="reloj">2 min</span></h4>
<p class="palabra-grande">σχολή</p>
<p class="di">Estás sentado en un lugar cuyo nombre significa tiempo libre.</p>
<p class="apoyo"><em>Scholḗ</em>, en griego, era el ocio: el tiempo que te sobra y que decides tú en qué se usa. Después pasó a nombrar aquello a lo que se dedicaba ese tiempo, y de ahí salió <strong>escuela</strong>. Al trabajo los griegos le decían <em>ascholía</em>, el no-ocio. Los romanos hicieron lo mismo con <strong>negocio</strong>, <em>nec otium</em>, la negación del ocio. Dos lenguas distintas, la misma decisión: el ocio era lo primero, y al trabajo lo nombraron como su ausencia.</p>
<p class="nota-conductor">Este es el momento incómodo de la sesión y hay que dejarlo incómodo: no lo resuelvas, no lo suavices con una moraleja y no defiendas a la escuela. Si alguien dice en voz alta que entonces la escuela hace lo contrario de lo que su nombre dice, esa frase te sirve el resto del semestre. No la tapes.</p>
</section>
<section class="lam">
<h4><span class="n">11</span> alumno <span class="reloj">2 min</span></h4>
<p class="palabra-grande">alumnus</p>
<p class="di">Alumno es el que es alimentado.</p>
<p class="apoyo">De <em>alere</em>, alimentar, nutrir, hacer crecer. De esa misma raíz salen <strong>alimento</strong>, <strong>adolescente</strong> (el que está creciendo) y <strong>adulto</strong> (el que ya creció). La sesión entera habló de alimentar una parte y dejar sin comer a la otra, y resulta que esa metáfora no había que traerla de ningún lado: estaba dentro de cómo te llamas aquí desde hace dos mil años.</p>
<p class="aparte">Y el eje de todo esto, dicho con la palabra en la mano: no hay una parte buena y una parte mala. Hay una parte que come doscientas veces al día y otra que no come nunca. El problema no es la estimulación, es la asimetría.</p>
<p class="nota-conductor">Aquí cierras el bloque de palabras. La cadena <em>alere</em> hacia alumno, alimento, adolescente y adulto está verificada, pero es larga: dila completa y despacio, sin brincos. Y sostén el eje tal cual está escrito. Si esto se convierte en el lobo bueno contra el lobo malo, la conversación que sigue se vuelve un regaño y nadie va a defender el silencio después de haberlo acusado de aburrido.</p>
</section>
<section class="lam lam--actividad" data-crono="120">
<h4><span class="n">12</span> Solo, en pares, en cuartetos <span class="reloj">12 min</span></h4>
<span class="senal">Actividad · 1-2-4</span>
<p class="di">¿Cuándo fue la última vez que estuviste media hora despierto sin que nada te picara, y cómo llegaste ahí?</p>
<p class="apoyo">Dos minutos solo, en silencio, sin escribirle a nadie. Cinco minutos en pares. Cinco en cuartetos. No hace falta que se pongan de acuerdo, hace falta que se oigan.</p>
<p class="nota-conductor">La pregunta va escrita en el pizarrón antes de que empiece la sesión, y no nombra el celular. Que lo nombren ellos. Si lo dices tú primero, esto se vuelve un sermón sobre pantallas y se apaga solo. Tiempos: 2 solo, 5 en pares, 5 en cuartetos, con el cronómetro a la vista en cada cambio (tecla T; la lámina lo dejó en 2:00 para el primer tramo). Y fíjate en la segunda mitad de la pregunta, el "cómo llegaste ahí": ahí está lo bueno, porque casi siempre fue un apagón, un camino largo, una fila o un lugar sin señal.</p>
<p class="nota-conductor">Variante de dos horas, si esta sesión cae en la sesión fuerte: aquí es donde se abre. Veinte minutos de verificación en fuentes con las cinco palabras (DLE, DECEL y Corominas; <em>aburrir</em> y la cadena de <em>alere</em> son las que dan mejor pelea) y veinticinco de lectura larga sostenida, en silencio real, con un texto que exija trabajo. Esa lectura no es relleno: es la única forma de probar la tesis del video en lugar de discutirla.</p>
</section>
<section class="lam">
<h4><span class="n">13</span> La cosecha <span class="reloj">3 min</span></h4>
<span class="senal senal--aire">Al aire</span>
<p class="di">Una frase por cuarteto. No un reporte.</p>
<p class="apoyo">Lo que se oyó, no lo que se acordó. Y si en el cuarteto salieron dos respuestas opuestas, traigan las dos.</p>
<p class="nota-conductor">Tú enlazas y no cierras con moraleja. Anota en el pizarrón los lugares que vayan saliendo: casi siempre son el mismo puñado (el camión, el cerro, la azotea, la casa del abuelo, cuando se va la luz). Ese mapa vale más que cualquier conclusión que puedas dar tú.</p>
</section>
<section class="lam lam--actividad">
<h4><span class="n">14</span> La apuesta de la semana <span class="reloj">7 min</span></h4>
<span class="senal">Actividad · se escribe y se guarda</span>
<p class="di">Elige un rato fijo de esta semana para alimentar al que tiene hambre.</p>
<p class="apoyo">Tú decides cuál, cuánto y dónde. Puede ser media hora o pueden ser diez minutos. Puede ser un libro del tendedero de esta misma página, o puede ser sentarte en la puerta de tu casa a no hacer nada. Se escribe en la misma media hoja de hace rato, con día y hora, y te la quedas tú.</p>
<p class="aparte">No es tarea y no se califica. La semana que entra le dedicamos cinco minutos: quién la cumplió, quién no y qué se atravesó. Las dos respuestas sirven igual.</p>
<p class="nota-conductor">No lo llames compromiso ni reto. Es una apuesta, y una apuesta se puede perder. Exige día y hora concretos, porque "cuando pueda" no ocurre nunca. Escribe la tuya en voz alta delante de ellos y, la semana siguiente, reporta tú primero si la cumpliste o no.</p>
</section>
<section class="lam lam--oscura">
<h4><span class="n">15</span> Lo que te llevas <span class="reloj">3 min</span></h4>
<p class="di">¿De qué te alimentan, y quién trae el aguijón?</p>
<p class="apoyo">Cinco palabras que usas todos los días traían adentro el argumento de esta sesión mucho antes de que existiera la sesión. <em>Aburrir</em> era espantarse. <em>Estímulo</em> era el aguijón. <em>Entretener</em> era detenerte. <em>Escuela</em> era el tiempo libre. Y <em>alumno</em> es el que es alimentado. Eso es lo que hacemos aquí: abrir palabras comunes y encontrar adentro cosas que no sabías que estabas diciendo.</p>
<p class="nota-conductor">Cierra sin resumen y sin moraleja: lee las cinco de corrido y ya. Las cinco tarjetas entran al mazo (con la reserva son siete piezas, cabe bajo el tope de catorce de la semana). Si sobran minutos, no los llenes: el mejor final de esta sesión es un silencio corto que a estas alturas ya significa otra cosa.</p>
<p class="nota-conductor">Extensiones, si la sesión prende: <em>aburrimiento</em>, <em>estímulo</em> y <em>ocio</em> son candidatas fuertes a pieza de Museo, porque la biografía de esas palabras es el argumento. Y para el Diccionario de la Sierra, la contraparte comunitaria es grabar a un abuelo o una abuela de Concá contestando qué se hacía antes, cuando no había con qué llenar el silencio.</p>
</section>
</section>
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
  <div class="lee-d"><b>9 · Leer en voz alta</b><span>Como hacemos en clase.</span></div>
  <div class="lee-d"><b>10 · Callarte</b><span>No tienes que opinar de todo lo que lees.</span></div>
</div>

---

## El tendedero <span class="viva">se llena con el semestre</span>

Cada obra terminada deja aquí su ficha: a quién le va a gustar y quién la recomienda. Las primeras cuatro las colgó el profe (todas están en la biblioteca de la escuela); el resto las colgó el grupo con sus propias palabras. Las fichas con clavija verde y etiqueta <strong>se presta</strong> tienen dueño dispuesto a traer su ejemplar: pídeselo directamente.

<!-- TENDEDERO. Las fichas estan escritas aqui en HTML, a la vista.
     Para colgar una ficha nueva, copia un bloque .lee-ficha completo y
     cambiale los datos. El orden en que aparecen es el orden de esta lista.
     Si el libro se presta: agrega la clase "presta" al div y la etiqueta
     <span class="pr">se presta</span> despues del autor. -->
<div id="lee-tendedero">
<div class="lee-tend">
<div class="lee-ficha"><b>Las cavernas de la Sierra Gorda</b> · <i>Carlos Lazcano Sahagún</i><span class="si">Te va a gustar si quieres ver lo que hay debajo de la tierra que pisas todos los días. Lazcano lleva décadas bajando a los sótanos y abismos de la Sierra Gorda, y este libro reúne sus fotografías: cuerdas que se pierden en la oscuridad, bóvedas donde cabría una catedral entera y lugares a los que casi nadie ha llegado — a unos kilómetros de tu casa.</span><span class="donde">está en la biblioteca de la escuela</span><span class="q">lo recomienda el profe</span></div>
<div class="lee-ficha"><b>Los límites de la Fundación</b> · <i>Isaac Asimov</i><span class="si">Te va a gustar si quieres una galaxia entera para ti: imperios que caen, naves, robots y una ciencia inventada — la psicohistoria — que pretende predecir el futuro de la humanidad con puras matemáticas. Es parte de la saga de la Fundación, pero puede leerse solo, y Asimov escribe tan claro que las páginas se van sin sentir.</span><span class="donde">está en la biblioteca de la escuela</span><span class="q">lo recomienda el profe</span></div>
<div class="lee-ficha"><b>El escultor</b> · <i>Scott McCloud</i><span class="si">Te va a gustar si alguna vez te has preguntado qué darías a cambio de hacer algo que valga la pena. David, un artista fracasado, le hace un trato a la Muerte: sus manos podrán esculpir cualquier cosa, pero le quedan doscientos días de vida. Y justo entonces, claro, se enamora. Novela gráfica en tinta azul: casi quinientas páginas que se leen en dos tardes.</span><span class="donde">está en la biblioteca de la escuela</span><span class="q">lo recomienda el profe</span></div>
<div class="lee-ficha"><b>Crimen y castigo (novela gráfica)</b> · <i>Dostoievski · adaptación de Edu Molina</i><span class="si">Te va a gustar si quieres meterte en la cabeza de un asesino con remordimientos. Raskólnikov, un estudiante pobre, mata a una vieja usurera convencido de que hay crímenes que se justifican — y la historia es lo que su conciencia le hace después. Edu Molina cuenta en viñetas el clásico ruso completo, sin las seiscientas páginas del original.</span><span class="donde">está en la biblioteca de la escuela</span><span class="q">lo recomienda el profe</span></div>
<div class="lee-ficha"><b>No me puedes lastimar</b> · <i>David Goggins</i><span class="si">«Me gustaría que más gente lo leyera.»</span><span class="q">lo recomienda Johan</span></div>
<div class="lee-ficha"><b>Veinte mil leguas de viaje submarino</b> · <i>Julio Verne</i><span class="si">«Me encanta y me gustaría compartir la experiencia de leerlo.»</span><span class="q">lo recomienda Johan</span></div>
<div class="lee-ficha presta"><b>El esclavo</b> · <i>Anand Dilvar</i> <span class="pr">se presta</span><span class="si">«Es una historia que te hace pensar en lo que tienes pero no aprecias, y hasta que no puedes hacer muchas cosas es cuando lo ves.»</span><span class="q">lo presta Yael — pídeselo</span></div>
<div class="lee-ficha"><b>Robinson Crusoe</b> · <i>Daniel Defoe</i><span class="si">«Es una historia muy entretenida.»</span><span class="q">lo recomienda Yael</span></div>
<div class="lee-ficha"><b>El diario de Ana Frank</b> · <i>Ana Frank</i><span class="si">«Está entretenido.»</span><span class="q">lo recomienda Carlo</span></div>
<div class="lee-ficha"><b>Caperucita Roja</b> · <i>Charles Perrault</i><span class="si">«Porque es una belleza.»</span><span class="q">lo recomienda Carlo</span></div>
<div class="lee-ficha presta"><b>El principito</b> · <i>Antoine de Saint-Exupéry</i> <span class="pr">se presta</span><span class="si">«Está muy bueno y entretenido.»</span><span class="q">lo presta Alexander — pídeselo</span></div>
<div class="lee-ficha presta"><b>Padre rico, padre pobre</b> · <i>Robert Kiyosaki</i> <span class="pr">se presta</span><span class="si">«Te ayuda a cambiar hábitos.»</span><span class="q">lo presta Alexander — pídeselo</span></div>
<div class="lee-ficha"><b>Anatomía del Mal</b> · <i>Jordi Wild</i><span class="si">«Bastante interesante.»</span><span class="q">lo recomienda Francisco</span></div>
<div class="lee-ficha"><b>Halo (la novela)</b><span class="si">«Bastante interesante.»</span><span class="q">lo recomienda Francisco</span></div>
<div class="lee-ficha presta"><b>Las ventajas de ser invisible</b> · <i>Stephen Chbosky</i> <span class="pr">se presta</span><span class="si">«Se me hizo muy interesante.»</span><span class="q">lo presta Sara — pídeselo</span></div>
<div class="lee-ficha presta"><b>Viaje al centro de la Tierra</b> · <i>Julio Verne</i> <span class="pr">se presta</span><span class="si">«Es muy entretenido.»</span><span class="q">lo presta Sara — pídeselo</span></div>
<div class="lee-ficha"><b>Viaje al centro de la Tierra</b> · <i>Julio Verne</i><span class="si">«Es un libro de ciencia ficción que para mí fue muy interesante.»</span><span class="q">lo recomienda Alan</span></div>
<div class="lee-ficha"><b>El tesoro cósmico</b> · <i>Stephen y Lucy Hawking</i><span class="si">«Tiene una historia muy bonita con un final muy bueno.»</span><span class="q">lo recomienda Alan</span></div>
<div class="lee-ficha presta"><b>El principito</b> · <i>Antoine de Saint-Exupéry</i> <span class="pr">se presta</span><span class="si">«Deja enseñanzas sobre la amistad y la importancia de valorar lo que importa.»</span><span class="q">lo presta Rafael — pídeselo</span></div>
<div class="lee-ficha"><b>Boulevard</b> · <i>Flor M. Salvador</i><span class="si">«Es una novela que habla sobre el amor, las decisiones y el crecimiento personal a través de una historia emotiva. Invita a reflexionar sobre las relaciones, la importancia de valorar a las personas y las consecuencias de nuestras acciones.»</span><span class="q">lo recomienda Iris</span></div>
<div class="lee-ficha"><b>La sociedad de los poetas muertos</b> · <i>N. H. Kleinbaum</i><span class="si">«Es una novela que inspira a perseguir los sueños, pensar de manera crítica y valorar el conocimiento. A través de sus personajes, transmite enseñanzas sobre la amistad, el crecimiento personal y la importancia de ser uno mismo.»</span><span class="q">lo recomienda Iris</span></div>
<div class="lee-ficha"><b>A dos metros de ti</b> · <i>Rachael Lippincott</i><span class="si">«Es una historia que te hace pensar muchas cosas; es muy bonita pero tiene algunas cosas demasiado tristes.»</span><span class="q">lo recomienda Yoali</span></div>
<div class="lee-ficha presta"><b>Bajo la misma estrella</b> · <i>John Green</i> <span class="pr">se presta</span><span class="si">«Es una historia donde el chico es muy positivo y trata de entender a la chica, pero es triste a la vez.»</span><span class="q">lo presta Yoali — pídeselo</span></div>
<div class="lee-ficha"><b>Leyendas mexicanas</b><span class="si">«El libro cuenta con una variedad de leyendas mexicanas de diferentes estados.»</span><span class="q">lo recomienda Kevin</span></div>
<div class="lee-ficha presta"><b>Harry Potter</b> · <i>J. K. Rowling</i> <span class="pr">se presta</span><span class="si">«Narra la historia de un joven que vivía con sus tíos que lo trataban mal; después le llegó una carta donde decía que había sido seleccionado para la mejor escuela de magia.»</span><span class="q">lo presta Kevin — pídeselo</span></div>
<div class="lee-ficha presta"><b>El diario de Ana Frank</b> · <i>Ana Frank</i> <span class="pr">se presta</span><span class="si">«Es muy buen libro, más si te gustan los libros de hechos reales. Está escrito en primera persona, lo que te hace pensar que tú eres quien lo está viviendo, y te hace empatizar e identificarte mucho con ella.»</span><span class="q">lo presta Arely — pídeselo</span></div>
<div class="lee-ficha"><b>El enigma de la Atlántida</b><span class="si">«Te pone a pensar y te adentra mucho en la historia.»</span><span class="q">lo recomienda Arely</span></div>
<div class="lee-ficha"><b>El principito</b> · <i>Antoine de Saint-Exupéry</i><span class="si">«Parece un libro para niños pero en realidad es como una crítica al mundo adulto; tiene metáforas muy buenas.»</span><span class="q">lo recomienda Camila</span></div>
<div class="lee-ficha presta"><b>Fazbear Frights</b> · <i>Scott Cawthon</i> <span class="pr">se presta</span><span class="si">«Son tres historias que ocurren en diferentes lugares; algunas terminan bien, otras mal.»</span><span class="q">lo presta Iker — pídeselo</span></div>
<div class="lee-ficha presta"><b>The Twisted Ones</b> · <i>Scott Cawthon</i> <span class="pr">se presta</span><span class="si">«Es la novela gráfica, y está buena tanto la historia como los dibujos.»</span><span class="q">lo presta Iker — pídeselo</span></div>
<div class="lee-ficha"><b>Siete clásicos de golpe</b> · <i>de Poe a Rulfo</i><span class="si">«Son de cultura 🔝»: El corazón delator (Edgar Allan Poe), Los juegos del hambre (Suzanne Collins), El principito (Saint-Exupéry), La Odisea (Homero), Las batallas en el desierto (José Emilio Pacheco), Pedro Páramo (Juan Rulfo) y La metamorfosis (Franz Kafka).</span><span class="q">los recomienda Ainara</span></div>
<div class="lee-ficha presta"><b>El colmillo blanco</b> · <i>Jack London</i> <span class="pr">se presta</span><span class="si">«Es una joya, ya lo leí tres veces.»</span><span class="q">lo presta Angel — pídeselo</span></div>
<div class="lee-ficha"><b>El principito</b> · <i>Antoine de Saint-Exupéry</i><span class="si">«Es poesía y muy filosófico.»</span><span class="q">lo recomienda Angel</span></div>
<div class="lee-ficha"><b>Boulevard</b> · <i>Flor M. Salvador</i><span class="si">«Es una historia muy bonita, que hace sentir muchos sentimientos a la vez, y una vez que le agarras la onda te quedas picado leyendo y leyendo. Nada más que este libro es más para gente aficionada del romance.»</span><span class="q">lo recomienda Yamila</span></div>
<div class="lee-ficha presta"><b>Bajo la misma estrella</b> · <i>John Green</i> <span class="pr">se presta</span><span class="si">«Está muy bonito: es un amor que, a pesar de las dificultades de una enfermedad, pues existe y es verdadero.»</span><span class="q">lo presta Yamila — pídeselo</span></div>
<div class="lee-ficha presta"><b>A dos metros de ti</b> · <i>Rachael Lippincott</i> <span class="pr">se presta</span><span class="si">«Habla de los límites que se rompen por el amor hacia alguien.»</span><span class="q">lo presta Yuritza — pídeselo</span></div>
<div class="lee-ficha"><b>El club de los psicópatas</b> · <i>John Katzenbach</i><span class="si">«Es muy interesante saber hasta dónde llegan las redes sociales.»</span><span class="q">lo recomienda Yuritza</span></div>
<div class="lee-ficha"><b>Yo antes de ti</b> · <i>Jojo Moyes</i><span class="si">«Novela dramática; te deja una reflexión sobre la libertad y la importancia de vivir.»</span><span class="q">lo recomienda Mariana</span></div>
</div>
</div>

---

## Libros prestados

El préstamelo del salón, por escrito: aquí queda registrado qué libro anda en qué manos. Cuando lo termines (o lo abandones, que también es tu derecho), regrésalo para que siga circulando.

<div id="lee-prestamos"></div>

---

## Vitrina de booktubers <span class="viva">se llena con el semestre</span>

{: .ojo }
¿Terminaste una obra? Graba 2 a 3 minutos con tu celular (vertical vale) con cuatro cosas: quién eres, qué leíste, qué te dio el libro (no qué pasa en él) y una frase leída en voz alta desde tu ejemplar. ¿No quieres cámara? Vale audio o ficha ilustrada con lo mismo. Se publica aquí solo si tú lo autorizas.

<div id="lee-booktubers"></div>

---

## Palabras que salieron de los libros <span class="viva">se llena con el semestre</span>

La cosecha de los círculos de lectura. Todas son candidatas al Museo de Palabras.

<div id="lee-palabras"></div>

---

## Testamentos lectores <span class="viva">se llena con el semestre</span>

Al final del semestre, cada lector deja escrita una recomendación para quien tome este curso después. Esto no lo escribió un adulto: lo escribió alguien que estuvo en tu silla.

<div id="lee-testamentos"></div>

<style>
.lee-derechos{display:grid;grid-template-columns:repeat(auto-fill,minmax(15rem,1fr));gap:.6rem;margin:1rem 0}
.lee-d{border:1px solid #E6DFF0;border-radius:.9rem;padding:.8rem .95rem;background:#F7F3FB}
.lee-d b{display:block;color:#6B1E5A;margin-bottom:.15rem}
.lee-d span{font-size:.88rem;color:#4A3F5C;line-height:1.4}
.lee-vacio{border:1px dashed #D9C3D4;border-radius:.9rem;padding:1rem 1.1rem;background:#FDF9FC;color:#6B1E5A;font-style:italic}
.lee-tend{display:flex;flex-wrap:wrap;gap:1rem;padding-top:1.4rem;position:relative;margin-top:.5rem}
.lee-tend::before{content:"";position:absolute;top:.5rem;left:0;right:0;border-top:2px solid #6B1E5A;opacity:.35}
.lee-ficha{position:relative;flex:1 1 14rem;max-width:18rem;border:1px solid #E6DFF0;border-radius:.7rem;background:#fff;padding:.9rem 1rem;box-shadow:0 2px 5px rgba(43,36,64,.08)}
.lee-ficha::before{content:"";position:absolute;top:-1.15rem;left:50%;width:.55rem;height:.9rem;background:#C4006A;border-radius:.15rem;transform:translateX(-50%)}
.lee-ficha b{color:#6B1E5A}
.lee-ficha .si{display:block;margin:.35rem 0;color:#4A3F5C;font-size:.9rem}
.lee-ficha .donde{display:block;margin-bottom:.3rem;font-size:.78rem;color:#6B1E5A;font-style:italic}
.lee-ficha .q{font-size:.78rem;color:#C4006A;font-weight:700}
.lee-ficha.presta::before{background:#2E7D32}
.lee-ficha.presta .q{color:#2E7D32}
.lee-ficha .pr{display:inline-block;margin-left:.25rem;font-size:.66rem;font-weight:700;color:#fff;background:#2E7D32;border-radius:1rem;padding:.1rem .55rem;vertical-align:middle;text-transform:uppercase;letter-spacing:.04em}
.lee-prest{display:flex;flex-wrap:wrap;gap:.7rem;margin-top:.8rem}
.lee-p{flex:1 1 14rem;max-width:18rem;border:1px solid #E6DFF0;border-left:4px solid #C4006A;border-radius:.7rem;background:#fff;padding:.8rem .95rem}
.lee-p>b{display:block;color:#6B1E5A}
.lee-p span{display:block;margin-top:.25rem;font-size:.85rem;color:#4A3F5C}
.lee-p span b{color:#C4006A}
.lee-bt{display:flex;flex-wrap:wrap;gap:.7rem;margin-top:.8rem}
.lee-bt a{display:block;flex:1 1 13rem;max-width:16rem;border:1px solid #E6DFF0;border-radius:.7rem;padding:.8rem .95rem;background:#FFF3F9;text-decoration:none}
.lee-bt a b{display:block;color:#6B1E5A}
.lee-bt a span{font-size:.82rem;color:#C4006A;font-weight:700}
.lee-chips{display:flex;flex-wrap:wrap;gap:.45rem;margin-top:.8rem}
.lee-chip{border:1px solid #D9C3D4;border-radius:1rem;padding:.3rem .8rem;background:#fff;font-size:.88rem}
.lee-chip b{color:#C4006A}
.lee-chip small{color:#777}
.lee-testa{border-left:4px solid #C4006A;background:#FFF3F9;border-radius:0 .7rem .7rem 0;padding:.85rem 1rem;margin:.7rem 0}
.lee-testa .q{display:block;margin-top:.3rem;font-size:.8rem;color:#6B1E5A;font-weight:700}
</style>

<script>
(function(){
  var D=window.LEEMOS||{};
  function vacio(el,msg){el.innerHTML='<div class="lee-vacio">'+msg+'</div>';}
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

  var ten=document.getElementById('lee-tendedero');
  /* Solo actua si el contenedor viene vacio: si las fichas ya estan
     escritas en HTML, no las toca. */
  if(ten && !ten.querySelector('.lee-ficha')){
    if(!(D.tendedero||[]).length){vacio(ten,'El tendedero se inaugura al cerrar el primer círculo de lectura (7 de septiembre). Cada obra terminada colgará aquí su ficha.');}
    else{ten.innerHTML='<div class="lee-tend">'+D.tendedero.map(function(x){
      return '<div class="lee-ficha"><b>'+esc(x.libro)+'</b> · <i>'+esc(x.autor)+'</i><span class="si">Te va a gustar si '+esc(x.si)+'.</span>'+(x.donde?'<span class="donde">'+esc(x.donde)+'</span>':'')+'<span class="q">lo recomienda '+esc(x.quien)+'</span></div>';
    }).join('')+'</div>';}
  }

  var pr=document.getElementById('lee-prestamos');
  if(pr){
    if(!(D.prestamos||[]).length){vacio(pr,'Ningún libro anda prestado por ahora. Cuando uno cambie de manos, aquí queda el registro.');}
    else{pr.innerHTML='<div class="lee-prest">'+D.prestamos.map(function(x){
      return '<div class="lee-p"><b>'+esc(x.libro)+'</b><span>'+esc(x.presta)+' se lo prestó a <b>'+esc(x.a)+'</b></span></div>';
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
