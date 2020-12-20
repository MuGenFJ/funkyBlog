
module.exports = {

  siteMetadata: {
    title: "Hope's Blog",
    description: "My personal blog",
    url: "https://hopes-blog.com",
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
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        //   contentTypes : `jobs`, `projects`, `blogs`,
        //   singleType : `about`
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`abouts`,`cards`, `logo`, `blogs`],
        singleTypes: [`blog-main-title`],
      },
    },
    
    {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: "https://gmail.us7.list-manage.com/subscribe/post?u=6bd378200df70746bcc50445a&amp;id=cd0ef97ccc", // string; add your MC list endpoint here; see instructions below
            timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
    },
    },

    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //       },
    //     ],
    //   },
    // },
    
  ],
}
