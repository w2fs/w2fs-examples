'use strict';
exports.add = function (a, b) {
  return a + b;
};

exports.minus = function (a, b) {
  return Promise.resolve(a - b);
};
