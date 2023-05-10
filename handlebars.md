# handlebars
介绍：
## 语法
### 变量
- @root： 模版渲染的初始上下文
- @first： 在each helper的第一次迭代中，这个值为true；非第一次迭代中，这个值为false
```
{{#each array}}
  {{#if @first}}
    First!
  {{/if}}
{{/each}}
```
- @index: 渲染的下标，从0开始
```
{{#each array}}
  {{@index}}
{{/each}}
```
- @key: 迭代对象时的键值
```
{{#each array}}
  {{@key}}
{{/each}}
```
- @last: 最后一次迭代为true
```
{{#each array}}
  {{#if @last}}
    Last :(
  {{/if}}
{{/each}}
```
- @contentPath：todo
- @level：指定记录等级 todo
