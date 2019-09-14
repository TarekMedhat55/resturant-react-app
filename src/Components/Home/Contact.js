import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
          email: null,
          phone: null,
          message:null,
          errors: {
            userName: '',
            email: '',
            phone: '',
            message: '',
          }
        };
      }
      handleChange = (event) => {
        event.preventDefault();
        const { userName, value } = event.target;
        let errors = this.state.errors;
        const validEmailRegex = 
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        switch (userName) {
          case 'userName': 
            errors.userName = 
              value.length < 5
                ? 'User Name must be 5 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'message': 
            errors.message = 
              value.length < 20
                ? 'message must be 20 characters long!'
                : '';
            break;
          default:
            break;
        }
      
        this.setState({errors, [userName]: value}, ()=> {
            console.log(errors)
        })
      }
    render() {
        return (
            <React.Fragment>
            <div className="container">
                <div className="contact">
                <h6 className=" text-center">- Contact - </h6>
                <h2 className=" text-center">Make a Reservation</h2>
                <div className="row">
                    <div className="col-md-6">
                        <h5>PRIVATE DINING</h5>
                        <p>The Main Dining Room can accommodate up to 18 guests and requires either a half night or full night buyout. Reservations are available online 6 weeks before the date of the reservation.</p>
                    </div>
                    <div className="col-md-6">
                        <h5>PRIVATE EVENTS</h5>
                        <p>Looking for an ideal venue? Look no further. Corporate dinners, special occasions, Chef’s Table, let us handle your needs. Reservations are available online 6 weeks before the date of the reservation.</p>
                    </div>
                </div>
                <div className="contactForm">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="userName" placeholder="UserName" name="userName"/>
                        </div>
                        <div className="form-group col-md-4">
                        <input type="email" className="form-control" id="UserEmail" placeholder="Email" name="email"/>
                        </div>
                        <div className="form-group col-md-4">
                        <input type="text" className="form-control" id="UserPhone" placeholder="Phone" name="phone"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Your Message" id="exampleFormControlTextarea1" rows="3" name="message"></textarea>
                    </div>
                    <button type="submit" className="bookingBtn">Send Message</button>
                    </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default Contact;