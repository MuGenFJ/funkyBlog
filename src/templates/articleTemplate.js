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
import { DiscussionEmbed } from "disqus-react"
import SEO from '../components/SEO'


function articleTemplate({ data, pageContext }) {
    const { content, title, date, tags, image, id, description } = data.blog

    const baseUrl = "https://hope-blog.netlify.app/blogs/"

    const disqusShortname = "hope-blog-1"
    const disqusConfig = {
        identifier: id,
        title: title,
        url: baseUrl + pageContext.slug
    }

    return (
       <>
        <SEO title={title} description={`${description}`} />
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
                <div className="title" >
                    <h3>{title}</h3>
                    <Link to={`/tag/${tags}`}>#{tags}</Link>
                </div>
                <div className="textBox">
                    <div className="articleAvatar">
                        <img src={textAvatar} alt="" />
                    </div>
                    <div className="ligneTop"></div>
                    <p  data-sal="slide-right" data-sal-delay="2000" data-sal-easing="ease" data-sal-duration="1000">{ content}</p>
                    <div className="ligneBottom"></div>
                    <p className="date">{date}</p>
                    <div className="socialLinks">
                        <span>Share Buttons</span>
                        <div className="socialButton">
                            <div className="socialLine"></div>
                            <span><a aria-label="social-share" href={`https://www.facebook.com/sharer/sharer.php?u=` + baseUrl +  pageContext.slug } target="_blank" rel="noopener noreferrer"><img src={facebookLogo} alt="facebook-logo"/></a></span>
                            <span><a aria-label="social-share" href={`https://www.linkedin.com/shareArticle?url=` + baseUrl +  pageContext.slug } target="_blank" rel="noopener noreferrer"><img src={instagramLogo} alt="instagram-logo"/></a></span>
                                <span><a aria-label="social-share" href={`https://twiiter.com/share?url=` + baseUrl + pageContext.slug } target="_blank" rel="noopener noreferrer"><img src={twitterLogo} alt="twitter-logo"/></a></span>
                            {/* <span><a aria-label="social-share" href={`https://twiiter.com/share?url=` + baseUrl +  pageContext.slug + "&text=" + title + "&via" + "twitterHandle" } target="_blank" rel="noopener noreferrer"><img src={twitterLogo} alt=""/></a></span> */}
                        </div>
                    </div>
                </div>
                <DiscussionEmbed className="disqusPlug" shortname={disqusShortname} config={disqusConfig} />
                <SignUp />
                <GreetingBox noNeed />
            </div>
            <Footer />
        </div>
       </> 
    )
}

export const query = graphql`
    query GetSingleBlog($slug: String) {
        blog: strapiBlogs(slug: {eq: $slug}){
            content
            description
            tags
            id
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
