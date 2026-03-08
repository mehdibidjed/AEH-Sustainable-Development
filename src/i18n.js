import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import ar from "./locales/ar/translation.json";

i18n
  .use(LanguageDetector)           // auto-detect browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // optional – avoids issues in SSR
    },
  });

// Optional: Listen for language change → update document direction (very important for RTL)
i18n.on("languageChanged", (lng) => {
  const direction = i18n.dir(lng); // "ltr" or "rtl"
  document.documentElement.dir = direction;
  document.documentElement.lang = lng;
});

export default i18n;