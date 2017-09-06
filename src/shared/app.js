import React from 'react';
import { Link, Route } from 'react-router-dom';

import { Overview, NoMatch, Error } from './module';

export default ({ gists }) => {
  return (
    <div>
      <div></div>
      <div>
        <Route path="/" exact component={Overview} />
        <Route path="/nomatch" component={NoMatch} />
        <Route path="/error" component={Error} />
      </div>
    </div>
  );
};
