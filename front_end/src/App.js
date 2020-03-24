import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './components/UserProfile'
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import UserProfile from './components/UserProfile';
import Event from './components/Events'

class App extends React.Component {

  state = {
    currentUser: {
      id: 3,
      name: null,
      age: null,
      username: "pardihardi",
      password_digest: "$2a$12$04zvOXFK1K2Wrl9Y4GvwSOwI/v8xNKLkWVJlJquY4nlRf/NvgTCwm",
      summary: "Too sexy for my shirt",
    }
  }
  
  componentDidMount(){
    const token = localStorage.token

    if(token){
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(resp => resp.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
        } else {
          this.setState({
            currentUser: response
          })
        }
      })
    }
  }

  setUser = response => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.token = response.token
      this.props.history.push(`/profile`)
    })
    // other /users and /users/:username
  }

  logout = () => {
    this.setState({
      currentUser: null
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/login")
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar logout={this.logout} currentUser={this.state.currentUser}/>
          <Route exact path="/profile" render={() => <UserProfile currentUser={this.state.currentUser}/>} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser}/>} />
          <Route exact path="/signup" render={() => <SignUp setUser={this.setUser}/>} />
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
