## webpack入门理解
webpack是用来将我们的代码压缩成小文件。

### 配置
```script
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  // scss
  // entry: path.join(__dirname, 'src', 'style/loading.scss'), // 单文件入口
  // output: {
  //   filename: 'bundle.js',  // 输出文件名
  //   path: path.join(__dirname, 'dist', 'style')  // 输出目录
  // },
  // js
  entry: path.join(__dirname, 'src', 'loading'), // 单文件入口
  output: {
    libraryTarget: 'umd', // 打包好之后，使用时的引入方式
    library: 'loading',// 引入的名称
    filename: 'bundle.js',  // 输出文件名
    path: path.join(__dirname, 'dist', 'js')  // 输出目录
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      {
        test: /\.vue$/i,
        use: [
          'vue-loader'
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
```
#### entry
指定要打包的文件的入口
#### output
指定打包好的文件的配置
#### model
指定模式，development还是produment
#### module: rule
指定loader的规则,是数组或从后往前依次执行loader。
#### plugins
插件，指定要用的插件
