import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";

import SEO from "../components/seo";
import BGvideo from "../components/bgvideo";

const HomeStyles = styled.div`
  @font-face {
    font-family: "santos_dumont";
    src: url("../assets/fonts/santo___-webfont.woff") format("woff"),
      url("../assets/fonts/santo___-webfont.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "impact";
    src: url("../assets/fonts/Impact.woff") format("woff"),
      url("../assets/fonts/Impact.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  /* Body config */
  .container 
/* CSS for SVG Overlay */

.header_wrap {
    overflow: hidden;
    /* overflow-y: auto; */
    position: relative;
    /* margin: auto; */
    /* text-align: center; */
  }

  .title {
    color: black;
    z-index: 20;
  }

  .full_screen_wrap {
    overflow-y: hidden;
    height: auto;
  }

  .transparent_text {
    fill-opacity: 0;
    /* stroke: black; */
    /* stroke-opacity: 0.5; */
  }

  video {
    padding-top: 5%;
    height: 110vh;
    width: 70vw;
  }

  .ffte {
    position: absolute;
    top: 39px;
    left: 0;
    min-width: 100%;
    height: 100%;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .cls_1 {
    font-size: 662.98px;
    font-family: impact;
  }
  .cls_2 {
    letter-spacing: 0.03em;
  }
  .cls_3 {
    letter-spacing: 0em;
  }

  .cls_4 {
    font-size: 92.06px;
    font-family: santos_dumont, SANTOSDUMONT, SANTOS DUMONT;
  }
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

  .vid_2 {
    width: 79vw;
    height: 88vh;
    overflow: hidden;
    margin-left: 14%;
  }

  @media (max-width: 1200px) {
    .vid_2 {
      width: 81vw;
      height: 88vh;
      overflow: hidden;
      margin-left: 14%;
      padding-top: 0%;
    }

    .ffte {
      top: 0px;
    }
  }
  @media (max-width: 980px) {
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

    .ffte {
      position: absolute;
      top: 0px;
      left: 4px;
      min-width: 97%;
      height: 75%;
      padding-top: 36%;
    }
  }

  @media (max-width: 830px) {
    .vid_2 {
      width: 72vw;
      height: 74vh;
      overflow: hidden;
      margin-left: 20%;
      padding-top: 0%;
      position: relative;
      top: -19px;
    }

    .ffte {
      position: absolute;
      top: 0px;
      left: 4px;
      min-width: 97%;
      height: 75%;
      padding-top: 36%;
    }
  }

  @media (max-width: 780px) {
    .vid_2 {
      width: 68vw;
      height: 74vh;
      overflow: hidden;
      margin-left: 20%;
      padding-top: 0%;
      position: relative;
      top: -110px;
    }
  }

  @media (max-width: 660px) {
    .vid_2 {
      width: 86vw;
      top: -12px;
      margin-left: 10%;
    }

    .ffte {
      top: 93px;
      left: -75px;
      min-width: 125%;
      height: 75%;
      padding-top: 36%;
    }
  }
  @media (max-width: 400px) {
    .vid_2 {
      width: 124vw;
      height: 75vh;
      margin-left: 0%;
      position: initial;
    }

    .ffte {
      top: 4px;
      left: -113px;
      min-width: 160%;
      height: 100%;
      padding-top: 0%;
    }
  }
`;

const IndexPage = () => {
  const resizeWindow = () => typeof window !== `undefined`;

  return (
    <>
      <SEO title="FFTE" />
      <HomeStyles>
        {resizeWindow() && window.location.pathname === "/" ? (
          <div className="container">
            <div className="header_wrap">
              <div className="full_screen_wrap">
                <BGvideo />
              </div>

              <div className="ffte">
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1920 812.85"
                >
                  <g className="header-backdrop" mask="url(#header-mask)">
                    <rect
                      id="cover"
                      x="-5%"
                      y="-5%"
                      width="110%"
                      height="110%"
                      style={{ fill: "white" }}
                    />
                  </g>
                  <g className="transparent_text">
                    <text
                      className="cls_1"
                      id="heading"
                      transform="translate(417.31 593.69) scale(0.96 1)"
                    >
                      <Link className="artist" to="/artist">
                        <tspan>F</tspan>
                      </Link>
                      <Link className="shop hvr-grow" to="/shop">
                        <tspan className="cls_2" x="263.83" y="0">
                          F
                        </tspan>
                      </Link>
                      {/* </text>
                </g> */}
                      <a
                        href="http://ffteblog.com/"
                        className="blog hvr-grow"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <tspan className="cls_3" x="548.24" y="0">
                          T
                        </tspan>
                      </a>
                      <Link className="contact hvr-grow" to="/connect">
                        <tspan className="cls_3" x="850.24" y="0">
                          E
                        </tspan>
                      </Link>
                    </text>
                    <Link className="artist hvr-grow" to="/artist">
                      <text
                        className="cls_4"
                        transform="translate(460.35 706.24) scale(0.96 1)"
                        id="far"
                      >
                        F
                        <tspan className="cls_5" x="52.29" y="0">
                          a
                        </tspan>
                        <tspan className="cls_6" x="86.9" y="0">
                          r
                        </tspan>
                      </text>
                    </Link>
                    <Link className="shop hvr-grow " to="/shop">
                      <text
                        className="cls_4"
                        transform="translate(717.38 705.91) scale(0.96 1)"
                        id="from"
                      >
                        <tspan className="cls_7">F</tspan>
                        <tspan className="cls_8" x="39.31" y="0">
                          r
                        </tspan>
                        <tspan className="cls_9" x="67.29" y="0">
                          o
                        </tspan>
                        <tspan x="85.89" y="0">
                          m
                        </tspan>
                      </text>
                    </Link>
                    <a
                      href="http://ffteblog.com/"
                      className="blog hvr-grow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <text
                        className="cls_4"
                        transform="translate(1023.71 705.91) scale(0.96 1)"
                        id="the"
                      >
                        <tspan className="cls_10">T</tspan>
                        <tspan className="cls_11" x="50.28" y="0">
                          h
                        </tspan>
                        <tspan x="73.8" y="0">
                          e
                        </tspan>
                      </text>
                    </a>
                    <Link className="contact hvr-grow" to="/connect">
                      <text
                        className="cls_4"
                        transform="translate(1291.5 705.91) scale(0.96 1)"
                        id="east"
                      >
                        E
                        <tspan className="cls_12" x="50.63" y="0">
                          a
                        </tspan>
                        <tspan className="cls_13" x="75.49" y="0">
                          s
                        </tspan>
                        <tspan x="119.95" y="0">
                          t
                        </tspan>
                      </text>
                    </Link>
                  </g>
                  <mask id="header-mask">
                    <use href="#cover" style={{ fill: "white" }} />
                    6
                    <use href="#heading" />
                    <use href="#far" />
                    <use href="#from" />
                    <use href="#the" />
                    <use href="#east" />
                  </mask>
                </svg>
              </div>
            </div>
          </div>
        ) : null}
      </HomeStyles>
    </>
  );
};

export default IndexPage;
