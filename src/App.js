import React, { Component } from 'react';
import Mainnav from './components/Navbar/Navbar.js'
import Content from './components/Content/Content.js'
import Sentence from './components/Content/Content.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Mainnav />
      <Sentence />

      
      </div>
    );
  }
}

export default App;
