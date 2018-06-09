import React from 'react';
import PropTypes from 'prop-types'
import './Content.css';

const { dialog } = window.require('electron').remote;

class Content extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      path: ''
    }
  }

  openDialog = () => dialog.showOpenDialog({
    title: "Select a folder",
    properties: ["openDirectory"]
  }, (folderPaths) => {
    if (folderPaths === undefined) {
      return;
    }

    this.setState({ path: folderPaths[0] });
  });

  render() {
    const { kit } = this.props;
    const { path } = this.state;

    return (
      <div className="KitContainer">
        <div className="KitHeader">
          <div className="Horiz">
            <div>
              <h1>{kit.name}</h1>
              <div className="tags">
                {kit.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </div>
            <div className="ControlButtons">
              <div className="CancelButton">
                CANCEL
              </div>
              <div className="InstallButton">
                INSTALL
              </div>
            </div>
          </div>
          <div className="KitFooter">
            <span className="installText">Installation Path</span>
            <button onClick={this.openDialog}>Set Directory</button>
            <p className="KitInput">{path}</p>
          </div>
        </div>
        <div className="KitReadme">
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  kit: PropTypes.shape({
    id: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired
}

export default Content;
