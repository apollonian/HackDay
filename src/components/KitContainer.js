import React, { Component } from 'react';
import { renderMd } from "../helper/mdRender.js";

import './KitContainer.css';

export default class KitContainer extends Component {
  render() {
    console.log(this.props.data);
    console.log(this.props.data.filter(x => {
      console.log(x);
      x.id == this.props.starterKitID
    }));
    const { name, tags } = this.props.data.filter(x => x.id == this.props.starterKitID);
    console.log(name);
    return (
      <div className="KitContainer">
        <div className="KitHeader">
          <div className="Horiz">
            <div>
              <h1>{name}</h1>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Redux</span>
                <span className="tag">Webpack</span>
              </div>
            </div>
            <div className="ControlButtons">
              <div className="CancelButton" onClick={() => this.props.handleKitClick(this.props.starterKitID)}>
                CANCEL
              </div>
              <div className="InstallButton">
                INSTALL
              </div>
            </div>
          </div>
          <div className="KitFooter">
            <span className="installText">Installation Path</span>
            <input className="KitInput" type="text" onChange={event => this.props.setDirectory(event.target.value)} placeholder="Enter the directory path" />
          </div>
        </div>
        <div className="KitReadme">
        </div>
      </div>
    );
  }
}