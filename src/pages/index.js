import React from 'react'
import { graphql } from "gatsby"
import About from '../components/About'
import BlogTitle from '../components/BlogTitle'
// import LogoTitle from "../images/assets/logoTitle.svg"
// import Avatar from "../images/assets/avatar.png"
// import endLogo from "../images/assets/endLogo.png"
import Card from '../components/Card'
import Layout from '../components/Layout'
import Articles from '../components/Articles'
import Pagination from '../components/Pagination'
import SignUp from '../components/SignUp'
import GreetingBox from '../components/GreetingBox'



function index({ data }) {

  const {
    allStrapiBlogs: { nodes: blogs },
    allStrapiLogo: {nodes: logos}
  } = data
  
  const { startLogo, avatarLogo, endLogo } = logos[0]
  


  
  return (
    <>
      <Layout>
        <div className="blogBox"> 
          <BlogTitle logo={startLogo.childImageSharp.fixed} bigTitle logoClass="logoTitle"/>
          <About />
          {/* <BlogTitle title="Article Category" /> */}
          <Card />
          <BlogTitle logo={avatarLogo.childImageSharp.fixed} title="Latest Articles" logoClass="avatar" />
          <Articles blogs={blogs} />
          <Pagination />
          <BlogTitle logo={endLogo.childImageSharp.fixed} logoClass="endLogo" />
          <SignUp />
          <GreetingBox />
        </div>
      </Layout>
    </>
  )
}

 export const query = graphql`
  {
    allStrapiBlogs(limit: 3, filter: {landing: {eq: true}}, sort: {fields: date, order: DESC}) {
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
     allStrapiLogo {
      nodes {
        startLogo {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        avatarLogo {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
        endLogo {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default index
