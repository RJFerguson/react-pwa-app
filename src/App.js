import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar.js'
import Feed from './components/Feed.js'
import Profile from './components/Profile.js'
import Template from './components/Template.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Feed}/>
        <Route path="/profile" component={Profile}/> 
        </div>
      </Router>
    )
  }
}

export default App;
