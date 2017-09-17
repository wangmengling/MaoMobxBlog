import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import './DefaultLayout.scss'

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className='LayoutRoot'>
                <div className="LayoutHeader">
                    <Header />
                </div>
                <div className="LayoutContent">
                    <div className="columns">
                        <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
                            <div>
                                <div className="main">
                                    <div className="title">家</div>
                                    <Link to="/admin"  className="item active">
                                    <span className="icon">
                                            <i className="fa fa-home">
                                                </i>
                                            </span>
                                            <span className="name">首页</span>
                                    </Link>

                                    <Link to="/admin/list"  className="item">
                                        <span className="icon">
                                        <i className="fa fa-th-list"></i>
                                    </span>
                                    <span className="name">列表</span>
                                    </Link>
                                </div>
                            </div>
                        </aside>
                        <div className="column is-10 admin-panel">
                            <Component {...matchProps} />
                        </div>
                    </div>
                </div>
            </div>
        )} />
    )
};

export default DefaultLayout;