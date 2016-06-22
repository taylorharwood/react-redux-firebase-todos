import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveFilter } from '../actions/settings';
import Filter from '../components/Filter';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Filter {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    filters: state.settings.filters,
    activeFilter: state.settings.activeFilter
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    setActiveFilter: setActiveFilter
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);