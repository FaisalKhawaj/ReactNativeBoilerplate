import React from 'react';
import {Root} from './src/navigations/root';
import {ThemeProvider} from '@context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CustomFallback} from '@components';
import ErrorBoundary from 'react-native-error-boundary';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <ThemeProvider>
          <Root />
        </ThemeProvider>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
}

export default App;
