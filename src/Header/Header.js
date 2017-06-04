import React, { Component } from 'react'

import './Header.scss'
class Header extends Component {
    render() {
    return (
      <div className="HeaderContent">
            <div className="HeaderContentLeft">
                MaoLin's Tech Blog
            </div>
            <div className="HeaderContentRight">
                <div>
                    Home
                </div>
                <div>
                    Blog
                </div>
                <div>
                    About
                </div>
            </div>
      </div>
    );
  }
};

export default Header;