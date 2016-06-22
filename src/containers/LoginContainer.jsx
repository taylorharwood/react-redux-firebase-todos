import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, setLoginEmail, setLoginPassword } from '../actions/auth';

import Login from '../components/Login';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Login {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    loginEmail: state.auth.loginEmail,
    loginPassword: state.auth.loginPassword,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setLoginEmail: setLoginEmail,
    setLoginPassword: setLoginPassword,
    login: login
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);