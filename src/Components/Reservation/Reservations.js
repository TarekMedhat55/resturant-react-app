import React, { Component } from 'react';
import Header from './Header'
import Reservation from './Reservation';
class Reservations extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Reservation/>
            </React.Fragment>
        );
    }
}

export default Reservations;