import React from 'react'
import Hero from '../Hero';
import Banner from '../Banner';
import {Link} from 'react-router-dom'
function Headr() {
    return (
        <Hero hero="home">
            <Banner title="Caverta" subtitle="We offer a highly seasonal and
             continuously evolving tasting menu experience.">
                <button className="bookNow"><Link to="/reservation" >Book Now</Link></button> 
             </Banner>
        </Hero>
    )
}

export default Headr
