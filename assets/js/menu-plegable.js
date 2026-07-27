/* ------------------------------------------------------------------
   Menu lateral plegable — solo escritorio (>= 800 px)
   Inserta un boton en la barra superior que oculta o muestra la barra
   lateral y recuerda la eleccion entre paginas (localStorage).
   En movil no se dibuja nada: esa vista ya funciona con su propio menu.
   ------------------------------------------------------------------ */
(function () {
  "use strict";

  var CLAVE = "etim-menu";
  var CLASE = "nav-plegada";
  var raiz = document.documentElement;
  var escritorio = window.matchMedia("(min-width: 50rem)");

  function plegado() {
    return raiz.classList.contains(CLASE);
  }

  function recordar() {
    try {
      window.localStorage.setItem(CLAVE, plegado() ? "plegado" : "abierto");
    } catch (e) {}
  }

  function etiquetar(boton, texto) {
    var abierto = !plegado();
    var accion = abierto ? "Ocultar el menú" : "Mostrar el menú";
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    boton.setAttribute("aria-label", accion + " lateral");
    boton.setAttribute("title", accion + " lateral (Alt + M)");
    texto.textContent = abierto ? "Ocultar menú" : "Menú";
  }

  function alternar(boton, texto) {
    raiz.classList.toggle(CLASE);
    recordar();
    etiquetar(boton, texto);
  }

  function escribiendo(destino) {
    if (!destino) return false;
    var etiqueta = destino.tagName;
    return (
      etiqueta === "INPUT" ||
      etiqueta === "TEXTAREA" ||
      etiqueta === "SELECT" ||
      destino.isContentEditable === true
    );
  }

  function iniciar() {
    var cabecera = document.getElementById("main-header");
    var barra = document.querySelector(".side-bar");
    if (!cabecera || !barra || document.getElementById("nav-toggle")) return;

    if (!barra.id) barra.id = "barra-lateral";

    var boton = document.createElement("button");
    boton.type = "button";
    boton.id = "nav-toggle";
    boton.className = "nav-toggle";
    boton.setAttribute("aria-controls", barra.id);
    boton.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
      '<rect x="3" y="4.5" width="18" height="15" rx="2.5" fill="none" ' +
      'stroke="currentColor" stroke-width="1.7"></rect>' +
      '<rect class="nav-toggle__hoja" x="4.7" y="6.2" width="4.6" height="11.6" ' +
      'rx="1" fill="currentColor"></rect>' +
      "</svg><span class=\"nav-toggle__texto\"></span>";

    var texto = boton.querySelector(".nav-toggle__texto");
    cabecera.insertBefore(boton, cabecera.firstChild);
    etiquetar(boton, texto);

    boton.addEventListener("click", function () {
      alternar(boton, texto);
    });

    // Atajo de teclado: Alt + M
    document.addEventListener("keydown", function (ev) {
      if (!ev.altKey || ev.ctrlKey || ev.metaKey) return;
      var tecla = ev.key ? ev.key.toLowerCase() : "";
      if (tecla !== "m" && ev.code !== "KeyM") return;
      if (escribiendo(ev.target)) return;
      if (!escritorio.matches) return;
      ev.preventDefault();
      alternar(boton, texto);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
