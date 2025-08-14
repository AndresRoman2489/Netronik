import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// importa JSON directamente
import es from "./locales/es/common.json";
import en from "./locales/en/common.json";
// puedes agregar de.json si lo necesitas
import esIndustries from './locales/es/industries.json';
import enIndustries from './locales/en/industries.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    resources: {
      es: { common: es,
       industries: esIndustries,
      },
      en: { common: en,
         industries: enIndustries,
       },
    },
    ns: ["common",'industries'],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: { order: ["querystring", "localStorage", "navigator"], caches: ["localStorage"] },
    react: { useSuspense: false }
  });

export default i18n;
