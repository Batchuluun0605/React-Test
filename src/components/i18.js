// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our application!",
    },
  },
  mn: {
    translation: {
      welcome: "Bienvenue dans notre application!",
    },
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
