import React, { Component } from 'react';
import { renderMd } from "../helper/mdRender.js";

import './KitContainer.css';

export default class KitContainer extends Component {
  render() {
    return (
      <div className="KitContainer">
        <div className="KitHeader">
          <div>
            <h1>Kit Name</h1>
            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Redux</span>
              <span className="tag">Webpack</span>
            </div>
          </div>
          <div className="ControlButtons">
            <div className="CancelButton" onClick={() => this.props.handleKitClick(2)}>
              CANCEL
            </div>
            <div className="InstallButton">
              INSTALL
            </div>
          </div>
        </div>
        <div className="KitReadme">
        </div>
      </div>
    );
  }
}