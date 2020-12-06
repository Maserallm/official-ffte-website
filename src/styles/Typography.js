import { createGlobalStyle } from "styled-components";

import font from "../assets/fonts/Montserrat-Regular.ttf";

const Typography = createGlobalStyle`

@font-face {
    font-family: "montserrat";
    src: url(${font}) format("ttf");
}

html {
    box-sizing: border-box;
    color: black;
    font-family: "montserrat", sans-serif;
  }

`;

export default Typography;
