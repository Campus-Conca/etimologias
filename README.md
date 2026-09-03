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
  el equipo editorial del grupo (o tú) pega el contenido curado en la
  página correspondiente. Editar es fácil: cualquier archivo se puede
  modificar desde el propio GitHub en el navegador (botón del lápiz).
- **Cierres de unidad — antes del primero, revisa el recolector.** La
  autoevaluación manda su envío al mismo Apps Script de `cosecha_url`, con
  `tipo = parcial-u1`. Si tu script crea la pestaña sola, no hay nada que
  hacer; si espera una pestaña existente, créala con ese nombre y con estas
  columnas: `nombre`, `grupo`, `numero`, `porque`, `suelo`, `calibracion`,
  `evidencias`, `palabra`, `aunno`, `codigo`. **Pruébalo tú
  primero**, mandando una autoevaluación de mentiras: la página no puede leer
  la respuesta del script (así funciona un POST a un iframe, sin CORS), así
  que dice "se mandó" en cuanto el iframe carga, aunque el script haya
  fallado por dentro. Por eso el formulario de siempre sigue ahí abajo como
  red. La columna `codigo` es la importante: lleva la autoevaluación completa.
- **La mesa se trae al grupo sola.** En el script de la hoja hay una
  `CLAVE_MESA`: cámbiala por lo que quieras y escribe lo mismo, una sola vez,
  en la pestaña *Traer del recolector* de la mesa. Hace falta porque la URL
  `/exec` está en el HTML de todas las páginas del sitio: sin clave,
  cualquiera que la tuviera podría leer las autoevaluaciones del grupo. La
  clave se guarda aparte del estado de la mesa, así que **no viaja en el
  código de respaldo**. Si no quieres conectarla, pegar la hoja a mano
  sigue funcionando igual.
- **Cierres de unidad:** el estudiante llena su autoevaluación en
  `recursos/plantillas/autoevaluacion-u1.html` (se guarda en su teléfono y
  manda su frase al formulario). Tú conversas y registras en
  `recursos/plantillas/mesa-u1.html`, la **pantalla del profesor**: trae al
  grupo desde la hoja de cálculo del formulario, desde el código de respaldo
  del estudiante o a mano; te deja apostar tu propio número a ciegas antes de
  ver el suyo; y devuelve el registro listo para pegar de vuelta en la hoja.
  Esa página no guarda nada por dentro (todo vive en el navegador de quien la
  abre), así que puede estar publicada sin exponer a nadie; no está enlazada
  desde el menú del sitio. **Vacíala al salir de una computadora compartida.**
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
