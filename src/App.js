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
import Login from './components/pages/Login';
import NotFoundPage from './components/layout/NotFoundPage';

class App extends Component {
  state = {
    userType: 'none'
  };
  selectUserType = userType => {
    this.setState({
      userType: userType
    });
  };

  render() {
    const { userType } = this.state;
    return (
      <div className="App">
        {/* write your comment here... */}
        <BrowserRouter history={history}>
          <Login selectUserTypeHandler={this.selectUserType} />
          LoggedIn user Type: {this.state.userType}
          <Header userType={''} />
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route
              path="/SuperAdmin/dashboard"
              component={Authorization(
                SupAdDashboard,
                ['SuperAdmin'],
                userType
              )}
            />
            <Route
              path="/admin/dashboard"
              component={Authorization(AdminDashboard, ['Admin'], userType)}
            />
            <Route
              path="/org/dashboard"
              component={Authorization(
                OrgDashboard,
                ['Organization'],
                userType
              )}
            />
            <Route
              path="/user/dashboard"
              component={Authorization(UserDashboard, ['User'], userType)}
            />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
