import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class AdminLayout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>Admin{this.props.children}</div>
        )
    }
}

export default AdminLayout;