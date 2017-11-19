import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import ListItem from './ListItem.js';

import './ListContainer.css';

let asdf

export default class ListContainer extends Component {
  render() {
    asdf = this.props.data["Starter-kit"]

    var tifOptions = Object.keys(this.props.data["Starter-kit"]).map(function(key) {
      return <ListItem data={asdf.datakey} />
    });

    return (
      <div className="ListContainer">
        <h1 className="Header">Featured Kits</h1>
        {tifOptions}
      </div>
    );
}
}