# Web del curso · Etimologías Grecolatinas del Español
### Escuela de Bachilleres UAQ · GitHub Pages

Esta web NO es un libro de texto (el curso es presencial): es la **caja de
herramientas de sesión** (lo que se abre en el centro de cómputo durante la
clase) y la **vitrina pública** de lo que el grupo produce (mapa léxico,
galería del Museo, dictámenes, crucigramas).

## Publicar por primera vez

1. Crea un repositorio **público** en GitHub (ej. `etimologias`).
2. Sube todo el contenido de esta carpeta a la raíz del repo.
3. En el repo: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. En 1–2 minutos la web vive en `https://TU-USUARIO.github.io/etimologias/`.

No hay que instalar nada: GitHub construye la web solo (Jekyll + tema
Just the Docs, ya configurado en `_config.yml`).

## Flujo de publicación durante el semestre

- **Tableros semanales:** duplica `PLANTILLA_SEMANA.md` como
  `semanas/semana-NN.md` antes de cada semana; al cerrarla, llena la
  sección "Lo que produjimos".
- **Vitrina (mapa léxico, dictámenes, crucigramas, galería):** los
  estudiantes capturan en clase (formulario o documento compartido) y
  el equipo editorial del grupo —o tú— pega el contenido curado en la
  página correspondiente. Editar es fácil: cualquier archivo se puede
  modificar desde el propio GitHub en el navegador (botón del lápiz).
- Cada commit actualiza la web sola en 1–2 minutos.

## Qué NO va en este repo

El repo es **público**: solo lo que los estudiantes (y sus familias)
pueden ver. Quizzes con claves, planes de sesión y rúbricas viven en la
carpeta local `docente/` (ignorada por git). Al publicar trabajo de
estudiantes: solo nombre de pila, y siempre con su permiso.

## Estructura

```
index.md            Portada
semanas/            Tableros semanales (herramientas + vitrina de la semana)
unidades/           Portadas de las 3 unidades
recursos/           Fuentes, Anki, guías permanentes
vitrina/            Lo que el grupo construye: mapa léxico, dictámenes, crucigramas
museo/              Museo de Palabras: plantilla y galería
PLANTILLA_SEMANA.md Molde interno de tableros semanales
docente/            (local, no se publica) materiales del profesor
```
