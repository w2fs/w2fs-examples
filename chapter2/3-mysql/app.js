'use strict';

var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql'
});
connection.connect();

app.get('/', function (req, res) {
  connection.query('SELECT 1 + 1 AS solution', function (err, result) {
    if (err) {
      res.send({status: 0, msg: 'Error'});
    }
    res.send({
      status: 1,
      result: result[0].solution
    });
    res.end();
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});