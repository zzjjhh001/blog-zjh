## pnpm
### 安装包
pnpm add xx 安装到依赖
pnpm add -D xx 安装到dev依赖
pnpm add -g xx 安装到全局
pnpm add xx@3 安装指定版本
### 安装所有依赖
pnpm i 安装所有依赖
pnpm install 
### 更新包
pnpm update 不带参数更新全部
pnpm up xx@3 更新某个包
### 移除包
pnpm rm -D xx 移除开发依赖的包
pnpm rm -g xx 移除全局的包
pnpm rm xx 移除依赖的包
pnpm rm --filter packname  移除某个文件下的依赖包(monerop)

