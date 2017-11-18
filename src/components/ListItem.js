import React, { Component } from 'react';

import './ListItem.css';

export default class ListItem extends Component {
  render () {
    return (
      <div className="ListItem" onClick={() => this.props.handleKitClick(2)}>
        <span>Kit Name</span>
        <span>Author Name</span>
        <span>Stars: 200</span>
      </div>
    );
  }
}