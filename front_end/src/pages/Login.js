import React from 'react';
 
class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogIn = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        this.props.setUser(response)
      }
    })
  }

  render() {
    return (
      <div className="formContainer">
        <form className="actualForm" onSubmit={this.handleLogIn}>
          <h1> Login </h1>
          <div className="txtbox">
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
          </div>
          <div className="txtbox">
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
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