import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
} from 'react-router-dom'
// import {Redirect, Route} from 'react-router';
import Auth from '../Stores/Auth.js'
import Header from '../Header'
import Footer from '../Footer'
import './DefaultLayout.scss'

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        // call some method/function that will validate if user is logged in
        <AuthRequiredRoute {...rest} render={matchProps => (

            <div className='LayoutRoot'>
                <div className="LayoutHeader">
                    <Header />
                </div>
                <div className="LayoutContent">
                    <div className="columns">
                        <aside className="column is-2 aside hero is-fullheight is-hidden-mobile">
                            <div>
                                <div className="main">
                                    {/* <div className="title">家</div> */}
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





/**
 * Class representing a route that checks if user is logged in.
 * @extends Route
 */
class AuthRequiredRoute extends Route{
  /**
   * @example <AuthRequiredRoute path="/" component={Products}>
   */
    render() {
        let component = super.render();
        let {user, path} = this.props;
        let match = this.state.match;
        if (match) {
            const authStore = new Auth();
            if (authStore.isLoggedIn) {
                return component;
            } else {
                return <Redirect to="/admin/login"></Redirect>;
            }
        } else {
          return null;
        }
    }

    isLogin() {
         let userName = localStorage.getItem();
         if(!userName.length > 0) {
             return true;
         }else {
             return false;
         }
    }
}
export default DefaultLayout;

