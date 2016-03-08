'use strict';
var request = require('supertest');
var app = require('../../app');

context('Routes', function () { //可以再按细分建目录require
  it('GET /', function (next) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          throw err;
        }
        next();
      });
  });
});
