import React, { Component } from 'react';

import './ListItem.css';

export default class ListItem extends Component {
  render() {
    // console.log(this.props.x)
    const { star, name, author, id } = this.props.x
    return (
      <div className="ListItem" onClick={() => this.props.handleKitClick({ id })}>
        <div className="Inline">
          <span className="KitName">{name}</span>
          <span className="StarCount">{star}⭐</span>
        </div>
        <span className="AuthorName co-2">{author}</span>
      </div>
    );
  }
}