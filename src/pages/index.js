import React from 'react'
import { graphql } from "gatsby"
import About from '../components/About'
import BlogTitle from '../components/BlogTitle'
import LogoTitle from "../images/assets/logoTitle.svg"
import Avatar from "../images/assets/avatar.png"
import endLogo from "../images/assets/endLogo.png"
import Card from '../components/Card'
import Layout from '../components/Layout'
import Articles from '../components/Articles'
import Pagination from '../components/Pagination'
import SignUp from '../components/SignUp'
import GreetingBox from '../components/GreetingBox'



function index({ data }) {

  const { allStrapiBlogs: { nodes: blogs } } = data
  
  return (
    <>
      <Layout>
        <div className="blogBox"> 
          <BlogTitle logo={LogoTitle} bigTitle logoClass="logoTitle"/>
          <About />
          <BlogTitle title="Article Category" />
          <Card />
          <BlogTitle logo={Avatar} title="Latest Articles" logoClass="avatar" />
          <Articles blogs={blogs} />
          <Pagination />
          <BlogTitle logo={endLogo} logoClass="endLogo" />
          <SignUp />
          <GreetingBox />
        </div>
      </Layout>
    </>
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

export default index
