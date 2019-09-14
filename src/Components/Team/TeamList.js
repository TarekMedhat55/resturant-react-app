import React, { Component } from 'react';
import Axios from 'axios'
import Team from './Team';
class TeamList extends Component {
    state = {
        teams:[]
    }
    componentDidMount(){
        Axios.get(`db.json`).then(res=>{this.setState({
            teams:res.data.Team
        })
    })
    }
    render() {
        const {teams} = this.state;
      
        return (
            <React.Fragment>
                  <div className="container">
                <div className="teamSection text-center">
                    <h2>We are a diverse group from different<br/>
                     cultures and backgrounds working toward <br/>
                     the same goal. Non numquam eius modi<br/>
                      tempora incidunt ut labore et dolore<br/>
                       magnam aliquam quaerat voluptatem.</h2>
                </div>
                <div className="text-center teamList">

                <div className="row">
                {
                    teams.map((team,index)=>{
                      return  <Team team={team} key={index}/>
                    })
                }
                </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default TeamList;