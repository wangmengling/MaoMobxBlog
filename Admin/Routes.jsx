import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  Switch,
  browserHistory
} from 'react-router-dom'
import Login from "./Login/Login"
const Routes = () => (
  <Router  history={browserHistory}>
    <div>
        <Route exact path="/admin/login" component={Login}/>
    </div>
  </Router>
)
export default Routes