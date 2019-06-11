import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h3>Please select a user type as login:</h3>
        <button
          onClick={this.props.selectUserTypeHandler.bind(this, 'SuperAdmin')}
          className="user-type-button"
        >
          Super Admin
        </button>
        <button
          onClick={this.props.selectUserTypeHandler.bind(this, 'Admin')}
          className="user-type-button"
        >
          Admin
        </button>
        <button
          onClick={this.props.selectUserTypeHandler.bind(this, 'Organizer')}
          className="user-type-button"
        >
          Organizer
        </button>
        <button
          onClick={this.props.selectUserTypeHandler.bind(this, 'User')}
          className="user-type-button"
        >
          User
        </button>

        <p className="text-muted">
          <span className="text-note">Note: </span>
          Normally there is only one button to login and no need to choose which
          user type you are, the user type has been saved in the database and
          after login succeeded the JWT containing the userType, then
          automaticlly showing the dashboard/s you are able to access.
        </p>
      </div>
    );
  }
}
