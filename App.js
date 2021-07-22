import React from 'react';
import { SafeAreaView } from 'react-native';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// Import Composants
import Todos from './src/components/Todos';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <PaperProvider theme={theme}>
    <Todos />
    </PaperProvider>
    </SafeAreaView>
  )
}

export default App;