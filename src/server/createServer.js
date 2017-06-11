import path from 'path';
import express from 'express';
import layout from './layout';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import routes from '../routes';
import configureStore from '../store/configureStore';
import pkg from '../../package.json';

const app = express();

export default function createServer () {
  // Serve static files
  app.use('/assets', express.static(path.resolve(__dirname, '../../dist/assets')));

  // Use for HA Proxy healthcheck
  app.get('/healthcheck', (req, res) => {
    res.status(200).send({
      name: pkg.name,
      version: pkg.version
    });
  });

  // This is fired every time the server side receives a request
  app.get('*', (req, res) => {
    const memoryHistory = createMemoryHistory(req.url);
    const preloadedState = { counter: 0 };
    const store = configureStore(memoryHistory, preloadedState);
    const history = syncHistoryWithStore(memoryHistory, store);

    match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const html = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        const finalState = store.getState();

        res.send(layout(html, finalState));
      }
    });
  });

  return app;
}
