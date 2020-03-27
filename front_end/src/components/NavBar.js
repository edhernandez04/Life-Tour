import React from 'react'
import { NavLink, Link } from 'react-router-dom'

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
                {this.props.currentUser ? 
                <span className="user">
                    Welcome!
                    <Link to="/profile">
                    {this.props.currentUser.username}
                    </Link>
                    <button onClick={this.props.logout}> Log Out </button>
                </span>
                : 
                <span className="login-signup">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                </span>
                }
                </div>
                
            </div>
        )
    }
}

export default NavBar