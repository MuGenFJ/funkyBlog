import React from 'react'
import thankImg from "../images/assets/thanks.png"
import toTheTop from "../images/assets/ToTheTopBtn.png"

function GreetingBox({noNeed}) {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="greetingContainer">
            <div className={noNeed ? "noNeed" : "box1"}  data-sal="flip-down" data-sal-delay="1500" data-sal-easing="ease" data-sal-duration="1000">
                <span>Thank you for passing by !</span>
                <img src={thankImg} alt="thanks-Img"/>
            </div>
            <div className={noNeed ? "noNeed" : "seperationLigne"}></div>
            <button className="box2Btn" onClick={scrollTop}  data-sal="fade" data-sal-delay="1500" data-sal-easing="ease" data-sal-duration="1000" >
                <img src={toTheTop} alt="totheTop-btn"/>
            </button>
        </div>
    )
}

export default GreetingBox
