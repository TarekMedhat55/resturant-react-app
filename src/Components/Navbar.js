import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">Caverta</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item" >
                            <NavLink className="nav-link" exact activeClassName="active" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" activeClassName="active" to="reservation">Reservation </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" activeClassName="active" to="menu">Menu </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" activeClassName="active" to="team">Team </NavLink>
                        </li>
                        <li className="nav-item" >
                            <NavLink className="nav-link" activeClassName="active" to="contact">Contact </NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
