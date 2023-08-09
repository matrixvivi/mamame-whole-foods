import React from 'react'
import Why from '../../assets/why.svg'
import How from '../../assets/how.svg'
import Where from '../../assets/where.svg'
import './WhyHowWhere.css'

const WhyHowWhere = () => {
    return (
        <section id="whyhowwhere">
            <div className="main-ctn">
                <div className="why-ctn">
                    <img src={Why} className='sticker'/>
                    <p>Black-eyed bean Tempeh Chips are a game-changer for those following a vegan, plant-based, or gluten-free diet. It’s a healthy source of naturally occurring protein, derived from natural, whole ingredients. </p>
                    <p>While Indonesian tempeh leaves a strong, sometimes bitter aftertaste from the soybeans, our patented recipe targets anyone who enjoys a crispy, savoury snack.</p>
                </div>
                <div className="how-ctn">
                    <img src={How} className='sticker' />
                    <p>We source non-GMO black-eyed beans, lentils, and chia seeds for our tempeh.</p>
                    <p>Upon washing, boiling, and fermenting the beans under a sealed tempered environment, we add a tempeh starter and some tapioca flour and ferment it further for 30-33 hours.</p>
                    <p>We then cook all our chips in coconut oil, a healthier alternative to highly-processed manufactured oils without compromising crunch, texture, or flavor.</p>
                </div>
                <div className="where-ctn">
                    <img src={Where} className="sticker" />
                    <p>Mamame is currently loved across South Korea and Japan.<br/> We are coming to the US soon!</p>
                </div>
            </div>
        </section>
    )
}

export default WhyHowWhere