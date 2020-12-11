import React from "react";
import styled from "styled-components";

const DateStyle = styled.div`
  h11 {
    font-family: santos_dumont;
    display: flex;
    font-size: 120px;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-items: center;
    position: relative;
    top: 275px;
  }

  .container_ {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
  }

  .fwStyle {
    font-family: santos_dumont;
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    font-size: 150px;
    padding: 10px;
    grid-row: 2 / 3;
  }

  @media (max-width: 703px) {
    .container_ {
      margin: auto;
      height: 50vh;
    }

    .fwStyle {
      font-size: 75px;
      align-items: center;
      justify-items: center;
    }
  }
`;

const Maintenece = () => {
  return (
    <>
      <DateStyle>
        <div className="container_">
          <h1 className="fwStyle">12/11/20</h1>
        </div>
      </DateStyle>
    </>
  );
};

export default Maintenece;
