import React from 'react'
import cardImg1 from "../images/thoughts-card.png"

function Card() {
    return (
        <div className="cardsContainer">
            <div className="cardItem">
                <div className="imgBox">
                    <img src={cardImg1} alt="" />
                </div>
                <div className="quoteBox">
                    <p>The soul is dyed with the colour of its leisure thoughts !</p>
                </div>
            </div>
        </div>
    )
}

export default Card
