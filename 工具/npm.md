## npm
### 发包

### 更新
确认源并登录
1. 修改版本号：使用 npm version <update_type> 进行修改，update_type 有三个参数
patch：这个是补丁的意思，补丁最合适；
minor：这个是小修小改；
major：这个是大改咯；
具体咋用：
比如我想来个1.0.1版本，注意，是最后一位修改了增1，那么命令：npm version patch
比如我想来个1.1.0版本，注意，是第二位修改了增1，那么命令： npm version minor
比如我想来个2.0.0版本，注意，是第一位修改了增1，那么命令： npm version major
2. 第一步操作只是修改了本地的版本号，使用 npm publish上传到远端npm,就完成了所有工作