## 组件
### emits
- 组件事件需要在emits中声明，不声明就是将事件绑定到组件的根元素上。
- props和emits：控制向组件内部传递的值和组件内部抛出的事件。
### 异步组件
```javascript
// vue2
components: {
  zujian: () => import  './test.vue',
  optionzujian: () => {
    component: () => import './test1.vue',
    delay: 200,
    timeout: 200,
    error: ErrorCom,
    loading: LoadingCom
  }
}


// vue3
import { defineAsyncComponent } from 'vue';
components: {
  zujian:  defineAsyncComponent( () => import('./zujian.vue'))
  optionszujian: defineAsyncComponent({
    loader: () => import './test1.vue',
    delay: 200, // 显示loadingComponent之前的延迟时间，单位毫秒，默认200毫秒；
    timeout: 200, // 如果提供了timeout，并且加载组件的时间超过了设定值，将显示错误组件，默认值为Infinity（单位毫秒）
    errorComponent: ErrorCom, // 加载失败时显示的组件。
    loadingComponent: LoadingCom // 加载过程中显示的组件。
  })
}
// 就是加了新的defineAsyncComponent和component改为loading
```
