import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'

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
