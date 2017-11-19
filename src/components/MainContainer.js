import React, { Component } from 'react';

import './MainContainer.css';

export default class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        <h1>Select Your Tech Stack</h1>
        {/* <div className="SelectionContainer">
          <a className="Button Platform Web" onClick={() => this.props.handlePlatformClick(0)}>
            Web
          </a>
          <a className="Button Platform Mobile" onClick={() => this.props.handlePlatformClick(1)}>
            Mobile
          </a>
          <a className="Button Platform Desktop" onClick={() => this.props.handlePlatformClick(2)}>
            Desktop
          </a>
        </div> */}
        <div className="SelectionContainer">
          <div className="InnerSelection">
            <a className="Button Tech React" onClick={() => this.props.handleTechClick(0)}>
              React
            </a>
            <a className="Button Tech React" onClick={() => this.props.handleTechClick(1)}>
              React<br/>Native
            </a>
            <a className="Button Tech React" onClick={() => this.props.handleTechClick(2)}>
              Preact
            </a>
            <a className="Button Tech Electron" onClick={() => this.props.handleTechClick(3)}>
              Electron
            </a>
          </div>
          <div className="InnerSelection">
            <a className="Button Tech Angular" onClick={() => this.props.handleTechClick(4)}>
              Angular
            </a>
            <a className="Button Tech SASS" onClick={() => this.props.handleTechClick(5)}>
              SASS
            </a>
            <a className="Button Tech Webpack" onClick={() => this.props.handleTechClick(6)}>
              Webpack
            </a>
            <a className="Button Tech Webpack" onClick={() => this.props.handleTechClick(7)}>
              Gulp
            </a>
          </div>
        </div>
      </div>
    );
  }
}