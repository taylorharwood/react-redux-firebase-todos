import React, { Component } from 'react';
import { Link } from 'react-router';
require('../styles/navbar.scss');

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  renderLogin() {
    return (
      <div 
        onClick={() => this.props.loginWithGoogle()}
        className="navbar__login"
      > 
        <button className="navbar__login-button">Login with Google</button>
      </div>
    );
  }

  renderLogout() {
    return (
      <div className="navbar__logout">
        <img className="navbar__photo" src={this.props.user.photoURL} alt="Photo of User" />
        <div className="navbar__user">{this.props.user.email}</div>
        <button
          onClick={() => this.props.logout() } 
          className="navbar__logout-button"
        >
          Logout
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar__left">
          <Link to="todos">
            <h1 className="navbar__brand">Todos</h1>              
          </Link>
        </div>
        <div className="navbar__right">{this.props.user.email ? this.renderLogout() : this.renderLogin()}</div>
      </div>
    );
  }
}

export default Navbar;