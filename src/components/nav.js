import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// import font1 from "../assets/fonts/santo___-webfont.woff";
// import font2 from "../assets/fonts/santo___-webfont.woff2";

//   src: url(${font1}) format("woff"), url(${font2}) format("woff2");
const NavStyles = styled.div`
  // /*@font-face {
  //   font-family: "santos_dumont";

  //   font-weight: normal;
  //   font-style: normal;
  // }*/

  h2 {
    font-family: santos_dumont, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
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
    font-family: santos_dumont, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
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
            <li>
              <Link className="zoom" to="/">
                <h2>HOME</h2>
              </Link>
            </li>
            <li>
              <Link className="zoom" to="/artist">
                <h2>ARTIST</h2>
              </Link>
            </li>
            <li>
              <Link className="zoom" to="https://shop.farfromtheeast.com">
                <h2>SHOP</h2>
              </Link>
            </li>
            {/* Code that links nav to FFTE Blog Site */}
            {/* <a
              className="zoom"
              href="http://ffteblog.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <h2>BLOG</h2>
              </li>
            </a> */}
            <li>
              <Link className="zoom" to="/blog">
                <h2>BLOG</h2>
              </Link>
            </li>
            <li>
              <Link className="zoom" to="/connect">
                <h2>CONNECT</h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavStyles>
  );
};

export default Navbar;
