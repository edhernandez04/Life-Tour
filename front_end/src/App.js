import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './components/UserProfile'
import Login from './pages/Login'
import SignUp from './pages/SignUp';

class App extends React.Component {

  state = {
    currentUser: null
  }
  
  setUser = (user) => {
    console.log(this.props)
    this.setState({
      currentUser: user
    })
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/login" render={ () => <Login currentUser={this.state.currentUser}/>} />
          <Route exact path="/signup" render={() => <SignUp setUser={this.setUser}/>} />
          <Route exact path="/profile" render={() => <Profile currentUser={this.state.currentUser}/>} />
          <Route exact path="/home" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
