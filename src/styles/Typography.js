import { createGlobalStyle } from "styled-components";

import font from "../assets/fonts/Montserrat-Regular.ttf";

import font1 from "../assets/fonts/santo___-webfont.woff";
// import font2 from "../assets/fonts/santo___-webfont.woff2";
/*, url(${font2}) format("woff2")*/
import impact from "../assets/fonts/Impact.woff";
// import impact2 from "../assets/fonts/Impact.woff2";
/*, url(${impact2}) format("woff2")

-apple-system, BlinkMacSystemFont
-apple-system, BlinkMacSystemFont
*/

const Typography = createGlobalStyle`

@font-face {
    font-family: "montserrat";
    src: url(${font}) format("ttf");
}

@font-face {
  font-family: "santos_dumont";
  src: url(${font1}) format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "impact";
  src: url(${impact}) format("woff");
  font-weight: normal;
  font-style: normal;
}

html {
    box-sizing: border-box;
    color: black;
    font-family: "montserrat", sans-serif;
  }

  .cls_1 {
    font-size: 662.98px;
    font-family: impact !important;
  }

  .cls_4 {
    font-size: 92.06px;
    font-family: santos_dumont !important;
  }

`;

export default Typography;
