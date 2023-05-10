## 基本写法
scss转换css网站：https://www.sassmeister.com/
scss中文文档：https://www.sass.hk/docs/
### 嵌套写法
```css
.c {
    .d {
        
    }
}
// 等价于
.c {
    
}
.c .d {
    
}
```
### 父选择器：&
父选择器
```css
a {
    &:hover {
        
    }
}
a {
    &-b{
    
}
}
// 
a {
    a:hover{
    
    }
}
a {
    a-b {
        
    }
}
```
### 属性的嵌套
```css
.a {
    font: {
        size: 20px;
        weight: 100;
    }
}
// 
.a {
    font-size: 20px;
    font-weight: 100;
}
```
### 支持注释
```
多行
/*
*
*/
单行
//
//
```

### 变量$
1. 定义变量
2. 有块级作用域的概念
3. !global：将块级作用域设为全局作用域。

```css
$w: 2px;
a {
    width: $w;
}
// 
a {
    width: 2px;
}
```

### 数据类型
1. 数字： 1， 2， 12， 100px
2. 字符串，有引号和无引号
3. 颜色
4. 布尔型
5. 空值
6. 数组
7. maps

### 运算
1. "+ - * / %";
2. #{}：包裹声明的对象，那么将不会被计算。可以理解为里边的东西不会与外边的产生计算，但是内部自己可以计算。#{4px + 2px} = 6px;
3. 关系运算 <, >, <=, >= 也可用于数字运算，相等运算 ==, != 可用于所有数据类型。没有全等===
```css
$w: 6px;
$d: 3px;
font-size: #{$w}/#{$d};
// font-size: 6px/3px;
$w: 6px;
$d: 3px;
font-size: $w/$d;
// font-size: 2px;
```
3. 在属性名和选择器上使用#{}去使用变量
4. 颜色的运算，是根据RGB的值去对应计算，然后在合成。
5. ()：会影响计算顺序

### 计算函数
1. opacify:计算颜色，透明度。color: opacify(rgba(255,255,255,0.1), 0.1);// color: rgba(255,255,255,0.2)

### 插值语句
#{}: 可以在选择器或者属性名中插入变量。可以在属性值上使用，避免计算。
### 导入
@import：导入scss
```css
@import "a", "b"
支持局部引入，有作用域的概念。
不能在混合指令中嵌套@import
```
### !default
防止覆盖：如果已有，就不覆盖，没有就赋值。

### @extend
继承样式，就是一个选择器继承了另一个选择器的样式。就像类中的继承。
```css
.c {
    color: #000000;
}
.d {
    @extend .c
}
@extend后边可以是任何定义给单个元素的选择器（标签选择器不行）。
// scss
.attention {
  font-size: 3em;
  background-color: #ff0;
}
.seriousError {
  @extend .error;
  @extend .attention;
  border-width: 3px;
}
.error {
  border: 1px #f00;
  background-color: #fdd;
}
// 转换过的css
.attention, .seriousError {
  font-size: 3em;
  background-color: #ff0;
}

.seriousError {
  border-width: 3px;
}

.error, .seriousError {
  border: 1px #f00;
  background-color: #fdd;
}
// 样式覆盖：看定义在哪，而不是看在哪里引入；
// 就是相当于在被extend的选择器上加 , .seriousError
// 可以理解为在所有出现过被继承的样式复制一份，然后把被继承的元素改为继承的元素。
// scss
.c {
    width: 20px;
}
.c .d {
    color: red;
}
.f {
    @extend .c;
    font-size: 12px;
}
// 转换过的css
.c, .f {
  width: 20px;
}

.c .d, .f .d {
  color: red;
}

.f {
  font-size: 12px;
}
```

### 混入
@mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。
@include 指令可以将混入（mixin）引入到文档中。
```scss
@mixin a-b {
  color: red;
  font-size: 20px;
}
.class {
  @include a-b;
}
// 
.class {
  color: red;
  font-size: 20px;
}
```

@mixin支持传递参数，支持指定默认值。
```scss
@mixin a-c($color: blue, $size: 20px) {
  color: $color;
  font-size: $size;
}
.class {
  @include a-c(red, 30px);
}
// 
.class {
  color: red;
  font-size: 30px;
}
```
@mixin中可以使用@include。

### 函数
#### 数字函数
- abs(num): 取绝对值
- ceil(num): 向上取整
- floor(num): 向下取整
- comparable(num1, num2): 返回一个boolean，两个参数是否可以比较。
- max(...nums): 返回最大值
- min(...nums): 返回最小值
- percentage(num): 将数字转化为百分比的表达形式; 1.2 => 120
- random(num): 返回 0-1 区间内的随机小数

## 控制指令
### @if, else if, else
```scss
// scss
$c: c;
p {
  @if $c == 'ccc' {
    color: red;
  }
  @else if $c == 'cc'{
    color: blue;
  }
  @else {
    color: green;
  }
}
// css
p {
  color: green;
}
```
### @for
@for $c from 1 to 3: 不包括3；
@for $c from 1 through 3: 包括3；

```scss
// scss
@for $c from 1 to 3 {
  item-#{$c} {
    color: red;
  }
}
// css
item-1 {
  color: red;
}

item-2 {
  color: red;
}
```