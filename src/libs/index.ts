import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ar from "./Translations/ar.json";
import en from "./Translations/en.json";

const storedLang = typeof window !== "undefined" ? localStorage.getItem("language") : "en";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: storedLang ?? "en",
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
