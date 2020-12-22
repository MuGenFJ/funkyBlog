import React from 'react'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        image
        twitterUsername
        siteDesc: description
        siteTitle: title
        siteUrl
      }
    }
  }
`

function SEO({ title, description }) {
    const { site } = useStaticQuery(query);
    const { siteDesc, siteTitle, siteUrl, image, twitterUsername } = site.siteMetadata
    return (
        <Helmet htmlAttributes={{lang: "en"}} title={`${title} | ${siteTitle}`}>
            <meta name="description" content={description || siteDesc} />
            <meta name="image" content={image} />
            {/*twiiter cards */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:creator" content={twitterUsername}/>
            <meta name="twitter:title" content={siteTitle}/>
            <meta name="twitter:desc" content={siteDesc}/>
            <meta name="twitter:image" content={ `${siteUrl} ${image}`}/>
        </Helmet>
    )
}

export default SEO
