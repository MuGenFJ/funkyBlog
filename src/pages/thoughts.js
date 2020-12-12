import React from 'react'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from '../components/Layout'
import Articles from '../components/Articles'
import SignUp from '../components/SignUp'
import GreetingBox from '../components/GreetingBox'

function thoughts({data}) {
  const {
    allStrapiBlogs: { nodes: blogs },
    allStrapiCards: { nodes: cards}
  } = data
  
    return (
        <Layout>
            <div className="thoughtsContainer">
                <div className="imageBox">
                   {cards.map((card, index) => {
                    return (
                      <Image key={index} className="sideImage" fluid={card.pageSideImage.childImageSharp.fluid} alt="sideImage" />
                    )
                  })}
                </div>
                <div className="separation"></div>
                <div className="articleBox">
                    <Articles blogs={blogs} />  
                </div>
                <div className="pageTag">
                    <span>#</span>
                    <span>T</span>
                    <span>H</span>
                    <span>O</span>
                    <span>U</span>
                    <span>G</span>
                    <span>H</span>
                    <span>T</span>
                    <span>S</span>
                    <span>#</span>
                </div>
                <SignUp />
                <GreetingBox noNeed />
            </div>
        </Layout>
    )
}

 export const query = graphql`
  {
    allStrapiBlogs(filter: {tags: {eq: "thoughts"}}, sort: {order: DESC, fields: date})  {
      nodes {
        title
        description
        slug
        content
        date(formatString: "MMMM Do YYYY")
        strapiId
        image {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
    allStrapiCards(filter: {tags: {eq: "thoughts"}}) {
      nodes {
        pageSideImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default thoughts
