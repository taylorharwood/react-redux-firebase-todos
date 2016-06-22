import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginWithGoogle, logout } from '../actions/auth';

import Navbar from '../components/Navbar';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Navbar {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginWithGoogle: loginWithGoogle,
    logout: logout
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);