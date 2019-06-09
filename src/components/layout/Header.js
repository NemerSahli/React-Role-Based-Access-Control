import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <li>
              <Link to="/SuperAdmin/dashboard"> Super Admin</Link>
            </li>
            <Link to="/admin/dashboard">Admin </Link>
          </li>
          <li>
            <Link to="/org/dashboard">Organizer</Link>
          </li>
          <li>
            <Link to="/user/dashboard">User</Link>
          </li>
        </ul>
      </div>
    );
  }
}
