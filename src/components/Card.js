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
     const {
    allStrapiCards: { nodes: cards },
  } = data
      
    return (
        <div className="cardsContainer">
            {
                cards.map((card, index) => {
                    return (
                        <div key={index} className="cardItems">
                            <div className="imgBox">
                                <Image className="cardImg" fluid={card.card_image.childImageSharp.fluid} alt="card-img" />
                            </div>
                            <div className="quoteBox">
                                <p>{card.quote}</p>
                                <div className="ligne"></div>
                                <div className="categoryBtn">
                                  <Link className="btn btn-border-1" to={`/${card.tags}`}>
                                    {card.tags}
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
