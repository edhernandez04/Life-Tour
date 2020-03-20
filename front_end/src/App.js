import React from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route to="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
