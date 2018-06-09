import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Kit.css';

class Kit extends Component {
  render() {
    const { kit: { star, name, author, id }, handleKitClick } = this.props;
    return (
      <div className="ListItem" onClick={() => handleKitClick(id)}>
        <div className="Inline">
          <span className="KitName">{name}</span>
          <span className="StarCount" role="img" aria-label="Stars">{star}⭐ </span>
        </div>
        <span className="AuthorName co-2">{author}</span>
      </div>
    );
  }
}

Kit.propTypes = {
  kit: PropTypes.shape({
    author: PropTypes.string,
    id: PropTypes.string,
    star: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleKitClick: PropTypes.func.isRequired,
}

export default Kit;
