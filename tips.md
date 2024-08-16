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
absolute定位元素的默认位置就是该元素假定在标准文档流中的位置。

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

## 捕获事件
vue：@click.capture：在捕获阶段执行函数

## node工具类util
util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。
## scss的@import
通常@import是去找scss文件，把他导入。但是在部分情况下就是正常的css语句
1. 文件扩展名是css
2. url()
3. 文件开头是http://
4. @import包含 media queries
## css的@import
1. @import url（）机制是不同于link的，link是在加载页面前把css加载完毕，而@import url（）则是读取完文件后在加载，所以会出现一开始没有css样式，闪烁一下出现样式后的页面(网速慢的情况下)
2. 我的理解: 不同于link引入样式，不是在生成css树前加载好，是页面渲染好了，然后再次引入样式，可能出现页面闪烁现象

## vue的ref
只能选本组件内的dom，不能选到父组件或者子组件中的dom。

## metaInfo的使用
1. vue中metaInfo可以向html中加meta标签或者link标签和title。
2. meta是静态页面的元，就是渲染出来的html上head中的，可以设置属性去利于seo。
3. link就是一个link标签，去引入资源。
```javascript
// 静态
metaInfo: {
  title: 'My Example App', // set a title
  meta: [// set meta
    {                
      name: 'keyWords',
      content: 'My Example App'
    },
    {
      name: 'description',
      content: '这是一段网页的描述'
    }
  ]
  link: [{// set link
    rel: 'asstes',
    href: 'https://assets-cdn.github.com/'
  }]
}
// 动态
metaInfo {
  return {
    meta: this.meta,
    link: this.link,
    title: this.title
  }
}
```

## vue懒加载
路由懒加载，和组件懒加载
```javascript
// 组件懒加载
components: {
  c : () => import('../c'); // 推荐使用，(好像需要babel配置)(import()是ES6新增语法)
  c : () => require('../c'); // 推荐使用
}
// 如果组件导入使用命名导出，则可以对返回的 Promise 使用对象解构
components: {
  UiAlert: () => import('keen-ui').then(({ UiAlert }) => UiAlert)
}
// 路由懒加载
1. const b = () => import('../c');
2. 
{
  path: 'waterFall',
  name: 'waterFall',
  menuName: '同行交流',
  component: () => import('./view/waterfall')
}
```

## git合并某次commit
git cherry-pick 提交记录ID

## 滚动条
1. 默认不展示，hover时展示
```css
.aclass {
  overflow-y: hidden;
  &:hover {
    overflow-y: scroll;
  }
}
```

## 合并对象属性,给默认值
```javascript
const a = { 
  name: 1,
  age: 2
}
const b = {...a, name: 2}
console.log(b)   // { name: 2, age: 2 }
```

## vue组件开发并挂在到真实DOM上
```javascript
// 引入组件
import component from './component';
// 生成构造器
const Constructor = Vue.extend(component);
// 生成虚拟dom结构
this.releaseDom = new Constructor();
// 生成真实dom,$el指向生成的真实dom
this.releaseDom.$mount();
// 将真实dom，append到页面dom
dom.appendChild(this.releaseDom.$el);
// or
this.$releaseDom.$mount('#app');
```

## 冻结对象
1. 冻结一层：如果一个属性的值是个对象，则这个对象中的属性是可以修改的。
2. 一个被冻结的对象再也不能被修改；冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
3. 冻结一个对象后该对象的原型也不能被修改

```javascript
const data = Object.freeze(data);
```

## 定义不改变的常量的常见用法
```javascript
const sourceMap = {
  CREATE: 0,
  FINISH: 1
}
function generateEnum(sourceMap) {
  return Object.keys(sourceMap).reduce((targetEnum, key) => {
    targetEnum[sourceMap[key]] = key;
    return targetEnum;
  }, sourceMap);
}
export default sourceMapEnum = Object.freeze(generateEnum(sourceMap));
// { CREATE: 0, FINISH: 1, '0': 'CREATE', '1': 'FINISH' }
// 
```

## vue的diff
vue中对数组的watch时通过watch它的方法实现的。
但是特殊场景下，直接修改数组的某一项，视图也会修改。

```javascript
data() {
  return {
    answer: 'b',
    msgList: []
  }
}

function test() {
  this.answer = 'a';
  this.msgList[2].name = 'qwewq';
}
// 执行test方法；
// 因为修改了answer所以已经触发了vue的diff。
// 在diff中会发现数组变化，就会触发页视图变化。
// 如果没有修改answer中，而只修改了msgList,那么视图不会变化，因为不会触发vue的diff。就不会对比新老虚拟dom。
```

## 位运算符
### ^
异或符号:不同就是1，相同就是0
| 元 | 元| 结果|
| -- | -- | -- |
| 1 | 1 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 0 | 0 | 0 |

### &
与符号：全是1才是1.
| 元 | 元| 结果|
| -- | -- | -- |
| 1 | 1 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 0 | 0 | 0 |
### ｜
或符号: 有一个为1就是1
| 元 | 元| 结果|
| -- | -- | -- |
| 1 | 1 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 0 | 0 | 0 |
### 
同或符号：相同为1，不同为0
| 元 | 元| 结果|
| -- | -- | -- |
| 1 | 1 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 0 | 0 | 1 |

### >>
右移符号
8 >> 2 === 2 // true
### <<
左移符号
8 << 2 === 32 // true

## vue-router跳转
⚠️： name和params配合使用。
```javascript
{
  path: 'zhibo/live/:id',
  name: 'zhibo'
}
// 会匹配所有的zhibo/live/*的url
const url = this.$router.resolve({
  name: 'zhibo/live',
  params: {
    id: 213
  }
})
// url是一个跳转路由。url.href是拼接好的路径，例如：${location.origin}/zhibo/live/213
```
- 路由文件中，页面路由不配置要传递的params，在新页面中也能拿到参数。
- 路由跳转时，使用params传递参数时，要小心拼接好的url,如果最后的参数以.jpg此类结尾，浏览器会识别为一张图片的url。
## flex-grow
flex-grow是分配剩余的空间，所以flex的子项现在占有的空间是确定的，就是每个元素需要有一个基本的宽度/高度。

## components命名
推荐：注册时首字母大写，后边也大写，使用时，大写变小写，加-。
```javascript
import PageTitle from './pageTitle.vue'
components: {
  PageTitle
}
<page-title />

```

## vue中的键盘和鼠标事件
指定回车键和keyCode
```html
// 键修饰符，键别名
<input @keyup.enter="onEnter" />

// 键修饰符，键代码
<input @keyup.13="onEnter" />
// 指定鼠标按住和弹起的事件
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```
## vue的template中如何使用vue的data，props等
$data,$router,$props
```html
<component v-bind="$props" :a="$data.a" >
```
## vm.$isServer
当前 Vue 实例是否运行于服务器。区分是不是服务端渲染

## textarea内部滚动
dom.scrollTop = 100;
## IOS 12.1 css设置position为fixed，弹起软键盘 兼容性
```javascript
// 微信文档 https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
if (isIos()) {
  window.addEventListener('focusout', function() {
    // 软键盘收起的事件处理
    setTimeout(() => {
      window.scrollTo(0, document.documentElement.scrollTop || document.body.scrollTop);
    });
  });
}
```
## IOS和android唤起软键盘差异
IOS中是window.innerHeight不变，页面整体上滚
ANDROID中是window.innerHeight变小，触发resize事件。
## IOS聚焦
// 主动调用focus会在ios和android中都触发focus和focusin事件，但是ios中键盘没有弹起。
IOS聚焦必须用户主动点击操作。
## 输入框的focus和blur事件
1. focusout和focusin会冒泡。
2. focus和blur不会冒泡。
3. 顺序：focusin > focus > focusout > blur
## express框架中locals对象
1. app.locals和res.locals是expess中用于渲染模板的两个对象.
2. app.locals上通常挂载常量信息（如博客名，描述，作者信息），res.locals上通常挂载变量信息.
3. locals对象用于将数据传递至所渲染的模板中。
4. locals对象会被传递至页面，在模板中可以直接引用该对象的属性，也可以通过该对象引用.

## 页面不能缩放
```html
// 解决方案：在模版上加
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
```
- width - viewport的宽度：device-width：device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）
- height - viewport的高度
- initial-scale - 初始的缩放比例
- minimum-scale - 允许用户缩放到的最小比例
- maximum-scale - 允许用户缩放到的最大比例
- user-scalable - 用户是否可以手动缩放
## 解决IOS的刘海和安全区域的问题
- 解决核心区域不会被设备圆角(corners)，传感器外壳(sensor housing，齐刘海) 以及底部的 Home Indicator 遮挡
- name为viewport的meta标签的content上加viewport-fit=cover。
## 开启蒙层body不能滚动
```
<!-- js -->
fixedBody() {
  if (document.body.classList.contains('noScroll')) {
    document.body.classList.remove('noScroll');
    document.documentElement.classList.remove('noScroll');
    document.scrollingElement.scrollTop = this.scrollTop;
  } else {
    this.scrollTop = document.scrollingElement.scrollTop;
    document.body.classList.add('noScroll');
    document.documentElement.classList.add('noScroll');
    document.body.style.top = -this.scrollTop + 'px';
  }
},
<!-- css -->
.noScroll {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
```

## 禁止右键操作
```javascript
指定dom的oncontextmenu事件
this.dom.oncontextmenu = function () { return false; };
```

## html模版
<html lang="en">
lang="zh-CN": 会指定语言。
chrome下如果是en会唤起谷歌翻译。

## 严格模式
区别：
- 变量声明
- 禁止使用with
- 设立eval作用域
- 函数中的this指向问题
- 删除变量
- 函数参数不能重名
- 八进制字面量表示法
- arguments不追踪参数变化

## vue2中v-model
当v-model使用在自定义组件上时，可以在组件上使用model去修改v-model绑定的参数
```javascript
exprot default {
  model: {
    prop: 'title',
    event: 'input2'
  }
}
```
## console
- 如果时基本数据类型，则直接打印。
- 如果时引用类型，只打印第一层属性
- 点击展开查看其他属性时，会再去内存中去取，就会出现，展示的内容不是代码执行到console时的 内容

## 合并对象的值
Object.assign和解构赋值。
undefined也会识别为有效值，后边的undefined也会覆盖前面的值。
```
const a = {
  b: 1
}
const c = {
  b: undefined
}
Object.assign({}, a, c) // { b: undefined }
{...a, ...b} // { b: undefined }
```
## 获取DOM的样式
Window.getComputedStyle(dom, ''): 返回一个对象
```
Window.getComputedStyle(dom, '')['height'];
```

## box-sizing失效
如果目标元素的高度（或宽度）只由其内容、padding、border确定的情况下，则会存在失效情况。
宽度或高度设置为百分比也会失效

## .cjs,.mjs
.cjs: 声明该js文件使用的是commonJS的导入导出写法
.mjs: 声明该js文件使用的是ES6的导入导出写法

## cloneNode(deep)
1. copy节点。deep决定是否深度拷贝
2. copy节点时，非内联事件不会被copy，需要重新添加事件。

## try catch和 .catch
try catch 是同步代码，只能捕获同步的报错，比如代码语法错误等，所以使用try catch时，使用await/async
.catch可以捕获.then中的报错和前面的语法错误