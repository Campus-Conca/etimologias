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
