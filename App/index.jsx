import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import AppState from './Welcome/AppState';
import App from './Welcome/App';
import Routes from './Routes'

const appState = new AppState();

render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
);

/*if (module.hot) {
  module.hot.accept('./Welcome/App', () => {
    const NextApp = require('./Welcome/App').default;

    render(
      <AppContainer>
        <NextApp appState={appState} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}*/
