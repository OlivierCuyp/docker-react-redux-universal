import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from '../store/configureStore';
import routes from '../routes';

const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(browserHistory, preloadedState);
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootElement
);
