import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      highlight: string,
      mainBg: string,
      secondaryBg: string,
      contrast: string,
      text: {
        primary: string,
        secondary: string,
      },
    },
    textField: {
      border: string,
      borderRadius: string,
      background: string,
    }
  }
}
