import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  Switch,
  browserHistory
} from 'react-router-dom'
import App from "./Welcome"
import Home from "./Home"
import About from "./About"
import DefaultLayout from "./DefaultLayout/DefaultLayout"
import AdminLayout from "./DefaultLayout/AdminLayout"
const Routes = () => (
  <Router  history={browserHistory}>
    <div>
        <DefaultLayout exact path="/about" component={About} />
        <DefaultLayout exact path="/" component={Home}/>
        <DefaultLayout exact path="/home" component={Home}/>
    </div>
  </Router>
)
export default Routes