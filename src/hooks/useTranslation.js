import { useState, useEffect } from 'react';

const useTranslation = () => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../translations/${language}.json`);
        setTranslations(response);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to English if there's an error
        if (language !== 'en') {
          const enResponse = await import('../translations/en.json');
          setTranslations(enResponse);
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key) => {
    return translations[key] || key;
  };

  return { t, language, changeLanguage, isLoading };
};

export default useTranslation;
