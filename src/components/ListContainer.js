import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import ListItem from './ListItem.js';

import './ListContainer.css';

export default class ListContainer extends Component {
  render() {
    return (
      <div className="ListContainer">
        <h1 className="Header">Featured Kits</h1>
        <Scrollbars>
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
          <ListItem handleKitClick={this.props.handleKitClick} />
        </Scrollbars>
      </div>
    );
  }
}