import React from 'react';
 
class Login extends React.Component {
  render() {
    return (
    <div className="formContainer">
                <form className="actualForm">
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