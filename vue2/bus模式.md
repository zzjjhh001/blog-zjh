## bus模式实现组件通信
### 新增Vue实例
这种方式是，新增一个vue实例。使用vue.$emit和vue.$on实现组件间通信
```javascript
// 上代码
// bus.js 文件
import Vue from 'vue'
const bus = new Vue();
export default bus;
// vue 中使用
import bus from './bus'
bus.$on('qq', () => {})
bus.$emit('qq', 'qq-value')
```
### 挂载到根Vue实例上
这种是新建一个bus的class，然后把他挂载到vue上。
```javascript
上代码
// 根js文件
import bus from './bus'
vue.proptype.$bus = bus;
// bus文件

class Bus {
  constructor() {
    this.event = {}
  }
  on(key, func) {
    this.event[key] = func;
  }
  emit(key, value) {
    this.event[key](value);
  }
}
const bus = new Bus()
export default bus;
// 代码需要优化，比如导出的bus时改为单例模式

// vue文件中使用
this.$on('qq',() => {})
this.$emit('qq', 'qq-value')
```