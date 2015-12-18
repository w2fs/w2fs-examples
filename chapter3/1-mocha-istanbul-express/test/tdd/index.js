'use strict';
let comm = require('../../lib/common');
let should = require('should');
let n1 = 1, n2 = 1;
context('lib/common', function () {
  before(function () {
    console.log('\tBefore All.所有测试用例的统一前置动作');
    //比如测试前向数据库插入测试数据
  });
  beforeEach(function () {
    console.log('\t', n1++, 'Before Each.每个测试用例的前置动作');
    //比如每个测试用例都需要重复使用相同数据,进行检测
  });
  after(function () {
    console.log('\tAfter All.所有测试用例的统一后置动作');
    //比如测试后向数据库清除所有测试数据
  });
  afterEach(function (next) {
    console.log('\t', n2++, 'After Each.每个测试用例的后置动作');
    next();
    //比如每个测试用例都需要重复使用相同数据,进行清理
  });
  it('3+5 should be 8', function () {
    //正常结束
    comm.add(3, 5).should.equal(8);
  });
  it('5-3 should be 2', function (next) {
    //Promise 结束需要next
    comm.minus(5, 3).then(function (result) {
      result.should.equal(2);
      next();
    });
  });
});
