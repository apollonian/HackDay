import React, { Component } from 'react';

import kits from '../../KITS.example.js'
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import Collections from '../../components/Collections';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starterKitID: null,
    }
  }

  handleKitClick = (id) => {
    this.state.starterKitID === id ? this.setState({ starterKitID: null }) : this.setState({ starterKitID: id })
  }

  render() {
    const { starterKitID } = this.state;
    const kit = kits.filter(kit => kit.id === starterKitID)[0];

    return (
      <div className="App">
        <Sidebar kits={kits} handleKitClick={this.handleKitClick} />
        {this.state.starterKitID === null ? <Collections /> : <Content kit={kit} />}
      </div>
    );
  }
}

export default App;
