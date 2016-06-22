import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
require('../styles/register.scss');

class Register extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.createUser();
  }

  render() {
    const { setRegisterEmail, setRegisterPassword } = this.props;

    return (
      <div className="register">
        <h1>Register</h1>
        <form className="register__form">
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            className="register__email"
            value={this.props.registerEmail}
            onChange={evt => setRegisterEmail(evt.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input 
            type="text" 
            className="register__password"
            value={this.props.registerPassword}
            onChange={evt => setRegisterPassword(evt.target.value)}
          />
          <button 
            className="register__submit"
            onClick={(evt) => this.handleClick(evt)}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;