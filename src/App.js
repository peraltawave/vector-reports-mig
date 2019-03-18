import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from  './components/Carousel/Carousel.js'
import Mainnav from './components/Navbar/Navbar.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Mainnav />
      <Example />
      </div>
    );
  }
}

export default App;
