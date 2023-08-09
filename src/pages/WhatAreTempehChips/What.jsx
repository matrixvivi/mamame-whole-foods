import React from 'react'
import redTempehSpill from '../../assets/red-tempeh.png'
import './What.css'

const What = () => {
    return (
        <section id="what">
            <div className="what-ctn">
                <div className="left-ctn">
                <img src={redTempehSpill} className="red-tempeh"/>
                </div>
                <div className="right-ctn">
                    <h1>What are Tempeh Chips?</h1>
                    <p>Tempeh is typically made from tapioca flour and fermented soybeans, and is a popular staple in Southeast Asia as a vegan, alternative protein. Because of environmental and dietary implications of soy, we've used non-GMO black-eyed beans to create our own Tempeh Chips.</p>
                </div>
            </div>

        </section>


    )

}

export default What