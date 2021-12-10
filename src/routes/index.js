import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from '~/pages/Dashboard/Main';
import Manage from '~/pages/Dashboard/Manage';

import NotFound from '~/pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} title="Dashboard" exact />
        <Route
          path="/article"
          component={Manage}
          title="Create Article"
          exact
        />
        <Route
          path="/article/:id"
          component={Manage}
          title="Create Article"
          exact
        />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
