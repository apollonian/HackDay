import React, { Component } from 'react';

import ListContainer from './components/ListContainer.js';
import MainContainer from './components/MainContainer.js';
import KitContainer from './components/KitContainer.js';

import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      starterKitID: null,
      platform: null,
      tech: [],
    }
  }

  handleKitClick = (i) => {
    console.log('kit', i)
  }

  handlePlatformClick = (i) => {
    this.state.platform === i ? this.setState({ platform: null }) : this.setState({ platform: i })
  }

  handleTechClick = (i) => {
    let tempTech = this.state.tech.slice();
    tempTech.includes(i) ? tempTech = this.removeArrayItem(tempTech, i) : tempTech.push(i);
    this.setState({tech: tempTech});
  }

  removeArrayItem = (arr, itemToRemove) => {
    return arr.filter(item => item !== itemToRemove)
  }

  render() {
    return (
      <div className="App">
        <ListContainer handleKitClick={this.handleKitClick} />
        {
          this.state.starterKitID === null ?
          <MainContainer
            handlePlatformClick={this.handlePlatformClick}
            handleTechClick={this.handleTechClick}
          /> :
          <KitContainer
            starterKitID={this.state.starterKitID}
          />
        }
      </div>
    );
  }
}

export default App;
