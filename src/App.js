import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './BrowserHistory/history';

import Authorization from './components/Authorization';
import Landing from './components/pages/Landing';
import UserDashboard from './components/pages/UserDashboard';
import AdminDashboard from './components/pages/AdminDashboard';
import SupAdDashboard from './components/pages/SupAdDashboard';
import OrgDashboard from './components/pages/OrgDashboard';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Login from './components/pages/Login';
import NotFoundPage from './components/layout/NotFoundPage';

class App extends Component {
  state = {
    userType: 'none',
    supAdminAuthDashboards: ['SuperAdmin'],
    adminAuthDashboards: ['SuperAdmin', 'Admin'],
    orgAuthDashboards: ['SuperAdmin', 'Admin', 'Organizer'],
    userAuthDashboards: ['SuperAdmin', 'Admin', 'Organizer', 'User']
  };
  selectUserType = userType => {
    this.setState({
      userType: userType
    });
  };

  render() {
    const {
      userType,
      supAdminAuthDashboards,
      adminAuthDashboards,
      orgAuthDashboards,
      userAuthDashboards
    } = this.state;
    return (
      <div>
      <div className="App">
        {/* write your comment here... */}
        <div className="container">
          <BrowserRouter history={history}>
            <h1>React Role Based Access Control</h1>
            <Login selectUserTypeHandler={this.selectUserType} />
            <h3>LoggedIn user Type: {this.state.userType}</h3>
            <hr />
            <h3>
              Please select one of the following dashboard to check if you are
              authorized:-
            </h3>

            <Header userType={''} />
            <Switch>
              <Route path="/" component={Landing} exact />
              <Route
                path="/SuperAdmin/dashboard"
                component={Authorization(
                  SupAdDashboard,
                  [...supAdminAuthDashboards],
                  userType
                )}
              />
              <Route
                path="/admin/dashboard"
                component={Authorization(
                  AdminDashboard,
                  [...adminAuthDashboards],
                  userType
                )}
              />
              <Route
                path="/org/dashboard"
                component={Authorization(
                  OrgDashboard,
                  [...orgAuthDashboards],
                  userType
                )}
              />
              <Route
                path="/user/dashboard"
                component={Authorization(
                  UserDashboard,
                  [...userAuthDashboards],
                  userType
                )}
              />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
            <Footer />
            </div>
    );
  }
}

export default App;
