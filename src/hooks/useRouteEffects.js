// src/hooks/useRouteEffects.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useRouteEffects() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Refresca AOS si lo usas
    if (window.AOS?.refreshHard) {
      window.AOS.refreshHard();
    } else if (window.AOS?.refresh) {
      window.AOS.refresh();
    }

    // Cierra overlays/menus que marquen este flag
    document
      .querySelectorAll("[data-close-on-route-change='true']")
      .forEach((el) => el?.click?.());
  }, [pathname, search]);
  
}
