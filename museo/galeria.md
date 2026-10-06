---
title: Galería
parent: Museo de Palabras
nav_order: 2
---

# Galería del Museo

<span class="viva" id="museo-viva">Primera pieza colgada · la sala se llena con el semestre</span>

Piezas de las colecciones del grupo, publicadas con permiso de sus autores y verificadas en curaduría antes de colgarse. Toca cualquier marco para leer su cédula; el botón **Iniciar visita** recorre la sala pieza por pieza, como audioguía.

<!-- ============================================================
     BLOQUE DE DATOS. La galería se alimenta SOLO de aquí.
     Para colgar una pieza nueva, copia el ejemplo comentado de
     MUSEO_PIEZAS y cámbiale los datos. No hace falta tocar nada
     más abajo: la pared, los filtros y el modo visita se arman
     solos con assets/js/museo.js.
     ============================================================ -->
<script>
/* OJO: en estos scripts los comentarios van SIEMPRE como este, entre
   barra-asterisco. El compresor de Jekyll junta todo el script en una
   sola linea, y un comentario de doble barra se comeria el resto. */

window.MUSEO_SALAS = [
  /* Una sala por unidad. Cuando arranque una unidad, cambia su "abierta"
     a true y escribe su placa: el letrero de "proxima inauguracion"
     se convierte solo en pared. La sala 2 abrio en la semana 9. */
  {sala:1, unidad:"U1", titulo:"Palabras diseccionadas", abierta:true,
   placa:"Cada pieza fue encontrada, investigada y verificada por alguien del grupo. La colección crece con el semestre."},
  {sala:2, unidad:"U2", titulo:"Palabras heredadas", abierta:true,
   placa:"Palabras que viajaron: del latín gastado en mil años, del árabe, del náhuatl, de la cocina de una abuela. Cada una con su fuente y con la voz de quien la regaló. Inaugurada en la semana 9."},
  {sala:3, unidad:"U3", titulo:"Palabras del futuro", abierta:false}
];

window.MUSEO_PIEZAS = [
  /* Campos de una pieza:
     inv         numero de inventario: 2026.sala.numero (las de muestra llevan M)
     sala        1, 2 o 3
     palabra     tal como se cuelga en la pared
     lengua      lengua de origen, en minuscula: alimenta los filtros.
                 Si la palabra la invento alguien del grupo, pon "inventada":
                 cae en el filtro "inventadas" y su marco se pinta de jade
     procedencia la linea del marco: "del griego · epi + hemera"
     lema        frase corta del marco, sin comillas (se ponen solas)
     cita        la frase en uso que abre la cedula, sin comillas
     citaPie     de quien es la cita
     viaje       estaciones [forma, lengua, que significaba ahi]
     adquisicion como llego la palabra a su donante
     curaduria   tu nota de curaduria (opcional)
     fuente      donde se verifico
     nombre      nombre de pila del donante
     destacada   true = marco dorado, una por semana
     nueva       true = etiqueta "nueva adquisicion", quitasela a la siguiente
     muestra     true = pieza escrita por el profesor, no cuenta en el contador

  {inv:"2026.1.002", sala:1, palabra:"", lengua:"", procedencia:"",
   lema:"", cita:"", citaPie:"", viaje:[["","",""]], adquisicion:"",
   curaduria:"", fuente:"", nombre:"", destacada:false, nueva:true},
  */

  {inv:"2026.1.001", sala:1, palabra:"Efímero", lengua:"griego",
   procedencia:"del griego · epí + heméra",
   lema:"La encontré en un poema",
   cita:"Porque es una palabra muy linda, la cual representa un significado que se puede utilizar demasiado.",
   citaPie:"Monserrat, sobre por qué la eligió",
   viaje:[
     ["epí + heméra","griego","sobre + día"],
     ["ephḗmeros","griego","lo que dura un día"],
     ["efímero","español","lo fugaz"]
   ],
   adquisicion:"La encontró en un poema.",
   curaduria:"Una sola corrección, y vale la pena porque es la trampa clásica de esta palabra: en el DECEL, epí es \"sobre\", no \"alrededor\". Ephémeros es lo que dura sobre un día, o sea: lo que dura un día. \"Alrededor\" es otra pieza distinta, peri-, la de perímetro y periferia.",
   fuente:"Verificada en DECEL",
   nombre:"Monserrat", destacada:true},

  {inv:"2026.1.002", sala:1, palabra:"Tópico", lengua:"griego",
   procedencia:"del griego · tópos",
   lema:"La investigué para acabar con la intriga",
   cita:"La había escuchado tantas veces que me dio curiosidad, y la investigué para acabar con la intriga.",
   citaPie:"Johan, sobre cómo llegó la pieza",
   viaje:[
     ["tópos","griego","lugar"],
     ["topikós","griego","relativo al lugar"],
     ["topicus","latín","de los lugares comunes"],
     ["tópico","español","lugar común, tema"]
   ],
   adquisicion:"La había escuchado ya varias veces; pudo más la curiosidad que la intriga.",
   curaduria:"Johan trajo la palabra y la fuente; el viaje se colgó en curaduría, porque Google da el significado pero no el camino. Y el camino es bonito: tópos es \"lugar\" en griego. Los tópicos eran los \"lugares\" de la retórica, los rincones donde un orador iba a buscar argumentos. Por eso un tópico es, hasta hoy, un lugar común. Y por eso la pomada \"de uso tópico\" se aplica en el lugar.",
   fuente:"Verificada en el DLE",
   nombre:"Johan", nueva:false},

  {inv:"2026.1.003", sala:1, palabra:"Injusto", lengua:"latín",
   procedencia:"del latín · iniustus",
   lema:"Así se llama una canción que me gusta mucho",
   cita:"La letra habla de lo injusto o complicada que puede llegar a ser la vida.",
   citaPie:"Yaretzi, sobre la canción que le regaló la palabra",
   viaje:[
     ["ius","latín","el derecho"],
     ["iustus","latín","justo, conforme al derecho"],
     ["iniustus","latín","no equitativo"],
     ["injusto","español","lo que no es justo"]
   ],
   adquisicion:"Conoce \"injusto\" desde pequeña, por una película; su traducción al inglés, unfair, le llegó en el título de una canción que quiere mucho.",
   curaduria:"El viaje vino completo y verificado: solo se le añadió la raíz, ius, \"el derecho\", de donde también salen justicia, juez y jurado. Y un regalo de la pieza doble: fair viene del inglés antiguo fæger, \"hermoso\". En inglés, lo injusto es literalmente lo feo.",
   fuente:"Verificada en DLE y DECEL",
   nombre:"Yaretzi"},

  {inv:"2026.1.004", sala:1, palabra:"Voraz", lengua:"latín",
   procedencia:"del latín · vorax, vorācis",
   lema:"En una lectura del profe Lalo",
   cita:"Voraz conserva la idea de algo que consume con mucha intensidad.",
   citaPie:"Iris, sobre lo que la palabra guarda",
   viaje:[
     ["vorāre","latín","devorar, tragar"],
     ["vorax, vorācis","latín","que devora"],
     ["voraz","español","lo que consume con intensidad"]
   ],
   adquisicion:"En una lectura que hizo el profe Lalo en clase.",
   curaduria:"El viaje vino armado y bien. En curaduría solo se cuelga la familia: devorar es su hermana directa, y todos los -voros —carnívoro, herbívoro, omnívoro— comen del mismo verbo.",
   fuente:"Verificada en el DLE",
   nombre:"Iris"},

  {inv:"2026.1.005", sala:1, palabra:"Surrealista", lengua:"francés",
   procedencia:"del francés · surréalisme",
   lema:"Me gusta cómo se dice y lo que quiere decir",
   cita:"Me gusta el cómo se dice y lo que quiere decir.",
   citaPie:"Iker, sobre su pieza",
   viaje:[
     ["super","latín","sobre, por encima"],
     ["surréalisme","francés","por encima de la realidad"],
     ["surrealista","español","lo que desborda lo real"]
   ],
   adquisicion:"En un video de YouTube.",
   curaduria:"La pieza llegó con una sola escala —\"de Francia\"— y en curaduría se le tendió el puente: la palabra la inventaron los poetas. Apollinaire la estrenó en 1917 y Breton la volvió movimiento en 1924. El sur- inicial es el latín super: lo surrealista es lo que está por encima de lo real.",
   fuente:"Verificada en el DLE",
   nombre:"Iker"},

  {inv:"2026.1.006", sala:1, palabra:"Cosmogonía", lengua:"griego",
   procedencia:"del griego · kósmos + gonía",
   lema:"Nos llamó la atención en un libro",
   cita:"¿Cómo surgió el universo y todo lo que existe?",
   citaPie:"Andre, sobre la pregunta que guarda la palabra",
   viaje:[
     ["kósmos","griego","orden, mundo"],
     ["gónos","griego","nacimiento, origen"],
     ["kosmogonía","griego","el origen del mundo"],
     ["cosmogonía","español","relato de cómo nació el universo"]
   ],
   adquisicion:"La encontró en un libro; les llamó la atención en su momento.",
   curaduria:"El viaje llegó bien armado, pero la fuente decía \"en internet\", así que en curaduría se buscó en el DLE: confirma kosmogonía, tal cual. El regalo está en kósmos, que antes de ser \"mundo\" fue \"orden\": los griegos pensaron que el universo era un orden, y de ahí también cosmético, lo que pone en orden la cara. Su hermana es teogonía, el nacimiento de los dioses, título del poema de Hesíodo.",
   fuente:"Verificada en el DLE",
   nombre:"Andre"},

  {inv:"2026.1.007", sala:1, palabra:"Antropófago", lengua:"griego",
   procedencia:"del griego · ánthropos + phageín",
   lema:"El profe la dijo en clase",
   cita:"Su significado literal es el que come carne humana.",
   citaPie:"Ángel, sobre lo que la palabra dice al pie de la letra",
   viaje:[
     ["ánthropos","griego","ser humano"],
     ["phageín","griego","comer"],
     ["anthropophágos","griego","el que come humanos"],
     ["anthropophagus","latín","palabra culta"],
     ["antropófago","español","caníbal"]
   ],
   adquisicion:"La dijo el profesor en clase y se la quedó.",
   curaduria:"Dos ajustes de ortografía griega: es ánthropos, con la t antes de la r, y phageín es el infinitivo \"comer\". Lo demás vino verificado en el DECEL. La familia de -fago es enorme y un poco macabra: sarcófago es la caja que \"come carne\", esófago el que \"lleva lo que se come\", y los bacteriófagos, virus que se comen bacterias.",
   fuente:"Verificada en DECEL",
   nombre:"Ángel"},

  {inv:"2026.1.008", sala:1, palabra:"Misántropo", lengua:"griego",
   procedencia:"del griego · mísos + ánthropos",
   lema:"Llegó en la clase de Etimología",
   cita:"Personas poco sociables, que odian a los demás humanos.",
   citaPie:"Iker, sobre a quién nombra la palabra",
   viaje:[
     ["mísos","griego","odio"],
     ["ánthropos","griego","ser humano"],
     ["misánthropos","griego","el que odia a la gente"],
     ["misántropo","español","quien huye del trato humano"]
   ],
   adquisicion:"En la clase de Etimología.",
   curaduria:"Segunda pieza de Iker en la sala, y esta llegó con el viaje y la fuente completos. Su espejo exacto es filántropo, el que ama a la gente, y su prima misoginia, que comparte el mísos. Molière escribió una comedia entera con este título en 1666: El misántropo, sobre un hombre que odia la hipocresía de todos y termina solo.",
   fuente:"Verificada en DECEL",
   nombre:"Iker"},

  {inv:"2026.1.009", sala:1, palabra:"Amistaluz", lengua:"inventada",
   procedencia:"inventada · ami + luz",
   lema:"La inventé en la actividad de crear palabras",
   cita:"La conexión con las personas que consideras amigas y que te traen luz e iluminan tu vida.",
   citaPie:"Iris, definiendo su propia palabra",
   viaje:[
     ["amāre","latín","amar"],
     ["amīcus","latín","amigo"],
     ["lux, lūcis","latín","luz, claridad"],
     ["amistaluz","español · 2026","los amigos que iluminan"]
   ],
   adquisicion:"La inventó en la actividad de crear palabras, pensando en sus amigas.",
   curaduria:"Iris hizo lo que hace un buen lexicógrafo: buscó la palabra antes de darla por nueva y confirmó que no existe. Por eso cuelga en un marco distinto, el jade de las inventadas. Las piezas, en cambio, son antiguas y las dos latinas: amīcus viene de amāre, y lux, lūcis es la misma luz de lúcido y de Lucía. El español lleva siglos armando compuestos así, como aguanieve o pelirrojo; esta es solo la más joven.",
   fuente:"Buscada y no encontrada: todavía no existe en ningún diccionario",
   nombre:"Iris"},

  {inv:"2026.1.010", sala:1, palabra:"Vehemencia", lengua:"latín",
   procedencia:"del latín · vehementia",
   lema:"En clase, por la textura del profesor",
   cita:"Vehemencia es la cualidad de actuar, hablar o sentir con una pasión, fuerza o ímpetu muy intensos.",
   citaPie:"Auro, definiendo la pieza",
   viaje:[
     ["vehemens, vehementis","latín","impetuoso, violento"],
     ["vehementia","latín","ímpetu, fuerza"],
     ["vehemencia","español","pasión o fuerza intensas"]
   ],
   adquisicion:"Llegó en clase, por la textura con que el profesor dijo la palabra.",
   curaduria:"Auro trajo la definición y la fuente; el viaje se colgó en curaduría. Y es un viaje con misterio: los latinos ya no sabían de dónde venía vehemens. El DECEL la lee como ve- (fuera de) + mens (mente): el vehemente actúa con la mente fuera de sitio. Otros la ligan a vehere, llevar, como vehículo: el que se deja llevar. Las dos explicaciones son bonitas; ninguna está probada. Así cuelga.",
   fuente:"Verificada en el DLE y el DECEL",
   nombre:"Auro"},

  {inv:"2026.1.011", sala:1, palabra:"Obnubilar", lengua:"latín",
   procedencia:"del latín · ob + nubilare",
   lema:"Creí que interesaría a mis alumnos",
   cita:"Hoy justo hablamos de la sobreestimulación en la que vivimos.",
   citaPie:"Eduardo, sobre por qué la trajo a la sala",
   viaje:[
     ["nubes","latín","nube"],
     ["nubilare","latín","nublar"],
     ["obnubilare","latín","cubrir con una nube; luego, ofuscar"],
     ["obnubilar","español","nublar el entendimiento"]
   ],
   adquisicion:"La encontró en Y ahora qué hago. Cómo evitar la culpa climática y pasar a la acción, el día que en clase se habló de la sobreestimulación.",
   curaduria:"La ficha decía \"viene del latín nublado\" y es cierto, pero cabe más: ob- (encima, enfrente) + nubilare (nublar), de nubes. Obnubilarse es, literalmente, que se le eche una nube encima a uno. En el siglo II significaba cubrir de nubes; en el IV, ya en los padres de la Iglesia, confundir. La mente nublada es una metáfora de mil setecientos años.",
   fuente:"Verificada en DECEL",
   nombre:"Eduardo, el profe"},

  {inv:"2026.1.012", sala:1, palabra:"Pescuello", lengua:"inventada",
   procedencia:"inventada · pescuezo + cuello",
   lema:"Me confundí entre pescuezo y cuello",
   cita:"Me pareció adecuada para criaturas mitológicas donde esté un humano combinado con un animal.",
   citaPie:"Camila, sobre para qué sirve su palabra",
   viaje:[
     ["post + cuezo","latín","detrás + cogote"],
     ["pescuezo","español","el cuello de un animal"],
     ["collum","latín","cuello"],
     ["pescuello","español · 2026","el cuello de un ser mitad humano, mitad animal"]
   ],
   adquisicion:"Un día se confundió entre pescuezo y cuello, y en vez de corregirse le dio un significado propio a la mezcla.",
   curaduria:"Un lapsus convertido en pieza. Camila notó que el español ya tiene dos palabras para la misma parte del cuerpo según quién la lleve: cuello para la gente, pescuezo para el animal. Su palabra junta las dos y nombra justo lo que está entre ambas: el centauro, la sirena, el minotauro. Las piezas son antiguas: cuello viene de collum, y pescuezo de post (detrás) + cuezo, un viejo nombre del cogote. Cuelga en jade, como las inventadas.",
   fuente:"Buscada en el DLE: no existe; sus dos mitades, sí",
   nombre:"Camila"},

  {inv:"2026.1.013", sala:1, palabra:"Velociraptor", lengua:"latín",
   procedencia:"del latín · velox + raptor",
   lema:"Me gustan los dinosaurios",
   cita:"Desde siempre la he escuchado: es uno de los dinosaurios más conocidos.",
   citaPie:"Camila, sobre cómo llegó la pieza",
   viaje:[
     ["velox, velōcis","latín","rápido"],
     ["rapere","latín","arrebatar, llevarse por la fuerza"],
     ["raptor","latín","el que arrebata, ladrón"],
     ["Velociraptor","latín científico · 1924","ladrón veloz"]
   ],
   adquisicion:"La conoce desde siempre, por los dinosaurios.",
   curaduria:"El viaje vino completo: velox + rapere + -tor, y así está en el DECEL. Lo que se le cuelga al lado es la fecha: la palabra no es antigua. La inventó en 1924 el paleontólogo Henry Osborn con piezas latinas, como se siguen inventando los nombres de los seres vivos. Es latín de laboratorio, y por eso cuelga en el marco de las latinas con una etiqueta de fábrica: \"ladrón veloz\". Raptor es la misma pieza de rapto y de rapaz.",
   fuente:"Verificada en DECEL",
   nombre:"Camila"},

  {inv:"2026.1.014", sala:1, palabra:"Lánguida", lengua:"latín",
   procedencia:"del latín · languidus",
   lema:"La encontré leyendo Boulevard",
   cita:"No es una palabra que use normalmente y me pareció interesante conocer su significado.",
   citaPie:"Yamila, sobre por qué la eligió",
   viaje:[
     ["languēre","latín","estar débil, desfallecer"],
     ["languidus","latín","debilitado, sin fuerza"],
     ["lánguida","español","débil, sin energía, desganada"]
   ],
   adquisicion:"La encontró mientras leía Boulevard: Después de él; no conocía bien su significado.",
   curaduria:"Yamila dijo \"aún no\" en la fuente y eso también es una respuesta: la ficha entró a medias y en curaduría se verificó. Languidus viene del verbo languere, estar débil, y el DECEL lo lleva a una raíz que significa \"flojo\": la misma de relajar y, sorpresa, de lejos. Lo lánguido es lo que se afloja.",
   fuente:"Verificada en curaduría, en DLE y DECEL",
   nombre:"Yamila"},

  {inv:"2026.1.015", sala:1, palabra:"Templario", lengua:"latín",
   procedencia:"del latín · templum",
   lema:"Por una película",
   cita:"Se me hace una palabra muy interesante.",
   citaPie:"Yael, sobre la pieza",
   viaje:[
     ["templum","latín","el espacio sagrado que el augur recortaba en el cielo"],
     ["templum","latín","el edificio del templo"],
     ["Temple","francés · siglo XII","la orden fundada junto al templo de Salomón"],
     ["templario","español","caballero de esa orden"]
   ],
   adquisicion:"Llegó por una película.",
   curaduria:"La ficha traía la definición del DECEL, no el viaje; el viaje se colgó aquí. Los templarios se llaman así porque su primera casa, en Jerusalén, estaba sobre las ruinas del templo de Salomón. Y templum es más viejo que cualquier templo: era el cuadro que el augur romano recortaba en el cielo para leer el vuelo de los pájaros. Contemplar es, todavía, mirar ese cuadro.",
   fuente:"Verificada en DECEL",
   nombre:"Yael"},

  {inv:"2026.1.016", sala:1, palabra:"Alameda", lengua:"latín",
   procedencia:"del latín · -eta, sobre álamo",
   lema:"Me la imaginé como un lugar lleno de naturaleza",
   cita:"Me pareció una palabra muy llamativa: me imaginé un lugar muy lleno de naturaleza.",
   citaPie:"Yuritza, sobre la pieza",
   viaje:[
     ["álamo","español antiguo","el árbol; origen discutido"],
     ["-eta","latín","lugar donde abunda algo"],
     ["alameda","español","sitio poblado de álamos; luego, paseo con árboles"]
   ],
   adquisicion:"La encontró leyendo Boulevard, entre el texto.",
   curaduria:"Una corrección y un hallazgo. La corrección: no existe un latín \"alamus\"; álamo es una palabra de origen discutido (gótico, celta o el latín ulmus, el del olmo), y lo único seguro es que no es árabe aunque empiece con al-. El hallazgo es el sufijo, que Yuritza leyó bien: -eda viene del latín -eta y significa \"lugar lleno de\". Es la misma pieza de arboleda, rosaleda y polvareda. Una alameda es, antes que un paseo, un bosque de álamos.",
   fuente:"Verificada en DECEL",
   nombre:"Yuritza"},

  {inv:"2026.1.017", sala:1, palabra:"Nefelibata", lengua:"griego",
   procedencia:"del griego · nephélē + bátēs",
   lema:"La encontré en El mapa de los anhelos",
   cita:"Cuando leí su significado me pareció muy interesante.",
   citaPie:"Auro, sobre la pieza",
   viaje:[
     ["nephélē","griego","nube"],
     ["bátēs","griego","el que anda"],
     ["nefelibata","español · 1907","el que anda por las nubes"]
   ],
   adquisicion:"La encontró en el libro El mapa de los anhelos.",
   curaduria:"Auro trajo la definición del DLE: soñador, que no se apercibe de la realidad. El viaje se colgó en curaduría y trae sorpresa: las piezas son griegas, pero la palabra no. La armó Rubén Darío en 1907, en El canto errante (\"que ando, nefelibata, por las nubes\"), y el diccionario tardó hasta 1984 en admitirla. Es una palabra inventada que se salió con la suya: el camino que Amistaluz y Pescuello apenas empiezan.",
   fuente:"Verificada en el DLE y el DECEL",
   nombre:"Auro", nueva:true},

  {inv:"2026.1.018", sala:1, palabra:"Álgido", lengua:"latín",
   procedencia:"del latín · algidus",
   lema:"Me dio curiosidad en una cita del libro",
   cita:"Álgido proviene del latín algidus, muy frío o helado, del verbo algere, sentir frío.",
   citaPie:"Alexander, con el viaje ya armado",
   viaje:[
     ["algēre","latín","tener frío"],
     ["algidus","latín","muy frío, helado"],
     ["álgido","español médico","la fase de frío glacial de una enfermedad"],
     ["álgido","español","el momento crítico o culminante"]
   ],
   adquisicion:"Le dio curiosidad en una cita de un libro.",
   curaduria:"El viaje vino armado y verificado. Lo que se cuelga al lado es la pregunta que abre: si álgido significa helado, ¿por qué decimos que una discusión llegó a su punto álgido, que es cuando más arde? La respuesta está en la medicina: el \"periodo álgido\" era la fase de frío extremo de una fiebre, la más grave. De \"la fase más fría\" se pasó a \"la fase más grave\", y de ahí a \"la culminante\". La palabra cruzó al significado contrario sin cambiar una letra.",
   fuente:"Verificada en el DLE y el DECEL",
   nombre:"Alexander", nueva:true},

  {inv:"2026.1.M1", sala:1, palabra:"Trabajo", lengua:"latín",
   procedencia:"del latín tardío · tripalium",
   lema:"La palabra que confiesa que duele",
   cita:"Me cuesta trabajo: la frase más honesta del español.",
   citaPie:"El profesor, sobre su pieza",
   viaje:[
     ["tripalium","latín tardío","tres palos: tortura"],
     ["tripaliāre","latín vulgar","torturar"],
     ["trabajo","cast. medieval","pena, fatiga"],
     ["trabajo","español","esfuerzo, empleo"]
   ],
   adquisicion:"Se la regaló su abuelo sin saberlo: cada vez que le preguntaban cómo le fue en la parcela contestaba \"puro trabajo\", usando la palabra con su primer significado.",
   curaduria:"La tortura se volvió quincena: \"pasar trabajos\" y \"costar trabajo\" conservan el sabor medieval de pena y fatiga.",
   fuente:"Fuente: DLE, entrada trabajar",
   nombre:"el profesor", muestra:true},

  {inv:"2026.1.M2", sala:1, palabra:"Entusiasmo", lengua:"griego",
   procedencia:"del griego · éntheos",
   lema:"La palabra que trae un dios adentro",
   cita:"Sin entusiasmo ni te amarres los tenis.",
   citaPie:"Testimonio de su entrenadora de voleibol",
   viaje:[
     ["éntheos","griego","un dios adentro"],
     ["enthousiasmós","griego","posesión divina"],
     ["enthusiasmus","latín tardío","palabra culta"],
     ["entusiasmo","español","exaltación del ánimo"]
   ],
   adquisicion:"Se la escuchó tres años a su entrenadora antes de saber que la palabra hablaba de dioses.",
   curaduria:"Del oráculo de Delfos al grito de la porra, sin cambiar de esqueleto: algo te habita y habla por ti.",
   fuente:"Fuente: DLE, entrada entusiasmo",
   nombre:"el profesor", muestra:true}
];
</script>

<div id="museo-galeria">
  <noscript>La galería se arma con JavaScript. Las piezas del grupo también viven en la Plantilla · Biografía de una palabra.</noscript>
</div>

<!-- COSECHA:pieza-museo -->
<!-- /COSECHA:pieza-museo -->
<!-- Las piezas nuevas YA NO se pegan entre las marcas de arriba: se
     agregan como objeto al bloque MUSEO_PIEZAS del inicio de esta
     página. Las marcas se conservan solo por compatibilidad con el
     generador de la hoja de cálculo. -->

{: .ojo }
La pieza de Monserrat es la primera del semestre y por eso trae marco dorado: sirve de medida. Fíjate en el tamaño —cabe en una ficha, no es un ensayo—, en que cita dónde la verificó, y en que se oye a quien la escribió. Las dos piezas de muestra las escribió el profesor y le van a ceder su lugar a las del grupo conforme la sala se llene. La pared tiene espacio reservado para la tuya.

## Sube tu pieza

Tu biografía entra a curaduría: se verifica en las fuentes antes de aparecer en el salón. Solo se publica tu nombre de pila. Si tu pieza está a medias, mándala igual: "aún no" también es una respuesta.

<div class="cosecha"
     data-tipo="pieza-museo"
     data-titulo="Sube tu pieza al Museo de Palabras"
     data-nota="Escribe con calma: esto es una biografía, no un examen. La plantilla completa vive en Plantilla · Biografía de una palabra."
     data-campos='[
       {"n":"palabra","t":"La palabra","req":true},
       {"n":"llegada","t":"¿Cómo llegó a ti? La cita del libro, o el testimonio y quién te la regaló","tipo":"larga","req":true},
       {"n":"viaje","t":"El viaje que investigaste — una escala por renglón: forma — lengua — qué significaba ahí","tipo":"larga","req":true},
       {"n":"porque","t":"¿Por qué la elegiste?","tipo":"larga","req":true},
       {"n":"fuente","t":"¿Dónde la verificaste? (DLE, DECEL, Corominas… o escribe: aún no)","req":true},
       {"n":"bitacora","t":"Bitácora de IA — si usaste IA: qué le pediste y qué decidiste tú (opcional)","tipo":"larga"}
     ]'></div>

<style>
/* ---------- barra de filtros ---------- */
#museo-galeria .mu-barra{margin:1.2rem 0 .9rem}
#museo-galeria .mu-chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:.6rem}
#museo-galeria .mu-chip{border:1px solid #d9b8cd;background:#fff;color:#6b1e5a;border-radius:99px;padding:.25rem .75rem;font-size:.8rem;font-weight:600;cursor:pointer}
#museo-galeria .mu-chip:hover{border-color:#c8127a}
#museo-galeria .mu-chip.activa{background:#c8127a;border-color:#c8127a;color:#fff}
#museo-galeria .mu-chip-inv{border-color:#1b7f79;color:#1b7f79}
#museo-galeria .mu-chip-inv:hover{border-color:#0f5f5a}
#museo-galeria .mu-chip-inv.activa{background:#1b7f79;border-color:#1b7f79;color:#fff}
#museo-galeria .mu-chip-sep{width:1px;background:#d9b8cd;margin:0 4px}
#museo-galeria .mu-controles{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
#museo-galeria .mu-busca{flex:1;min-width:170px;border:1px solid #d9b8cd;border-radius:.5rem;padding:.4rem .7rem;font-size:.85rem}
#museo-galeria .mu-orden{border:1px solid #d9b8cd;border-radius:.5rem;padding:.4rem .5rem;font-size:.82rem;color:#6b1e5a;background:#fff}
#museo-galeria .mu-visita{border:none;background:#6b1e5a;color:#fff;border-radius:.5rem;padding:.45rem .9rem;font-size:.85rem;font-weight:700;cursor:pointer}
#museo-galeria .mu-visita:hover{background:#c8127a}

/* ---------- la sala y la pared ---------- */
.mu-sala{background:#3d1033;border-radius:.9rem;padding:1.3rem 1.3rem 1.5rem;margin:0 0 1rem}
.mu-placa{display:block;background:#fdf6f0;border-radius:2px;padding:.7rem 1rem;max-width:430px;margin:0 auto 1.2rem;text-align:center}
.mu-p-rot{display:block;font-size:.66rem;letter-spacing:.2em;text-transform:uppercase;color:#993556;font-weight:700}
.mu-p-t{display:block;font-family:Georgia,'Times New Roman',serif;font-size:1.15rem;color:#2e0b27;margin-top:2px}
.mu-p-p{display:block;font-size:.78rem;color:#5f5e5a;margin-top:4px;line-height:1.5}
.mu-muro{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));grid-auto-flow:dense;gap:14px}
.mu-marco{display:flex;flex-direction:column;justify-content:center;text-align:center;cursor:pointer;background:#fdf6f0;border:6px solid #2e0b27;outline:1px solid #8a5a7d;border-radius:0;padding:.9rem .8rem;position:relative;transition:opacity .35s,transform .25s}
.mu-muro:hover .mu-marco{opacity:.5}
.mu-muro .mu-marco:hover,.mu-muro .mu-marco:focus-visible{opacity:1;transform:scale(1.02)}
.mu-marco.mu-abierta{outline:2px solid #f4a8ce}
.mu-destacada{grid-column:span 2;grid-row:span 2;border:9px solid #96762f;outline:1px solid #d4b96a;padding:1.3rem 1rem}
.mu-rot-dest{display:block;font-size:.66rem;letter-spacing:.15em;text-transform:uppercase;color:#96762f;font-weight:700}
.mu-m-palabra{display:block;font-family:Georgia,'Times New Roman',serif;font-size:1.35rem;color:#2e0b27;line-height:1.15}
.mu-destacada .mu-m-palabra{font-size:2rem;margin-top:6px}
.mu-m-proc{display:block;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:#993556;margin-top:4px;font-weight:700}
/* las inventadas: marco jade, para distinguirlas de las que ya existían */
.mu-inventada{border-color:#1b7f79;outline-color:#7fc4bf;background:#f0f9f7}
.mu-inventada .mu-m-proc{color:#1b7f79}
.mu-rot-inv{display:block;font-size:.66rem;letter-spacing:.15em;text-transform:uppercase;color:#1b7f79;font-weight:700}
.mu-tag.mu-tag-inv{background:#1b7f79;color:#e6f6f4}
.mu-m-lema{display:block;font-size:.78rem;font-style:italic;color:#5f5e5a;margin-top:7px}
.mu-m-firma{display:block;font-size:.68rem;color:#8a6c80;margin-top:8px}
.mu-tag{position:absolute;top:-10px;right:8px;background:#c8127a;color:#fde7f3;font-size:.66rem;padding:2px 8px;border-radius:9px;letter-spacing:.05em}
.mu-hueco{display:flex;flex-direction:column;justify-content:center;text-align:center;border:2px dashed #8a5a7d;border-radius:2px;padding:.9rem .8rem}
.mu-h-t{font-family:Georgia,serif;font-style:italic;font-size:.95rem;color:#d9a8c9}
.mu-h-p{font-size:.68rem;color:#b98aa9;margin-top:4px}
.mu-cerrada{display:flex;flex-direction:column;justify-content:center;text-align:center;background:#31082a;border-radius:2px;padding:.9rem .8rem}
.mu-c-rot{font-size:.64rem;letter-spacing:.18em;text-transform:uppercase;color:#8a5a7d;font-weight:700}
.mu-c-t{font-family:Georgia,serif;font-style:italic;font-size:.92rem;color:#b98aa9;margin-top:3px}
.mu-c-p{font-size:.68rem;color:#8a5a7d;margin-top:4px}
.mu-vacio{grid-column:1/-1;text-align:center;color:#d9a8c9;font-style:italic;padding:1.5rem .5rem}

/* ---------- la cédula ---------- */
.mu-cedula{border:1px solid #eadce6;border-radius:.9rem;background:#fff;padding:1.2rem 1.4rem;margin:0 0 1rem}
.mu-ced-cab{display:flex;justify-content:space-between;align-items:baseline;gap:8px;flex-wrap:wrap}
.mu-ced-rot{font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:#c8127a;font-weight:700}
.mu-ced-firma{font-size:.78rem;color:#8a6c80}
.mu-ced-palabra{font-family:Georgia,'Times New Roman',serif;font-size:1.7rem;color:#2e0b27;margin-top:2px}
.mu-ced-cita{font-family:Georgia,'Times New Roman',serif;font-size:1.25rem;font-style:italic;color:#333;text-align:center;line-height:1.5;max-width:540px;margin:.9rem auto .2rem}
.mu-ced-citapie{font-size:.78rem;color:#8a6c80;text-align:center;margin:0 0 .9rem}
.mu-v-rot{font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:#8a6c80;font-weight:700;margin-top:.8rem}
.mu-viaje{display:flex;align-items:stretch;flex-wrap:wrap;gap:6px;margin:.5rem 0 .3rem}
.mu-parada{flex:1;min-width:118px;background:#fbf4f9;border-radius:.5rem;padding:.5rem .6rem;text-align:center}
.mu-parada b{display:block;font-family:Georgia,serif;font-weight:400;font-size:.98rem;color:#2e0b27}
.mu-parada i{display:block;font-style:normal;font-size:.64rem;letter-spacing:.1em;text-transform:uppercase;color:#c8127a;font-weight:700;margin-top:2px}
.mu-parada em{display:block;font-style:normal;font-size:.76rem;color:#5f5e5a;margin-top:2px}
.mu-flecha{align-self:center;color:#b98aa9;font-size:1rem}
.mu-est{opacity:0;transform:translateY(8px);transition:opacity .5s,transform .5s}
.mu-est.on{opacity:1;transform:none}
.mu-ced-adq{font-size:.9rem;color:#333;line-height:1.55;margin:.3rem 0 0}
.mu-cur{border-left:3px solid #c8127a;background:#fbf4f9;border-radius:.4rem;padding:.55rem .8rem;margin-top:.9rem}
.mu-cur-rot{font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:#c8127a;font-weight:700}
.mu-cur p{font-size:.85rem;color:#555;line-height:1.6;margin:.2rem 0 0}
.mu-ced-pie{font-size:.78rem;color:#8a6c80;text-align:right;margin:.7rem 0 0}

/* ---------- el modo visita ---------- */
.mu-telon{position:fixed;inset:0;z-index:9999;background:#2a0823;display:flex;flex-direction:column;padding:1rem}
.mu-telon[hidden]{display:none}
.mu-t-x{align-self:flex-end;border:1px solid #8a5a7d;background:transparent;color:#d9a8c9;border-radius:.5rem;padding:.35rem .8rem;font-size:.85rem;cursor:pointer}
.mu-t-x:hover{color:#fff;border-color:#f4a8ce}
.mu-t-cuerpo{flex:1;overflow:auto;background:#fdf6f0;border-radius:.9rem;max-width:820px;width:100%;margin:.8rem auto;padding:1.6rem 2rem}
.mu-t-cuerpo .mu-ced-palabra{font-size:clamp(2.2rem,6vw,3.4rem)}
.mu-t-cuerpo .mu-ced-cita{font-size:clamp(1.25rem,3vw,1.7rem);max-width:640px}
.mu-t-cuerpo .mu-ced-adq{font-size:1rem}
.mu-t-cuerpo .mu-cur p{font-size:.95rem}
.mu-t-pie{display:flex;justify-content:center;align-items:center;gap:1rem}
.mu-t-pie button{border:1px solid #8a5a7d;background:transparent;color:#f4eff9;border-radius:.5rem;padding:.45rem 1rem;font-size:.95rem;cursor:pointer}
.mu-t-pie button:hover{border-color:#f4a8ce;color:#fff}
.mu-t-n{color:#d9a8c9;font-size:.85rem;min-width:7.5rem;text-align:center}
.mu-t-ayuda{text-align:center;color:#8a5a7d;font-size:.72rem;margin:.4rem 0 0}

@media (max-width:520px){
  .mu-destacada{grid-column:1/-1;grid-row:auto}
  .mu-t-cuerpo{padding:1.1rem 1rem}
}
@media (prefers-reduced-motion:reduce){
  .mu-est,.mu-marco{transition:none}
  .mu-est{opacity:1;transform:none}
}
</style>

<script defer src="{{ '/assets/js/museo.js' | relative_url }}"></script>
