import React, { Component } from 'react';
require('../styles/todo-list.scss');

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { renderTodos } = this.props;
    return (
      <div className="todo-list">
        <div className="todo-list__section">
          <h2 className="todo-list__header">Your Todos:</h2>
          { renderTodos() }
        </div> 
      </div>
    );
  }
}

export default TodoList;