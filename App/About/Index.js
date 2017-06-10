import React, { Component } from 'react';
import AboutState from './AboutState';
import About from './About';

const aboutState = new AboutState();

export default  () => (
    <About aboutState={aboutState} />
)