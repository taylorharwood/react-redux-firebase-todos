import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo, removeTodo } from '../actions/todos';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';

class TodoListContainer extends Component {
  constructor(props) {
    super(props);
  }

  renderTodos() {
    var filteredTodos;
    const { activeFilter, todos, toggleTodo, removeTodo } = this.props;

    if (activeFilter === 'ALL') {
      filteredTodos = todos;
    } else if (activeFilter === 'DONE') {
      filteredTodos = todos.filter(todo => todo.done);
    } else if (activeFilter === 'NOT_DONE') {
      filteredTodos = todos.filter(todo => !todo.done);
    }

    return filteredTodos.map(todo => {
      return (
        <Todo 
          {...todo} 
          key={todo.fbKey}
          toggleTodo={toggleTodo} 
          removeTodo={removeTodo} 
        />
      );
    });
  }

  render() {
    return (
      <TodoList 
        renderTodos={() => this.renderTodos()}  
      />
    );
  }
}


const mapStateToProps = state => {
  return {
    todos: state.todos,
    activeFilter: state.settings.activeFilter
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleTodo: toggleTodo,
    removeTodo: removeTodo
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);