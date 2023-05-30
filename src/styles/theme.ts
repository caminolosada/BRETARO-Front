import { DefaultTheme } from "styled-components";
import "@fontsource/libre-baskerville";

const theme: DefaultTheme = {
  colors: {
    background: "#e9def0",
    primary: "#c3a0d2",
    secondary: "#faf7fc",
    tertiary: "#edd973",
    goodFeedback: "#54935e",
    badFeedBack: "#ed143b",
  },

  fonts: {
    primary: "Libre baskerville",
  },

  fontSize: {
    small: "1rem",
    medium: "1.125rem",
    large: "1.25rem",
    extraLarge: "1.875rem",
  },

  fontWeight: {
    regular: "400",
    bold: "700",
  },
};

export default theme;
