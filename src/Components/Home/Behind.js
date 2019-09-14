import React from 'react'

function Behind() {
    return (
        <React.Fragment>
            <div className="container text-center">
            <div className="behind">
                <div className="row">
                        <div className=" col-md-5 ">
                            <div className="scenes">
                                <h6>- BEHIND THE SCENES -</h6>
                                <h2>The Team</h2>
                                <p>For a truly memorable dining experience, cuisine and atmosphere are paired as thoughtfully as food and wine. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Animi, id est laborum et dolorum fuga. Nam libero.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 ">
                                <img src="images/home-team-1.jpg" alt="team"/>
                            </div>
                        <div className="col-sm-6 col-md-2 offset-md-1">
                        <img src="images/home-team-2.jpg" alt="team"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Behind
