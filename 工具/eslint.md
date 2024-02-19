
## eslint
### 规则忽略
```javascript
- 忽略整个文件,文件头部添加
/* eslint-disable */
- 忽略某块代码
/* eslint-disable */
/* eslint-enable */
- 单行忽略，行后添加
// eslint-disable-line
- 下一行忽略
// eslint-disable-next-line
- 忽略时指定只忽略某些规则
// 直接在后面加上规则
/* eslint-disable no-alert */

/* eslint-disable no-console */
/* eslint-enable no-console */

// eslint-disable-line no-alert
```