import React, { Component } from 'react'
import Auth from '../Stores/Auth.js';
import {
    BrowserRouter as Router,
    Route,
    withRouter,
    Link
} from 'react-router-dom'
import './Header.scss'
class Header extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    
    logout() {
        const auth = new Auth();
        auth.logout();
        this.props.history.push('/admin/login');
    }
    render() {
        return (
            <div className="FooterContent">
                <nav className="nav has-shadow" id="top">
                    <div className="nav-left">
                        <Link to="/admin"  className="nav-item"> 
                        <img src="http://bulma.io/images/bulma-logo.png" alt="Description" />
                        </Link>
                    </div>

                    <span className="navbar-burger burger">
                        
                    </span>
                    <div className="navbar-end NavBarLeft">
                        <a className="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
                            <span className="icon" style={{color: "#333"}}>
                                <i className="fa fa-github"></i>
                            </span>
                        </a>
                        <a className="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
                            <span className="icon" style={{color: "#55acee"}}>
                                <i className="fa fa-twitter"></i>
                            </span>
                        </a>
                            <Link to="/admin/editor"  className="button EditorButton"> 
                                新增
                            </Link>

                            <div>
                                <a onClick = {this.logout}  className="button EditorButton"> 
                                    退出
                                </a>
                            </div>
                    </div>
                </nav>
            </div>
        );
    }
};

export default withRouter(Header);