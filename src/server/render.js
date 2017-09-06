import { renderToString } from 'react-dom/server';
import React from 'react';

export default (renderMe, gists) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Universal React Router 4 Demo</title>
        <style>
        </style>
    </head>
    <body>
        <div id="app">${renderToString(renderMe)}</div>
        <script>window.__gists__ = ${JSON.stringify(gists)};</script>
        <script src="/static/client.js"></script>
    </body>
</html>`;
