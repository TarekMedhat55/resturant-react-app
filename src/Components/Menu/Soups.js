import React, { Component } from 'react';
import Axios from 'axios'
class Soups extends Component {
    state = { 
        soups:[],
    }
    componentDidMount(){
        Axios.get('db.json').then(res=>{this.setState({      
            soups:res.data.Soups,
        })
    })
    }
        
    render() {
        const {soups} = this.state
        const SoupsList = soups.map((sopu,index)=>{
            return(
                <div className="starts" key={index}>
                <div className="borderLine">
                    <h4 className="popularTitle"><span className="title">{sopu.name}</span><span className="price">${' '}{sopu.price}.00</span></h4>
                    <p className="desc">{sopu.desc}</p>
                </div>
            </div>
            )
        })
        return (
            <React.Fragment>
                {SoupsList}
            </React.Fragment>
        );
    }
}

export default Soups;