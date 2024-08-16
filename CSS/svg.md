## svg
### 是什么
svg是一种XML语言，类似XHTML，可以用来绘制矢量图形
### 优势
- svg是矢量的，分辨率极高的场景也不会出现类似毛边的情况，清晰度不会失真
- svg体积小，可压缩
### 渲染
- 渲染规则是后来居上，后面的绘制内容默认展示在最上层
### 使用方式
### 标签
#### svg
##### viewBox
- 它允许指定一个给定的一组图形伸展以适应特定的容器元素。
- viewBox属性的值是一个包含4个参数的列表 min-x, min-y, width ,height， 以空格或者逗号分隔开， 在用户空间中指定一个矩形区域映射到给定的元素，不允许宽度和高度为负值,0则禁用元素的呈现。
##### preserveAspectRatio
- 保留纵横比
- 就是指定viewport和viewBox两个框的对齐方式。两个比例不同的框，一个大，一个小（大小不一定，只是规则一致，方便理解），去做对齐时，小的可以在大的中的九个位置。类似于魔方中九个块。
- 真正渲染到页面上的内容还是viewport。
1. 第一个参数，必填：是否强制进行统一缩放。
- none： 不会进行强制统一缩放，如果需要，会缩放指定元素的图形内容，使元素的边界完全匹配视图矩形.不成比例的拉伸以填满。
- xMinYMin：强制统一缩放。 将SVG元素的viewbox属性的X的最小值与视图的X的最小值对齐。 将SVG元素的viewbox属性的Y的最小值与视图的Y的最小值对齐。
- xMidYMin：强制统一缩放。 将SVG元素的viewbox属性的X的中点值与视图的X的中点值对齐。 将SVG元素的viewbox属性的Y的最小值与视图的Y的最小值对齐。
- xMaxYMin：强制统一缩放。 将SVG元素的viewbox属性的X的最小值+元素的宽度与视图的X的最大值对齐。 将SVG元素的viewbox属性的Y的最小值与视图的Y的最小值对齐。
- xMinYMid
- xMinYMax
- 等，就是X的Min，Mid，Max与Y的Min，Mid，Max交叉组合
2. 第二个参数，非必填：图形将缩放到
- meet
 - 宽高比将会被保留
 - 整个SVG的viewbox在视图范围内是可见的
 - 尽可能的放大SVG的viewbox，同时仍然满足其他的条件。
 - 会有viewbox没有填充满viewport的部分
- slice
 - 宽高比将会被保留
 - 整个视图窗口将覆盖viewbox
 - SVG的viewbox属性将会被尽可能的缩小，但是仍然符合其他标准。
 - viewbox中的一部分内容会被裁减掉

#### circle
画圆形
- cx,cy,r: 圆的原点坐标和半径。
- fill: 填充色;(#ffffff);
- stroke: 路径色;(#ffffff);
- stroke-width: 路径宽度(10);
#### line
画直线
- x1,y1,x2,y2: 起点终点横纵坐标
- style: 线的样式，stroke: #ffffff; stroke-width: 5;
#### polyline
画折线
#### g
组的概念，就是在g上的操作，会对g内部的元素都生效。
```html
<g fill="red">
  <rect >
  <rect >
</g>
```
#### clipPath
- 裁剪操作。clipPath内部制定一个闭合的内容，然后在别的地方使用。
- clipPath元素经常放在一个defs元素内。表示这里的内容不会绘制，是为了方便下面别的地方使用
- 内部多个闭合范围的话，就是取交集。
```html
<clipPath id="cut-off-bottom">
  <circle cx="0" cy="0" r="100"></circle>
  <circle cx="100" cy="0" r="100"></circle>
</clipPath>
<circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
```
#### mask
遮罩，可以做渐变
```html
<mask id="Mask">
  <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)" />
</mask>
circle
```
#### 渐变
设定一个渐变的方案。线性，径向。
```html
<linearGradient id="Gradient">
  <stop id="stop1" offset="0%" />
  <stop id="stop2" offset="50%" />
  <stop id="stop3" offset="100%" />
</linearGradient>
<rect x="0" y="0" width="200" height="200" fill="url(#Gradient)" />
```
#### 滤镜
filter
