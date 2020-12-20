import React from 'react'
import { graphql } from "gatsby"
import About from '../components/About'
import BlogTitle from '../components/BlogTitle'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Articles from '../components/Articles'
import SignUp from '../components/SignUp'
import GreetingBox from '../components/GreetingBox'
import ForMoreBtn from '../components/ForMoreBtn'
import SEO from "../components/SEO"


function index({ data }) {

  const {
    allStrapiBlogs: { nodes: blogs },
    allStrapiLogo: {nodes: logos}
  } = data
  
  const { startLogo, avatarLogo, endLogo } = logos[0]
  


  
  return (
    <>
      <Layout>
        <SEO title="Home" description="HomePage"/>
        <div className="blogBox"> 
          <BlogTitle logo={startLogo.childImageSharp.fixed} bigTitle logoClass="logoTitle"/>
          <About />
          <Card />
          <BlogTitle logo={avatarLogo.childImageSharp.fixed} title="Latest Articles" logoClass="avatar" />
          <Articles blogs={blogs} />
          <ForMoreBtn />
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
    allStrapiBlogs(limit: 3, sort: {fields: date, order: DESC}) {
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
            fixed(width: 40)  {
              ...GatsbyImageSharpFixed
            }
          }
        }
        avatarLogo {
          childImageSharp {
            fixed(width: 40)  {
              ...GatsbyImageSharpFixed
            }
          }
        }
        endLogo {
          childImageSharp {
            fixed(width: 40)  {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default index
