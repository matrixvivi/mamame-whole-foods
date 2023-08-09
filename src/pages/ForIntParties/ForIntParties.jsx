import React from 'react'
import './ForIntParties.css'
import Footer from '../../components/Footer/Footer'
import Sticker from '../../assets/for-interested-parties.svg'

const ForIntParties = () => {
    return (
        <section id="for-interested">
            <div className="bottom-ctn">
                <img src={Sticker} className='img-sticker' />
                <p className='forint-p'>We are always looking for interested parties looking to partner with us! This includes wholesaling and distributing through select channels.
                <br/><br/>For enquiries please drop us an email: info@mamame.comIn your email, please do your best to include as much details as possible on items such as:
                <br/>1.&emsp;What geography you are looking for - continent, region, country, or city.
                <br/>2.&emsp;Your company overview - history, achievements, list of current products, who are the shareholders, and others.
                <br/>3.&emsp;Channel and distribution strategy - modern trade, e-commerce, pop ups, ethnic vs mainstream, upscale vs mass
                <br/>4.&emsp;Marketing strategy - online, offline, above the line / below the line, expected budget and proposed sharing arrangement
                <br/><br/>We are looking for partners that are more than just wholesalers or distributors. Partners that can grow our brand and products and treat them as their own.
                <br/><br/>Partners with long term commitment and aligned vision. If this sounds interesting, please drop us an email and we will arrange for an initial discussion.</p>
                <Footer/>
            </div>
        </section>
    )
}

export default ForIntParties