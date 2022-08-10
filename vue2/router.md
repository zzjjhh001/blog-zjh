## 原理
可以用来做动态路由
### 页面路由方法
#### beforeRouteEnter
在渲染组件之前调用。不能用this，这是组件没有创建没有this。
#### beforeRouteUpdate
1. 当前路由改变，但是组件被复用。
2. 能访问到this
#### beforeRouteLeave
1. 在导航离开组件时调用，这时候的this指向原来组件。
2. next(false)可以让路由跳转失败，多用来让用户确认退出。
### 路由守卫

### this.$router.push和replace
区别和浏览器的history.push和replace一样,vue-router代码中，这俩方法的差别只是最后一个调用history.push一个是replace。
```javascript
  push (location: RawLocation, onComplete?: Function, onAbort?: Function) {
    // $flow-disable-line
    if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
      return new Promise((resolve, reject) => {
        this.history.push(location, resolve, reject)
      })
    } else {
      this.history.push(location, onComplete, onAbort)
    }
  }

  replace (location: RawLocation, onComplete?: Function, onAbort?: Function) {
    // $flow-disable-line
    if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
      return new Promise((resolve, reject) => {
        this.history.replace(location, resolve, reject)
      })
    } else {
      this.history.replace(location, onComplete, onAbort)
    }
  }
```

## 路由的name和path
#### 正常的单页面应当全部用name去指定要跳转的页面。window.open()只能用path
name和path都能指定要跳转的页面。
path配合query使用，正常，参数在地址栏上。
```javascript
{ path: '/hello' }
this.$router.push({path: '/hello', query: {}})
```
name配合params使用，刷新页面后，传递的参数丢失。
```javascript
{name: 'hello'}
this.$router.push({name: 'hello', params: {}})
const{ } = this.$route.params;
```
想要不丢失就修改路由中的path，在后边加/:name等。这样params传递的参数会出现在地址栏上。同时这个页面如果后续使用path跳转，就需要在其上拼接参数。
```javascript
router: {name: 'hello', path: 'hello/:id/?:name'}
this.$router.push({name: 'hello', params: {id: 1, name: 'haha'}})
this.$router.push({path: '/hello/1/haha'})
// 地址栏有参数
```
name配合query使用，正常。同path和query。
## 导航流程
1. 触发导航
2. 在上一个组件中调用beforeRouteLeave
3. 全局路由守卫beforeEach
4. 重复使用的组件的beforeRouteUpdate
5. 路由配置文件中的beforeEnter
6. 解析异步路由组件 // todo
7. 新组件的beforeRoute
8. 全局的beforeResolve
9. 导航确认
10. 全局afterEach
11. 更新DOM
12. beforeRouterEnter中传给next的回调函数。