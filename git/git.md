## git分支合并
[大神文章](https://zhuanlan.zhihu.com/p/192972614)
### 合并两个文件
#### 三向合并
1. 只有两项的话，没有一个基准，两者不一样不知道以谁为准，不知道是谁修改了。
2. 正常提交代码时，应该是以本地版本库

### 合并策略
git merge 默认会挑选合并方式，git merge -s tag:指定方式，tag是方式
#### Fast-forward
1. 合并没有分叉的两个分支的默认行为。
2. Fast-ward:舍弃master，直接把HEAD指向分支的节点。master直接和分支的版本一致。
3. 这个是git合并没有分叉的分支时的默认行为，可以理解为有一个分支没有修改，commit版本节点是一条线。
4. 这个可以实现回退代码，直接把master指向之前的分支。

#### Recursive
1. 最常见也是最常用的。这个是合并有分叉的两个分支默认的合并策略。
2. 递归寻找路径最短的唯一共同祖先节点，以这个节点为base节点进行三向合并。
3. 如果找到的路径最短的的祖先节点不唯一，那么递归寻找，寻找这俩祖先节点的路径最短的唯一共同祖先节点。

#### Ours
就是完全以我的代码为主，忽略别人的代码，但是保留双方的历史记录。
```
git merge -s ours dev
//忽略dev分支，但是保留commit记录
```
#### Octopus
合并两个以上分支.
```
git merge dev2 dev3 -s octopus
```
### 策略选项
只有recursive有策略选项。
1. ours：发生冲突以自己为准。
2. theirs：和ours相反。

### 总结
合并没有分叉分支的默认
```
git merge // 快速合并，Fast-forward
```
合并有分叉分支的默认策略
```
git merge -s recursive
```
合并两个分支以上
```
git merge -s octopus
```
以我为主，保留commit记录
```
git merge -s ours dev
```
正常合并，有冲突以我为主
```
git merge -X ours dev
```
正常合并，有冲突以他人为主
```
git merge -X theirs dev
```
## 代码回退
### 追加提交代码
```
git commit --amend
// 会将当前暂存区的内容与上一次的commit的内容合并。然后修改commit信息，实现追加提交
```
### 回退代码操作
回退分为几种情况: 暂存区回退，本地仓库回退，远程仓库回退
#### 暂存区回退
```
暂存区代码回退到工作区
git reset

```
#### 本地仓库回退
```
// 修改某一次的commit信息
git commit --amend
// 回退到某一次的commit，之后的提交的内容都会到暂存区，不会直接删掉
git reset --soft commitId
// 回退到某一次的commit，之后的提交的内容直接删掉，不会回到工作区或者暂存区
git reset --hard commitId
// 
```

#### 远程仓库回退
不新增commit实现回退
```
// 重置当前分支到特定commit
// 使用上面本地仓库回退的方案
git reset
// 直接强制将远程代码和本地分支同步，会删掉这次commit之后的别人的代码
git push origin <branch-name> --force
// 更安全会去判断一下是不是有别人的新的提交
git push origin <branch-name> --force-with-lease
```
新增commit实现回退，安全
```
// revert 是新建一个commit去撤销之前提交的更改，新的commit的内容就是被撤销的内容的逆操作。
git revert commitId
// 会新建一个commit，然后推到远程就实现了回退，之前提交的commit还存在
```

## 基于commitId切分支并推送远程
```sh
git checkout -b yourNewBranch yourCommitId
git push origin yourNewBranch
```
## revert后操作
TODO: 
## 操作
### 查看git配置信息
- git config --list
### 设置git用户名、密码、邮箱的配置
- git config user.name 用户名
### 设置git用户名、密码、邮箱的配置（全局配置）
- git config --global user.name 用户命
- git config --global user.password 密码
- git config --global user.email 邮箱
