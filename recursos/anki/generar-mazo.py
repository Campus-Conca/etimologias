#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador de los mazos de Anki del curso de Etimologías (UAQ · Campus Concá).

Cómo se usa
-----------
    python3 recursos/anki/generar-mazo.py

No necesita instalar nada: usa solo la biblioteca estándar de Python 3
(sqlite3 + zipfile), que es exactamente lo que hay dentro de un .apkg.
Antes esto dependía de genanki; ya no, para que el mazo se pueda regenerar
en cualquier máquina, incluida la del salón.

Qué deja
--------
    recursos/anki/etimologias-uaq.apkg        el semestre completo, en submazos
    recursos/anki/etimologias-semana-00.apkg  un mazo por semana, para bajar suelto
    recursos/anki/etimologias-semana-02.apkg
    ...

Cómo se agrega una semana
-------------------------
Añade un bloque nuevo a la lista SEMANAS con su número, su título y sus
piezas, y vuelve a correr el script. NO cambies los IDs de arriba ni el
texto del campo "pieza" de una tarjeta ya publicada: el identificador de
cada nota (su guid) se calcula a partir de ese campo, así que si lo cambias
Anki creerá que es una tarjeta nueva y el estudiante perderá su avance en
ella. Todo lo demás (significado, ancla, familia, nota) sí se puede corregir
libremente: al reimportar, Anki actualiza el contenido y respeta el avance.

Regla de contenido: **una pieza, una tarjeta en todo el semestre.** Si una
pieza ya salió en una semana anterior, no se repite; se menciona en la
página de la semana como "esa ya la tienes". Por eso la semana 4 no trae
bio- ni a-/an- (semanas 0 y 2), y la semana 6 no trae -cracia ni -fobia
(semana 4).

Campos de cada pieza:
    pieza, significado, idioma, ancla, familia, nota
"""

import hashlib
import json
import os
import sqlite3
import tempfile
import zipfile

# --- IDs fijos. No cambiarlos nunca. ---
MODEL_ID = 1607392319
DECK_BASE_ID = 2059400110
DECK_RAIZ = "Etimologías UAQ"
ID_BASE = 1785803494042          # semilla de ids: fija, para que regenerar no mueva nada
MOD = 1785803494

CSS = """
.card { font-family: -apple-system, system-ui, sans-serif; font-size: 20px;
        text-align: center; color: #2a2a2a; background: #fff; line-height: 1.5; }
.pieza { font-family: ui-monospace, monospace; font-size: 40px; font-weight: 700; color: #c8127a; }
.sig { font-size: 26px; font-weight: 600; color: #6b1e5a; margin-top: 6px; }
.idioma { font-size: 15px; color: #888; text-transform: uppercase; letter-spacing: .06em; }
.pregunta { font-size: 16px; color: #999; margin-top: 10px; }
.ancla { margin-top: 12px; font-size: 18px; }
.fam { margin-top: 6px; font-size: 15px; color: #666; }
.nota { margin-top: 12px; font-size: 15px; color: #5b4b8a; font-style: italic; }
hr#answer { border: none; border-top: 1px solid #eadce6; margin: 14px 0; }
"""

CAMPOS = ["pieza", "significado", "idioma", "ancla", "familia", "nota"]

PLANTILLAS = [
    {
        "name": "pieza -> significado",
        "qfmt": '<div class="pieza">{{pieza}}</div>',
        "afmt": """{{FrontSide}}<hr id="answer">
<div class="sig">{{significado}}</div>
<div class="idioma">{{idioma}}</div>
<div class="ancla">ancla: <b>{{ancla}}</b></div>
{{#familia}}<div class="fam">familia: {{familia}}</div>{{/familia}}
{{#nota}}<div class="nota">{{nota}}</div>{{/nota}}""",
    },
    {
        "name": "significado -> pieza",
        "qfmt": """{{#significado}}<div class="sig">{{significado}}</div>
<div class="idioma">{{idioma}}</div>
<div class="pregunta">¿qué pieza es?</div>{{/significado}}""",
        "afmt": """{{FrontSide}}<hr id="answer">
<div class="pieza">{{pieza}}</div>
<div class="ancla">ancla: <b>{{ancla}}</b></div>""",
    },
]

# ---------------------------------------------------------------------------
# El contenido. Una entrada por semana.
# ---------------------------------------------------------------------------

SEMANAS = [
    {
        "n": 0,
        "titulo": "Semana 0 · El mazo cero",
        "piezas": [
            ("hidro-", "agua", "griego", "hidratante", "hidrografía, hidráulico, deshidratado", ""),
            ("acu- / aqua", "agua", "latín", "acuario", "acueducto, acuático, acuarela", "El español dice el agua de dos maneras, una por cada padre."),
            ("geo-", "tierra", "griego", "geografía", "geología, geometría, geopolítica", ""),
            ("terr-", "tierra", "latín", "terreno", "territorio, terrestre, extraterrestre", ""),
            ("bio-", "vida", "griego", "biología", "biografía, antibiótico, abiótico", ""),
            ("vit-", "vida", "latín", "vitamina", "vital, vitalicio, revitalizar", ""),
            ("graf-", "escribir, describir", "griego", "fotografía", "biografía, ortografía, telegrafía, demografía", ""),
            ("escrib- / scrib-", "escribir", "latín", "manuscrito", "describir, inscripción, escritura", ""),
            ("cardio-", "corazón", "griego", "cardiólogo", "cardiaco, taquicardia, electrocardiograma", ""),
            ("cord- / cor, cordis", "corazón", "latín", "cordial", "recordar, concordia, discordia, acordar", "Recordar es volver a pasar algo por el corazón."),
            ("-logía / -logo", "estudio, tratado", "griego", "biología", "geología, cardiología, potamología", "La pieza más rentable del idioma: se pega a casi cualquier raíz."),
        ],
    },
    {
        "n": 2,
        "titulo": "Semana 2 · Anatomía y primeras raíces",
        "piezas": [
            ("étimo", "la palabra de origen de la que nace otra", "concepto", "el étimo de amnesia es mnéme", "", ""),
            ("prefijo", "pieza que va al inicio y modifica el significado", "concepto", "a- en amnesia", "", ""),
            ("raíz", "pieza central, la que carga el significado", "concepto", "mnem- en amnesia", "", "La raíz manda; prefijo y sufijo solo la modifican."),
            ("sufijo", "pieza que va al final y modifica el significado", "concepto", "-ia en amnesia", "", ""),
            ("a- / an-", "sin (negación)", "griego", "amnesia", "anónimo, ateo, abiótico, apolítico, anemia", ""),
            ("mnem-", "memoria", "griego", "amnesia", "amnistía, mnemotecnia", "Amnistía es un olvido que se firma; amnesia, uno que te pasa."),
            ("-ia", "cualidad", "griego", "amnesia", "alegría, valentía, cobardía", ""),
            ("amor", "amor", "latín", "amigo", "amoroso, enamorar, amable", "Amigo viene de amar. Está en la palabra."),
            ("éros", "amor", "griego", "erótico", "Erasmo", "Erasmo significaba «amable, deseado»."),
            ("oculus", "ojo", "latín", "oculista", "ocular, binoculares, monóculo", "Ojo con la trampa: ocultar NO es de esta familia, viene de occulere (esconder)."),
            ("oriri", "nacer, surgir", "latín", "Oriente", "origen, original, oriundo, aborigen", "El Oriente es, literalmente, por donde nace el sol."),
            ("tele-", "lejos", "griego", "teléfono", "televisión, telescopio, telegrafía, telemetría", ""),
            ("crono-", "tiempo", "griego", "cronómetro", "cronología, crónica, cronista, sincronizar", ""),
            ("-metro / -metría", "medida", "griego", "termómetro", "geometría, cronómetro, telemetría, kilómetro", ""),
        ],
    },
    {
        "n": 3,
        "titulo": "Semana 3 · Sumas de palabras",
        "piezas": [
            # --- piezas: raíces, prefijos y sufijos que aparecieron esta semana ---
            ("port-", "llevar", "latín", "transporte", "exportar, importar, portátil, reportero, deporte", "Una raíz no es una palabra: es una fábrica."),
            ("des-", "deshacer, quitar", "latín", "desayuno", "desarmar, deshacer, descansar, desorden", "Desayunar es, literal, romper el ayuno."),
            ("-grama", "escrito, registro", "griego", "telegrama", "programa, crucigrama, electrocardiograma", "Primo de graf-: lo ya escrito."),
            ("-scopio", "mirar, instrumento para mirar", "griego", "telescopio", "microscopio, periscopio, estetoscopio", ""),
            ("psico-", "alma, mente", "griego", "psicología", "psicólogo, psiquiatra, psicosis", ""),
            ("trans-", "de un lado a otro, a través", "latín", "transporte", "transformar, transmitir, transatlántico", ""),
            ("cali-", "bello", "griego", "caligrafía", "calistenia", "Calistenia: fuerza y belleza en el mismo ejercicio."),
            ("-dromo", "pista, carrera", "griego", "hipódromo", "autódromo, aeródromo, velódromo", "Compáralo con hipopótamo: misma cabeza, otro final."),
            ("termo-", "calor", "griego", "termómetro", "térmico, termo, termostato", "El termo de tu café trae la raíz puesta."),
            ("-ónimo / ónoma", "nombre", "griego", "anónimo", "seudónimo, sinónimo, antónimo, homónimo", "Anónimo: sin nombre. El an- de tu mazo, con pieza nueva."),
            # --- palabras con historia que aparecieron esta semana ---
            ("desayuno", "romper el ayuno", "español, del latín", "des + ayuno", "breakfast (break + fast), déjeuner", "Tres lenguas tuvieron la misma idea: la primera comida del día rompe el ayuno."),
            ("deporte", "llevarse lejos, a distraerse", "latín (deportare)", "de + port + e", "deportivo, deportista", "El corte que parecía falso y era real: la fuente lo salvó en el torneo."),
            ("portero", "el que cuida la puerta", "latín (porta)", "de puerta, no de portare", "puerta, portal, portón", "Trae las letras de port- (llevar), pero su familia es la de puerta. Las letras engañan; la fuente no."),
            ("invierno", "la estación fría", "latín (hibernum)", "hibernum, sin prefijo", "hibernar, hibernación", "El espejismo clásico: ese in- no es prefijo, es casualidad de la forma."),
            ("mango", "dos palabras disfrazadas de una", "latín y tamil", "manus (mano) el de agarrar; del tamil, el fruto", "manija, manual, manufactura (la familia de manus)", "El espejismo doble: solo la fuente distingue las dos."),
        ],
    },
    {
        "n": 4,
        "titulo": "Semana 4 · El griego que ya hablas",
        "piezas": [
            # bio-, a-/an-, cardio- y -logía ya viven en las semanas 0 y 2: no se repiten.
            ("-itis", "inflamación", "griego", "otitis", "gastritis, dermatitis, apendicitis, laringitis, amigdalitis", "Una pieza, diez diagnósticos gratis."),
            ("-algia", "dolor", "griego", "cefalalgia", "neuralgia, lumbalgia, otalgia, nostalgia", "Hay dolores que no son del cuerpo: nostalgia es uno."),
            ("anti-", "contra", "griego", "antibiótico", "antídoto, antipatía, antisocial, antiséptico", ""),
            ("hiper-", "de más, por encima", "griego", "hipertensión", "hiperactivo, hipermercado, hipérbole", ""),
            ("hipo- (hypó)", "de menos, debajo", "griego", "hipotermia", "hipoglucemia, hipotensión, hipótesis", "No confundir con el otro hipo-, el de híppos (caballo), de la semana 5."),
            ("iatro- / -iatra", "médico", "griego", "pediatra", "psiquiatra, geriatra, iatrogenia, iatrofobia", "La promesa de la semana 0, pagada: una raíz que desbloquea cincuenta palabras."),
            ("biblio-", "libro", "griego", "biblioteca", "bibliografía, bibliófilo, Biblia", ""),
            ("demo-", "pueblo", "griego", "democracia", "demografía, pandemia, endemia, demagogo", ""),
            ("-cracia", "poder, gobierno", "griego", "democracia", "aristocracia, burocracia, gerontocracia, teocracia", ""),
            ("-fobia", "miedo, rechazo", "griego", "claustrofobia", "aracnofobia, xenofobia, fotofobia, hidrofobia", ""),
            # --- palabras con historia de la semana ---
            ("nostalgia", "el dolor por el regreso que no llega", "griego (nóstos + algos)", "nóstos (regreso) + -algia (dolor)", "algia, neuralgia, cefalalgia", "La inventó un estudiante suizo en 1688 para nombrar la enfermedad de extrañar la casa."),
            ("otorrinolaringólogo", "el especialista en oído, nariz y garganta", "griego", "oto + rino + laringo + -logo", "otitis, rinoceronte, laringitis", "Ninguna palabra es larga: solo es una suma que nadie te había enseñado a leer."),
            ("rinoceronte", "el del cuerno en la nariz", "griego (rhis + kéras)", "rino (nariz) + ceronte (cuerno)", "rinitis, rinoplastia", "Literal, y nadie lo había notado."),
            ("gimnasio", "el lugar donde se entrena desnudo", "griego (gymnós, desnudo)", "gymnós + -sio", "gimnasta, gimnasia", "Los atletas griegos entrenaban sin ropa. Cada vez que este curso te manda al gimnasio, el griego se ríe un poco."),
            ("quimera", "algo imposible de realizar", "griego (Chímaira)", "la criatura de león, cabra y dragón", "quimérico", "Era un monstruo que echaba fuego. Hoy es cualquier cosa tan imposible como él."),
        ],
    },
    {
        "n": 5,
        "titulo": "Semana 5 · Una raíz, veinte palabras",
        "piezas": [
            ("hemo- / hemato-", "sangre", "griego", "hemorragia", "hemofilia, hemoglobina, hematoma, hematología, anemia", "Ojo: hemi- (mitad, de hemisferio) es otra pieza distinta."),
            ("cosmo-", "orden, mundo", "griego", "cosmos", "cosmético, cosmopolita, microcosmos, cosmonauta", "El universo y un labial comparten raíz: para los griegos, lo bello era lo ordenado."),
            ("-nauta / naus", "navegante, nave", "griego", "astronauta", "cosmonauta, internauta, náutico, argonauta, náusea", "Náusea es, literal, el mareo del barco."),
            ("-polis / polit-", "ciudad", "griego", "metrópoli", "acrópolis, necrópolis, megalópolis, política, policía", "Política y policía son, las dos, asuntos de la ciudad."),
            ("-podo / pod-", "pie", "griego", "trípode", "podólogo, podio, antípoda, artrópodo, pulpo", "Pulpo viene de polýpous: muchos pies. Lo que llamas tentáculos, los griegos los contaron como patas."),
            ("zoo-", "animal", "griego", "zoológico", "zoología, protozoo, zodiaco, zoofobia, espermatozoide", "El zodiaco es el círculo de los animalitos. Por eso casi todos los signos son bichos."),
            ("-teca", "depósito, caja donde se guarda", "griego (thēkē)", "biblioteca", "discoteca, hemeroteca, pinacoteca, filmoteca, ludoteca", "No significa libro: eso es biblio-. Y de pilón: botica y bodega son la misma palabra, gastada."),
            ("-nomía / nomo-", "ley, regla", "griego", "astronomía", "economía, gastronomía, autonomía, agronomía, taxonomía", "Economía es oikos (casa) + nomos: las reglas de la casa."),
            ("hipo- (híppos)", "caballo", "griego", "hipódromo", "hipopótamo, hipocampo, hípico, Felipe", "No confundir con el hipo- de hipotermia (de menos), de la semana 4. Se ven igual y no son parientes."),
            ("pat- / -patía", "sentir, sufrir", "griego", "simpatía", "apatía, antipatía, empatía, telepatía, patología, patógeno", "Una raíz, tres épocas: sentimiento, pasión y por fin enfermedad."),
            # --- palabras con historia de la semana ---
            ("reloj", "el que cuenta las horas", "griego, por el latín horologium", "hōra (hora) + lógos (contar)", "horario, hora, cronología", "El re- no es prefijo: es horo- gastado por los siglos. Dos raíces griegas disfrazadas de palabra corta."),
            ("cosmético", "lo que sirve para poner en orden", "griego (kosmetikós)", "cosmo- (orden)", "cosmos, cosmetología", "Maquillarse es, literalmente, ordenarse la cara."),
            ("náusea", "el mareo del barco", "griego (nausía)", "naus (nave)", "náutico, nauta, astronauta", "Antes de existir el coche, marearse era cosa de navegantes."),
            ("pulpo", "el de muchos pies", "griego (polýpous), por el latín", "poly (muchos) + pous (pie)", "trípode, podólogo, antípoda", "El pariente más inesperado del podio."),
            ("hipopótamo", "el caballo del río", "griego", "híppos (caballo) + potamós (río)", "hipódromo, Mesopotamia", "Los griegos lo vieron salir del agua y le pusieron el nombre más honesto posible."),
        ],
    },
    {
        "n": 6,
        "titulo": "Semana 6 · Descifrar a ciegas",
        "piezas": [
            # -cracia y -fobia ya están en la semana 4: no se repiten.
            ("-opía", "visión", "griego", "miopía", "hemeralopía, nictalopía, hipermetropía, óptica", ""),
            ("-fagia / -fago", "comer", "griego", "antropofagia", "necrofagia, geofagia, esófago, sarcófago", "Sarcófago es, literal, «el que come carne». Que duerman bien."),
            ("-latría", "adoración", "griego", "idolatría", "egolatría, heliolatría, zoolatría, necrolatría", ""),
            ("-filia / -filo", "amor, afinidad", "griego", "bibliofilia", "hemofilia, xenofilia, filatelia, filántropo", ""),
            ("-mancia", "adivinación", "griego", "quiromancia", "cartomancia, piromancia, nigromancia", ""),
            ("necro-", "muerte, muerto", "griego", "necrópolis", "necrología, necrofagia, necrosis", "La necrópolis es la ciudad de los muertos: los griegos no pusieron tumbas, pusieron una ciudad."),
            ("cripto-", "oculto, escondido", "griego", "criptografía", "cripta, criptomoneda, criptozoología", "Criptozoología: el estudio de los animales ocultos. El chupacabras tiene su disciplina."),
            ("teo-", "dios", "griego", "teología", "teocracia, ateo, politeísmo, monoteísmo", "El a- de ateo es el mismo de amnesia, desde la semana 2."),
            ("piro-", "fuego", "griego", "piromanía", "pirotecnia, pirógrafo, pirofobia, piromancia", ""),
            ("xeno-", "extraño, extranjero", "griego", "xenofobia", "xenofilia, xenófobo", ""),
            # --- palabras con historia de la semana ---
            ("hemeralopía", "problema para ver de día", "griego", "hēmera (día) + -opía (visión)", "nictalopía, hemeroteca", "Nunca la habías visto y ya la lees. Eso es el curso funcionando."),
            ("hemeroteca", "el depósito de los diarios", "griego", "hēmera (día) + -teca (depósito)", "hemeralopía, biblioteca", "La misma hēmera de hemeralopía, en un lugar completamente distinto."),
            ("dinosaurio", "lagarto terrible", "griego (deinós + saûros)", "deinós (terrible) + saûros (lagarto)", "tiranosaurio, saurio", "La inventó Richard Owen en 1842 armándola con piezas griegas, igual que tú esta semana."),
            ("gerontocracia", "gobierno de los viejos", "griego", "géron (anciano) + -cracia (poder)", "geriatra, gerontología", "Pregunta para discutir: ¿vivimos en una?"),
            ("burocracia", "el poder de las oficinas", "francés y griego", "bureau (oficina) + -cracia (poder)", "burócrata", "Palabra híbrida: mitad francesa, mitad griega. Las raíces no piden pasaporte."),
        ],
    },
    {
        "n": 7,
        "titulo": "Semana 7 · Las cinco que se resisten",
        "piezas": [
            # Semana de consolidación: sin piezas nuevas. Solo las trampas de toda la
            # unidad, en tarjeta, porque son las que más se caen en el integrador.
            ("¿hipo- de hipotermia o de hipódromo?", "son DOS piezas distintas: hypó (de menos) e híppos (caballo)", "trampa de la unidad", "hipotermia · hipódromo", "hipoglucemia, hipopótamo", "Se ven idénticas y no son parientes. Solo la fuente distingue."),
            ("¿in- de invierno?", "no es prefijo: invierno viene de hibernum", "espejismo", "invierno", "hibernar, hibernación", "El ojo ve piezas donde no las hay, porque el cerebro ama los patrones."),
            ("¿anti- de antiguo?", "no es el anti- de «contra»: viene del latín antiquus, de ante", "espejismo", "antiguo", "anterior, antesala", "Un antiguo no está en contra de nada."),
            ("¿a- de amigo?", "no hay prefijo: amigo viene de amicus, de amar", "espejismo", "amigo", "amistad, amable", "Familia y fuente, las dos, siempre."),
            ("la regla de oro", "un corte es real solo si la pieza reaparece en otras palabras con el mismo significado, y la fuente lo confirma", "concepto", "port- en transporte, portátil y reportero (real); port- en portero (no)", "", "Se aprende en la semana 3 y se usa todo el semestre. Sin fuente no hay etimología: ni de un compañero, ni de una IA, ni tuya."),
        ],
    },
]


# ---------------------------------------------------------------------------
# La maquinaria. De aquí para abajo no hay contenido que editar.
# ---------------------------------------------------------------------------

_B91 = ([chr(c) for c in range(ord("a"), ord("z") + 1)]
        + [chr(c) for c in range(ord("A"), ord("Z") + 1)]
        + [chr(c) for c in range(ord("0"), ord("9") + 1)]
        + list("!#$%&()*+,-./:;<=>?@[]^_`{|}~"))


def _base91(num):
    if num == 0:
        return _B91[0]
    salida = []
    while num > 0:
        salida.append(_B91[num % len(_B91)])
        num //= len(_B91)
    return "".join(reversed(salida))


def guid_for(*valores):
    """El mismo guid que calculaba genanki: identidad estable de cada tarjeta."""
    cadena = "__".join(str(v) for v in valores)
    ocho = hashlib.sha256(cadena.encode("utf-8")).digest()[:8]
    n = 0
    for b in ocho:
        n = (n << 8) + b
    return _base91(n)


ESQUEMA = """
CREATE TABLE col (id integer primary key, crt integer not null, mod integer not null,
  scm integer not null, ver integer not null, dty integer not null, usn integer not null,
  ls integer not null, conf text not null, models text not null, decks text not null,
  dconf text not null, tags text not null);
CREATE TABLE notes (id integer primary key, guid text not null, mid integer not null,
  mod integer not null, usn integer not null, tags text not null, flds text not null,
  sfld integer not null, csum integer not null, flags integer not null, data text not null);
CREATE TABLE cards (id integer primary key, nid integer not null, did integer not null,
  ord integer not null, mod integer not null, usn integer not null, type integer not null,
  queue integer not null, due integer not null, ivl integer not null, factor integer not null,
  reps integer not null, lapses integer not null, left integer not null, odue integer not null,
  odid integer not null, flags integer not null, data text not null);
CREATE TABLE revlog (id integer primary key, cid integer not null, usn integer not null,
  ease integer not null, ivl integer not null, lastIvl integer not null, factor integer not null,
  time integer not null, type integer not null);
CREATE TABLE graves (usn integer not null, oid integer not null, type integer not null);
CREATE INDEX ix_notes_usn on notes (usn);
CREATE INDEX ix_cards_usn on cards (usn);
CREATE INDEX ix_revlog_usn on revlog (usn);
CREATE INDEX ix_cards_nid on cards (nid);
CREATE INDEX ix_cards_sched on cards (did, queue, due);
CREATE INDEX ix_revlog_cid on revlog (cid);
CREATE INDEX ix_notes_csum on notes (csum);
"""

CONF = {"activeDecks": [1], "addToCur": True, "collapseTime": 1200, "curDeck": 1,
        "curModel": str(MODEL_ID), "dueCounts": True, "estTimes": True, "newBury": True,
        "newSpread": 0, "nextPos": 1, "sortBackwards": False, "sortType": "noteFld",
        "timeLim": 0}

DCONF = {"1": {"autoplay": True, "id": 1,
               "lapse": {"delays": [10], "leechAction": 0, "leechFails": 8, "minInt": 1, "mult": 0},
               "maxTaken": 60, "mod": 0, "name": "Default",
               "new": {"bury": True, "delays": [1, 10], "initialFactor": 2500,
                       "ints": [1, 4, 7], "order": 1, "perDay": 20, "separate": True},
               "replayq": True,
               "rev": {"bury": True, "ease4": 1.3, "fuzz": 0.05, "ivlFct": 1, "maxIvl": 36500,
                       "minSpace": 1, "perDay": 100},
               "timer": 0, "usn": 0}}


def _modelo():
    return {str(MODEL_ID): {
        "id": str(MODEL_ID),
        "name": "Pieza de palabra (Etimologías UAQ)",
        "type": 0,
        "mod": MOD,
        "usn": -1,
        "sortf": 0,
        "did": DECK_BASE_ID,
        "css": CSS,
        "latexPre": ("\\documentclass[12pt]{article}\n\\special{papersize=3in,5in}\n"
                     "\\usepackage[utf8]{inputenc}\n\\usepackage{amssymb,amsmath}\n"
                     "\\pagestyle{empty}\n\\setlength{\\parindent}{0in}\n\\begin{document}\n"),
        "latexPost": "\\end{document}",
        "latexsvg": False,
        "req": [[0, "all", [0]], [1, "all", [1]]],
        "tags": [],
        "vers": [],
        "flds": [{"name": nombre, "ord": i, "font": "Liberation Sans", "media": [],
                  "rtl": False, "size": 20, "sticky": False}
                 for i, nombre in enumerate(CAMPOS)],
        "tmpls": [dict(t, ord=i, bafmt="", bqfmt="", bfont="", bsize=0, did=None)
                  for i, t in enumerate(PLANTILLAS)],
    }}


def _mazo(deck_id, nombre):
    return {"id": deck_id, "name": nombre, "collapsed": False, "conf": 1, "desc": "",
            "dyn": 0, "extendNew": 0, "extendRev": 50, "mod": MOD, "usn": -1,
            "lrnToday": [0, 0], "newToday": [0, 0], "revToday": [0, 0], "timeToday": [0, 0]}


def escribe_apkg(semanas, destino):
    """Arma un .apkg con las semanas que le pases. Un submazo por semana."""
    decks = {"1": _mazo(1, "Default")}
    for sem in semanas:
        did = DECK_BASE_ID + sem["n"]
        decks[str(did)] = _mazo(did, "{}::{}".format(DECK_RAIZ, sem["titulo"]))

    tmp = tempfile.mkdtemp()
    db_path = os.path.join(tmp, "collection.anki2")
    con = sqlite3.connect(db_path)
    con.executescript(ESQUEMA)
    con.execute(
        "insert into col values (?,?,?,?,?,?,?,?,?,?,?,?,?)",
        (1, 1411124400, MOD * 1000, MOD * 1000, 11, 0, 0, 0,
         json.dumps(CONF), json.dumps(_modelo()), json.dumps(decks),
         json.dumps(DCONF), "{}"))

    ident = ID_BASE
    total = 0
    for sem in semanas:
        did = DECK_BASE_ID + sem["n"]
        etiquetas = " etimologias semana{:02d} ".format(sem["n"])
        for pieza in sem["piezas"]:
            nid = ident
            ident += 1
            con.execute(
                "insert into notes values (?,?,?,?,?,?,?,?,?,?,?)",
                (nid, guid_for("etim-uaq", pieza[0]), MODEL_ID, MOD, -1, etiquetas,
                 "\x1f".join(pieza), pieza[0], 0, 0, ""))
            for orden in (0, 1):
                cid = ident
                ident += 1
                con.execute(
                    "insert into cards values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    (cid, nid, did, orden, MOD, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ""))
            total += 1

    con.commit()
    con.close()

    with zipfile.ZipFile(destino, "w", zipfile.ZIP_DEFLATED) as z:
        z.write(db_path, "collection.anki2")
        z.writestr("media", "{}")

    os.remove(db_path)
    os.rmdir(tmp)
    return total


def main():
    aqui = os.path.dirname(os.path.abspath(__file__))

    completo = os.path.join(aqui, "etimologias-uaq.apkg")
    total = escribe_apkg(SEMANAS, completo)
    print("Mazo completo: {}".format(completo))
    print("  {} submazos, {} piezas, {} tarjetas (cada pieza genera dos).".format(
        len(SEMANAS), total, total * 2))

    print("Mazos sueltos, uno por semana:")
    for sem in SEMANAS:
        suelto = os.path.join(aqui, "etimologias-semana-{:02d}.apkg".format(sem["n"]))
        n = escribe_apkg([sem], suelto)
        print("  semana {:>2}: {:>2} piezas · {}".format(
            sem["n"], n, os.path.basename(suelto)))


if __name__ == "__main__":
    main()
