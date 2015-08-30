var express = require('express');
var serveStatic = require('serve-static');
var path = require('path');

var app = express();

var PUBLIC_PATH = path.join(__dirname, '../client');
var JSPM_PATH   = path.join(PUBLIC_PATH, 'jspm_packages');

app.use('/jspm_packages', serveStatic(JSPM_PATH, {
  setHeaders: function(res, path) {
    res.setHeader('Cache-Control', 'public, max-age: 31536000');
  }
}));

app.use('/', serveStatic(PUBLIC_PATH));

module.exports = app;