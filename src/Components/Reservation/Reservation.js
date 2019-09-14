import React from 'react'

function Reservation() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="reservations">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="reservationse">
                                <h1>Reservations are available online 3 <br/> weeks before the date of the<br/> reservation.</h1>
                                <p>We welcome parties of 1 – 20 guests in our main dining room.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h3>- PRIVATE EVENTS -</h3>
                            <p>Looking for an ideal venue? <br/> Look no further. Corporate <br/>  dinners, special occasions,<br/>  Chef’s Table, let us handle your <br/>  needs.</p>
                        </div>
                        <div className="col-md-3">
                            <h3>- OPEN HOURS -</h3>
                            <p>Monday - Sunday: 1PM - 10PM <br/>Happy Hours: 4PM - 6PM</p>
                        </div>
                    </div>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Name"/>
                            </div>
                            <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Phone"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Date"/>
                            </div>
                            <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Time"/>
                            </div>
                            <div className="form-group col-md-4">
                            <input type="text" className="form-control" id="inputPassword4" placeholder="Seats"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Your Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="bookingBtn">Send Message</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Reservation
