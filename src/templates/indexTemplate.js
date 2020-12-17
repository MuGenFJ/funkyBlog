import React from 'react'
import { graphql } from "gatsby"
import About from '../components/About'
import BlogTitle from '../components/BlogTitle'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Articles from '../components/Articles'
import Pagination from '../components/Pagination'
import SignUp from '../components/SignUp'
import GreetingBox from '../components/GreetingBox'



function indexTemplate({ data, pageContext }) {

  const {
    allStrapiBlogs: { nodes: blogs },
    allStrapiLogo: {nodes: logos}
  } = data

  const { startLogo, avatarLogo, endLogo } = logos[0]

  //Paginaiton
  const { currentPage, nbPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === nbPage
  const prevPage = currentPage - 1 === 1 ? "/" : `/page${currentPage - 1}`
  const nextPage = `/page${currentPage + 1}`

  return (
    <>
      <Layout>
        <div className="blogBox"> 
          <BlogTitle logo={startLogo.childImageSharp.fixed} bigTitle logoClass="logoTitle"/>
          <About />
          <Card />
          <BlogTitle logo={avatarLogo.childImageSharp.fixed} title="Articles" logoClass="avatar" />
          <Articles blogs={blogs} />
          <Pagination
            isFirst={isFirst}
            isLast={isLast}
            prevPage={prevPage}
            nextPage={nextPage}
          />
          <BlogTitle logo={endLogo.childImageSharp.fixed} logoClass="endLogo" />
          <SignUp />
          <GreetingBox />
        </div>
      </Layout>
    </>
  )
}

 export const query = graphql`
    query getBlogs($skip: Int!, $limit: Int!) {
     allStrapiBlogs(limit: $limit, skip: $skip,  sort: {fields: date, order: DESC}) {
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
      totalCount
        pageInfo {
            currentPage
            hasNextPage
            hasPreviousPage
            itemCount
            pageCount
            perPage
      }
    }
     allStrapiLogo {
      nodes {
        startLogo {
          childImageSharp {
            fixed(width: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        avatarLogo {
          childImageSharp {
            fixed(width: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        endLogo {
          childImageSharp {
            fixed(width: 40) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
    }
`

export default indexTemplate
