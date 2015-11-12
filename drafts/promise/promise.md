# Promise思想

改善Callback Hell问题

## 什么样的函数需要改写成Promise

例1:

```js
mysql.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) {
    throw err;
  }
  //对查询结果进行操作
  console.log('The solution is: ', rows[0].solution);
});
```

例2:

```js
fs.readFile('myfile.txt', function (err, file) {
  if (err) {
    throw err;
  }
  //对file进行操作
});
```

## Callback Hell

例子:

```js
mysql.query(sql1, function(err1, rows1) {
  if (err1){
    throw err1;
  }
  mysql.query(sql2,function(err2,rows2){
    if(err2){
      throw err2;
    }
    //对rows1和rows2进行操作
    
  });
});
```

这样写法的问题:

1. 嵌套太多,可读性差
2. 变量名受污染
3. 各个函数之间的干扰,一但错误发生,不能继续向下执行

等等

