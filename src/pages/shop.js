import React from "react";
import styled from "styled-components";

const ShopStyles = styled.div`
  .header1 {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .header2 {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    height: 25vh;
  }

  .fwStyle {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    font-size: 50px;
    padding: 10px;
  }

  @media (max-width: 703px) {
    .container_ {
      margin: auto;
      height: 50vh;
    }
    .header2 {
      height: 15vh;
    }

    .fwStyle {
      font-size: 30px;
    }
  }
`;

const Shop = () => {
  return (
    <ShopStyles>
      <div className="container_">
        <h1 className="header1">OFFICIAL FFTE SHOP</h1>
        <p className="header2">The Latest Drops From the Ends.</p>
        <h3 className="fwStyle">WINTER 2021</h3>
      </div>
    </ShopStyles>
  );
};

export default Shop;
