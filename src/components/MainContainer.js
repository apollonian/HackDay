import React, { Component } from 'react';

import './MainContainer.css';

export default class MainContainer extends Component {
  render() {
    // console.log(this.props.data["Starter-kit"].);
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
            <a className="Button Tech React" onClick={() => this.props.handleTechClick("react")}>
              React
            </a>
            <a className="Button Tech React" onClick={() => this.props.handleTechClick("react-native")}>
              React<br/>Native
            </a>
            <a className="Button Tech React" onClick={() => this.props.handleTechClick("preact")}>
              Preact
            </a>
            <a className="Button Tech Electron" onClick={() => this.props.handleTechClick("electron")}>
              Electron
            </a>
          </div>
          <div className="InnerSelection">
            <a className="Button Tech Angular" onClick={() => this.props.handleTechClick("angular")}>
              Angular
            </a>
            <a className="Button Tech SASS" onClick={() => this.props.handleTechClick("sass")}>
              SASS
            </a>
            <a className="Button Tech Webpack" onClick={() => this.props.handleTechClick("webpack")}>
              Webpack
            </a>
            <a className="Button Tech Webpack" onClick={() => this.props.handleTechClick("gulp")}>
              Gulp
            </a>
          </div>
        </div>
      </div>
    );
  }
}