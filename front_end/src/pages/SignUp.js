import React from 'react';
 
class SignUp extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        user: {
          name: e.target[0].value,
          password: e.target[1].value,
          age: e.target[2].value,
          summary: e.target[3].value
        }
      })
    })
  }

  render() {
    return (
        <div className="formContainer">
          <form className="actualForm" onSubmit={this.handleSubmit}>
            <h1>Get Access</h1>
            <div class="txtbox">
            <input type="text" name="username" placeholder="Username" />
            </div>
            <div class="txtbox">
            <input type="integer" name="age" placeholder="Age" />
            </div>
            {/* <div class="txtbox">
            <input type="text" name="summary" placeholder="Summary" />
            </div> */}
            <div class="txtbox">
            <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit" value="Login"> Sign Up </button>
          </form>
        <div className="fullscreen-video-wrap">
          <video src="https://www.videvo.net/videvo_files/converted/2013_12/preview/GIRL_ON_SHOULDERS.mov69900.webm" autoPlay="true" loop="true"></video>
        </div>
        </div>
    );
  }
}
 
export default SignUp;