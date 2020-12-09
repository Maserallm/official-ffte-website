import React from "react";
import styled from "styled-components";

const DateStyle = styled.div`
  h1 {
    font-family: santos_dumont;
    display: flex;
    font-size: 150px;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-items: center;
    position: relative;
    top: 275px;
  }
`;

const Maintenece = () => {
  return (
    <>
      <DateStyle>
        <h1>12/11/20</h1>
      </DateStyle>
    </>
  );
};

export default Maintenece;
