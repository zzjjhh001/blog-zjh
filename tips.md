## 一些容易忘掉的tips
### watch执行时机
1. watch的执行时机在created和mounted之后，update之前。
2. watch不是立即执行的。是在方法执行完之后，只执行一次(有n次修改，只对比初始值和最终值)。

### target和currentTarget
1. e.target是触发事件的元素本身。
2. e.currentTarget是处理事件的元素。
3. 触发事件时，是e.target是点击的元素，不是写了@click的元素。

### 使用mescroll
1. 要在id=scroll的div中再加一个div。
2. 会把没有更多数据加载内层div之下。
3. 如果不加一层div会把它渲染在列表最上。

### 阻止事件冒泡
pointer-events none;(属性可继承)(直接阻止事件的产生)。
@click.stop
### 不做事的事件
只写修饰符，不加事件。
```html
<div @click.stop>没有反应</div>
```

### vue的生命周期
生命周期是同步进行了，上一个执行结束，下一个才执行。但是异步任务不会阻塞生命周期的执行。

### git
git的compare：比较出的是commit而不是文件差异，比较出的是source分支的节点比( source分支与target分支的最短公共节点)多的commit。

### 更换图片
在更换node的图片时，要注意改图片名称，如果不改可能会命中各种缓存，导致图片没有更新。

### word-spacing
这个属性是设置单词间空格的宽度。
当值是具体的长度(px等): 是增加的额外长度。不是覆盖原来的。
### letter-spacing
设置字母间的距离。对汉字也生效

### String和string区别
string时一个基本数据类型，String是一个类。

## ref
如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例

## 宽高百分比
绝对定位元素的宽高百分比是相对于临近的position不为static的祖先元素的paddingbox来计算的。

非绝对定位元素的宽高百分比则是相对于父元素的contentbox来计算的。

## absolute
绝对定位是相对于最近的非static祖先元素的paddingbox。
如果left和right也为auto的话，元素的水平位置就是它假如作为静态(即static)元素时该在的位置

## 禁用ESLint
禁用一行
```javascript
console.log("此处代码不被eslint做语法检查"); // eslint-disable-line
```
禁用一部分
```javascript
/* eslint-disable */
console.log("此处代码不被eslint做语法检查");
console.log("此处代码不被eslint做语法检查");
/* eslint-enable */
```
整个文件禁用
```javascript
/* eslint-disable */ 放在文件顶部
```
禁用指定规则
```javascript
console.log('foo'); // eslint-disable-line  no-alert, no-console
```

## 浏览器的控制台打印是实时查询的。
在修改对象的属性之前，打印对象。
修改之后，控制台点击打印的对象，这时候的属性是变化后的值。

## $event
把原始的dom事件传入方法中: $event。
```javascript
//<div @click="handleClick($event)">www</div
```

## 修饰符capture
将绑定的事件改为在捕获阶段执行。@click.capture=''

## transform
transform是修改css的视觉效果。是css的属性计算之后，再进行转换。所以优先级高。

## history
history的go，back，forward，pushState，replace都是改变了url但是不会刷新页面。

## vue组件component
```javascript
// <component :is='child'> </component>
// data: {return { child: 'aa'}}
// is指定使用的组件。可以修改child实现动态组件。
```

## 小程序中使用is
小程序也可以使用is属性，需要在wxml中引入组件，再使用is指定使用的组件，is的值对应组件中的name属性。

## vue组件名大小写
- my-component-name
- MyComponentName

## vue中data声明
数据写在data中是为了监听到数据变化，通知这个数据对应的watchers：如页面渲染或者watch，computed。如果一个数据需要挂载在this上，但是不需要监听变化，就可以不在data中定义。小程序也类似。

## v-if
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。