import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import ListItem from './ListItem.js';

import './ListContainer.css';

export default class ListContainer extends Component {
  render() {
    return (
      <div className="ListContainer">
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