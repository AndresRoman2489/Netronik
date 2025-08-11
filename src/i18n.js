import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Cargamos los recursos desde src (sin backend extra)
import esCommon from './locales/es/common.json';
import enCommon from './locales/en/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { common: esCommon },
      en: { common: enCommon }
    },
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    ns: ['common'],
    defaultNS: 'common',
    load: 'languageOnly',
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'] // recuerda el idioma elegido
    },
    interpolation: { escapeValue: false } // React ya hace el escape
  });

export default i18n;
