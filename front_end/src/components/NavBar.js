import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        return (
            <div className="navbar">

                <div className="navheader">
                <h1> LifeTour</h1>
                <p>Welcome to your journey!</p>
                </div>

                <div className="navlinks">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                </div>
                
            </div>
        )
    }
}

export default NavBar