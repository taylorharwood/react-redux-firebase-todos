import React, { Component } from 'react';
require('../styles/todo-form.scss');

class TodoForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleTitleChange, handleBodyChange, handleSubmit } = this.props; 
    return (
      <div className="todo-form">
        <h2 className="todo-form__header">What needs to get done?</h2>
        <form
          className="todo-form__form" 
          onSubmit={evt => handleSubmit(evt)}
        >
          <input 
            type="text"
            value={this.props.title}
            onChange={evt => handleTitleChange(evt)}
            placeholder="Todo Title..."  
            className="todo-form__title"
          />
          <input 
            type="text"
            value={this.props.body}
            onChange={evt => handleBodyChange(evt)}
            placeholder="Todo Info..."  
            className="todo-form__body"
          />
          <button 
            className="todo-form__submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;