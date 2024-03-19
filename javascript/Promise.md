## Promise
Promise就是一个为了解决回调地狱问题的语法。
改为链式调用的方式。
then(funsucess,funerror);
如果then结束没有主动return，会自动return一个成功的Promise。
catch也会return一个成功的Promise
