import React, {
  Component
} from 'react';
import {
  Scrollbars
} from 'react-custom-scrollbars';

import ListItem from './ListItem.js';

import './ListContainer.css';

let asdf

export default class ListContainer extends Component {
  render() {
    // console.log(this.props.data)
    const tifOptions = this.props.data.map(x => < ListItem key = {
        x.url
      }
      x = {
        x
      }
      handleKitClick = {
        this.props.handleKitClick
      }
      />);
      return ( <
        div className = "ListContainer" >
        <
        h1 className = "Header" > Featured Kits < /h1> {
          tifOptions
        } <
        /div>
      );
    }
  }