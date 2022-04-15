## 分支说明
branches是测试和开发的。
tags是线上。
trunk是稳定的线上。
### 拉分支
svn checkout  http://
svn co
### 更新trunk
svn update trunk
svn up trunk
### 查看状态
svn status
svn st
### 查看修改
svn diff
### 查看提交记录
svn log -l 4（几次）
### 提交代码
svn commit -m ''
svn ci
### 新建分支
svn checkout http://newbranches http://trunk -m 'create 新分支'
### 更新trunk
svn merge -r 26851:26884 http://svn.haodf.net/svn/ssi/tags/v1.1.0/   把v1.1.0的tags的26851版本到26884版本 merge到trunk上
svn ci -m '合并tags/v1.1.0@26851-26884到trunk'
ci：commit
### SVN更新时前面的字母含义
A：add，新增
C：conflict，冲突
D：delete，删除
M：modify，本地已经修改
G：modify and merGed，本地文件修改并且和服务器的进行合并
U：update，从服务器更新
R：replace，从服务器替换
I：ignored，忽略

## 修改步骤
1. 拉trunk代码svn co
2. 更新trunk: svn merge -r1:r2 tags/branches, svn ci -m
3. 切分支 svn cp branches trunk -m ''
4. 修改 
5. arc diff发review arc diff --create --encoding gbk
6. 提交到对应的远程分支 svn ci -m ''
7. 至此本地修改就提交到了远程