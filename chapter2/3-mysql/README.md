# Mysql Example

## 安装执行

```
npm i 
npm test
npm start
```

访问: [http://localhost:3000/](http://localhost:3000/)

注: 需要先运行数据库(MAMP).

## 常见Query语句

### 1. select

```sql
SELECT 字段 FROM 表 WHERE 条件 GROUP BY 字段 ORDER BY 字段 DESC LIMIT 10
```

`result` => 对象数组(Rows[])

### 2. update

```sql
UPDATE 表 SET 字段=值 WHERE 条件
```

`result.affectedRows` => 受影响行数

### 3. insert

```sql
INSERT 表(字段) VALUES (值)
```

`result.insertId` => 插入的id