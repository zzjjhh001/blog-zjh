## commonJS
服务端node使用commonJS去加载模块，服务端的模块文件都是在本地的，所以都是同步加载的。
#### 核心模块和文件模块
- 核心模块就是node内部的包。os，path，math这类。启动node时，会直接加载部分核心模块。
- 文件模块就是用户自己写的文件

#### 加载模块顺序
第一次加载之后，会把文件编译成二进制文件放在内存中。第二次直接使用。
核心模块缓存区=>文件模块缓存区=>核心模块=>文件模块

#### 写法
```javascript
// 导入
const a = require('os')
const {aa, cc, bb} = require('./case')
new bb()
// 导出
function aa() {}
function cc() {}
class bb{}
module.exports = {aa, cc, bb}
module.exprots.a = a
```
## ES6
ECMA原生的关于模块的导入和导出，用于浏览器端。他是把一个文件导入导出。

#### 写法
```javascript
// 导入
import a from  './test'
import {a, b} from './test1'
// 导出
const a = 'a'
export {a, b}
exports.a = 'a'
export const a = 'a'
export default function(){}
```
