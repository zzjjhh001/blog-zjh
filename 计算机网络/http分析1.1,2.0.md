## 页面代码
```html
<!--页面代码-->
<!DOCTYPE html>
<html>
<body>
    <div id="img1"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201304%2F25%2F195133e7a1l7b4f5117y4y.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623140387&t=056afe6b90a849277870f0ce796b7700" alt="背景1"/></div>
    <div id="img1"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201312%2F31%2F111859myvyiivetyftfz2n.jpg&refer=http%3A%2F%2Fattach.bbs.miui.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623140387&t=051ddbc820a8f36bf23beebfc460f5af" alt="背景1"/></div>
    <div id="img2"><img src="https://image-1301623187.cos.ap-nanjing.myqcloud.com/duolufuyong.png" alt="背景2"/></div>
    <div id="img2"><img src="https://image-1301623187.cos.ap-nanjing.myqcloud.com/Object.jpg" alt="背景2"/></div>
    <div id="img2"><img src="https://image-1301623187.cos.ap-nanjing.myqcloud.com/Function.jpg" alt="背景2"/></div>
    <div id="img2"><img src="https://image-1301623187.cos.ap-nanjing.myqcloud.com/number%E7%9A%84%E5%8E%9F%E5%9E%8B%E5%85%B3%E7%B3%BB.jpg" alt="背景2"/></div>
    <div id="img2"><img src="https://image-1301623187.cos.ap-nanjing.myqcloud.com/%E6%99%AE%E9%80%9A%E5%AF%B9%E8%B1%A1.jpg" alt="背景2"/></div>
    <div id="img2"><img src="https://image-1301623187.cos.ap-nanjing.myqcloud.com/browser/http/HTTP1_x_Connections.png" alt="背景2"/></div>
    <div id="img2"><img src="https://image-1301623187.cos.ap-nanjing.myqcloud.com/Object%E5%92%8CFunction%E5%8E%9F%E5%9E%8B.jpg" alt="背景2"/></div>
</body>
</html>
```
## 访问后的network截图
![image](https://image-1301623187.cos.ap-nanjing.myqcloud.com/browser/http/http.jpg)
- 后两个是http2.0的请求，前7个是http1.1的请求
- 看前七个能知道chrome浏览器最多允许对同一个域名Host建立6个TCP连接，第七个连接将会等待别的请求得到响应之后，立即使用那个请求的TCP连接发起请求。
- 看后两个请求知道http2.0是并发的发起请求，就是多路复用，只建立一个TCP连接

### 分析页面
![image](https://image-1301623187.cos.ap-nanjing.myqcloud.com/browser/http/httptime.jpg)
- Connection Start：这里是建立TCP连接的时间，包括DNS查询，初始连接，SSL验证，如果没有则是使用别的请求已经建立好TCP连接
- 请求和响应中，Waitint是发起请求后等待时间
- ContentDownload是内容下载时间

![image](https://image-1301623187.cos.ap-nanjing.myqcloud.com/browser/http/http1.1.jpg)
- 看这个图我们能知道http1.1发起请求是长连接的，第一个http请求能够使用第二个建立的TCP连接
- 再看第一个http请求的开始时间，在第二个http请求得到响应并下载完成之后，这说明http1.1在复用tcp连接时：新的http请求必须在上一个http请求完成后才能发起。就是请求-响应-请求-响应。(不能管道化的原因是浏览器不支持，默认关闭)

![image](https://image-1301623187.cos.ap-nanjing.myqcloud.com/browser/http/http2.0.jpg)
- 这个图中第二次http请求的开始时间是第一个http请求建立好TCP连接之后而不是完成http请求之后，这说明了http2.0采用了多路复用技术。(可以与http1.1对比着看，开始下一次http请求的时机)

