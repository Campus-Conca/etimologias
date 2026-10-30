---
title: Juegos de palabras
nav_order: 10
---

# Juegos de palabras

<span class="viva">Crece con el semestre</span>

Cuatro juegos para inventar historias y ver lo que valen las palabras. Ninguno pide raíces para jugar: la etimología entra solo donde el juego la llama. Cada juego es una página suelta que funciona en el celular, proyectada en el salón y hasta sin internet.

- [El choque](./choque.html): dos palabras lejanas, una preposición al azar, y a contar qué pasa.
- [La fábrica](./fabrica.html): un prefijo pegado a un sustantivo fabrica un objeto que no existía; para patentarlo hay que definirlo.
- [Los 99 estilos](./estilos.html): la misma anécdota, otra manera de decirla.
- [Érase una vez con cartas](./erase.html): cada carta que sale obliga a seguir la historia por ahí; gana quien la lleve hasta su final secreto.

## Cómo se alimentan

- **Las palabras de las ruletas las trae el grupo:** diez por persona y una línea de por qué te da escalofrío. Van a `data/banco.json` con el nombre de quien la trajo.
- **Los choques que el grupo nomina, los inventos patentados y el rollo de Érase una vez se dibujan:** tinta sobre papel, cuadrado, foto con el teléfono. Se suben a `cartas/choque/`, `cartas/fabrica/`, `cartas/estilos/` o `cartas/erase/` con el nombre de archivo que da la página, y siempre con crédito. Aquí nadie genera imágenes: dibujan ustedes.
- **Los prefijos de La fábrica** vienen con origen, significado y fuente en `data/prefijos.json`. Ley del curso: ninguna etimología sin fuente; una patente sin fuente queda pendiente.
- **Los estilos patentados y los finales nuevos** se copian del libro exportado a `data/estilos.json` y `data/finales.json`, con el nombre de quien los inventó.
- **Lo que escribes se guarda con el botón Guardar:** lo copia y baja un archivo de texto. De ahí va al Museo de Palabras o al formulario de la semana.
