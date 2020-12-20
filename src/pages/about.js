import React from 'react'
import About from '../components/About'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

function about() {
    return (
        <Layout>
           <SEO title="About" description="About Me" />
            <div className="aboutPage" >
                <About />  
            </div>
        </Layout>
    )
}

export default about
