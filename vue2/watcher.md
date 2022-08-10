## watcher
1. 我们知道，vue中数据是响应式的，当修改data中声明的响应式数据后，dep会把修改给noticy到watcher。那么watcher都有哪些呢？
2. watcher是vue中的一个基类。在vue中共有三种watcher
- computed watcher：计算属性中的watcher
- user watcher：用户自定义的wathcer
- render watcher：涉及页面渲染的wathcer
执行顺序：computed 》user 》render