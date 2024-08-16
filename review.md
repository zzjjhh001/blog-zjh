## HTML
行内元素的垂直方向的margin和padding不生效,不会撑开别的元素，但是行内元素的border会被撑开。
### js不能操作伪元素
### em和rem
1. em大小参考当前元素的字体大小
2. rem大小参考根元素的字体大小
## css
### calc
calc( 100% - 20px);
加减乘除均可
### 伪类选择器
1. p:first-of-type: 选择父元素的第一个子元素
2. p:nth-child(1): 选择父元素的第一个子元素且子元素是p标签才生效
3. p:nth-type-of(n): 选择父元素的第n个p标签子元素。
p:nth-child(n)选择器不区分类型，只选择父元素的第n个子元素，但是子元素标签要对应上p，否则不生效。
### 选择器优先级
！important 》行内样式 》id选择器 〉类选择器==属性选择器 〉标签选择器 》 通配符选择器
### 分组和嵌套
1. p,div,a{} : 所有的p和div和a标签
2. p.masked {} class含有masked的p标签
### 组合选择符
空格：后代选择器
> : 子选择器
+ : 相邻兄弟节点选择器 div+p div后边紧邻的p标签
～: 普通兄弟选择器 div ～ p div之后的p标签
### position
absolute：top等和第一个非static定位(绝对，相对，fixed，sticky)的最近父元素(或者body)确定位置，原空间不占用
relative：top等确定位置，但是原空间还被占用
fixed：相对浏览器窗口定位
sticky： 粘性定位
static
### 多个ID
获取dom时只能获取到第一个DOM
### 图片懒加载
将image的src放在data-src中，收集需要懒加载的图片放到一个数组中。
1. 监听滚动事件，通过dom.getBoundingClientRect()获取图片距离视图顶部的距离, 和窗口高度去比较。
2. 遍历图片数组判断图片是否可视，修改src。
将inage的src改为自定义属性，当满足加载条件(出现在视图中或者将要出现)时，再去修改src，然后去加载图片
### css3
媒体查询 @media
transfrom: translate, scale, rotate
animate
transition

## js
### typeof和instanceof
typeof：返回数据类型
a instanceof b：判断b在不在a的原型链上,返回boolean
### 判断对象相等
1. 是否都是对象
2. key是不是都有
3. key对应的值是不是一样
### ==和===
都比较值是否相等， === 还比较类型
### 实现继承
A.prototype = new P();
A.prototype.constructor = A;
ES6中使用Extends
### 闭包
### 预解析
### this
1. 普通函数中this指向window
2. 对象的成员函数中this指向对象
3. 构造函数中this指向构造出的函数
4. 事件处理函数，指向事件
5. 回调函数指向全局
### call/apply/bind
改变this指向
call和apply会调用一次函数
call需要的是参数列表
apply是参数数组
### 两栏布局
1. float + margin-left
2. float + calc()计算右侧宽度
3. display的inline-block + calc计算宽度
4. flex布局 固定宽度 + 右侧伸缩
### 三栏布局（圣杯布局）
1. flex
2. 全部子元素float + center width:100%; + left和right使用margin-left去定位 + center加box-sizing:border-box,padding
### BFC
1. 块级格式化上下文，指的是有独立的渲染规则，与外界无关
### 生成BFC方法
1. overflow: hidden
2. position非static和relative
3. float
4. display： flex或者inline-block
### BFC规则
1. 就是一个块级容器，内部的块级元素会垂直排列
2. 内部的float的高度会计算
3. 隔离的独立容器，容器内部标签不会影响外部标签
4. 垂直方向的距离由margin决定， 属于同一个BFC的两个相邻的标签外边距会发生重叠
### BFC作用
1. 解决高度坍塌问题
2. 解决margin重叠问题
3. 阻止元素被浮动元素覆盖,让被遮盖的元素变成BFC
### 基本数据类型
null,undefined,boolean,string,number,symbol,bigInt(任意精度的整数，安全地存储和操作大整数，甚至可以超过数字的安全整数限制)
### 设计模式
### promise
### undefined
已在作用域中声明但还没有赋值的变量，是 undefined。相反，还没有在作用域 中声明过的变量，是 undeclared 的
### null和undefined区别
null是指有定义值，值是null，undefined是指没有定义值。
null == undefined true
null === undefined false,null的类型是Object

### 获取data-*属性值
1. dom.getAttribute('data-*')
2. dom.dataset.*
## vue
### vue双向绑定
1. Object.defineProperty()劫持setter和getter，然后改回调。使用watcher去监听，然后
Observer监听data，然后改变之后，通知dep，dep通知watcher，然后修改视图或者更新dep，最后去修改视图，然后通过diff去修改dom
### 组件通信
1. props和$emit
2. ref和$refs
3. eventBus
4. Vuex
5. $parent / $children
6. 依赖注入（provide / inject）
### 生命周期
1. create：在挂载前不能操作DOM
 - beforeCreate：不能使用data和methods中的变量和函数
 - created： 可以使用data和methods
2. mount：
 - beforeMount：开始渲染虚拟dom
 - mounted：渲染好了虚拟dom，可以操作DOM
3. update
 - beforeUpdate：data数据即将被更新
 - updated：data中的数据更新完毕
4. destroy
 - beforeDestroy：即将销毁，这时data和methods还能用
 - destroyed：Vue实例已被销毁，这时data和methods不能用了
### 页面和组件的生命周期
先执行父组件的生命周期到 beforeMount，然后执行子组件到mounted，然后执行父组件生命周期
### 兄弟组件通信
- 借助一个新的vue实例。一个bus.$emit,一个bus.$on
- 借助父组件传统的props和@
- 通过vuex实现

### data为啥是对象
1. 对象是引用类型，在内存中只有一份，如果data直接是一个对象，那么组件在不同地方被调用时，data对象都一样，且会互相影响。return形式，能保证每次的data都是新的
2. 一个组件可以看成一个构造函数，然后data是构造函数生成的对象的属性，data是引用类型，如果不是return，就会共用一个data。
### diff和vuerouter以及vuex
### keep-alive
组件不会重复的删除创建，缓存组件
### vue的内部标签
1. component：动态组件方法，is属性指定是啥组件
2. slot：插槽
3. transition，transition-group：过渡
4. keep-alive
### 实例的属性
1. $el:指向挂载的根DOM
2. $data:就是data数据
3. $refs:就是所有的ref声明过的。
### vue.use
使用一个插件，插件内要暴露出install(vue,options)函数
### mixin
复用methods，和data和生命周期等。就是通用的公共代码
### 局部vue
1. 写一个vue组件
2. 生辰构造器：const Constructor = Vue.extend(vue组件)
3. const vue = new Constructo();
4. 挂载到指定位置：vue.$mount(); dom.appendChild(vue.$el);
### vue中的优化
1. 使用路由和组件懒加载
2. 不打包vue等依赖，使用CDN
### 路由懒加载
提高首屏的速度
## vue-router
### 路由模式
hash和history，mode属性指定
1. hash就是通过锚点实现的。监听的是hashchange事件
2. history通过使用html5的history和window的popstate事件实现。
### 路由守卫
#### 页面级别
- beforeRouteEnter：渲染组件之前，没有this
- beforeRouteUpdate：当前路由改变了但是组件复用了，有this
- beforeRouteLeave：this指向原来的组件
#### 全局级别
beforeEach：
afterEach：
### 路由单独的守卫
beforeEnter：进入路由页面前，只在路由定义的地方用

### $route和$router
$route:是和路由相关的属性比如：query和params
$router:是和路由相关的方法，：router.go,back,forward,push,replace
## 网络
### 浏览器从输入url到回车
1. 用户输入URL
2. 在缓存中找IP，hosts文件浏览器缓存等。没找到开始DNS寻找
3. 建立TCP链接
4. 进行HTTP请求
5. 服务器端处理请求
6. 客户端处理响应
7. 准备渲染
8. 构建dom树
9. 构建css树
10. 样式计算
11. 创建布局树
12. 绘制
### 前端安全
1. XSS攻击：跨站脚本攻击，
  - 储存性：向网站的服务器中注入恶意代码。
  - 反射性：诱导用户点击恶意链接，然后返回恶意代码，浏览器执行
  - dom型：修改页面的dom
2. 防御：服务端接受的脚本片段转义。
3. CSRF攻击：跨站请求伪造，诱导用户进入第三方网站，然后第三方网站使用cookie去通过被攻击网站的登录校验
4. 防御
  - 服务器端增加同源校验拦截
  - 增加token验证
5. 恶意第三方库
### 前端跨域和缓存
1. 同源协议：端口；域名：协议
2. 同源协议限制
  - 不能读取非同源网站的Cookie、LocalStorage 和 IndexDB
  - 不能获取非同源网站的DOM 和 JS 对象
  - Ajax请求发送不出去
### 跨域解决方案
1. 服务端设置CORS。就是服务端告诉前端浏览器，我的网站没问题，可以随意访问
2. jsonp，script标签不被同源限制
3. nginx或者node中间件：设置反向代理
### TCP连接
### cookie和session和localstorage
## 性能优化
### 图片优化
### 预加载
### 懒加载
### 减少http请求
### webpack配置
### 回流和重绘
1. 回流：DOM结构改变
2. 重绘：css样式改变
### DOM和BOM
DOM指的是文档相关的api和交互
BOM指的是浏览器相关的

### js延迟加载
js的加载解析执行会阻塞页面的渲染过程
1. 尽量将js代码放在文档最后
2. 加defer属性，使其脚本的加载与文档的解析同步解析，然后 在文档解析完成后再执行这个脚本文件
3. async 会异步加载js文件，但是加载好之后会立即执行js，还是会阻塞
4. 动态添加js。

### 模块化开发的理解
1. 功能和需求越来越复杂，单个js文件会比较乱和职能不专一。
一开始是写很多函数，一部分函数处理一个功能。会污染全局变量。
后来有类的概念，一个功能对应一个对象。

### 模块规范
commonJS(require)，AMD，CMD，ES6的导入导出(import export)
commonJS是运行时加载，一个模块就是一个对象，先生成对象，再从对象上取东西
ES6模块不是对象，是在代码解析的时候就静态导入了。
- import相当于在当前页面创建一个指针，该指针指向export中的default出来的内容。
- 而require相当于是将导出的文件中export中的default直接复制一份。
- import 语句获取的是一个到导出值的实时链接（或者说是引用或指针）
- 而 require 获取的是导出值的一个副本。
### 异步任务
process.nextTick 指定的异步任务总是发生在所有异步任务之前
### 箭头函数没有arguments

### 造成内存泄漏
1. 闭包
2. 忘记的回调和计时器
3. 意外的全局变量，没有声明直接赋值
4. 脱离DOM的引用，被喊删除掉的dom的引用

### var和let和const
var不是会块级作用域({})
let和const会有暂存死区(声明前使用变量)
var有变量提升。
var可以重复的定义变量

### 结构赋值
const { a,b } = c;
const [a = 2, b = 3] = array;
const [a, b] = [b, a];
const [a, b] = 'stre'
### new
1. 创建一个空的简单JavaScript对象（即{}）；
2. 为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象；
3. 将步骤1新创建的对象作为this的上下文；
4. 如果该函数没有返回对象，则返回this。
### set和map
#### set
Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
2. add,delete,has,size,forEach（没有get方法，使用循环去取数据）。
#### map：就是字典的概念
1. Map对象保存键值对，并且能够记住键的原始插入顺序。
2. 任何值（对象或者原始值）都可以作为一个键或一个值。
3. map默认接受二维数组
3. set，get，has，size，delete
### call和apply和bind
都是改变了this指向
1. bind返回函数，call和apply直接执行
2. call参数一个一个传，apply是一个参数数组。

### 手动实现array.prototype.map，filter
```js
// 手动实现数组的map
function map(fun, thiss = this) {
  const rearray = [];
  for (let index = 0; index < thiss.length; index++) {
    rearray.push(fun(thiss[index]));
  }
  return rearray;
}
```
### 为啥函数是一等公民
函数可以赋值参数，当参数传递，做返回值，还充当了类的构造函数
### Promise
创建一个Promise的参数是函数
Promise的then和catch的结果都会return一个成功状态的Promise，data是undefined，如果手动return的话，data就是return的内容

### js的深浅拷贝
#### 浅拷贝
1. 等号
2. Object.assign.
3. const b = {...a}
#### 深拷贝
1. JSON.parse(JSON.stringify(object))
就是注意Object和array。
```js
function deepCopy(object) {
  // 如果是数组
  if(Array.isArray(object)) {
    const arr = [];
    object.forEach(a => {
      arr.push(deepCopy(a));
    })
    return arr;
  }
  // 区分数组和Object
  if(typeof object === 'object') {
    // 对象
    const obj = {};
    Object.keys(object).forEach(a => {
      obj[a] = deepCopy(object[a]);
    })
    return obj;
  }
  // 否则直接返回
  return object;
}
```
### 手写call，bind，apply
#### call

### new做了什么

### async和await
只有async是会立即执行并返回经过Promise.resolve()包裹的返回值
### 节流和防抖
节流：一段时间内只会发起一次请求。或者上次请求处理结束之后才会重新触发。
防抖：当上次点击之后一段时间之后才会处理。如果重复点击，就重新计时。多次触发只有最后一次生效
```js
// 节流
function db(fn, delay) {
 let canReq = true;
 return function() {
  if (canReq) {
    setTimeOut(() => {
      fn.apply(this, arguments)
      canReq = true;
    }, delay);
    canReq = false;
  }
 }
}
// 防抖
function dd(fn, delay) {
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null;
    }, delay)
    }
}
```
### 设计模式

## webpack
webpack是基于commonJS去合并文件

## 小程序
### 小程序生命周期
#### 页面生命周期
1. onLoad
2. onShow
3. onReady
4. onHide
5. onUnload
#### 组件生命周期
lifetimes
1. created
2. attached
3. ready
4. moved
5. detached
6. error
### 分包和主包
分包最大2M

## TypeScript

## git复习

## nodeJS

### 原型链
const p = new Person()
p.__proto__ = Person.prototype;
Person.prototype = Person.prototype;
Person.prototype.constrctor = Person;

### computed和watch
computed是根据已有的data或者computed去计算出新值并返回
watch是监听某个data的变化，然后去做一些操作
1. computed会有缓存，watch没有
2. computed必须要有return
### target和currentTarget
1. target指向事件触发的dom
2. currentTarget指向当前处理的dom
### 多次修改vue的对象的值，只触发一次dom更新

### 浏览器缓存
#### 强缓存
- expires：绝对时间，指定缓存失效的时间
- Cache-Control：相对时间段，指定缓存生效的持续时间.优先级高于expires
- Pragma： 指定页面是否要缓存，为Pragma则缓存，no-cache则不缓存
#### 协商缓存
##### Last-modified，If-Modified-Since
第一次请求，返回last-Modified，然后第二次请求，请求头带上If-Modified-Since，然后服务端判断是否更新了内容，没有更新就返回304，命中协商缓存，更新了，直接从服务端拿数据渲染页面，更新Last-modified；
- Last-Modified： 第一次请求，会返回最后修改时间
- If-Modified-Since: 第二次请求时，浏览器端的请求头上加上这个字段，内容就是Last-Modified
##### ETag、If-None-Match
ETag就是文件内容的一个标识符
原理和Last-Modified一致，只是命中了304还是会返回ETag。

### 异步组件
动态导入，在需要使用的时候，再去加载。webpack会单独打包
// 语法
components: {
  'my-component': () => import('./my-async-component')
}
// 语法
const AsyncComponent = () => ({
  // 需要加载的组件 (应该是一个 `Promise` 对象)
  component: import('./MyComponent.vue'),
  // 异步组件加载时使用的组件
  loading: LoadingComponent,
  // 加载失败时使用的组件
  error: ErrorComponent,
  // 展示加载时组件的延时时间。默认值是 200 (毫秒)
  delay: 200,
  // 如果提供了超时时间且组件加载也超时了，
  // 则使用加载失败时使用的组件。默认值是：`Infinity`
  timeout: 3000
})
### 作用域和作用域链
执行上下文在运行时确定，随时可能改变，作用域在定义时就确定，并且不会改变。
执行上下文是指定了this的指向。（动态，执行的地方）
作用于链确定是的寻找变量的方式，（静态的，定义的地方）
### 垃圾回收机制
### 看项目的代码
#### 画词评论
#### 文章编辑器

### 动画和transition
1. transition只能设置开始和结束两个状态，不能设置中间的状态。需要主动触发
2. animation不需要触发条件，页面加载完成后自动执行。
### $nextTick
首先使用Promise.then，不支持的话使用MutationObserver和setImmediate，还不支持就使用setTimeout

### for
for一个await 尝试

### 作用域
### 浏览器缓存
### http1.1和http2

### for in 和 for of

### 进程和线程
进程是计算机分配资源的最小单位
多个线程共享进程的资源
一个进程至少有一个线程
线程必须依赖进程存在
单线程指的是一个进程中只有一个线程


### 跨域脚本报错
- 解决如果当前页面中，引入了其他域名的JS资源，如果资源出现错误，error 事件只会监测到一个 script error 的异常。问题
- 前端script加crossorigin，后端配置 Access-Control-Allow-Origin
