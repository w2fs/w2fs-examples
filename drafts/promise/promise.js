'use strict';
/**
 * 生成一个defer对象
 * @return {object} Promise对象
 */
let getDefer = function () {
  let deferred = {};
  deferred.promise = new Promise(function (resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
};

/*
 * 通过getDefer封装Promise
 */
let promiseFunc = function (input) {
  let deferred = getDefer();
  if (parseInt(input, 10) < 10) {
    deferred.resolve(input * input);
  }
  else {
    deferred.reject('Input Number Too Large');
  }
  return deferred.promise;
};

promiseFunc(5).then(function (result) {
  console.log(result);//25
}).catch(function (err) {
  console.log(err);//不报错
});

promiseFunc(15).then(function (result) {
  console.log(result);
}).catch(function (err) {
  console.log(err);//报错
});


/*
 * 链式写法
 */
setTimeout(function () {
  console.log('=============');
  promiseFunc(2).then(function (val) {
    console.log('Step 1:', val); //val===4
    return promiseFunc(val);
  }).then(function (val) {
    console.log('Step 2:', val); //val===16
    return promiseFunc(val);
  }).then(function (val) {
    console.log('step 3:', val); //err 不执行这句,跳到catch,往后的then均不执行
    return promiseFunc(val);
  }).then(function (val) {
    console.log('Step 4:', val);
    return promiseFunc(val);
  }).catch(function (err) {
    console.log(err);
  });
}, 20);

/*
 * Promise.all
 * 全部执行完,再返回
 * (常用)
 */
setTimeout(function () {
  Promise.all([promiseFunc(1), promiseFunc(2), promiseFunc(3)]).then(function (val) {
    console.log('=============');
    console.log(val);//[1,4,9]
  });
}, 100);

/*
 * Promise.race
 * 谁先执行完,返回谁
 * (不常用)
 */
setTimeout(function () {
  Promise.race([promiseFunc(1), promiseFunc(2), promiseFunc(3)]).then(function (val) {
    console.log('=============');
    console.log(val);//1
  });
}, 100);
