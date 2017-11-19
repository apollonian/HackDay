import React, { Component } from 'react';

import ListContainer from './components/ListContainer.js';
import MainContainer from './components/MainContainer.js';
import KitContainer from './components/KitContainer.js';

import db from './helper/dbAccess.js';
import execute from './helper/execute.js';


import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: null,
      starterKitID: null,
      // platform: null,
      tech: [],
    }
  }

  handleKitClick = (i) => {
    this.state.starterKitID === i ? this.setState({ starterKitID: null }) : this.setState({ starterKitID: i })
  }

  // handlePlatformClick = (i) => {
  //   this.state.platform === i ? this.setState({ platform: null }) : this.setState({ platform: i })
  // }

  handleTechClick = (i) => {
    let tempTech = this.state.tech.slice();
    tempTech.includes(i) ? tempTech = this.removeArrayItem(tempTech, i) : tempTech.push(i);
    this.setState({ tech: tempTech });
  }

  removeArrayItem = (arr, itemToRemove) => {
    return arr.filter(item => item !== itemToRemove)
  }

  setDirectory = (e) => {
    e === "" ? this.setState({ directory: null }) : this.setState({ directory: e });
  }

  render() {
    if (this.state.tech.length > 0) {
      db.tag_search(this.state.tech, function (err, res) {
        if (!err) {
          console.log(res);
        }
      });
    }
    const data = [{
      "id": "1",
      "name": "react-native-hackathon-starter",
      "url": "https://github.com/react-native-training/react-native-hackathon-starter",
      "author": "react-native-training",
      "star": "349",
      "instructions": [
        "npm install",
        "react-native link"
      ],
      "tags": [
        "react-native"
      ]
    }, {
      "id": "2",
      "url": "https://github.com/qdouble/angular-webpack2-starter",
      "name": "angular-webpack2-starter",
      "author": "qdouble",
      "star": "758",
      "instructions": [
        "cd angular-webpack2-starter",
        "yarn"
      ],
      "tags": [
        "angular",
        "typescript"
      ]
    }, {
      "id": "3",
      "url": "https://github.com/antonybudianto/angular-starter",
      "name": "angular-starter",
      "author": "antonybudianto",
      "star": "544",
      "instructions": [
        "npm install"
      ],
      "tags": [
        "angular",
        "typescript",
        "gulp"
      ]
    }, {
      "id": "4",
      "url": "https://github.com/wellyshen/react-cool-starter",
      "name": "react-cool-starter",
      "author": "wellyshen",
      "star": "481",
      "instructions": [
        "yarn"
      ],
      "tags": [
        "react",
        "redux",
        "express",
        "jest",
        "flow",
        "react-router",
        "webpack"
      ]
    }
  ]
  return(
      <div className = "App" >
      <ListContainer
        data={data}
        handleKitClick={this.handleKitClick} />
        {
          this.state.starterKitID === null ?
          // (this.state.starterKitID === null || this.state.directory === null) ?
        <MainContainer
          // handlePlatformClick={this.handlePlatformClick}
          handleTechClick={this.handleTechClick}
        /> :
        <KitContainer
          data={data}
          starterKitID={this.state.starterKitID}
          handleKitClick={this.handleKitClick}
          setDirectory={this.setDirectory}
          directory={this.state.directory}
        />
        }
      </div>
    );
}
}

export default App;
