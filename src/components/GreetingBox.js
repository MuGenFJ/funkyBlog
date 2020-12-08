import React from 'react'
import thankImg from "../images/assets/thanks.png"
import toTheTop from "../images/assets/ToTheTopBtn.png"

function GreetingBox({noNeed}) {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="greetingContainer">
            <div className={noNeed ? "noNeed" : "box1"}>
                <span>Thank you for passing by !</span>
                <img src={thankImg} alt="thanks-Img"/>
            </div>
            <div className={noNeed ? "noNeed" : "seperationLigne"}></div>
            <div className="box2" onClick={scrollTop} >
                <img src={toTheTop} alt="totheTop-btn"/>
            </div>
        </div>
    )
}

export default GreetingBox
