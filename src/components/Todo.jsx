import React, { Component } from 'react';
import Checkbox from './Checkbox';
require('../styles/todo.scss');

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, body, done, fbKey, toggleTodo, removeTodo } = this.props
    return (
      <div className={done ? "todo todo--done" : "todo"}>
        <div className="todo__content">
          <Checkbox done={done} toggleTodo={() => toggleTodo(fbKey)} />
          <h2 className="todo__title">{title}</h2>
          <h3 className="todo__body">{body}</h3>
        </div>
        <div className="todo__options">
          <div
            onClick={() => removeTodo(fbKey)} 
          >
            <i className="material-icons">delete</i>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;