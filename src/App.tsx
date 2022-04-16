import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import { myTheme } from './shared/styles/my-theme';
import { GlobalStyle } from './shared/styles/global-styles';
import Cards from './features/cards/cards';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Redirect exact from="/" to="/cards" />
          <Route path="/cards">
            <Cards />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
