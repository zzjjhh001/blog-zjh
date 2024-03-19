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

## null和undefined
undefined是无定义的意思，null是空对象
## 包装对象
1. 基础数据类型是没有属性和方法的，为了方便使用，会改为包装对象。const a=  2 ====> const a = Number(2);
2. 主动使用包装对象时，那么值就是对象类型，不是基础类型。
## fetch和axios
### fetch
1. 默认不携带cookies
2. 响应400，500不报错。不会reject
3. 不支持abort

## 作用域
1. 全局作用域，函数作用域，块作用域，动态作用域（call和apply修改this的方式）。
2. 作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个 包含了执行环境中所有变量和函数的对象。
### 和上下文区别
1. 上下文是执行代码的时候确认的，动态的。
2. 作用域是写代码的时候就确认的，静态的。

## try catch
1. try catch不能捕获promise中的reject和Throw Error。
2. try catch能捕获 await中的throw Error和reject。
3. .catch能捕获 throw Error。
4. promise那种是异步的，是将代码放到异步队列中执行，这时候已经离开了try catch线程。
5. 而 await是同步等待代码，所以能够捕获到错误。

## 类数组和数组
类数组是指去油索引和长度的对象，内部实现了迭代器。但是没有数组的方法。
常见的类数组：arguments,NodeList等。

## for of和for in
for of的执行是使用了数据的迭代器，没有实现迭代器就不能使用for of，比如Object，遍历时item是value。
for in 是用来遍历对象的可枚举的非symbol属性。遍历时item是key。

## 内存泄漏
未能释放不再使用的内存。在释放这个内存之前已经不在使用它了。
1. 不合理的闭包。
2. 意外的全局变量，直接 a = 2。
3. 忘记删除的setInterval计时器，计时器对外部有引用。
4. 对DOM的引用，后续DOM被删除了。
5. 给DOM指定了匿名函数handle，然后DOM被删了，匿名函数会一直在内存中。
6. vue组件中绑定的事件，发起的请求，建立的websocket，销毁组件时，销毁，断开。
7. 代码中的循环引用。

## async和 watch，computed
watch支持异步。
computed不支持异步。

## Object.create()
以现有对象为原型，创建一个对象。Object.create({});

## js实现继承
```javascript
// 继承就是把一个函数的内部属性方法，让另一个函数也能使用。
function a() {
  this.name = 'a';
}
function b() {

}
// 原型链
// 缺点：共享一个属性。
b.prototype = new a();
const bb = new b();
bb.name;

// 构造函数
// 原型上的属性不能继承，只能继承counstructor中的this的属性。
// call等可以改变this的指向
function b() {
  a.call(this, arguments);
}
const bb = new b();
bb.name;

// 原型链 加 构造函数
// a可能会执行两次。同样的属性，this上和原型上都有。
function b() {
  a.call(this);
}
b.prototype = new a();
const bb = new b();
bb.name;有俩： this.name, bb.__proto__.name;

// 原型式
// 共享原型对象
Object.create;
const b = Object.create(a);
b.__proto__ === a;

// 寄生组合式
// 基于 原型 + 构造函数 的改进;
function a() {

}
function b() {
  a.call(this);
}
b.prototype = Object.create(a.prototype);
b.prototype.counstructor = a;

```
class A {
  // 当前实例，子类的实例
  public k: '2';
  // 当前实例可以使用
  protected d：'1';
  // 当前实例也不能用，只能在执行当前实例的方法是，方法内部去调用。
  private _w: '1';
  counstructor() {
    this.name = '2';
  }
}
## const let var
var在最外层是去声明的变量会挂到window上。
const和let不会，只会放到当前的块作用域。
## 箭头函数this
由于箭头函数没有自己的this指针，通过 call() 或apply() 方法调用一个函数时，只能传递参数，他们的第一个参数会被忽略。