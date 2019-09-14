import React, { Component } from 'react';
import Axios from 'axios'
class Mains extends Component {
    state = { 
        mains:[],
    }
    componentDidMount(){
        Axios.get('db.json').then(res=>{this.setState({      
            mains:res.data.Main,
        })
    })
    }
        
    render() {
        const {mains} = this.state
        const MainsList = mains.map((main,index)=>{
            return(
                <div className="starts" key={index}>
                <div className="borderLine">
                    <h4 className="popularTitle"><span className="title">{main.name}</span><span className="price">${' '}{main.price}.00</span></h4>
                    <p className="desc">{main.desc}</p>
                </div>
            </div>
            )
        })
        return (
            <React.Fragment>
                {MainsList}
            </React.Fragment>
        );
    }
}

export default Mains;