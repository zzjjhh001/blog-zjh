## DNS
### dns.lookup
- 查找域名的IP
- 使用操作系统工具来执行解析，不一定会发出请求。其他的查询函数都是使用网络进行域名查询。
```node
const dhs = require('dns');
dns.lookup('baidu.com', (err, address, family) => {
  // address是IP地址
  // family是类型，IPV4，IPV6
})
```
```javascript
const dns = require('dns');
dns.resovle4('baidu.com', (err, addresses) => {
  // addresses IP的list
})
```
### dns.setServers
- 指定DNS服务器的IP地址
```javascript
dns.setServers(['114.114.114.114']);
```
### dns.Resolver
- 指定dns解析时使用的DNS服务器地址
```javascript
const resolver = new dns.Resolver();
resolver.setServers(['114.114.114.114']);
resolver.resolve4('example.org', (err, addresses) => {
  // ...
});
```
### resolver.cancel
- 取消正在进行的域名查询
- 相应回调回执行
```
resolver.cancel();
```
### resolver.setLocalAddress
- 指定发起请求的本地地址
- 解析器在向 IPv4域名系统服务器发出请求时将使用 v4 本地地址
```javascript
resolver.setLocalAddress('1.1.1.1');
```
### dns.getServers()
- 返回当前用于查找Ip地址的服务器地址IP字符串数组
```javascript
const dns = require('dns');
dns.setServer('114.114.114.114');
console.log(dns.getServers()); // ['114.114.114.114']
```
### dns.reverse
- 根据Ip查域名
```javascript
dns.reverse('10.0.0.1') // [test.com]
```
### dns.resolve4(hostname, callback)
- 和 dns.resolve() 类似, 仅能查询 IPv4 (A 记录）
### dns.resolve6(hostname, callback)
- 和 dns.resolve4() 类似， 仅能查询 IPv6( AAAA 查询）
### dns.resolveMx
### dns.resolveTxt
### dns.resolveSrv
### dns.resolveSoa

### promise形式API
```javascript
const { promises } = require('dns');
const resovler = new promises.Resovler();
resovler.resovle('baidu.com').then(data => {})
async function c() {
  await resovler.resovle('baidu.com');
}
```
### rrtypes
以下列出了 dns.resolve() 方法中有效的 rrtypes值:
- 'A' IPV4 地址, 默认
- 'AAAA' IPV6 地址
- 'MX' 邮件交换记录
- 'TXT' text 记录
- 'SRV' SRV 记录
- 'PTR' 用来反向 IP 查找
- 'NS' 域名服务器记录
- 'CNAME' 别名记录
- 'SOA' 授权记录的初始值
### 错误码
每次 DNS 查询都可能返回以下错误码：

- dns.NODATA: 无数据响应。
- dns.FORMERR: 查询格式错误。
- dns.SERVFAIL: 常规失败。
- dns.NOTFOUND: 没有找到域名。
- dns.NOTIMP: 未实现请求的操作。
- dns.REFUSED: 拒绝查询。
- dns.BADQUERY: 查询格式错误。
- dns.BADNAME: 域名格式错误。
- dns.BADFAMILY: 地址协议不支持。
- dns.BADRESP: 回复格式错误。
- dns.CONNREFUSED: 无法连接到 DNS 服务器。
- dns.TIMEOUT: 连接 DNS 服务器超时。
- dns.EOF: 文件末端。
- dns.FILE: 读文件错误。
- dns.NOMEM: 内存溢出。
- dns.DESTRUCTION: 通道被摧毁。
- dns.BADSTR: 字符串格式错误。
- dns.BADFLAGS: 非法标识符。
- dns.NONAME: 所给主机不是数字。
- dns.BADHINTS: 非法HINTS标识符。
- dns.NOTINITIALIZED: c c-ares 库尚未初始化。
- dns.LOADIPHLPAPI: 加载 iphlpapi.dll 出错。
- dns.ADDRGETNETWORKPARAMS: 无法找到 GetNetworkParams 函数。
- dns.CANCELLED: 取消 DNS 查询。