import React from 'react'
import Image from 'gatsby-image'
import {Link} from 'gatsby'

function ArticleCard({image, tags, title, description, date, index}) {
    return (
        <div className="articleContainer">
                <div className="articleImage">
                    <Image fluid={image.childImageSharp.fluid} alt=""/>
                </div>
                <div className="articleBox">
                    <div className="articleCard">
                        <div className="cardTop">
                            <Link to={`../${tags}`}>{tags}</Link>
                        </div>
                        <div className="articleText">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                        <div className="cardBottom">
                            <div className="btn">
                                <button>Read More</button>
                            </div>
                            <span>{date}</span>
                        </div>
                    </div>
                    <div className="articleNumber">
                        <span>Article nr.</span>
                        <span>{`${index + 1}.`}</span>
                    </div>
                </div>  
            </div> 
    )
}

export default ArticleCard