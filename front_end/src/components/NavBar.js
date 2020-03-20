import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
            </div>
        )
    }
}

export default NavBar