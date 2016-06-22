import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initFirebase } from '../actions/firebase'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initFirebase();
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    initFirebase: initFirebase
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(App);