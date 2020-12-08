import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
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
            {mainTitle.map((item, index) => {
                return (
                     <div key={index} className={bigTitle || title ? "blogTitleContainer" : ""}>
                        <h1 className={bigTitle ? "bigTitle-h1" : "subTitle-h1"}>{bigTitle ? item.Blog_main_title : title}</h1>
                        <span className={logoClass}><img src={logo ? logo : ""} alt={logo && "logo-title"}/></span>
                    </div>
                )
            })}
        <Ligne ligneClass={bigTitle || title ? "ligne" : ""}/>
        </>
    )
}

export default BlogTitle
