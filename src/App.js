import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('tr')}>Türkçe</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
}

export default App;
