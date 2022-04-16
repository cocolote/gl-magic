import 'styled-component';

declare module 'styled-component' {
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
