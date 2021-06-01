import React from "react";
// import { Link } from "gatsby";
import styled from "styled-components";
// import impact from "../assets/fonts/Impact.woff";
// import impact2 from "../assets/fonts/Impact.woff2";
// import santos_dumont from "../assets/fonts/santo___-webfont.woff";
// import santos_dumont2 from "../assets/fonts/santo___-webfont.woff2";

// import Layout from "../components/layout";
// import Maintenece from "../components/maintainance_message";

import SEO from "../components/seo";
import BGvideo from "../components/bgvideo";
// import SVG from "../components/svg";
import FFTESVG from "../components/FFTESVG";

/*@font-face {
    font-family: "impact";
    src: url(${impact}) format("woff"), url(${impact2}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "santos_dumont";
    src: url(${santos_dumont}) format("woff"),
      url(${santos_dumont2}) format("woff2");
    font-weight: normal;
    font-style: normal;
  }*/

const HomeStyles = styled.div`
 

  /* Body config */
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* CSS for SVG Overlay */

  .header_wrap {
    /*overflow: hidden;*/
    /* overflow-y: auto; */
    /* position: relative;*/
    /* margin: auto; */
    /* text-align: center; */
  }

  .title {
    color: black;
    z-index: 20;
  }

  .full_screen_wrap {
    overflow-y: hidden;
    overflow-x: hidden;
    height: auto;
    position: relative;
  }

  .transparent_text {
    fill-opacity: 0;
    /* stroke: black; */
    /* stroke-opacity: 0.5; */
  }

  /*video {
    padding-top: 5%;
    height: 80vh;
    width: 70vw;
  }*/

  /*.ffte {
    position: absolute;
    top: 1%;
    left: 3%;
    min-width: 107%;
    height: 100%;
  }*/

  .ffte {
    position: absolute;
    top: -3%;
    left: -10%;
    min-width: 124%;
    height: 100%;
    overflow: hidden;
  }

  svg {
    position: absolute;
    // top: 0;
    top: -22%;
    left: 0;
    height: 140%;
    width: 100%;
  }
// NEW SVG FFTE LOGO

@namespace svg url(http://www.w3.org/2000/svg);
  svg rect {
    fill: white;
  }
  svg > rect {
      -webkit-mask: url(#mask);
      mask: url(#mask);
  }

  .ffte_Logo_position {
    transform: translate(0,100);
    -webkit-transform: translate(0,100);
  }

  svg|a:link, svg|a:visited {
    cursor: pointer;
  }

  /*
  .cls_1 {
    font-size: 662.98px;
    font-family: impact, impact, -apple-system, BlinkMacSystemFont;
  }
  */
 
  .cls_2 {
    letter-spacing: 0.03em;
  }
  .cls_3 {
    letter-spacing: 0em;
  }

  /*
  .cls_4 {
    font-size: 92.06px;
    font-family: santos_dumont, santos_dumont, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  */
  .cls_5 {
    letter-spacing: 0.03em;
  }
  .cls_6 {
    letter-spacing: 0em;
  }
  .cls_7 {
    letter-spacing: -0.14em;
  }
  .cls_8 {
    letter-spacing: 0.06em;
  }
  .cls_9 {
    letter-spacing: 0.03em;
  }
  .cls_10 {
    letter-spacing: -0.14em;
  }
  .cls_11 {
    letter-spacing: 0.01em;
  }
  .cls_12 {
    letter-spacing: -0.08em;
  }
  .cls_13 {
    letter-spacing: 0.12em;
  }

  .zoom {
    transition: transform 0.2s;
  }

  .zoom:hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }

  .vid_21 {
    width: 79vw;
    height: 88vh;
    overflow: hidden;
    // for ffte these days red video
    margin-left: 6%;
    padding-top: 0%;
    height: 80vh;
    width: 70vw;
  }

  @media (max-width: 1140px) {
    .vid_222 {
      width: 86vw;
      height: 74vh;
      overflow: hidden;
      margin-left: 10%;
      padding-top: 0%;
      position: relative;
      top: -9px;
    }

    .vid_2 {
      width: 72vw;
      height: 74vh;
      overflow: hidden;
      margin-left: 20%;
      padding-top: 0%;
      position: relative;
      top: -99px;
    }

    /*.ffte {
      position: absolute;
      top: -6%;
      left: 0%;
      min-width: 99%;
      height: 100%;
      
    }*/
  }

  @media (max-width: 740px) {
    /*.ffte {
      top: -7%;
      min-width: 100%;
      padding-top: 36%;
    }*/
  }

  @media (max-width: 680px) {
    .vid_21 {
      width: 75vw;
    }

    .ffte {
      top: 0%;
      left: -13%;
      min-width: 126%;
    
  }
  @media (max-width: 540px) {
    /*
    .cls_4 {
      font-size: 92.06px;
      font-family: santos_dumont, santos_dumont, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .cls_1 {
      font-size: 662.98px;
      font-family: impact, impact, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    */

    .full_screen_wrap {
      overflow-x: hidden;
    }

    .vid_21 {
      width: 100vw;
      height: 65vh;
    }

    .ffte {
      top: -1%;
      left: -24%;
      min-width: 145%;
      height: 100%;
      padding-top: 0%;
      overflow: hidden;
    }
  }
`;

const IndexPage = () => {
  const resizeWindow = () => typeof window !== `undefined`;

  return (
    <>
      <SEO title="FFTE" />
      {/* <Maintenece /> */}
      {/* <HomeStyles style={{ display: "none" }}> */}
      <HomeStyles>
        {resizeWindow() && window.location.pathname === "/" ? (
          <div className="container">
            <div className="header_wrap">
              <div className="full_screen_wrap">
                <BGvideo />

                <div className="ffte">
                  {/* <SVG /> */}
                  <FFTESVG />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </HomeStyles>
    </>
  );
};

export default IndexPage;
