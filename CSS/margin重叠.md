### 什么情况下会发生margin重叠
1. 当上下相邻的两个块级元素。
2. 当父子元素都是块级元素，并且没有边框，padding，内容或者BFC来分开父子元素的margin-top或者margin-bottom，就会发生margin重叠。
3. 当一个块级元素没有padding，border，content去撑开内容时，自己的margin-top会和margin-bottom重叠。
### 重叠规则
全是正:取绝对值大的
全是负：取绝对值大的
有正有负：取最大值和最小值之和
### 常见解决方案
本质就是两个margin碰到一起了，解决方案就是使这两者不相邻。例如：加border，padding，两者中间加内容，采用BFC隔开两者。
1. 相邻盒子垂直margin重叠，将其中一个变成BFC;
2. 父子元素垂直margin重叠，将父元素设为BFC;给父元素增加border或者在父元素和子元素中间加内容。
3. 如果父子元素是ul和li，那么给ul设置padding或者border的话，li的margin会变成ul的盒模型内部的content，不会与ul发生margin重叠。