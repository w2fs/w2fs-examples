'use strict';

var express = require('express');
var app = express();
app.set('view engine', 'jade'); //require jade
app.set('views', './views'); //working directory

app.get('/', function (req, res) {
  res.render('index', {title: 'Hello World!', name: 'Willin Wang'});
});

app.get('/list', function (req, res) {
  res.render('list', {
    data: [
      {name: 'test1'},
      {name: 'test2'},
      {name: 'test3'}
    ]
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});