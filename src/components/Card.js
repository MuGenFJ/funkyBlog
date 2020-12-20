import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"


const query = graphql`
  {
    allStrapiCards(limit: 3) {
      nodes {
        card_image {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        quote
        tags
      }
    }
  }
`

function Card() {

     const data = useStaticQuery(query)
     const {allStrapiCards: { nodes: cards }} = data
      
    return (
        <div className="cardsContainer">
            {
                cards.map((card, index) => {
                    return (
                        <div key={index} className="cardItems" >
                            <div className="imgBox" data-sal="slide-down" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="1000">
                                <Image className="cardImg" fluid={card.card_image.childImageSharp.fluid} alt="card-img" />
                            </div>
                            <div className="quoteBox" data-sal="fade" data-sal-delay="800" data-sal-easing="ease" data-sal-duration="1000" >
                                <p>{card.quote}</p>
                                <div className="ligne" data-sal="fade" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="1000"></div>
                                <div className="categoryBtn">
                                  <Link className="btn btn-border-1" to={`/tag/${card.tags}`}>
                                    # {card.tags}
                                  </Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Card
