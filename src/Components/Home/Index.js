import React from 'react'
import Headr from './Headr';
import Welcome from './Welcome';
import Come from './Come';
import Discover from './Discover'
import Booking from './Booking';
import Behind from './Behind';
import Testimonial from './Testimonial'
import Contact from './Contact'

function Index() {
    return (
        <React.Fragment>
            <Headr/>
            <Welcome/>
            <Come/>
            <Discover/>
            <Booking/>
            <Behind/>
            <Testimonial/>
            <Contact/>
        </React.Fragment>
    )
}

export default Index
