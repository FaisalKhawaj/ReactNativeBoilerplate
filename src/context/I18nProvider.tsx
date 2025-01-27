import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {i18n, translate} from '../locales';

interface I18nContextProps {
  currentLocale: string;
  translate: typeof translate;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextProps>({
  currentLocale: i18n.locale,
  translate,
  toggleLocale: () => {}, // No-op by default
});

export const I18nProvider: React.FC<{
  children: ReactNode;
  initialLocale?: string;
}> = ({
  children,
  initialLocale = 'en', // Default locale
}) => {
  const [currentLocale, setCurrentLocale] = useState(initialLocale);

  useEffect(() => {
    i18n.locale = currentLocale; // Update the locale in `i18n`
  }, [currentLocale]);

  const toggleLocale = () => {
    setCurrentLocale(prevLocale => (prevLocale === 'en' ? 'sp' : 'en')); // Toggle between English and Austrian
  };

  return (
    <I18nContext.Provider value={{currentLocale, translate, toggleLocale}}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
