import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
    {
      file(relativePath: {eq: "about-img.png"}) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `


function About() {

    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query)

    return (
        <>
            <div className="About">
                <div className="imgContainter">
                    <Image fluid={fluid} className="aboutImg" alt="about-img"/>
                </div>
                <div className="description">
                    <h3>Welcome to my Blog !</h3>
                    <p>Retro pitchfork DIY ethical, man braid fanny pack iceland banh mi cold-pressed sriracha cronut art party. Palo santo polaroid trust fund mumblecore sartorial. Listicle trust fund deep v, austin pork belly cred celiac messenger bag subway tile sriracha mumblecore everyday carry. Banjo vinyl unicorn hell of, chicharrones scenester roof party pour-over direct trade helvetica wolf ramps iceland normcore kitsch.</p>
                    {/* <p>Retro pitchfork DIY ethical, man braid fanny pack iceland banh mi cold-pressed sriracha cronut art party. Palo santo polaroid trust fund mumblecore sartorial. Listicle trust fund deep v, austin pork belly cred celiac messenger bag subway tile sriracha mumblecore everyday carry. Banjo vinyl unicorn hell of, chicharrones scenester roof party pour-over direct trade helvetica wolf ramps iceland normcore kitsch.</p> */}
                </div>
            </div>
        </>
    )
}

export default About
