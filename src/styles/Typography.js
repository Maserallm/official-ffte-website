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

const santos_dumont =
  "https://res.cloudinary.com/dtxylaqlc/raw/upload/v1621867347/FFTE%20Website/SANTO____e9htic.otf";

const impact_font =
  "https://res.cloudinary.com/dtxylaqlc/raw/upload/v1621866668/FFTE%20Website/impact_tsbvtk.ttf";

const Typography = createGlobalStyle`

@font-face {
    font-family: "montserrat";
    src: url(${font}) format("ttf");
}

@font-face {
  font-family: "santos_dumont";
  // src: url(${font1}) format("woff");
  src: url(${santos_dumont});
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "impact";
  // src: url(${impact}) format("woff");
  src: url(${impact_font});
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
    font-family: impact; 
  }

  .cls_4 {
    font-size: 92.06px;
    font-family: santos_dumont; 
  }

`;

export default Typography;
