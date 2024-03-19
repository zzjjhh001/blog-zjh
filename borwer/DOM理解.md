## DOM理解
### node类型
共12种，一般只用到标签节点和文本节点。
### node的属性： nodeName和nodeType

### node关系
![image](https://image-1301623187.cos.ap-nanjing.myqcloud.com/browser/dom/nodeRelation.png)

1. hasChildNodes：查询节点是否有子节点
2. ownerDocument：指向代表整个文档的文档节点

### 操作节点
不是所有的节点都可以有子节点，如果在不支持子节点的节点上调用方法会抛出错误。
#### appendChild
const a= document.createElement('div')
node.appendChild(a)
1. 在当前节点的子节点列表末尾增加插入节点。返回新加节点。
2. 如果插入的节点是当前文档已有的节点，就是移动节点到末尾----一个节点不会在文档中同时出现在两个或更多个地方。

#### insertBefore
- 向指定位置插入节点。返回插入的节点。
- 将a节点插到b节点之前。
- const a= document.createElement('div')
- const b = node.firstChild
- node.insertBefore(a, b)

#### replaceChild
- 替换节点，
- 将a节点替换掉b节点。
- const a= document.createElement('div')
- const b = node.firstChild
- node.replaceChild(a, b)

#### removeChild
- 移除节点，返回节点
- const b = node.firstChild
- node.removeChild(b)

#### cloneNode
- 复制节点，返回复制的节点。
- 只复制html的属性，不会复制加在其上的js的操作，绑定事件等。
- node.cloneNode(true)： 深拷贝，复制子节点
- node.cloneNode()： 浅拷贝，只拷贝当前节点。

#### normalize
- 删除没有文本的文本节点和合并同胞文本节点

### document类型
1. 表示整个html页面，是一个全局对象。
2. document.documentElement指向html。
3. document.body 指向body元素。
4. document.title 修改页面的title。
5. document.URL 当前页面的URL，不能修改。
6. document.domain 当前页面的域名 可修改。
7. document.referrer 链接到当前页面的URL，不能修改。

#### 操作dom
- document.getElementById：获取一个dom
- document.getELementsByClassName: 获取一组dom
- document.getELementsBytagName：获取一组dom
- document.getElementsByName: 获取一组dom,设置了相同的name
- 获取一组dom的某一项：doc.item(0),doc[0],doc.namedItem('name')，doc['name']元素上的name属性
- document可以换成任意的其他dom，这些方法不是document独有的。
### Element类型
- 就是正常使用的元素(div,button)
- elemen.tagName: 返回标签的全大写。(DIV,BUTTON)

#### HTML
HTML就是element的实例。
#### 操作dom的属性
##### getAttribute
1. 只能获取到写在html上的属性。
2. 不区分大小写，可以获取自定义的属性。
3. 获取style时，只能获取到写在html上的style,返回值的字符串。(doc.style获取全部的属性,返回值是cssStyleDeclaration类数组)
4. onclick绑定的事件，getAttribute获取的是字符串，doc.onclick获取的是js函数

##### setAttribute
1. 设置html和自定义属性。设置的属性名会规范为小写形式。加在html上

##### removeAttribute
删除属性。直接把属性删除，不是把属性值置为空。
### text类型
#### 操作文本
- appendData(text):插入文本
- deleteData(offset, count)：从位置offset开始删除count个字符。
- insertData(offset, text)
- replaceData(offset, count, text)
- splitText(offset)
- substringData(offset, count) 提取从offset到offset+count的文本
text.length: 返回文本长度

#### 创建文本节点
document.createTextNode(text)
#### normalize
规范化文本节点: 将多个文本节点合并为一个文本节点
#### splitText(num)
拆分文本节点，拆分后，原来的文本节点包含开头到指定位置的文本，新节点包含剩余部分，并返回新节点。

### dom编程
#### 动态脚本
动态插入script。
```javascript
const script = document.createElement('script');
script.type = 'text/javascript'
script.src = 'one.js';
document.body.appendChild(script)
// 当插入body中，开始异步获取js资源。
```
#### 动态样式
link和style都可以加入样式
```javascript
const link = document.createElement('link')
link.rel = 'stylesheet'
link.type = 'text/css'
link.href = 'styles.css'
document.getElementsByTagName('head')[0].appendChild(link)
```
### nodeList
nodeList和相关的NameNodeMap，htmlCollection都是实时变化的，查询到的永远是最新的。

### 新的dom操作
#### querySelector
只获取匹配到的第一个dom。如果选符有语法错误或者不支持的选择符会抛出错误。匹配不到会返回null
```
document.querySelector('.class')
element.querySelector('#a')
element.querySelector('img.button')// class为button的img
```
#### querySelectorAll
1. 返回所有匹配的节点，是一个nodeList静态实例。是一个快照不是实时查询。
2. 如果选符有语法错误或者不支持的选择符会抛出错误

#### matches
如果元素匹配返回true，否则false
```
document.body.matches('button')
```
#### 元素遍历
childElementCount：返回子元素的数量
firstElementChild：获取第一个element类型的子元素
lastElementChild：获取最后一个element类型的子元素
previousElementSibling： 指向前一个element类型的同胞元素
previousElementSibling： 指向后一个element类型的同胞元素

### HTML5
#### getElementsByClassName('qwe ewq')
根据className获取elementList，获取的是实时的nodeList
#### classList
className能够获取元素的class的字符串形式。
classList是数组形式。
- div.classList.add(val)：添加类，已存在啥也不做。
- div.classList.contains(val): 判断是否存在
- div.classList.remove(val): 删除类
- div.classList.toggle(val): 已有则删除，没有则添加。

#### 焦点管理
document.activeElement: 始终包含当前拥有焦点的dom元素。
document.hasFocus()文档是否获取焦点
document.body.focus(): 元素获取焦点

#### HTML5
- document.readyState: 文档是否加载完成。loading正在加载，complete加载完成
- document.compatMode：当前处于什么渲染模式。CSS1Compat:标准模式，BackCompat：混杂模式
- document.head: 指向head标签

#### 字符集
document.characterSet：当前文档采用哪种字符集

#### 自定义数据属性
- 加上data前缀，告诉浏览器和渲染无关。只是加上数据。
- 通过元素的dataset访问。data-myName : dom.dataset.myname;data-my-name: dom.dataset.myName

#### 插入标记
- innerHTML：element的内容(不包括外层的dom)的字符串形式。script会被自动剔除。
```javascript
console.log(document.getElementById('qq').innerHTML)
document.getElementById('qq').innerHTML = '<div>qwe</div>'
```
- outerHtml: 会返回调用它的元素（及所有后代元素）的 HTML 字符串。

- insertAdjacentHTML(a,b)：a:要插入标记的位置;b:要插入的 HTML字符串

- insertAdjacentText(a,b)：b:要插入的文本
1. a的值
- beforebegin：插入当前元素前面，作为前一个同胞节点
- afterbegin：插入当前元素内部，作为新的子节点或放在第一个子节点前面
- beforeend：插入当前元素内部，作为新的子节点或放在最后一个子节点后面；
- afterend： 插入当前元素后面，作为下一个同胞节点

#### scrollIntoView
滚动视图，效果类似hash锚点跳转。
```javascript
document.querySelector('#qw').scrollIntoView();
document.querySelector('#qw').scrollIntoView({alignToTop: true,block: 'start', inline：'start'});
```
- alignToTop: 窗口滚动后元素的顶部与视口顶部对齐；false：与底部对齐
- behavior： 过渡的动画；'smooth','auto'
- block: 定义垂直方向的对齐，可取的值为"start"、"center"、"end"和"nearest"，默认为 "start"
- inline: 定义水平方向的对齐，可取的值为"start"、"center"、"end"和"nearest"，默认为 "nearest"。

### 操作DOM的样式
```javascript
document.querySelector('.qq').style
document.querySelector('.qq').style.backgroundColor = 'red'
// float属性为cssFloat，因为float在js中是保留字
```
#### 属性和方法
cssText：设置的style的属性的集合的字符串
length： 元素的style中属性的数量。
getPropertyValue(propertyName)： 获取属性值
removeProperty(propertyName)： 删除属性值
setProperty(propertyName, value, priority)：设置属性值，prioity是important或者空。

### 操作样式表
1. 之前的操作DOM样式都是直接写在元素的style属性上的，通过style和link引入的样式不能获取到。
2. document.defalultView增加了getComputedStyle()获取到计算之后的样式。
```javascript
const myDiv = document.querySelector('div')
document.defaultView.getComputedStyle(myDiv, ': after')
// 第一个参数是dom元素，第二个参数是伪元素。不查询为空
```

