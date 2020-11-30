import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"


const query = graphql`
  {
    allStrapiAbouts {
      nodes {
        bioTitle
        biography
        avatar {
          childImageSharp {
            fluid (maxWidth: 360, maxHeight: 360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`


function About() { 

  const data = useStaticQuery(query)
  const {
    allStrapiAbouts: { nodes: about },
  } = data

    return (
      <>
        {about.map((item, index) => {
          return (
             <div key={index} className="About">
                <div className="imgContainter">
                    <Image fluid={item.avatar.childImageSharp.fluid} className="aboutImg" alt="about-img"/>
                </div>
                <div className="description">
                    <h3> {item.bioTitle} </h3>
                    <p>{item.biography}.</p>
                </div>
              </div>
                  )
            })}
        </>
    )
}


export default About
