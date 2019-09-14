import React, { Component } from 'react';
import Slider from "react-slick";
import Axios from 'axios';

class Testimonial extends Component {
    state = {
        testimonials : []
    }
    componentDidMount(){
        Axios.get(`db.json`).then(res=>{this.setState({
            testimonials : res.data.Testimonial
        })})
    }
    render() {
            const settings = {
                dots: true,
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                cssEase: "linear"
            };
            const {testimonials} = this.state
            const TestimponialList = testimonials.map((testimonial,index)=>{
                return (
                    <div className ="testimonialHead" key={index}>
                        <h5>" {testimonial.desc} "</h5>
                        <h6>{testimonial.name}</h6>
                        <p>{testimonial.job}</p>
                    </div>
                )
            })
        return (
            <React.Fragment>
                <div className="testimonial text-center ">
                    <div className="overlay">
                    <h6>- TESTIMONIALS -</h6>
                    <h2>What Clients Say</h2>
                    <div className="container">
                    <Slider {...settings}>
                        {TestimponialList}
                        </Slider>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Testimonial;