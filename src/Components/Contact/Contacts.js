import React, { Component } from 'react';
import Headr from './Header';
import Contact from './Contact';

class Contacts extends Component {
    render() {
        return (
            <React.Fragment>
                <Headr/>
                <Contact/>
            </React.Fragment>
        );
    }
}

export default Contacts;