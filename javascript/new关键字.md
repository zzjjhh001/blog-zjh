## new关键字
js中万物皆对象，所以js的new关键字不是用来创建类的实例对象，而是用来继承。
### new时执行的操作
-  当识别到new关键字时，执行以下操作
```
var cat = new Animal("cat")
//底层执行操作
var obj = {}
obj.__proto__ = Anmical.prototype
var result = Anmial.call(obj,"cat")
return typeof result === Object?result:obj
```
- 封装_new实现new功能
```
function Person(name,age){
    this.name = name
    this.age = age
}
function _new(){
    let func1 = [].shift.call(arguments)
    let obj = {}
    obj.__proto__ = func1.prototype
    let c = func1.apply(obj,arguments)
    return (typeof c === Object) ?c:obj
}
let s = _new(Person,"zhao",20)
console.log(s)
console.log(s.__proto__ == Person.prototype)
```
