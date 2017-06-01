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
        <DefaultLayout path="/about" component={About} />
        <Route exact path="/" component={App}/>
        <Route path="/home" component={Home}/>
    </div>
  </Router>
)
export default Routes