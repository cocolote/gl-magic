import { DefaultTheme } from 'styled-component';

const myTheme: DefaultTheme = {
  palette: {
    highlight: '#C00',
    mainBg: '#222',
    secondaryBg: '#333',
    contrast: '#777',
    text: {
      primary: '#FFF',
      secondary: '#BBB',
    },
    textField: {
      border: '1px solid #777',
      background: '#222',
      borderRadius: '5px',
    }
  },
};

export { myTheme };
