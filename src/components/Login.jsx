import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
require('../styles/login.scss');

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.login();
  }

  render() {
    const { setLoginEmail, setLoginPassword } = this.props;

    return (
      <div className="login">
        <h1>Sign In</h1>
        <form
          onSubmit={evt => this.handleSubmit(evt)} 
          className="login__form"
        >
          <label htmlFor="email">Email:</label>
          <input
            onChange={evt => setLoginEmail(evt.target.value)} 
            value={this.props.loginEmail}
            type="text" 
            className="login__email"
          />
          <label htmlFor="password">Password:</label>
          <input
            onChange={evt => setLoginPassword(evt.target.value)} 
            value={this.props.loginPassword}
            type="text" 
            className="login__password"
          />
          <button
            type="submit"
            className="login__submit"
          >
              Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;