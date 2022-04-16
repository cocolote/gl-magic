import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.palette.text.primary};
    background-color: ${props => props.theme.palette.mainBg};
    font-family: 'OutFit', 'Roboto', 'Arial', sans-serif;
  }
`;

export { GlobalStyle };
