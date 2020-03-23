import React from 'react';
import User from '../components/UserProfile';
import { Redirect } from 'react-router-dom';
 
class Login extends React.Component {

  state = {
    allUsers: [],
  }

  componentDidMount(){
    fetch("http://localhost:3000/users").then(resp => resp.json()).then(allUsers => this.setState({allUsers}))
  }

  handleLogIn = (e) => {
    e.preventDefault()
    let foundUser = this.state.allUsers.find(user => e.target[0].value === user.name)
    if (foundUser.password === e.target[1].value){
      this.props.currentUser = foundUser;
      console.log(this.props.currentUser)
    } else { alert("Incorrect User Information") }
  }

  render() {
    return (
      <div className="formContainer">
        <form className="actualForm" onSubmit={this.handleLogIn}>
          <h1> Login </h1>
          <div class="txtbox">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div class="txtbox">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button type="submit" value="Login"> Login </button>
        </form>
      <div className="fullscreen-video-wrap">
        <video src="https://www.videvo.net/videvo_files/converted/2013_12/preview/GLASS_BACKGROUND_CLUB.mov73294.webm" autoPlay={true} loop={true}></video>
      </div>
      </div>
    )
  }
}
 
export default Login;