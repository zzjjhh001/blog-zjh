## dom的各种高度
### 
1. 有h5文档声明：<!DOCTYPE html> Standard 模式下
document.body.scrollTop 一直为0
document.documentElement.scrollTop 获取正确
window.pageYOffset 获取正确
2. 无文档声明
document.body.scrollTop 获取正确
document.documentElement.scrollTop 一直为0
window.pageYOffset 获取正确
3. 兼容性获取方式
```javascript
let height = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
```
### dom对象中六种高度区分
1. clientHeight 元素高度（不含boder）
2. offsetHeight 元素高度（含boder）
3. scrollHeight 滚动元素总高度
4. scrollTop 滚动高度（隐藏部分）
5. clientTop 上边框高度
6. offsetTop 相对于offsetParent的高度。offsetParent：距离元素最近的一个具有定位的祖宗元素（relative，absolute，fixed），若祖宗都不符合条件，offsetParent为body。
7. 当dom元素为doument.body或者document.documentElement时，clientHeight 等于屏幕高度。