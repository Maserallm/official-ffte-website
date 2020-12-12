import { createGlobalStyle } from "styled-components";

import font from "../assets/fonts/Montserrat-Regular.ttf";

import font1 from "../assets/fonts/santo___-webfont.woff";
import font2 from "../assets/fonts/santo___-webfont.woff2";

import impact from "../assets/fonts/Impact.woff";
import impact2 from "../assets/fonts/Impact.woff2";

const Typography = createGlobalStyle`

@font-face {
    font-family: "montserrat";
    src: url(${font}) format("ttf");
}

@font-face {
  font-family: "santos_dumont";
  src: url(${font1}) format("woff"), url(${font2}) format("woff2");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "impact";
  src: url(${impact}) format("woff"), url(${impact2}) format("woff2");
  font-weight: normal;
  font-style: normal;
}

html {
    box-sizing: border-box;
    color: black;
    font-family: "montserrat", sans-serif;
  }

`;

export default Typography;
