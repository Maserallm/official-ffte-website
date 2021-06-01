import React from "react";
import { Link } from "gatsby";

const SVG = () => {
  return (
    <>
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
            <Link
              className="shop hvr-grow"
              to="https://shop.farfromtheeast.com/"
            >
              <tspan className="cls_2" x="263.83" y="0">
                F
              </tspan>
            </Link>
            {/* </text>
                </g> */}
            {/* Code for the link to FFTE BLOG SITE */}
            {/* <a
                          href="http://ffteblog.com/"
                          className="blog hvr-grow"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <tspan className="cls_3" x="548.24" y="0">
                            T
                          </tspan>
                        </a> */}
            <Link className="contact hvr-grow" to="/blog">
              <tspan className="cls_3" x="548.24" y="0">
                T
              </tspan>
            </Link>
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
          <Link
            className="shop hvr-grow "
            to="https://shop.farfromtheeast.com/"
          >
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
          {/* Code for the link to FFTE BLOG SITE */}
          {/* <a
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
                      </a> */}
          <Link className="blog hvr-grow">
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
          </Link>
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
          <use href="#heading" />
          <use href="#far" />
          <use href="#from" />
          <use href="#the" />
          <use href="#east" />
        </mask>
      </svg>
    </>
  );
};

export default SVG;
