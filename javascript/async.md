## async 
1. 就是方便链式的promise。
2. 当请求依赖上一个请求的返回值时使用。
3. 方便使用catch去捕获错误。
3. async函数一定会返回一个promise对象。如果一个async函数的返回值看起来不是promise，那么它将会被隐式地包装在一个promise中。