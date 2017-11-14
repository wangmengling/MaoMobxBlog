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

import Bundle from './Bundle';


import Login from "bundle-loader?lazy&name=login!./Login/Index"
import Home from "bundle-loader?lazy&name=home!./Home/Home"
import Editor from "bundle-loader?lazy&name=editor!./Editor/Index"
import DefaultLayout from "./Layout/DefaultLayout"
import List from "bundle-loader?lazy&name=list!./List/Index"
import Detail from "bundle-loader?lazy&name=detail!./Detail/Index"

const Loading = function () {
  return <div>Loading...</div>
};

const createComponent = (component) => () => (
  <Bundle load={component}>
      {
          (Component) => Component ? <Component/> : <Loading/>
      }
  </Bundle>
);

import Auth from './Stores/Auth.js'

// function authRequired(nextState, replace) {
//   if (!Auth.isLoggedIn) {
//     replace('/admin/login');
//   }
// }


const Routes = () => (
  <Router  history={hashRouter}>
    <div>
        <DefaultLayout exact path="/admin/editor" component={createComponent(Editor)}/>
        <DefaultLayout exact path="/admin" component={createComponent(Home)}/>
        <Route exact path="/admin/login" component={createComponent(Login)}/>
        <DefaultLayout exact path="/admin/list" component={createComponent(List)}/>
        <DefaultLayout exact path="/admin/detail" component={createComponent(Detail)}/>
    </div>
  </Router>
)
export default Routes