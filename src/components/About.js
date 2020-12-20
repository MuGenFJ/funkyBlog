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
            <div className="imgContainter" data-sal="slide-right" data-sal-delay="1500" data-sal-easing="ease" data-sal-duration="1000">
              <Image fluid={avatar.childImageSharp.fluid} className="aboutImg" alt="about-img"/>
            </div>
              <div className="description" data-sal="slide-left" data-sal-delay="2000" data-sal-easing="ease" data-sal-duration="1000">
                <h3> {bioTitle} </h3>
                <p>{biography}</p>
              </div>
          </div>
      </>
    )
}


export default About
