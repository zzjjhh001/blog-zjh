### 结构赋值导致的响应式丢失
- 解决方案
const { tt } = toRefs(name);
### slot
- v-slot有一个语法糖#;
- 子组件中slot，父组件中<template #header></template>或者v-slot="header";
```javascript
<div class="zi">
  <slot name="header">qwe</slot>
</div>

<div>
  <zi>
    <template v-slot="header"></template>
    <template #"header"></template>
  </zi>
</div>
```
#### 数据传递
- 父组件中写的插槽内的内容默认使用父组件中的数据，
- 使用子组件数据方式
```
<!-- 子组件 -->
<div>
  <slot :text='text'></slot>
</div>

<!-- 父组件： -->
<zi v-slot='tt'>
{{ tt.text }}
</zi>
```