import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Kit from '../Kit';
import { Container } from './style'

class Sidebar extends Component {
  render() {
    const { kits, handleKitClick } = this.props;
    return (
      <Container>
        <h1 className="Header">Featured Kits</h1>
        {kits.map(kit => <Kit key={kit.id} kit={kit} handleKitClick={handleKitClick} />)}
      </Container>
    );
  }
}

Sidebar.propTypes = {
  kits: PropTypes.array.isRequired,
  handleKitClick: PropTypes.func.isRequired,
}

export default Sidebar;
