import React from 'react'
import About from '../components/About'
import BlogTitle from '../components/BlogTitle'
import LogoTitle from "../images/assets/logoTitle.svg"
import Card from '../components/Card'
import Layout from '../components/Layout'



function index() {

  return (
    <>
      <Layout>
        <div className="blogBox"> 
          <BlogTitle  logo={LogoTitle} bigTitle/>
          <About />
          <BlogTitle title="Article Category" />
          <Card />
          <BlogTitle title="Latest Articles" />
        </div>
      </Layout>
    </>
  )
}

export default index
