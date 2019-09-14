import React, { Component } from 'react';
import Axios from 'axios';
import Starts from './Starts';
import Mains from './Mains';
import Soups from './Soups';
import Desserts from './Desserts';
class Menu extends Component {
    state = {
        starts:[],
     
    }
    componentDidMount(){
        Axios.get('db.json').then(res=>{this.setState({
            starts:res.data.Starters,
   
        })
    })
    }
    render() {
        const {starts} = this.state
        return (
            <React.Fragment>
                <div className="mainMenu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="startsHeader-1 text-center">
                                    <h6>- 1 -</h6>
                                    <h3>Starts</h3>
                                </div>
                            {
                                starts.map((start,index)=>{
                                return  <Starts start={start} key={index}/>
                                })
                            }
                            </div>
                            <div className="col-md-6">
                            <div className="startsHeader-2 text-center">
                                    <h6>- 2 -</h6>
                                    <h3>Main Course</h3>
                            </div>
                            <Mains/>
                            </div>
                            <div className="col-md-6">
                            <div className="startsHeader-3 text-center">
                                    <h6>- 3 -</h6>
                                    <h3>Soups</h3>
                                </div>
                                <Soups/>
                          
                            </div>
                            <div className="col-md-6">
                            <div className="startsHeader-4 text-center">
                                    <h6>- 4 -</h6>
                                    <h3>Desserts</h3>
                                </div>
                                <Desserts/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Menu;