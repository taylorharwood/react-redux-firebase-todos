import React, { Component } from 'react';
import RegisterContainer from '../containers/RegisterContainer';
require('../styles/register-layout.scss');

class RegisterLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="register-container">
        <RegisterContainer />
      </div>  
    );
  }
}

export default RegisterLayout;