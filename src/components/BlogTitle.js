import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Ligne from './Ligne'

const query = graphql`
  {
    blogMain:allStrapiBlogMainTitle {
      nodes {
        Blog_main_title
      }
    }
  }
`


function BlogTitle({ title, logo, bigTitle, logoClass }) {
    const data = useStaticQuery(query);
    const {blogMain:{nodes:mainTitle}} = data

    return (
        <>
          <div className={bigTitle || title ? "blogTitleContainer" : ""}>
            <h1 className={bigTitle ? "bigTitle-h1" : "subTitle-h1"}>{bigTitle ? mainTitle[0].Blog_main_title : title}</h1>
              <span className={logoClass}><Image fixed={logo} alt={logo && "logo-title"}/></span>
          </div>
          <Ligne ligneClass={bigTitle || title ? "ligne" : ""}/>
        </>
    )
}

export default BlogTitle
