import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

import de from "./de/translation.json";
import en from "./en/translation.json";

i18n.use(initReactI18next).init({
  debug: false,
  defaultNS: "translation",
  fallbackLng: ["en", "de"],
  interpolation: {
    escapeValue: false,
  },
  lng: localStorage.getItem("settings.language"),
  load: "all",
  ns: ["translation"],
  react: {
    wait: true,
  },
  resources: {
    de: {
      translation: de,
    },
    en: {
      translation: en,
    },
  },
});

function I18nProvider({ children }) {
  const language = useSelector((state) => state.settings.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

export default I18nProvider;
