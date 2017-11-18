import React, { Component } from 'react';
import ListContainer from './components/ListContainer.js';
import MainContainer from './components/MainContainer.js';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      platform: null,
      tech: []
    }
  }

  handlePlatformClick = (i) => {
    console.log('platform', i)
  }

  handleTechClick = (i) => {
    console.log('tech', i)
  }

  render() {
    return (
      <div className="App">
        <ListContainer />
        <MainContainer 
          handlePlatformClick={this.handlePlatformClick}
          handleTechClick={this.handleTechClick}
        />
      </div>
    );
  }
}

export default App;
