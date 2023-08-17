import React from 'react'
import './OurFlavors.css'
import Button from '../../components/Button/Button';  
import bbq from '../../assets/package-dsn/bbq.png'
import cheese from '../../assets/package-dsn/cheese.png'
import chili from '../../assets/package-dsn/chili.png'
import original from '../../assets/package-dsn/original.png'
import rosemary from '../../assets/package-dsn/rosemary.png'
import seasalt from '../../assets/package-dsn/seasalt.png'

const OurFlavors = () => {
    return (
        <section id="our-flavors">
            <div className="flavor-ctn">
                <div className="yellow-box">
                    <h2>Our Flavors</h2>
                    <Button type="green" position="relative" bold={true} margin="2.2em" size="1em">SEE MORE</Button>
                    <div className="flavor-list">
                        <div className="primary">
                            <div className="item-ctn">
                                <img src={original} id="original" />
                                <h3>Original</h3>
                                <p>Seasoned only with Salt, Garlic, and a Natural Seasoning Mix comprised of Pepper, Onion, and Chili.</p>
                            </div>
                            <div className="item-ctn">
                                <img src={bbq} id="barbeque" />
                                <h3>Barbeque</h3>
                                <p>Our mouth-watering barbeque-flavored salty, sweet, and savory.</p>
                            </div>
                            <div className="item-ctn">
                                <img src={rosemary} id="rosemary" />
                                <h3>Rosemary</h3>
                                <p>Rosemary Seasoning along with Salt and Garlic to bring out the earthy flavors of the tempeh chip.</p>
                            </div>
                            <div className="item-ctn">
                                <img src={seasalt} id="seasalt" />
                                <h3>Seasalt</h3>
                                <p>Sweet and simple, seasoned with Sea Salt and nothing else. </p>
                            </div>
                            <div className="item-ctn">
                                <img src={cheese} id="cheese" />
                                <h3>Cheese</h3>
                                <p>Lightly seasoned Cheese flavor perfect for a family movie night.</p>
                            </div>
                            <div className="item-ctn">
                                <img src={chili} id="chili" />
                                <h3>Hot Chili</h3>
                                <p>Dried chili powder made in-house mixed with our Original seasoning for that extra kick.</p>
                            </div>
                        </div>
                        <div className="secondary">
                            <div className="item-ctn">
                                <img src={original} id="original" />
                                <h3>Original</h3>
                                <p>Seasoned only with Salt, Garlic, and a Natural Seasoning Mix comprised of Pepper, Onion, and Chili</p>
                            </div>
                            <div className="item-ctn">
                                <img src={bbq} id="barbeque" />
                                <h3>Barbeque</h3>
                                <p>Our mouth-watering barbeque-flavored salty, sweet, and savory.</p>
                            </div>
                            <div className="item-ctn">
                                <img src={rosemary} id="rosemary" />
                                <h3>Rosemary</h3>
                                <p>Rosemary Seasoning along with Salt and Garlic to bring out the earthy flavors of the tempeh chip.</p>
                            </div>
                            <div className="item-ctn">
                                <img src={seasalt} id="seasalt" />
                                <h3>Seasalt</h3>
                                <p>Sweet and simple, seasoned with Sea Salt and nothing else. </p>
                            </div>
                            <div className="item-ctn">
                                <img src={cheese} id="cheese" />
                                <h3>Cheese</h3>
                                <p>Lightly seasoned Cheese flavor perfect for a family movie night.</p>
                            </div>
                            <div className="item-ctn">
                                <img src={chili} id="chili" />
                                <h3>Hot Chili</h3>
                                <p>Dried chili powder made in-house mixed with our Original seasoning for that extra kick.</p>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default OurFlavors