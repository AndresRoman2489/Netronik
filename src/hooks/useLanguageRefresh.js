// src/hooks/useLanguageRefresh.js
import { useEffect } from "react";
import i18n from "../i18n";

export function useLanguageRefresh({ hardReload = true } = {}) {
  useEffect(() => {
    const onLangChanged = (lng) => {
      document.documentElement.lang = lng;
      document.documentElement.dir = i18n.dir?.(lng) || "ltr";

      if (hardReload) {
        // Recarga “clásica” al cambiar idioma
        window.location.reload();
      } else {
        // Refresco suave sin recargar
        if (window.AOS?.refreshHard) window.AOS.refreshHard();
        else if (window.AOS?.refresh) window.AOS.refresh();
      }
    };

    i18n.on("languageChanged", onLangChanged);
    return () => i18n.off("languageChanged", onLangChanged);
  }, [hardReload]);
}
