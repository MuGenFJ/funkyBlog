import React from 'react'
import Layout from "../components/Layout"
import Thanks from "../images/assets/thanks.png"
import SEO from "../components/SEO"

function page404() {
    return (
        <div>
            <Layout>
               <SEO title="Error Page 404" description="Error Page 404" />  
                <div className="errorContainer">
                    <h1>I think something went wrong ...</h1>
                    <h1>This page does not exist !</h1>
                    <img src={Thanks} alt="sorry-img"/>
                </div>
            </Layout>
        </div>
    )
}

export default page404
