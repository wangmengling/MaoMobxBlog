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
                                    <div className="title">Main</div>
                                    <a href="#" className="item active"><span className="icon"><i className="fa fa-home"></i></span><span className="name">Dashboard</span></a>
                                    <a href="#" className="item"><span className="icon"><i className="fa fa-map-marker"></i></span><span className="name">Activity</span></a>
                                    <a href="#" className="item"><span className="icon"><i className="fa fa-th-list"></i></span><span className="name">Timeline</span></a>
                                    <a href="#" className="item"><span className="icon"><i className="fa fa-folder-o"></i></span><span className="name">Folders</span></a>
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