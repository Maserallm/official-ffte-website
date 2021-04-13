// require("dotenv").config();
// import dotenv from "dotenv";

// dotenv.config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Official FFTE Website`,
    description: `Official website of the FFTE brand`,
    author: `Eazy & Woo.Marc`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png` // This path is relative to the root of the site.
      }
    }
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     resourceType: `image`,
    //     tags: true
    //   }
    // }
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["montserrat", "santos_dumont", "impact"],
    //       urls: ["/fonts/font.css"]
    //     }
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
