import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/App';
import Home from '../components/Home';
import Counter from '../containers/Counter';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='counter' component={Counter} />
  </Route>
);

export default routes;
