import React, { Component } from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import FilterContainer from '../containers/FilterContainer';
require('../styles/todos-layout.scss');

class TodosLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todos-layout">
        <TodoFormContainer />
        <FilterContainer />
        <TodoListContainer />
      </div>  
    );
  }
}

export default TodosLayout;