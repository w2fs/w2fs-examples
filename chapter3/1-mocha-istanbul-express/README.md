# Mocha + Istanbul with Web App

## 安装执行

```
npm i 
npm test
```

报告路径:

```
coverage/lcov-report/index.html
```

## 参数和包说明

```
--bail 遇错停止
```

更多参数参考: [http://mochajs.org/](http://mochajs.org/)

```json
"devDependencies": {
    "istanbul": "^0.4.1",  //代码覆盖率
    "mocha": "^2.3.4",     //测试框架
    "should": "^8.0.1",    //测试用的判断工具
    "supertest": "^1.1.0"  //http请求模拟
  }
```

## 测试框架说明

入口文件:

```js
'use strict';
describe('Demo App', function () {  //describe表示大标题,(可选context表示小标题,或者都用describe)
  describe('BDD Tests', function () { //具体测试用 it 表示一个测试用例
    require('./bdd'); //引用BDD测试, 且index.js中可以再按细分建目录require
  });
  describe('TDD Tests', function () {
    require('./tdd'); //引用TDD测试
  });
});
```
