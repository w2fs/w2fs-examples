'use strict';

var express = require('express');
var app = express();
var mysql = require('./_mysql');
var test = require('./_test');

app.get('/', function (req, res) {
  test('Hello Test!');
  mysql.log('Hello World!');
  mysql.query(req, res);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
