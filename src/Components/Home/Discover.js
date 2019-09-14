import React, { Component } from 'react'
import Axios from 'axios'
import Popular from './Popular';
export default class componentName extends Component {
  state = {
    populars : [],
  }
  componentDidMount(){
    Axios.get('db.json').then(res=>{this.setState({
      populars : res.data.popular
    })})
  }
  render() {
    const {populars} = this.state
    
    return (
      <React.Fragment>
        <div className="container text-center">
            <div className="discover">
                <h6>- DISCOVER -</h6>
                <h2>Menu a la Carte</h2>
                <p>Explore texture, color and of course the ultimate tastes with our menu of the<br/> season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an<br/> extraordinary dinning experience.</p>
            </div>
           
        </div>
        <div className="container popularTop">
        <div className="row">
                {
                    populars.map((popular,index)=>{
                      return  <Popular popular={popular} key={index}/>
                    })
                }
                </div>
                </div>
      </React.Fragment>
    )
  }
}
