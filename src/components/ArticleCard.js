import React from 'react'
import PropTypes from "prop-types"
import Image from 'gatsby-image'
import {Link} from 'gatsby'

function ArticleCard({image, tags, title, description, slug, date, strapiId}) {
    return (
        <div className="articleContainer" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="1000">
                <div className="articleImageContainer">
                    <Image className="articleCardImage" fluid={image.childImageSharp.fluid} alt=""/>
                </div>
                <div className="articleBox">
                    <div className="articleCard" data-sal="zoom-out" data-sal-delay="900" data-sal-easing="ease" data-sal-duration="1000">
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

ArticleCard.propTypes = {
    image: PropTypes.object.isRequired,
    tags: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    strapiId: PropTypes.number.isRequired,
}


export default ArticleCard
