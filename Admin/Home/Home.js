import React, { Component } from 'react'

import './Home.scss'
import {withRouter} from 'react-router-dom'
import {observer} from 'mobx-react';

@observer
class Home extends Component {
    render() {
        return (
            <div className="Home">
                 <section className="hero is-small">
                 <div className="hero-body">
                     <div className="container">
                         <h1 className="title">
                             Admin Dashboard
                         </h1>
                         <h2 className="subtitle">
                             A simple admin template
                         </h2>
                     </div>
                     
                 </div>

                 <div className="hero-foot">
                     <nav className="level">
                         <div className="level-item has-text-centered">
                             <p className="heading">Tweets</p>
                             <p className="title">3,456</p>
                         </div>
                         <div className="level-item has-text-centered">
                             <p className="heading">Following</p>
                             <p className="title">123</p>
                         </div>
                         <div className="level-item has-text-centered">
                             <p className="heading">Followers</p>
                             <p className="title">456K</p>
                         </div>
                         <div className="level-item has-text-centered">
                             <p className="heading">Likes</p>
                             <p className="title">789</p>
                         </div>
                     </nav>
                 </div>
             </section>
            </div>
        );
    }
};

export default withRouter(Home);