## createApp
### 背景
- 在vue2中可以在全局的Vue上操作(Vue.commponent,vue.use,Vue.mixin)，这会污染全局。创建别的vue实例时也会被污染。
- 并且在完成vue2的单元测试任务时很棘手。
- 所以现在把这些操作移到构建出来的实例上。
### 用法
```javascript
import { createApp } from 'vue'
const app = createApp({})
```
### api变化
#### 移除config.productionTip(提示包含运行时编译器并有警告的构建版本)
#### config.isCustomElement
1. 替换了config.ignoredElements
2. 此配置选项的目的是为了支持原生自定义元素，因此重命名可以更好地传达它的意图。
3. config.isCustomElement接受一个函数。
```javascript
// vue2
Vue.config.ignoredElements = ['my-el', /^ion-/]
// vue3
const app = createApp({})
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
```
‼️ 在 Vue 3 中，元素是否是组件的检查已转移到模板编译阶段，因此只有在使用运行时编译器时此配置选项才会生效
🤔️ Vue2中是否是组件的检查在那个阶段？ vue工作时都有啥阶段？

#### config.globalProperties
config.globalProperties替换了vue.prototype
```javascript
// vue2
Vue.prototype.$http = function() { return;};
// Vue3
import { createApp } from 'vue';
const app = createdApp({});
app.config.globalProperties.$http = function() {return;};
```

#### 移除了Vue.extend
1. vue2中vue.extend用来创建一个基于 Vue 构造函数的“子类”。
```javascript
// vue2
const VueClass = Vue.extend({
  data:{
    return{};
  },
  methods: {}
});
const a = new VueClass();
new VueClass().$mount();
// vue3
import { createApp } from 'Vue';
const options = {
  data() {
    return {

    }
  },
  template: `<div>qweqwe</div>`,
  methods: {}
}
const vue = createApp(options).mount('#app');
// a是一个vue实例，可以插入dom中。
```
2. vue3中没有组件构造器的概念，直接使用createApp。
3. 个人理解：新的createApp和以前的extend时一个抽象层。使用createApp就像是以前直接使用extend。然后有的api功能不同。
4. 如果要使用继承的概念，使用extendsapi
```javascript
// 类似于类的继承
const comA = {
  data() {
    return{};
  },
}
const comB = {
  extends: comA
}
```

#### Vue.use更换
```javascript
// vue2
import a from 'element';
Vue.use(a)
// vue3
import a from 'eleemnt';
const app = createApp({});
app.use(a)
```

#### nextTick，version，compile，delete，observable，reactive, Transition
这些api和内部组件等将是具名导出的。
```javascript
import { nextTick, Transition } from 'Vue';
```

