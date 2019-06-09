import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h3>Please select a user type as login:</h3>
        <button onClick={this.props.selectUserTypeHandler.bind(this,'SuperAdmin')} className="user-type-button">Super Admin</button>
        <button onClick={this.props.selectUserTypeHandler.bind(this,'Admin')} className="user-type-button">Admin</button>
        <button onClick={this.props.selectUserTypeHandler.bind(this,'Organizer')} className="user-type-button">Organizer</button>
        <button onClick={this.props.selectUserTypeHandler.bind(this,'User')} className="user-type-button">User</button>
      </div>
    );
  }
}
