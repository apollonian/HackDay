import React, { Component } from 'react';

import './KitContainer.css';

export default class KitContainer extends Component {
  render() {
    return (
      <div className="KitContainer">
        <h1>{this.props.starterKitID}</h1>
        <div className="tags">
          <h1>Tags go here</h1>
        </div>
      </div>
    );
  }
}