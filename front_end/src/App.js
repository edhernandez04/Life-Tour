import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp';
import UserProfile from './components/UserProfile';

class App extends React.Component {

  state = {
    currentUser: null
  }
  
  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => this.props.history.push(`/profile`))
    // other /users and /users/:username
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser}/>} />
          <Route exact path="/signup" render={() => <SignUp setUser={this.setUser}/>} />
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
