import React from 'react'
import ArticleCard from './ArticleCard'


function Articles({blogs}) {
    return (
        <div className="articlesContainer">

            {blogs.map((blog, index) => {
                return (
                    <ArticleCard key={index} index={index} {...blog} />
                )
            })}
  
        </div>
    )
}

export default Articles
