import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import articleImg from "../images/Articles2.png"
import Articles from '../components/Articles'
import SignUp from '../components/SignUp'
import GreetingBox from '../components/GreetingBox'

function thoughts({data}) {
    const { allStrapiBlogs: { nodes: blogs } } = data
    return (
        <Layout>
            <div className="thoughtsContainer">
                <div className="imageBox"><img src={articleImg} alt="" /></div>
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
    allStrapiBlogs(filter: {landing: {eq: true}}, sort: {fields: date, order: DESC}) {
      nodes {
        title
        description
        content
        date(formatString: "MMMM DD YYYY")
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
  }
`

export default thoughts
