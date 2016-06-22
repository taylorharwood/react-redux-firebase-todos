import React, { Component } from 'react';
require('../styles/checkbox.scss');

class Checkbox extends Component {
  constructor(props) {
    super(props);
  }

  renderIcon() {
    console.log(this.props.done);
    return this.props.done ? <i className="material-icons">check</i> : '';
  }

  render() {
    const { done, toggleTodo } = this.props;

    return (
      <div
        onClick={() => toggleTodo()} 
        className={done ? "checkbox checkbox--done" : "checkbox"}
      >
        {this.renderIcon()}
      </div>
    );
  }
}

export default Checkbox;