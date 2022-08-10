## slot
1. 插槽，可以在使用组件时，向里边插入自己需要的部分。类似element的dialog。
2. slot中使用的数据和父页面一致，可以理解为和父元素一体的，只是位置放在子组件中。

### 使用
1. 基本使用

```javascript
//组件中 
<div>
<slot>
    <div>chailden</div>
</slot>
</div>
// 页面
<component>
 <input />
</component>
// 就是把input插在div中，放在slot的位置上。<slot>就是占个位置。
// 如果使用组件时没有指定slot中，那么会使用组件中slot内的节点。(可以理解为默认的节点)
```

2. 多个slot的使用
父页面中使用slot指定匹配的slot位置。对应自组件中的name属性。

```javascript
// 父组件中
<div>
      <slot-component>
        <template>
          <div slot='footer'>footer</div>
        </template>
        <template>
          <div slot='main'>main</div>
        </template>
        <template>
          <div slot="bottom">bottom</div>
        </template>
      </slot-component>
    </div>
// 子组件中
<div>
    <slot name='bottom'>
    </slot>
    <slot name='main'>
    </slot>
    <slot name='footer'>
    </slot>
  </div>
// 当父组件中没有加slot属性的节点都会插在子组件的默认的slot中(没有指定name)。
```

### 作用域插槽
1. slot的数据是使用的父组件的，那么如果想使用子组件的该如何做？--slot-scope
2. 使用slot-scope指定子组件给插槽的值。
```javascript
// 父组件
<slot-component>
  <div slot="bottom" slot-scope='scope'>
    {{scope.data}} {{scope.me}}
  </div>
</slot-component>
// 子组件
<div>
    <slot name='bottom' :data="data" :me="me">
    </slot>
</div>
// 指定slot-scope就能使用子组件中的数据。
```