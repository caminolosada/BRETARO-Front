import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      secondary: string;
      tertiary: string;
      goodFeedback: string;
      badFeedBack: string;
      generalText: string;
    };

    fonts: {
      primary: string;
    };

    fontSize: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };

    fontWeight: {
      regular: string;
      bold: string;
    };
  }
}

export default DefaultTheme;
