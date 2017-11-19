import React, { Component } from 'react';

import ListContainer from './components/ListContainer.js';
import MainContainer from './components/MainContainer.js';
import KitContainer from './components/KitContainer.js';

import db from './helper/dbAccess.js';
import execute from './helper/execute.js';


import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      directory: null,
      starterKitID: null,
      platform: null,
      tech: [],
    }
  }

  handleKitClick = (i) => {
    this.state.starterKitID === i ? this.setState({ starterKitID: null }) : this.setState({ starterKitID: i })
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

  setDirectory = (e) => {
    e === "" ?this.setState({ directory: null }) : this.setState({ directory: e });
  }

  render() {
    if(this.state.tech.length > 0 ) {
      db.tag_search(this.state.tech, function(err, res){
        if (!err) {
          console.log(res);
        }
      });
    }
    return (
      <div className="App">
        <ListContainer handleKitClick={this.handleKitClick} />
        {
          (this.state.starterKitID === null || this.state.directory === null) ?
          <MainContainer
            handlePlatformClick={this.handlePlatformClick}
            handleTechClick={this.handleTechClick}
            setDirectory={this.setDirectory}
            directory={this.state.directory}
          /> :
          <KitContainer
            starterKitID={this.state.starterKitID}
            handleKitClick={this.handleKitClick}
            directory={this.state.directory}
          />
        }
      </div>
    );
  }
}

export default App;
