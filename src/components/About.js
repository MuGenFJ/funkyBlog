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

  const {bioTitle, biography, avatar} = about[0]

    return (
      <>
         <div className="About">
            <div className="imgContainter">
              <Image fluid={avatar.childImageSharp.fluid} className="aboutImg" alt="about-img"/>
            </div>
              <div className="description">
                <h3> {bioTitle} </h3>
                <p>{biography}</p>
              </div>
          </div>
      </>
    )
}


export default About
