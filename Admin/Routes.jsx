import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  Switch,
  browserHistory,
  hashRouter
} from 'react-router-dom'
import Login from "./Login/Index"
import Home from "./Home/Home"
import Editor from "./Editor/Index"
import DefaultLayout from "./Layout/DefaultLayout"
import List from "./List/Index"
import Detail from "./Detail/Index"

import Auth from './Stores/Auth.js'

// function authRequired(nextState, replace) {
//   if (!Auth.isLoggedIn) {
//     replace('/admin/login');
//   }
// }

const Routes = () => (
  <Router  history={hashRouter}>
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