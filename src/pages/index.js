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
          <BlogTitle title="Funky-A's Personal Blog" logo={LogoTitle} bigTitle/>
          <About />
          <BlogTitle title="Article Category" />
          <Card />
        </div>
      </Layout>
    </>
  )
}

export default index
