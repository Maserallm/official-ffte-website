import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import font1 from "../assets/fonts/santo___-webfont.woff";
import font2 from "../assets/fonts/santo___-webfont.woff2";

const NavStyles = styled.div`
  @font-face {
    font-family: "santos_dumont";
    src: url(${font1}) format("woff"), 
    font-weight: normal;
    font-style: normal;
  }

  .wrapper {
    display: block;
  }

  .menu_nav {
    display: grid;
    justify-content: center;
    overflow: auto;
    white-space: nowrap;
  }

  .menu_nav li {
    margin-left: 50px;
    margin-right: 50px;
    font-family: santos_dumont;
  }

  .zoom {
    transition: transform 0.2s;
  }

  .zoom:hover {
    -ms-transform: scale(1.5);
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }

  .list {
    display: flex;
    list-style: none;
  }

  @media (max-width: 703px) {
    .menu_nav {
      display: grid;
      justify-content: start;
      overflow: auto;
      white-space: nowrap;
      width: 91%;
      margin: 2rem 0;
    }

    .list {
      margin-left: 0;
      padding-left: 0;
    }
  }
`;

const Navbar = () => {
  return (
    // <NavStyles style={{ display: "none" }}>
    <NavStyles>
      <div className="wrapper">
        <div className="menu_nav">
          <ul className="list">
            <Link className="zoom" to="/">
              <li>
                <h2>HOME</h2>
              </li>
            </Link>
            <Link className="zoom" to="/artist">
              <li>
                <h2>ARTIST</h2>
              </li>
            </Link>
            <Link className="zoom" to="/shop">
              <li>
                <h2>SHOP</h2>
              </li>
            </Link>
            <a
              className="zoom"
              href="http://ffteblog.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <h2>BLOG</h2>
              </li>
            </a>
            <Link className="zoom" to="/connect">
              <li>
                <h2>CONNECT</h2>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
};

export default Navbar;
