## 比较运算符
比较运算符= =,<,>,<=,>=,!=,= = =,!= =
### 两侧都是引用类型
比较的都是对象,这比较的是引用。就是比较两者在栈中存放的地址是否指向同一个堆地址，或者说栈中的信息是否相同。
```
const a = []
const b = []
console.log(a == b)//false
```
### 两侧是引用类型和基本数据类型
首先将引用类型转换为基本值，调用其自身的valueOf方法。数组就是调用toString()
### 两侧都是基本数据类型
1. 当数据类型一致时，相当于 === ，比较值是否相同
2. 当类型不一致时，先转换类型再比较。转换规则：当存在一个boolean值，立即转换为数字，然后在比较。String和Number比较时，字符串转换为String
```
//boolean转数字时，true转为1
const a = 0
const b = true
console.log(a == b)//false
//字符串转数字
const a = '1'
const b = 1
console.log(a == b)//true
```
### null和undefined
```
console.log(null == null)//true
console.log(undefined == undefined)//true
console.log(null == undefined)//true
//NaN和任何值不相等，包括其自身
```
### 总结
比较时，先看数据类型，再转换数据类型，再比较。注意存在一个boolean时直接转换为数字就是调用Number(),String和Number比较时，字符串调用Number()。再记住null和undefined的特例。


## valueOf方法
1. 调用valueOf方法后，会返回它自身。(Object,Array,Function)
2. 当new Number时，创建出一个对象，但是返回值不是Object类型，而是对应的Number等，因为内部有重写valueOf方法。（Number,String,Boolean）

## const a = 1 和 const b = new Number(1)
```
//适用于所有的基本类型，调用那些方法时，两种声明方式，结果一致
```
### a是一个基本数据，为什么能使用toString和valueOf,__proto__,constructor
当用户通过字面量方式声明一个变量，并在该变量上调用如toString等方法，JS脚本引擎会偷偷地创建该变量对应的包装对象，并在该对象上调用对应的方法；当调用结束，则销毁该对象；这个过程对于用户来说是不可见的，
```
var a = 1;
var b = a;
a = new Number(a);
console.log(a.toString());
a = b;
```

## valueOf和toString
1. 都重写：涉及到操作符的问题，valueOf的优先级比toString的优先级高，涉及到显示问题，toString方法优先级比valueOf方法高。
2.  只重写toString：toString方法比原型链上的valueOf方法优先级高。
3.  只重写valueOf：涉及到值运算优先调用valueOf方法，涉及到显示问题还是优先调用原型链上的toString方法。

## var的变量提升
```
(function s(){
        var x = foo()
        var foo = function foo(){
            return "aaa";
        }
        console.log(x)
    }
)()//报错

(function s(){
        var x = foo()
        function foo(){
            return "aaa";
        }
        console.log(x)
    }
)()//打印aaa
//解析：var变量提升，foo会提升，函数声明会提升，但是函数表达式不会提升。第一例：当执行到给x赋值是foo是undefined。所以不会执行foo(),所以会报错
```
## 异步函数不支持外层try/catch
```javascript
try {
  Promise.reject('报错了');
} catch(e) {
  console.log(e)
}
```
## JSON
1. JSON.stringify
   - 局限性
     1. 使用JSON.Stringify 转换的数据中，如果包含 function，undefined，Symbol，这几种类型，不可枚举属性， JSON.Stringify序列化后，这个键值对会消失。
     2. 转换的数据中包含 NaN，Infinity 值（含-Infinity），JSON序列化后的结果会是null。
     3. 转换的数据中包含Date对象，JSON.Stringify序列化之后，会变成字符串。
     4. 转换的数据包含RegExp 引用类型序列化之后会变成空对象。
     5. 无法序列化不可枚举属性。
     6. 无法序列化对象的循环引用，（例如: obj[key] = obj)。
     7. 无法序列化对象的原型链。
