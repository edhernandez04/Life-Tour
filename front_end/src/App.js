import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import UserProfile from './components/UserProfile';
import Event from './components/EventPage';
import EditProfile from './components/EditProfile';
import Tour from './components/TourPage'
import CreateTour from './components/CreateTour'

class App extends React.Component {

  state = {
    currentUser: null
  }
  
  componentDidMount(){
    const token = localStorage.token

    if(token){
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors){
          alert(response.errors)
          this.props.history.push(`/login`)
        } else {
          this.setState({
            currentUser: response
          })
        }
      })
    } else {
      this.props.history.push(`/login`)
    }
  }

  setUser = response => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.token = response.token
      this.props.history.push(`/profile`)
    })
  }

  setEditUser = response => {
    this.setState({
      currentUser: response
    }, () => {
      this.props.history.push(`/profile`)
    })
  }

  logout = () => {
    this.setState({
      currentUser: null
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="App">
          <NavBar logout={this.logout} currentUser={this.state.currentUser}/>
          <Route exact path="/starttour" render={(props) => <CreateTour {...props} currentUser={this.state.currentUser}/>}/>
          <Route exact path="/event" render={() => <Event />}/>
          <Route exact path="/profile" render={(props) => <UserProfile {...props} currentUser={this.state.currentUser}/>} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser}/>} />
          <Route exact path="/signup" render={() => <SignUp setUser={this.setUser}/>} />
          <Route exact path="/editprofile" render={(props) => <EditProfile {...props} setEditUser={this.setEditUser} currentUser={this.state.currentUser}/>}/>
          <Route exact path="/tour" render={() => <Tour currentUser={this.state.currentUser}/>}/>
          <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
