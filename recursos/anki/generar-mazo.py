#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generador del mazo de Anki del curso de Etimologías (UAQ · Campus Concá).

Cómo se usa
-----------
    pip install genanki
    python3 recursos/anki/generar-mazo.py

Deja el archivo en  recursos/anki/etimologias-uaq.apkg  y ese es el que se
enlaza desde el sitio. Un solo archivo para todo el semestre.

Cómo se agrega una semana
-------------------------
Añade un bloque nuevo a la lista SEMANAS con su número, su título y sus
piezas, y vuelve a correr el script. NO cambies los IDs de arriba ni el
texto del campo "pieza" de una tarjeta ya publicada: el identificador de
cada nota se calcula a partir de ese campo, así que si lo cambias Anki
creerá que es una tarjeta nueva y el estudiante perderá su avance en ella.
Todo lo demás (significado, ancla, familia, nota) sí se puede corregir
libremente: al reimportar, Anki actualiza el contenido y respeta el avance.

Campos de cada pieza:
    pieza, significado, idioma, ancla, familia, nota
"""

import os
import genanki

# --- IDs fijos. No cambiarlos nunca. ---
MODEL_ID = 1607392319
DECK_BASE_ID = 2059400110
DECK_RAIZ = "Etimologías UAQ"

MODELO = genanki.Model(
    MODEL_ID,
    "Pieza de palabra (Etimologías UAQ)",
    fields=[
        {"name": "pieza"},
        {"name": "significado"},
        {"name": "idioma"},
        {"name": "ancla"},
        {"name": "familia"},
        {"name": "nota"},
    ],
    templates=[
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
    ],
    css="""
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
""",
)

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
            ("-itis", "inflamación", "griego", "otitis", "gastritis, hepatitis, apendicitis, tendinitis", "En la farmacia, la mitad de las cajas la traen puesta."),
            ("-algia", "dolor", "griego", "cefalalgia", "neuralgia, mialgia, nostalgia", "Nostalgia es el dolor del regreso: se puede extrañar hasta doler."),
            ("anti-", "contra", "griego", "antibiótico", "antídoto, antipatía, antártico", ""),
            ("hiper-", "por encima de lo normal", "griego", "hipertensión", "hiperactivo, hipérbole, hipermercado", ""),
            ("hipo-", "por debajo de lo normal", "griego", "hipotermia", "hipotensión, hipoglucemia, hipótesis", "Se confunde con hiper- todo el tiempo, y son contrarias."),
            ("iatro- / -iatra", "médico, curación", "griego", "pediatra", "psiquiatra, geriatra, iatrogenia", "La promesa de la semana 0, pagada: el que cura niños."),
            ("biblio-", "libro", "griego", "biblioteca", "bibliografía, bibliófilo, bibliomanía", "Biblioteca es, literal, la caja donde se guardan los libros."),
            ("demo-", "pueblo", "griego", "democracia", "demografía, epidemia, pandemia", ""),
            ("-cracia", "poder, gobierno", "griego", "democracia", "burocracia, aristocracia, autocracia", ""),
            ("-fobia", "miedo, rechazo", "griego", "claustrofobia", "aracnofobia, agorafobia, fotofobia", "Cuidado: se parece a -manía y a -mancia, y no son lo mismo."),
        ],
    },
    {
        "n": 5,
        "titulo": "Semana 5 · Una raíz, veinte palabras",
        "piezas": [
            ("céfalo-", "cabeza", "griego", "cefalalgia", "encéfalo, cefalópodo, hidrocefalia", ""),
            ("neuro- / neuron", "nervio, cerebro", "griego", "neurona", "neurología, neurótico, neurocirugía", ""),
            ("oftalmo-", "ojo", "griego", "oftalmólogo", "oftalmología, exoftalmia", "El médico que estudia los ojos, no el que vende lentes."),
            ("oto-", "oreja, oído", "griego", "otitis", "otorrino, otoscopio", ""),
            ("rino-", "nariz", "griego", "rinoceronte", "rinitis, otorrinolaringólogo", "Rinoceronte es, literal, nariz con cuerno."),
            ("estoma-", "boca", "griego", "estomatólogo", "estómago, estoma", "Estómago viene de aquí: era la boca del vientre."),
            ("odonto-", "diente", "griego", "odontólogo", "ortodoncia, mastodonte, periodontal", "Mastodonte: un diente monumental."),
            ("gastro-", "estómago", "griego", "gastritis", "gastronomía, gastroenterólogo", "La gastronomía es el lado feliz de la misma raíz."),
            ("hepato-", "hígado", "griego", "hepatitis", "hepatología, hepático", "Con -itis se lee sola: inflamación del hígado."),
            ("nefro-", "riñón", "griego", "nefrólogo", "nefritis, nefrología", ""),
            ("derma- / dermo-", "piel", "griego", "dermatólogo", "epidermis, dermatitis, paquidermo", "Paquidermo: el de la piel gruesa."),
            ("quiro-", "mano", "griego", "quirófano", "quiromancia, quiropráctico, cirugía", "Quirófano: el lugar donde las manos se ven trabajar."),
            ("dactilo-", "dedo", "griego", "huella dactilar", "dactilografía, pterodáctilo", "Pterodáctilo: el de los dedos alados."),
            ("osteo-", "hueso", "griego", "osteoporosis", "osteopatía, osteotomía", "Hueso poroso: la palabra se diagnostica sola."),
            ("podo- / -pode", "pie", "griego", "podólogo", "podómetro, artrópodo, trípode", ""),
            ("fono-", "voz, sonido", "griego", "teléfono", "micrófono, sinfonía, cacofonía, fonética", ""),
            ("auto-", "uno mismo, propio", "griego", "autógrafo", "autonomía, autopsia, autodidacta, autómata", "Ojo: autor y autoridad son latinas, del auctor que hace crecer."),
            ("foto-", "luz", "griego", "fotografía", "fotosíntesis, fotón, fotofobia, fotocopia", "Fotografía es escribir con luz."),
            ("eco- / oîkos", "casa", "griego", "ecología", "economía, ecosistema, parroquia", "Trampa: el eco que rebota viene de la ninfa Ekhó, otra raíz."),
            ("orto-", "recto, correcto", "griego", "ortografía", "ortodoncia, ortopedia, ortodoxo", "Ortografía es escritura recta."),
            ("ciclo-", "círculo, rueda", "griego", "bicicleta", "reciclar, ciclón, enciclopedia, triciclo", "Enciclopedia: la educación que da toda la vuelta."),
            ("-manía", "obsesión, locura", "griego", "cleptomanía", "megalomanía, melomanía, bibliomanía", ""),
            ("-mancia", "adivinación", "griego", "quiromancia", "cartomancia, nigromancia", "Nigromancia era adivinar por los muertos: el latín la confundió con niger, negro."),
            ("-latría", "adoración", "griego", "idolatría", "egolatría, bibliolatría", ""),
            ("pat- / páthos", "sentir, sufrir", "griego", "simpatía", "antipatía, apatía, empatía, patología, cardiopatía", "La raíz que cambió de opinión: del sentimiento al sufrimiento, y de ahí a la enfermedad."),
        ],
    },
]


def main():
    mazos = []
    total = 0

    for i, sem in enumerate(SEMANAS):
        mazo = genanki.Deck(
            DECK_BASE_ID + sem["n"],
            "{}::{}".format(DECK_RAIZ, sem["titulo"]),
        )
        for pieza in sem["piezas"]:
            nota = genanki.Note(
                model=MODELO,
                fields=list(pieza),
                # El identificador se calcula solo con la pieza: así, al
                # reimportar, Anki reconoce la tarjeta y conserva el avance
                # aunque hayamos corregido el significado o la familia.
                guid=genanki.guid_for("etim-uaq", pieza[0]),
                tags=["etimologias", "semana{:02d}".format(sem["n"])],
            )
            mazo.add_note(nota)
            total += 1
        mazos.append(mazo)

    destino = os.path.join(os.path.dirname(os.path.abspath(__file__)), "etimologias-uaq.apkg")
    genanki.Package(mazos).write_to_file(destino)
    print("Mazo generado: {}".format(destino))
    print("{} submazos, {} piezas, {} tarjetas (cada pieza genera dos).".format(
        len(mazos), total, total * 2))


if __name__ == "__main__":
    main()
