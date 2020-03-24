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
  
  setUser = (user) => {
    this.setState({
      currentUser: user
    }, () => this.props.history.push(`/profile`))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route exact path="/event" render={() => <Event />}/>
          <Route exact path="/profile" render={() => <UserProfile user={this.state.currentUser}/>} />
          <Route exact path="/login" render={() => <Login setUser={this.setUser}/>} />
          <Route exact path="/signup" render={() => <SignUp setUser={this.setUser}/>} />
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
