import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setRegisterEmail, setRegisterPassword, createUser } from '../actions/auth';

import Register from '../components/Register';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Register {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    email: state.auth.registerEmail,
    password: state.auth.registerPassword
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setRegisterEmail: setRegisterEmail,
    setRegisterPassword: setRegisterPassword,
    createUser: createUser
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);