import React from 'react'
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from '../components/Layout'
import Articles from '../components/Articles'
import SignUp from '../components/SignUp'
import GreetingBox from '../components/GreetingBox'

function tagPageTemplate({ data }) {
   
    const {
        allStrapiCards: { nodes: cards },
        allStrapiBlogs: { nodes: blogs }
    } = data

    return (
        <Layout>
            <div className="thoughtsContainer">
                <div className="imageBox">
                      <Image className="sideImage" fluid={cards[0].pageSideImage.childImageSharp.fluid} alt="sideImage" />
                </div>
                <div className="separation"></div>
                <div className="articleBox">
                    <Articles blogs={blogs} />  
                </div>
                <div className="pageTag">
                    <span>#{cards[0].tags}</span>
                </div>
                <SignUp />
                <GreetingBox noNeed />
            </div>
        </Layout>
    )
}

export const tagQuery = graphql`
    query($tag: String!){
        allStrapiBlogs(filter: {tags: {eq: $tag}}, sort: {order: DESC, fields: date})  {
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
        allStrapiCards(filter: {tags: {eq: $tag }}) {
             nodes {
                tags
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

export default tagPageTemplate
