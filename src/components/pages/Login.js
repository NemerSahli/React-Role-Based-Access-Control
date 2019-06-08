import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h5>Please select a user type:</h5>
        <button onClick={this.props.selectUserTypeHandler.bind(this,'SuperAdmin')} className="user-type-button">Super Admin</button>
        <button onClick={this.props.selectUserTypeHandler.bind(this,'Admin')} className="user-type-button">Admin</button>
        <button onClick={this.props.selectUserTypeHandler.bind(this,'Organization')} className="user-type-button">Organization</button>
        <button onClick={this.props.selectUserTypeHandler.bind(this,'User')} className="user-type-button">User</button>
      </div>
    );
  }
}
