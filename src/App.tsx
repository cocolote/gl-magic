import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import { myTheme } from './shared/styles/my-theme';
import { GlobalStyle } from './shared/styles/global-styles';
import NavBase from "@shared/components/nav-base/nav-base";
import Cards from '@features/cards/cards';

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Router>
        <NavBase>
          <Switch>
            <Redirect exact from="/" to="/cards" />
            <Route path="/cards">
              <Cards />
            </Route>
            <Route path="/sets">
              <div>this is another link</div>
            </Route>
          </Switch>
        </NavBase>
      </Router>
    </ThemeProvider>
  );
}

export default App;
