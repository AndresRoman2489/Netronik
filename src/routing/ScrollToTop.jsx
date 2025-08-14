// src/routing/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const { pathname, hash, key, search } = useLocation();

  useEffect(() => {
    // Si hay #ancla, intenta desplazar a ese elemento
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // pequeño delay para asegurar layout listo
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.tabIndex = -1; // accesible
          el.focus({ preventScroll: true });
        });
        return;
      }
    }

    // Caso normal: scroll arriba
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Enfoca el <main> si existe (mejora accesibilidad al navegar)
    const main = document.querySelector("main");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
    }
  }, [pathname, search, hash, key]);

  return children || null;
}
