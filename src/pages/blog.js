import React from "react";
import styled from "styled-components";

const BlogStyles = styled.div`
  .header1 {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }

  .header2 {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    // height: 25vh;
  }

  .fwStyle {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    font-size: 50px;
    padding: 10px;
  }

  .shop_content {
    margin-top: 2rem;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 0%;
  }

  @media (max-width: 703px) {
    .container_ {
      margin: auto;
      height: 80vh;
    }
    .header2 {
      height: 0vh;
    }

    .fwStyle {
      font-size: 30px;
    }

    .shop_content {
      margin-top: 2rem;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      margin: 0%;
      justify-content: center;
    }
  }
`;

const Blog = () => {
  return (
    <BlogStyles>
      <div className="container_">
        {/* <h1 className="header1">OFFICIAL FFTE SHOP</h1> */}
        {/* <p className="header2">03.05.2021</p> */}
        <div className="shop_content">
          <img
            src="https://res.cloudinary.com/dtxylaqlc/image/upload/v1618281422/FFTE%20Website/New_FFTE_LOGO_zhu6yn.jpg"
            alt="FFTE Blog Logo"
          />
        </div>
      </div>
    </BlogStyles>
  );
};

export default Blog;
