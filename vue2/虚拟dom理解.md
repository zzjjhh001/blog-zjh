## 是什么
虚拟DOM就是用javascript对象去模拟真实DOM
## 为什么
- 在之前，改变视图只能通过改变遍历DOM树然后找到要修改的DOM然后操作(修改样式或者修改结构)。这种方式几乎要遍历整个DOM树，十分耗时。
- 现在，使用javascript建立一个虚拟DOM对象(js对象)，对象嵌套表示DOM树结构，每次DOM的更改就是js中对象的属性的更改。
- js对象的属性变化要比查询DOM树的性能开销小。
- 虚拟DOM可以维护程序的状态，跟踪上一次的状态
- 通过比较前后两次状态的差异更新真实DOM

## 什么用
- 维护视图和状态的关系
- 复杂试图情况下提升渲染性能
- 除了渲染DOM以外，还能实现SSR(Nuxt.js/Next.js)、原生应用(Weex/React Native)、小程序(mpvue/uni-app)
## 怎么实现
```javascript
//首先虚拟DOM需要一个DOM对象
function Element(tagName,props,children){
    this.tagName = tagName
    this.props = props
    this.children = children
    let count = 0
    children.forEach((child,i)=>{
        //区分DOM元素和文本节点
        if(child instanceof Element){
            count += child.count
        }
        else{
            children[i] = ''+child
        }
        count++
    })
    this.count = count
}
//还需要把虚拟DOM变成真实DOM，就是使用createElement，createTextNode方法
Element.prototype.render =function(){
    let el = document.createElement(this.tagName)
    //先把样式加上
    let props = this.props
    let propName
    let propValue
    for(propName in props){
        propValue = props[propName]
        el.setAttribute(propName,propValue)
    }
    //把子元素和文本加上
    this.children.forEach((child)=>{
        let childEle = child instanceof Element?child.render():document.createTextNode(child)
        el.appendChild(childEle)
    })
    return el
}
//定义一个创建虚拟DOM的函数
function createElement(tagName,props,children){
    return new Element(tagName,props,children)
}
//测试一下
let c = createElement('ul',{'class':'one','value':'two'},[createElement('li',{'class':'li2'},[]),'ul'])
document.getElementById('one').appendChild(c.render())
```
