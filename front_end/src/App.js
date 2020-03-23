import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route exact path="/" component={Home} /> */}
      </Router>
    </div>
  );
}

export default App;
