单页面应用通过路由实现不同页面的跳转。需要不发送请求，就能刷新页面。可以通过hash和hsitory两种方式实现。
## hash
- 使用锚点去实现。无刷新跳转。
- 使用hashchange去监听hash的改变。

```javascript
window.addEventListener('hashchange', ()=>{});
```


## history
- 使用html5的history对象和浏览器的popstate事件去实现无刷新跳转。
- html5的history有方法pushState，replaceState
- popstate事件的执行是在点击浏览器的前进后退按钮的时候，才会被触发(history.go(),back(),forward)
- pushState和replaceState不会触发popstate事件

```javascript
// 最终就是：
window.history.pushState( {}, '', url)
window.history.replaceState( {}, '', url)
window.addEventListener('popstate', () =>{})
```
```javascript
// 解决pushState和replaceState不能触发popstate事件
// 主要是window.dispatchEvent()
class testRouter {
  constructor() {
    this.addStateListener();
    this.handleListener();
  }
  addStateListener() {
    const listener = function (type) {
      var orig = history[type];
      return function () {
        var rv = orig.apply(this, arguments);
        var e = new Event(type);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return rv;
      };
    };
    window.history.pushState = listener('pushState');
    window.history.replaceState = listener('replaceState');
  }
  handleListener() {
    window.addEventListener('popstate', this.refresh)
    window.addEventListener('pushState', this.refresh)
    window.addEventListener('replaceState', this.refresh)
  }

  refresh() {
    console.log('refresh')
  }
}
const router = new testRouter();
```