import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Mantiene <html lang="..."> sincronizado con i18next
 * y lo hace global para TODAS las rutas.
 */
export default function HtmlLangSync() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const set = (lng) => {
      const norm = (lng || "es").toLowerCase();
      document.documentElement.lang = norm.startsWith("en") ? "en" : "es";
    };

    set(i18n.language);
    const handler = (lng) => set(lng);

    i18n.on("languageChanged", handler);
    return () => {
      i18n.off("languageChanged", handler);
    };
  }, [i18n]);

  return null;
}
