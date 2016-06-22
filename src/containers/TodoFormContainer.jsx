import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/todos'; 
import TodoForm from '../components/TodoForm';

class TodoFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  handleTitleChange(evt) {
    this.setState({
      title: evt.target.value
    });
  }

  handleBodyChange(evt) {
    this.setState({
      body: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo({
      title: this.state.title, 
      body: this.state.body,
      done: false
    });
  }

  render() {
    return (
      <TodoForm 
        handleTitleChange={evt => this.handleTitleChange(evt)}
        handleBodyChange={evt => this.handleBodyChange(evt)}
        handleSubmit={evt => this.handleSubmit(evt)}
        title={this.state.title}
        body={this.state.body}
        {...this.props} 
      />
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addTodo: addTodo
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer);