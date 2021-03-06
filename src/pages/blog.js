import React from 'react'
import Card from '../components/Card'
import GreetingBox from '../components/GreetingBox'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import SignUp from '../components/SignUp'

function blog() {
    return (
        <Layout>
           <SEO title="Blog" description="Categories & Articles" /> 
            <div className="blogPage">
                <Card />
                <SignUp />
                <GreetingBox noNeed />
            </div>
        </Layout>
    )
}

export default blog
