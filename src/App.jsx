import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || 'en';
  }, [i18n.resolvedLanguage]);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
