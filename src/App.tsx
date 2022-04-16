import React from 'react';
import { ThemeProvider } from 'styled-components';

import { myTheme } from './shared/styles/my-theme';
import { GlobalStyle } from './shared/styles/global-styles';
import Cards from './features/cards/cards';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Cards />
    </ThemeProvider>
  );
}

export default App;
