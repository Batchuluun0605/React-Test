"use client";
import React from "react";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../../components/i18"; // Adjust the path as necessary

const WelcomeComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <LanguageSwitcher />
    </div>
  );
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("mn")}>French</button>
    </div>
  );
};

// Main App Component
const App = () => (
  <I18nextProvider i18n={i18n}>
    <WelcomeComponent />
  </I18nextProvider>
);

export default App;
