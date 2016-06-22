import React, { Component } from 'react';
import NavbarContainer from '../containers/NavbarContainer';
import AppContainer from '../containers/AppContainer';
require('../styles/global.scss');

class AppLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <NavbarContainer />
        <AppContainer 
          children={this.props.children}
        />
      </div> 
    );
  }
}

export default AppLayout;