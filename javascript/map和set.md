## set和map
定位：都是ES6新增的内容对象，类似ES5的Date,Math,ReExp,Object,Array,Boolean,String
主要使用在数据存储和数据重组。
- set是一种集合的数据结构，map是字典的数据结构
- 相同：都是存储不重复的值。
- 不同：set是以值存在的，map是键值对存储
### set
在set中可以存储任意值。（不能重复）。向set插入内容时不会进行类型转换，所以字符串1和数字1是不同的
在set中NAN和undefined都可以存进去，并且只能存一次。
#### 方法
- add: 相当于数组的push，向set中插入新内容
- delete(value)： 删除指定内容
- has：是否存在内容
- clear： 清空set
- keys: 获取值的迭代器
- values: 获取值的迭代器
- entries: 获取键值对的迭代器
- forEach
### weakSet
允许将弱引用对象存储在一个集合中，可以用来保存dom节点
#### 区别
- weakSet只能存对象引用，不能存值，Set都可以
- WeakSet中存储的对象都是弱引用，那么垃圾回收机制不考虑WeakSet的引用关系，如果这个对象没有别的引用关系，垃圾回收会干掉它。
- weakSet不可遍历。有add，has，delete方法
### map
#### 方法
- set(key, value): 插入新内容
- get(key)： 获取内容
- has(value): 是否存在
- delete(value)
- clear()
- keys(): 获取键的迭代器
- values(): 获取值的迭代器
- entries(): 获取键值对的迭代器
- forEach()
### weakMap
weakMap对象是一组键值对的集合，其中键是弱引用对象，而值可以是任意
方法：has，get，set，delete