## path
和路径相关的模块。
### path.normalize
格式化路径
```javascript
console.log(path.normalize('//qweqw///qweq//test.js'))
// /qweqw/qweq/test.js
```
### path.join
合并路径
```javascript
console.log(path.join('qweqweqw', '/qweawe.js////', '///wqeqweq.r', '..', '.'));
// qweqweqw/qweawe.js
```
### path.resovle
绝对路径
```javasccript
console.log(path.resolve('..'))
// 当前所在目录与参数拼接
```
### path.extname
获取后缀
```javascript
console.log(path.extname('weqweq.name'))
// .name
```
### path.basename
获取最后的路径
```javascript
console.log(path.extname('a/b.js'))
// b.js
```
### path.dirname
返回路径中代表文件夹的部分
```javascript
console.log(path.dirname(path.resolve('a.js')))
// 当前的目录
```
### path.parse
返回路径
```javascript
console.log(path.parse(path.resovle('a.jss')))
// 
{ root: '/',
  dir: '/Users/zhaojinghui/work/babel',
  base: 'a.js',
  ext: '.js',
  name: 'a' }
```
### path.sep
获取文件路径的分隔符
```javascript
path.sep: /;
```
### __dirname and __filename
在每个模块中、除了require、exports 等模块相关API 之外，还有两个特殊成员
__dirname 获取当前文件所属目录的绝对路径
__filename 获取当前文件的绝对路径
__dirname 和 __ filename是不受node命令所属路径影响的
这两个命令是node的命令
