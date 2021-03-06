require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})


module.exports = {

  siteMetadata: {
    title: "Hope's Blog",
    description: "My personal blog",
    siteUrl: "https://hope-blog.netlify.app/",
    twitterUsername: "@ajHope",
    image: "/twitter-img.png",
    author: `@ajHope`,
},
  
  plugins: [

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-scroll-reveal`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.NODE_ENV
            ? "https://hopeblog-cms.herokuapp.com"
            : `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`abouts`,`cards`, `logo`, `blogs`],
        singleTypes: [`blog-main-title`],
      },
    },
    
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            // endpoint: process.env.MAILCHIMP_ENDPOINT,
            endpoint: "https://gmail.us7.list-manage.com/subscribe/post?u=6bd378200df70746bcc50445a&amp;id=cd0ef97ccc",
            timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    
  ],
}
