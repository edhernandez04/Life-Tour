import React from 'react';
 
class Login extends React.Component {
  render() {
    return (
    <div className="formContainer">
    <div className="fullscreen-video-wrap">
        <video src="https://www.videvo.net/videvo_files/converted/2013_12/preview/GLASS_BACKGROUND_CLUB.mov73294.webm" autoPlay="true" loop="true"></video>
        <form>
            <h1>Login</h1>
            <div>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="username">Username</label>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Login" />
        </form>
    </div>
    </div>
    )
  }
}
 
export default Login;