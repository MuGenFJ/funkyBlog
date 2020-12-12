import React from 'react'
import About from '../components/About'
import GreetingBox from '../components/GreetingBox'
import Layout from '../components/Layout'
import SignUp from '../components/SignUp'

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
