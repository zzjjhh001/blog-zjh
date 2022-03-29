## provide
provide：选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。
## inject
inject：一个字符串数组，或一个对象，对象的key是本地的绑定名。
## tip
provide 和 inject 绑定并不是可响应的。这是刻意为之的。如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
## use
在编写组件使用slot时，可以使用provide向slot中的组件传递参数。