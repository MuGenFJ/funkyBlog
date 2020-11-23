import React from 'react'

function Ligne({bigTitle}) {
    return (
        <div className={bigTitle ? "bigTitle" : "subTitle"} ></div>
    )
}

export default Ligne
