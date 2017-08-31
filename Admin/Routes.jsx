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
import Home from "./Home/Home"
import Editor from "./Editor/"
import DefaultLayout from "./Layout/DefaultLayout"
const Routes = () => (
  <Router  history={browserHistory}>
    <div>
        <Route exact path="/admin/editor" component={Editor}/>
        <DefaultLayout exact path="/admin" component={Home}/>
        <Route exact path="/admin/login" component={Login}/>
    </div>
  </Router>
)
export default Routes