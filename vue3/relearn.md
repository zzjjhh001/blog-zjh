## tips
### 生命周期
- vue3中的setup是运行在创建阶段的，所以是无法获取dom。(使用ref获取dom时，给初始值是null)。
- vue2中的errorCaptured换成了vue3中的onErrorCaptured。(当捕获到子孙组件的异常时激活)
- vue2中的destroyed换成了onUnmounted。beforeDestroy => onBeforeUnmount
### 全局编译器宏
#### defineProps和defineEmits
- 都是编译器宏，不需要导入，参数和props以及emits一致。
- 会被提到模块的作用域，不能用setup声明的局部变量。
- 可以使用导入的内容。
- 传入到 defineProps 和 defineEmits 的选项会从 setup 中提升到模块的作用域。因此，传入的选项不能引用在 setup 作用域中声明的局部变量。这样做会引起编译错误。但是，它可以引用导入的绑定，因为它们也在模块作用域内
#### defineExpose
- vue3中组件默认关闭的，通过$parent等获取到实例后不能够访问到在setup中的绑定。这使用使用defineExpose解决这个问题.
```javascript
<script setup>
import { ref } from 'vue';
const a = ref(1);
const b = ref(2);
defineExpose({
  a,b
})
</script>
```
#### withDefaults
### 全局自定义参数
```javascript
// 定义时
vue.prototype => app.config.globalProperties
// 使用时
```
### v-model

### setup
<script setup> 只是setup的语法糖，每次创建实例的时候都会执行。
<script>只有引入SFC时执行一次。（vue2和vue3都是）

### 解构赋值导致响应式丢失
1. 就是引用数据类型和基本数据类型。
1. 解构出来的内容是基本数据类型，会直接赋值是深拷贝。
2. 引用数据类型，会返回reactive(obj)之后的引用地址的拷贝。
### reactive
reactice(Obj): 返回db'j