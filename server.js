const { createServer } = require('http');
const express = require('express')
const { parse } = require('url');
const { createReadStream } = require('fs');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })
    if (pathname === '/sw.js') {
      res.setHeader('content-type', 'text/javascript');
      createReadStream('./offline/serviceWorker.js').pipe(res);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});