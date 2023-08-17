import React from 'react'
import './Certs.css'
import FDA from '../../assets/certifications/fda_logo.png'
import Halal from '../../assets/certifications/halal.png'
import Vegan from '../../assets/certifications/vegan.png'
import NonGMO from '../../assets/certifications/non_gmo.jpeg'
import GlutenFree from '../../assets/certifications/gluten_free.png'

const Certs = () => {
    return (
        <section id="certs">
            <div className="cert-ctn">
                <img src={FDA} className="cert-img" />
                <img src={Halal} className="cert-img" />
                <img src={Vegan} className="cert-img" />
                <img src={NonGMO} className="cert-img" />
                <img src={GlutenFree} className="cert-img" />
            </div>
        </section>

    )
}

export default Certs