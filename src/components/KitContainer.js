import React, { Component } from 'react';
import { renderMd } from "../helper/mdRender.js";

import './KitContainer.css';

export default class KitContainer extends Component {
  render() {
    let asdf = this.props.data;
    let jkl = asdf.filter((x) => x.id == this.props.starterKitID.id );
    let tags = jkl[0].tags.map((x) => <span className="tag">{x}</span>);
    return (
      <div className="KitContainer">
        <div className="KitHeader">
          <div className="Horiz">
            <div>
              <h1>{jkl[0].name}</h1>
              <div className="tags">
                {tags}
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