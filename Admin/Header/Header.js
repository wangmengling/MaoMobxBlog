import React, { Component } from 'react'

import './Header.scss'
class Header extends Component {
    render() {
        return (
            <div className="FooterContent">
                <nav className="nav has-shadow" id="top">
                    <div className="nav-left">
                        <a className="nav-item" href="../index.html">
                            <img src="http://bulma.io/images/bulma-logo.png" alt="Description" />
                        </a>
                    </div>

                    <span className="navbar-burger burger">
                        <span className="nav-item">dasdfasdfasdf</span>
                        <span className="nav-item">dasdfasdfasf</span>
                        <span className="nav-item">dasdfasdfasdf</span>
                    </span>
                    <div className="nav-right nav-menu is-hidden-tablet">
                        <a href="#" className="nav-item is-active">
                            Dashboard
                            </a>
                        <a href="#" className="nav-item">
                            Activity
                            </a>
                        <a href="#" className="nav-item">
                            Timeline
                            </a>
                        <a href="#" className="nav-item">
                            Folders
                            </a>
                    </div>

                    <div className="navbar-end">
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
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <a className="bd-tw-button button"
                                        data-social-network="Twitter"
                                        data-social-action="tweet"
                                        data-social-target="http://bulma.io"
                                        target="_blank"
                                        href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
                                        <span className="icon">
                                            <i className="fa fa-twitter"></i>
                                        </span>
                                        <span>
                                            Tweet
                                        </span>
                                    </a>

                                </p>
                                <p className="control">
                                    <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                                        <span className="icon">
                                            <i className="fa fa-download"></i>
                                        </span>
                                        <span>Download</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
};

export default Header;