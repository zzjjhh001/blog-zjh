## $set
1. vue的响应式不是deep的
2. 数组和对象如何深度监听呢？
3. 对于数组，会重写数组原型上的7个方法，实现监听数组的改变。
4. Vue 不允许动态添加根级别的响应式 property。
5. 使用$set向嵌套对象内添加响应式property。
```javascript
Object: Vue.set(vm.someObject, 'b', 2)
Array: Vue.set(vm.items, indexOfItem, newValue)
```