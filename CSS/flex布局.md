## flex
### 响应式的弹性的布局。
采用弹性布局之后，容器就是弹性的。子元素是弹性子元素。
子元素的float和clear以及vertical-align就会失效。
### 主轴和交叉轴
使用flex-direction去指定主轴的方向。
交叉轴和主轴垂直。
### flex-direction
1. 指定主轴的方向。
2. 有四个方向。flex-direction: row | row-reverse | column | column-reverse;
### flex-wrap：指定换行方式(子元素排列时换行方式)
1. 当子元素太多，超过父元素时，如何排列？
2. flex-wrap: nowrap(默认) | wrap | wrap-reverse;
3. wrap: 正常换行。
4. wrap-reverse: 第一行在下，第二行在上。
### flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
### justify-content
指定子元素在主轴上的对齐方式
### flex-basic
当其为auto是，flex-basic就是width或者height。没有的话，flex-basic就是内容撑起的宽或者高。
默认值就是auto。
flex-basic的优先级高于width或者height。
### align-items
使子元素在交叉轴上对齐方式。
### align-self 
单独指定某一行的align-items
### align-content
交叉轴上多行，如何排列。
### flex-grow
拉伸比例默认是0
### flex-shrink
收缩比例默认是1
### flex
flex：flex-grow flex-shrink flex-basic

