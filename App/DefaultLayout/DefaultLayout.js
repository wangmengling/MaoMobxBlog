import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from '../Header'
import './DefaultLayout.scss'

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className='LayoutRoot'>
        <div className="LayoutHeader">
          <Header />
        </div>
        <div  className="LayoutContent">
            <Component {...matchProps} />
        </div>
        <div className="LayoutFooter">
          Powered by Koa © 2017 茂林
        </div>
      </div>
    )} />
  )
};

export default DefaultLayout;