import React from 'react'
import About from '../components/About'
import Layout from '../components/Layout'

function about() {
    return (
        <Layout>
            <div className="aboutPage">
                <About />  
            </div>
        </Layout>
    )
}

export default about
