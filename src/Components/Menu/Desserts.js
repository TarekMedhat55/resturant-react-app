import React, { Component } from 'react';
import Axios from 'axios'
class Desserts extends Component {
    state = { 
        desserts:[]
    }
    componentDidMount(){
        Axios.get('db.json').then(res=>{this.setState({      
            desserts:res.data.Desserts
        })
    })
    }
        
    render() {
        const {desserts} = this.state
        const dessertsList = desserts.map((dessert,index)=>{
            return(
                <div className="starts" key={index}>
                <div className="borderLine">
                    <h4 className="popularTitle"><span className="title">{dessert.name}</span><span className="price">${' '}{dessert.price}.00</span></h4>
                    <p className="desc">{dessert.desc}</p>
                </div>
            </div>
            )
        })
        return (
            <React.Fragment>
                {dessertsList}
            </React.Fragment>
        );
    }
}

export default Desserts;
