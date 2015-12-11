'use strict';
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql'
});

connection.connect();

exports.log = function(str){
  console.log(str);
};

exports.query = function(req,res){
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
};
