import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  Switch,
  browserHistory
} from 'react-router-dom'
import Login from "./Login"
import Home from "./Home/Home"
import Editor from "./Editor/"
import DefaultLayout from "./Layout/DefaultLayout"
import List from "./List/"
import Detail from "./Detail"

import Auth from './Stores/Auth.js'

// function authRequired(nextState, replace) {
//   if (!Auth.isLoggedIn) {
//     replace('/admin/login');
//   }
// }

const Routes = () => (
  <Router  history={browserHistory}>
    <div>
        <DefaultLayout exact path="/admin/editor" component={Editor}/>
        <DefaultLayout exact path="/admin" component={Home}/>
        <Route exact path="/admin/login" component={Login}/>
        <DefaultLayout exact path="/admin/list" component={List}/>
        <DefaultLayout exact path="/admin/detail" component={Detail}/>
    </div>
  </Router>
)
export default Routes