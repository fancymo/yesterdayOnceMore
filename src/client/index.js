import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'whatwg-fetch';

import App from '../shared/App';

render((
  <Router>
    <App gists={window.initialState} />
  </Router>
), document.getElementById('app'));
