import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Routes from './Routes'

// const appState = new AppState();

render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('rootAdmin')
);