import React from 'react'
import textAvatar from "../images/assets/text-avatar.png"
import facebookLogo from "../images/assets/Facebook.png"
import instagramLogo from "../images/assets/Instagram.png"
import twitterLogo from "../images/assets/Twitter.png"
import SignUp from '../components/SignUp'
import GreetingBox from '../components/GreetingBox'
import Footer from '../components/Footer'
import Links from '../constants/Links'
import { graphql, Link } from 'gatsby'
import Image from "gatsby-image"


function articleTemplate({ data }) {
    const { content, title, date, tags, image } = data.blog

    return (
        <div className="readContainer">
            <div className="headerImage">
                <Image className="imageHeader" fluid={image.childImageSharp.fluid} alt="article-image"/>
            </div>
            <div className="readMenu">
                <nav>
                    <Links/>
                </nav>
            </div>
            <div className="textContent">
                <div className="title">
                    <h3>{title}</h3>
                    <Link to={`/tag/${tags}`}>#{tags}</Link>
                </div>
                <div className="textBox">
                    <div className="articleAvatar">
                        <img src={textAvatar} alt="" />
                    </div>
                    <div className="ligneTop"></div>
                    <p>{ content}</p>
                    <div className="ligneBottom"></div>
                    <p className="date">{date}</p>
                    <div className="socialLinks">
                        <span>Share Buttons</span>
                        <div className="socialButton">
                            <div className="socialLine"></div>
                            <span><img src={facebookLogo} alt=""/></span>
                            <span><img src={instagramLogo} alt=""/></span>
                            <span><img src={twitterLogo} alt=""/></span>
                        </div>
                    </div>
                </div>
                <SignUp />
                <GreetingBox noNeed />
            </div>
            <Footer />
        </div>
    )
}

export const query = graphql`
    query GetSingleBlog($slug: String) {
        blog: strapiBlogs(slug: {eq: $slug}){
            content
            tags
            title
            date(formatString: "MMMM Do YYYY")
            image {
                childImageSharp {
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`

export default articleTemplate
