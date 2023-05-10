## window对象
### top,parent,opener,self
使用iframe去嵌套页面就会有多个window对象。一个窗口对应一个window对象。
1. window.top指的是最顶层的浏览器窗口的window对象。
2. window.parent指的是当前window窗口的父级窗口。
3. window.opener是指对打开当前窗口的页面的一个引用。(使用window.open)
4. window.self：就是window本身。

### setTimeout和setInterval
只是确定间隔时间后，把事件放到任务队列中，不保证立即执行。
clearTimeout(): 清除定时器，参数是定时器Id。

### 系统对话框
1. alert: 提示消息
2. confirm: 确认弹窗
3. prompt: 唤起输入框
4. print: 唤起打印
5. find: 唤起查找

## location对象
1. window.location和document.location是一个对象。
既有导航功能，也提供了窗口的加载文档信息。
2. 修改了location的属性就会重新加载URl除了(hash)。修改了hash是页面跳到锚点。
- location.hash：url散列值。就是锚点，#之后的信息
- location.host: 服务器名以及端口
- location.hostname 服务器名
- location.href 当前的url。
- location.pathname 当前的路径就是端口之后，查询参数之前
- location.port  端口
- location.protocol 协议类型 http和https
- location.search 搜索的参数?之后，#之前;是个字符串，包括?
- localtion.username 
- location.paddword
- location.origin url的源地址

### URLSearchParams
- window对象的class
```
let qs = '?a=qwe'
const cc = new URLSearchParams(qs)
cc.get('a')
cc.has('a')
cc.set('a', '2')
```

## 修改地址
1. location.assign('http://www.wrox.com')
2. location.href = 'http://www.wrox.com'
3. window.location = 'http://www.wrox.com'
后两种和第一种显式调用assign一样。
4. window.replace('http://www.wrox.com'): 重定向，没有之前那页的历史记录。不能回到之前那页。

### window.reload
1. window.reload():重新加载当前页面。如果没有修改过，可能从缓存中拿页面。window.reload(true)，一定重新加载。
2. reload之后的代码能否执行，取决于系统资源和网络延迟。

### navigator对象

### screen对象

### history对象
修改location.hash会在history中插入一条记录。
1. history.go(1)
2. history.back(1): 后退
3. history.forward(1):前进
4. history.length: 返回历史记录的条数

#### 历史状态管理
1. hashchange事件
2. history.pushState()
