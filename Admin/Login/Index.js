import React, { Component } from 'react';
import Login from './Login';
import LoginStore from './LoginStore';
const loginState = new LoginStore();
export default  () => (
    <Login store={loginState}/>
)