import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import About from '../pages/About';
import Home from '../pages/Home';
import Order from '../pages/Order';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <main className="App-content">
      <Router>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={About} path="/about" />
          <Route component={Order} path="/order" />
          <Route exact component={Login} path="/" />
          <Route exact component={NotFound} path="*" />
        </Switch>
      </Router>
    </main>
  );
};

export default AppRouter;
