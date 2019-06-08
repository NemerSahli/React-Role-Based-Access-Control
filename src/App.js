import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './BrowserHistory/history';

import Authorization from './components/Authorization';
import Landing from './components/pages/Landing';
import StuDashboard from './components/pages/StuDashboard';
import AdminDashboard from './components/pages/AdminDashboard';
import SupAdDashboard from './components/pages/SupAdDashboard';
import OrgDashboard from './components/pages/OrgDashboard';

import NotFoundPage from './components/layout/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* write your comment here... */}

        <BrowserRouter history={history}>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route
              path="/student/dashboard"
              component={Authorization(StuDashboard, ['Student'])}
            />
            <Route
              path="/admin/dashboard"
              component={Authorization(AdminDashboard, ['Admin'])}
            />
            <Route
              path="/org/dashboard"
              component={Authorization(OrgDashboard, ['Organization'])}
            />
            <Route
              path="/SuperAdmin/dashboard"
              component={Authorization(SupAdDashboard, ['SuperAdmin'])}
            />

            <Route path="" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
