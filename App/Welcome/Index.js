import React, { Component } from 'react';
import AppState from './AppState';
import App from './App';

const appState = new AppState();

export default  () => (
    <App appState={appState} />
)
