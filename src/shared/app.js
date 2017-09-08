import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { Overview, NoMatch, Error } from './module';

import Header from './component/header';

export default ({ gists }) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/error" component={Error} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
