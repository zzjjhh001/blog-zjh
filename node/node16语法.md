## node16支持的简写语法
这里是一些node16版本之后，支持的常用的简单语法操作。
### &&=
b 为true 就给b赋值;
```javascript
b &&= 2
// 等价于
b && b = 2
```
### ??
- 空值合并运算符
- 只有左侧不为null或者undefined时右侧生效。
- 只是排除了null和undefined，0和 "" 不会被排除。
### ??=
逻辑空赋值运算符 (x ??= y) 仅在 x 是 nullish (null 或 undefined) 时对其赋值
```javascript
const a = { tt: 2, dd: null, kk: '' }
a.tt ??= 4;
// a.tt = 2
a.cc ??= 4;
// a.cc = 4
a.dd ??= 4
// a.dd = 4
a.kk ??= 4
// a.kk = ''
// x ??= y 等价于
x ?? (x = y);
```

###  ||=
- 逻辑或赋值（x ||= y）运算仅在 x 为虚值时赋值。
- 虚值就是转换boolean时为false
```javascript
x ||= y 
x || (x = y)
const b = { tt: 2, dd: null, kk: '' }
b.cc ||= 22;
b.dd ||= 22;
b.tt ||= 22;
b.kk ||= 22;
// b
// 222 { tt: 2, dd: 22, kk: 22, cc: 22 }
```

### ?.
- 可选链操作符
- 可选链操作符 ( ?. ) 允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效
- 在引用为空 (nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。
- 就是当访问的内容不存在时会抛出错误。
```javascript
const a = { b : 2}
const c = a?.b?.c?.d;
// 不报错，c是undefined

const f = null
console.log(f?.a.c);
// undefined

a?.['w']
arr?.[10]

func?.('qwe')
// 如果有func函数就调用，没有就return undefined;

object?.property = 1;
// 报错，只能用于获取数据，不能用赋值

let potentiallyNullObj = null;
let x = 0;
let c = potentiallyNullObj?.[x++]
console.log(x)
// x = 0; 
```


###