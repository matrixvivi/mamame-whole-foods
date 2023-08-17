import React from 'react'
import Button from '../../components/Button/Button'
import './hero.css'
import HeroImg from '../../assets/hero-img.png'

const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-ctn">
                <div className="left-ctn">
                    <h1>Mamame Tempeh Chips</h1> 
                    <p>Introducing the mighty Tempeh Chip - 100% Gluten-Free, Vegan, and Plant-Based, our chips taste as good as they are healthy.</p>
                    <Button type="yellow" position="relative" bold={true} size="1.1em">CONTACT US!</Button>
                </div>
                <div className="right-ctn">
                    <div className="frame">
                        <img src={HeroImg} className='hero-img'/>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Hero