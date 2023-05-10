## http报文

### 请求报文
包含三部分：请求行，请求头，请求数据

#### 请求行
1. 请求行包括方法字段（get,post,等），URL字段（index.js）,HTTP协议版本（http1.1）
2. URL字段形式
    1. 一个绝对路径，末尾跟上？和查询的字符串，称为原始形 式。get,post,head,options使 用。test.html?query=ali
    2. 一个完整的URL成为绝对形式。一般是get连接代理时使用http:www.baidu.com/index.html
    3. 由域名和可选端口组成的URL，只在使用connect建立HTTP隧道时使用
    4. 星号 配合options方法使用，代表整个服务器。OPTIONS * HTTP/1.1

#### 请求头
1. 以键值对形式存在。声明了请求的一些信息。
2. 请求头类型
    1. general Header：常规请求头
    2. request headers:例如User-Agent等
    3. Emtity headers：适用于请求的body，如果没有body则不发这样的请求头

#### 请求数据（body）
1. post方法中，把数据以key-value形式放送给后端，后端通过req.body接收.(get请求也可以发送这种数据，不过不推荐，前端的axios不能发送这种get请求)。
2. GET，HEAD，DELETE 和 OPTIONS，通常它们不需要 body。
3. body类型
    1. Single-resource bodies，由一个单文件组成。该类型 body 由两个 header 定义： Content-Type 和 Content-Length
    2. Multiple-resourcebodies，由多部分body组成，每一部分包含不同的信息位。通常是和HTML Forms联系在一起

### 响应报文
包含状态行，消息报头(headers)，响应正文(body)

#### 状态行
包含三部分：协议版本，状态码，状态文本。HTTP/1.1 404 Not Found
1. 协议版本：通常为HTTP/1.1
2. 状态码：表示成功或者失败(200,404)
3. 状态文本：一个简单的信息，帮助理解状态码

#### 消息报头
1. general Header：常规请求头
2. Response headers:提供关于服务器的信息
3. Entity headers：适用于请求的body，如果没有body则不发这样的请求头

#### 响应正文(body)
1. Single-resource bodies，由已知长度的单个文件组成。该类型body由两个header定义：Content-Type 和 Content-Length。
2. Single-resource bodies，由未知长度的单个文件组成，通过将 Transfer-Encoding 设置为 chunked 来使用 chunks 编码。
3. Multiple-resource bodies，由多部分body组成，每部分包含不同的信息段。但这是比较少见的。




