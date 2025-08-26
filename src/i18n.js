import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// importa JSON directamente
import es from "./locales/es/common.json";
import en from "./locales/en/common.json";
// puedes agregar de.json si lo necesitas
import esIndustries from './locales/es/industries.json';
import enIndustries from './locales/en/industries.json';
import servicesEN from "./locales/en/services.json";
import servicesES from "./locales/es/services.json";
import robotsES from "./locales/es/robots.json";
import robotsEN from "./locales/en/robots.json";
import companyES from "./locales/es/company.json";
import companyEN from "./locales/en/company.json";
import referencesES from "./locales/es/references.json";
import ReferencesEN from "./locales/en/references.json";
import CostumersES from "./locales/es/costumers.json";
import CostumersEN from "./locales/en/costumers.json";
import inspectionES from "./locales/es/inspection.json";
import inspectionEN from "./locales/en/inspection.json";
import FAQES from "./locales/es/FAQ.json";
import FAQEN from "./locales/en/FAQ.json";
import cleaningEN from "./locales/en/cleaning.json";
import cleaningES from "./locales/es/cleaning.json";
import coatingEN from "./locales/en/coating.json";
import coatingES from "./locales/es/coating.json";
import industrialProdEN from "./locales/en/IndustrialProd.json";
import industrialProdES from "./locales/es/IndustrialProd.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    resources: {
      es: { common: es,
       industries: esIndustries,
        services: servicesES,
        robots: robotsES,
        company: companyES,
        references: referencesES,
        costumers:CostumersES,
        inspection:inspectionES,
        FAQ:FAQES,
        cleaning:cleaningES,
        coating:coatingES,
        industrialProd:industrialProdES
      },
      en: { common: en,
         industries: enIndustries,
         services: servicesEN,
         robots: robotsEN,
         company:companyEN,
         references: ReferencesEN,
         costumers:CostumersEN,
         inspection:inspectionEN,
         FAQ:FAQEN,
         cleaning:cleaningEN,
         coating:coatingEN,
          industrialProd:industrialProdEN

       },
    },
    ns: ["common",'industries','services','robots','company','references','costumers','inspection',"FAQ",
  "cleaning",
  "coating",
  "industrialProd"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: { order: ["querystring", "localStorage", "navigator"], caches: ["localStorage"] },
    react: { useSuspense: false }
  });

export default i18n;
