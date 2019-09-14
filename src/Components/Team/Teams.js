import React, { Component } from 'react';
import Headr from './Header';
import TeamList from './TeamList';

class Teams extends Component {
    render() {
        return (
            <React.Fragment>
                <Headr/>
                <TeamList/>
            </React.Fragment>
        );
    }
}

export default Teams;