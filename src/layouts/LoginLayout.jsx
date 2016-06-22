import React, { Component } from 'react';
import LoginContainer from '../containers/LoginContainer';
require('../styles/login-layout.scss');

class LoginLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-layout">
        <LoginContainer />
      </div>  
    );
  }
}

export default LoginLayout;