# Koa Hello World!

注意: 该示例为 koa 2.0 Alpha 版本(改用es6),大多数已有中间件不支持.

## 安装执行

```
npm i 
npm start
```

访问: [http://localhost:3000/](http://localhost:3000/)

## package.json

参考文档: [https://docs.npmjs.com/getting-started/using-a-package.json](https://docs.npmjs.com/getting-started/using-a-package.json)

### scripts 执行脚本

```json
  "scripts": {
    "start": "./node_modules/.bin/babel-node app.js",
    "test": "./node_modules/.bin/babel-node app.js",
    "hello": "echo 'Hello World!'"
  }
```

可以从命令行里执行:

```
npm start
npm test
npm run xxx (start/test/hello/...)
```

### dependencies 依赖项

安装并保存到依赖:

```
npm i --save xxx
```

安装依赖项:

```
npm i
npm i .
```

### devDependencies 开发依赖项

安装并保存:

```
npm i --save-dev xxx
```

## .babelrc

Babel的配置文件, `=> 箭头方法` 属于 `stage-3`

参考文档: [https://babeljs.io/docs/usage/babelrc/](https://babeljs.io/docs/usage/babelrc/)
