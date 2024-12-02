import React, {useEffect, useState} from 'react';
import {Root} from './src/navigations/root';
import {getLocales} from 'react-native-localize';
import {IntlProvider, ThemeProvider} from '@context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CustomFallback} from '@components';
import ErrorBoundary from 'react-native-error-boundary';

function App(): React.JSX.Element {
  const [locale, setLocale] = useState('en'); // Default locale is French

  const determineLocale = () => {
    const deviceLocales = getLocales();
    console.log('locales ', deviceLocales[0].languageCode);
    if (deviceLocales && deviceLocales.length > 0) {
      const deviceLocale = deviceLocales[0].languageCode;
      setLocale(deviceLocale === 'en' ? 'en' : 'ar');
    }
  };

  useEffect(() => {
    determineLocale();
  }, []);
  return (
    <GestureHandlerRootView>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <ThemeProvider>
          <IntlProvider locale={locale}>
            <Root />
          </IntlProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
}

export default App;
