import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelect = () => {
  const { i18n } = useTranslation();
  const selectedLang = i18n.language;
  const availableLanguages = ['en', 'si'];

  return (
    <div id="lang">
      {availableLanguages.map((lang) => (
        <button
          key={lang}
          className={
            selectedLang === lang ? `lang-button selected` : 'lang-button'
          }
          onClick={() => {
            i18n.changeLanguage(lang);
            window.location.reload();
          }}
        >
          {lang}
        </button>
      ))}
    </div>
  );
};
