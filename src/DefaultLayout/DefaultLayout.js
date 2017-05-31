import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// class DefaultLayout extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//             <div>sdsd{this.props.children}</div>
//         )
//     }
// }

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="DefaultLayout">
        <div className="Header">Header</div>
          <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </div>
    )} />
  )
};

export default DefaultLayout;