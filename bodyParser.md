## bodyParser
### bodyParser.json([options])
解析并返回 json格式的数据，这是常用的方法。内部会查看content-type，只有是正确的content-type默认是application/json才进入这个中间件解析处理。
### bodyParser.urlencoded([options])
这是常用的方法，常见的前端请求解决方案如表单post提交、axios、fetch等库的post请求都需要这个中间件进行解析，返回json的格式数据。当请求的数据类型是application/x-www-form-urlencoded时才会进入这个中间件进行处理。
### 一般使用
```javascript
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
```