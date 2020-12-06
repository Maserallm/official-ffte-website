import styled from "styled-components";

const ConnectStyles = styled.div`
  ul {
    list-style: none;
    display: flex;
  }

  .cold-media {
    margin: 0 1rem;
    position: relative;
    right: -60px;
  }

  figcaption li {
    margin: 0 1rem;
    position: relative;
    right: -170px;
  }

  .header_main {
    display: grid;
    gap: 10px;
  }

  .header-main h1 {
    margin: 3rem 0;
    text-align: center;
    text-transform: uppercase;
  }

  .about-ffte {
    font-family: "montserrat", sans-serif;
    font-weight: 200;
    font-size: 30px;
    line-height: 45px;
    margin: 2rem 70px 0;
    text-align: center;
  }

  /* team profiles */
  .team {
    margin: 1rem 0;
    display: grid;
    grid-template-rows: 1fr;
  }

  .team-info {
    display: grid;
    gap: 20px;
    justify-content: start;
    align-items: center;
    line-height: 1.7rem;
  }

  .team-members {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 100px;
    align-items: center;
  }

  .team-members img {
    width: 100%;
    transition: transform 0.2s;
    filter: blur(0px);
    transition: 0.533s;
  }

  .team-members img:hover {
    filter: blur(4px);
  }

  /* Bottom Page NavBar */
  .wrapper {
    display: grid;
  }

  .menu-nav {
    display: grid;
    justify-content: center;
    overflow: auto;
    white-space: nowrap;
  }

  .menu-nav li {
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

  /* Contact Form */

  .contact-ffte {
    display: grid;
    grid-template-columns: auto;
  }

  .contact-ffte > p {
    grid-column: span 1 / -1;
    text-align: center;
  }

  .contact-form {
    display: block;
    margin-top: 0em;
  }

  .user_info {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  input {
    box-shadow: none;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }

  input,
  textarea,
  select {
    -webkit-appearance: none;
    font-size: 16px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    background: transparent;
    color: rgb(0, 0, 0);
  }

  textarea {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark-color(rgb(0, 0, 0));
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textarea;
    background-color: -internal-light-dark-color(
      rgb(71, 70, 70),
      rgb(59, 59, 59)
    );
    -webkit-rtl-ordering: logical;
    flex-direction: column;
    resize: auto;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    margin: 0em;
    font: 400 13.3333px Arial;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark-color(
      rgb(118, 118, 118),
      rgb(195, 195, 195)
    );
    border-image: initial;
    padding: 2px;
  }

  .cpYcEZ {
    line-height: 1.33;
    border-top-width: initial;
    border-right-width: initial;
    border-left-width: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    padding-bottom: 15px;
    width: 100%;
    border-style: none none none;
    border-image: initial;
    outline: none;
  }

  .eJFNDT {
    line-height: 1.33;
    border-top-width: initial;
    border-right-width: initial;
    border-left-width: initial;
    border-top-color: initial;
    border-right-color: initial;
    border-left-color: initial;
    padding-bottom: 15px;
    width: 100%;
    resize: vertical;
    min-height: 125px;
    border-style: none none none;
    border-image: initial;
    outline: none;
  }

  .cpYcEZ:focus {
    border-bottom-color: black;
  }

  .contact-form {
    color: whitesmoke;
  }

  .cust-form {
    opacity: 1;
    pointer-events: auto;
    margin-bottom: var(--space-1);
  }

  .ibSQGl {
    -webkit-appearance: none;
    font-weight: 500;
    color: rgb(90, 48, 242);
    cursor: pointer;
    background: none;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    padding: 0px;
    margin: 0px;
    outline: 0px;
  }

  .input-container {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    width: 100%;
    margin-bottom: 15px;
  }

  .icon {
    padding: 10px;
    background: black;
    color: white;
    min-width: 50px;
    text-align: center;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    outline: none;
  }

  .input-field:focus {
    border: 2px solid dodgerblue;
  }

  /* Set a style for the submit button */
  .btn {
    background-color: black;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  .btn:hover {
    opacity: 1;
  }

  .button-container {
    margin: 0px 20rem;
  }

  [placeholder] {
    text-align: center;
    color: black;
    font-weight: 600;
  }

  @media (max-width: 703px) {
    .header-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      overflow-inline: auto;
    }

    ul {
      list-style: none;
      display: flex;
    }

    .eazy-media {
      list-style: none;
      display: flex;
      margin-left: 30px;
    }

    .contact-ffte {
      display: grid;
      grid-template-rows: auto;
    }

    .contact-form {
      margin: 0;
    }

    .wrapper {
      display: grid;
    }

    .menu-nav {
      display: grid;
      justify-content: start;
      overflow: auto;
      white-space: nowrap;
      width: 80%;
      margin: 2rem 0;
    }

    #music_content_svg {
      width: 100%;
      position: unset;
    }
  }

  @media (max-width: 768px) {
    .contact-form {
      margin: auto;
    }

    .header-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    .eazy-media {
      list-style: none;
      display: flex;
      margin-left: 0px;
    }
  }

  @media (max-width: 540px) {
    .eazy-media {
      list-style: none;
      display: flex;
      justify-items: center;
      align-items: center;
      margin-left: 0px;
      padding: 0px;
    }

    figcaption {
      display: flex;
      align-content: center;
      justify-content: center;
    }

    .eazy-statement {
      padding-right: 38px;
      max-width: 375px;
    }

    .cold-media {
      right: -30px;
    }

    .contact-ffte {
      max-width: 375px;
    }

    .contact-ffte > p {
      text-align: center;
    }

    .contact-form {
      max-width: 375px;
      margin: auto;
    }

    figcaption li {
      right: 0px;
    }

    figure {
      margin: 0px;
      max-width: 375px;
    }

    .team-members {
      grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
    }
  }
`;

export default ConnectStyles;
