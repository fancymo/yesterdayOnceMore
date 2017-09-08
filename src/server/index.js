import express from 'express';
import React from 'react';
import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';
import fetch from 'node-fetch';

import App from '../shared/app';
import NoMatch from '../shared/module/nomatch';
import Error from '../shared/module/error';

import render from './render';

const routes = [
  '/',
  '/p',
];

sourceMapSupport.install();

const app = express();

app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  if (!match) {
    res.status(404).send(render(<NoMatch />));
    return;
  }
  res.status(200).send(render(
    (
      <Router context={{}} location={req.url}>
        <App />
      </Router>
    )
  ));
  // fetch('https://api.github.com/gists')
  //   .then(r => r.json())
  //   .then((gists) => {
  //     res.status(200).send(render(
  //       (
  //         <Router context={{}} location={req.url}>
  //           <App />
  //         </Router>
  //       )
  //     ));
  //   }).catch((err) => {
  //     res.status(500).send(render(<Error />));
  //   });
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
