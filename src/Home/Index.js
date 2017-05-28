import React, { Component } from 'react';
import HomeState from './HomeState';
import Home from './Home';

const homeState = new HomeState();

export default  () => (
    <Home homeState={homeState} />
)