'use strict';
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, result, fields) {
  if (err) throw err;

  console.log('The solution is: ', result[0].solution);
});

connection.end();
