import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import "normalize.css";

import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Navbar from "./nav";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Typography />
      <div>
        <main>{children}</main>
        <Navbar />
      </div>
    </>
  );
};

export default Layout;
