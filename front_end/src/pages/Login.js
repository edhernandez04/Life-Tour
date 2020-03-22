import React from 'react';
import User from '../components/UserProfile';
 
class Login extends React.Component {

  state = {
    allUsers: [],
    loggedIn: [],
  }

  componentDidMount(){
    fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(allUsers => this.setState({allUsers}))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    let foundUser = this.state.allUsers.find(user => e.target[0].value === user.name) 
    if (foundUser) {
        this.setState({loggedIn: foundUser})
    } else {
        alert("USER NOT FOUND")
      }
    console.log(this.state.loggedIn)
  }

  render() {
    return (
    <div className="formContainer">
                <form className="actualForm" onSubmit={this.handleLogIn}>
            <div>
                <input type="text" name="username" placeholder="Username" />
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" value="Login"> Login </button>
        </form>
        <div className="fullscreen-video-wrap">
        <video src="https://www.videvo.net/videvo_files/converted/2013_12/preview/GLASS_BACKGROUND_CLUB.mov73294.webm" autoPlay="true" loop="true"></video>
    </div>
    </div>
    )
  }
}
 
export default Login;