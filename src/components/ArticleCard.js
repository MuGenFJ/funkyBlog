import React from 'react'
import Image from 'gatsby-image'
import {Link} from 'gatsby'

function ArticleCard({image, tags, title, description, slug, date, strapiId}) {
    return (
        <div className="articleContainer">
                <div className="articleImageContainer">
                    <Image className="articleCardImage" fluid={image.childImageSharp.fluid} alt=""/>
                </div>
                <div className="articleBox">
                    <div className="articleCard">
                        <div className="cardTop">
                            <Link to={`/tag/${tags}`}>#{tags}</Link>
                        </div>
                        <div className="articleText">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                        <div className="cardBottom">
                            <div className="btn">
                                <Link to={`/blogs/${slug}`}>Read More</Link>
                            </div>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className="articleNumber">
                        <span>Article nr.</span>
                        <span>{`${strapiId}.`}</span>
                    </div>
                </div>  
            </div> 
    )
}

export default ArticleCard
