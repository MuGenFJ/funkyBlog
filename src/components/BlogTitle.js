import React from 'react'
import Ligne from './Ligne'


function BlogTitle({title, logo, bigTitle}) {
    return (
        <>
            <div className="blogTitleContainer">
                <h1 className={bigTitle ? "bigTitle-h1" : "subTitle-h1"}>{title}</h1>
                <span className="logoTitle"><img src={logo ? logo : ""} alt={logo && "logo-title"}/></span>
            </div>
            <Ligne bigTitle={bigTitle}/>
        </>
    )
}

export default BlogTitle
