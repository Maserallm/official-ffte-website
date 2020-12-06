import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  /* Body config */
  body {
    margin: 0;
    min-height: auto;
    line-height: 1.5rem;
  }
  
  a {
    color: black;
    text-decoration: none;
    font-weight: 500;
  }
  
  
  a:active,
  a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none;
  }

  img {
      width: 100%;
  }
  
  .no_nav {
    display: none;
  }
  
`;

export default GlobalStyles;
