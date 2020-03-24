import React from 'react';
 
class SignUp extends React.Component {

  state = { 
    username: "",
    password: "",
    age: null,
    passwordConfirmation: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password === this.state.passwordConfirmation){
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          age: this.state.age
        })
      })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors) {
          alert(response.errors)
        } else {
          this.props.setUser(response)
        }
      }
      )
    } else {
      alert("Passwords don't match")
    }
  }

  render() {
    return (
        <div className="formContainer">
          <form className="actualForm" onSubmit={this.handleSubmit}>
            <h1>Get Access</h1>
            <div className="txtbox">
            <input onChange={this.handleChange} type="text" name="username" placeholder="Username" />
            </div>
            <div className="txtbox">
            <input onChange={this.handleChange} type="integer" name="age" placeholder="Age" />
            </div>
            <div className="txtbox">
            <input onChange={this.handleChange} type="password" name="password" placeholder="Password" />
            </div>
            <div className="txtbox">
            <input onChange={this.handleChange} type="password" name="passwordConfirmation" placeholder="Password Confirmation" />
            </div>
            <button type="submit" value="Login"> Sign Up </button>
          </form>
        <div className="fullscreen-video-wrap">
          <video src="https://www.videvo.net/videvo_files/converted/2013_12/preview/GIRL_ON_SHOULDERS.mov69900.webm" autoPlay={true} loop={true}></video>
        </div>
        </div>
    );
  }
}
 
export default SignUp;