## babel就是用来解析js代码，然后进行转化。熟悉的就是ES6转ES5。
分为三个步骤：解析，操作，生成。

### 解析：@babel/parser
1. 拿到一段js代码之后，把这段代码解析成一个个的节点。这些节点共同组成一个ast节点树。
2. 节点的类型有很多，babel文档有详细的介绍。

```javascript
// plugins指定了解析规则。
const bb = parse(a, {
  sourceType: "module",
    plugins: [{
      "presets": ["es2015", "stage-0"]
    }]
});
// plugins的项可以是自己定义的visitor
```

### 操作: @babel/traverse
解析成节点之后，对节点进行删除，修改，插入等。创建节点需要引入@babel/type。
```javascript
const aabb = traverse(aa, {
  Identifier(path) {
    // todo
  }
}
// 操作所有的identifier类型的节点
```

### 生成： @babel/generator
修改之后，把ast树转成我们熟知的js代码。
```javascript
const { default: generator } = require('@babel/generator');
const a = generator(ast);// 参数必须是ast
```