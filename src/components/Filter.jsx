import React, { Component } from 'react';
require('../styles/filter.scss');

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  renderFilters() {
    const { filters, setActiveFilter, activeFilter } = this.props;
    
    return filters.map((filter, i) => {
      return (
        <li
          key={i}
          onClick={() => setActiveFilter(filter.value)} 
          className={filter.value === activeFilter ? "filter__item filter__item--active" : "filter__item"}
        >
          {filter.label}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="filter">
        <ul className="filter__list">
          {this.renderFilters()}
        </ul>
      </div>
    );
  }
}

export default Filter;