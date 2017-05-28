import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from "./Welcome"
import Home from "./Home"

const Routes = () => (
  <Router>
    <div>
         <Route exact path="/" component={App}/>
        <Route path="/home" component={Home}/>
    </div>
  </Router>
)
export default Routes