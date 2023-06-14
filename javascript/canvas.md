## canvas
- canvas的width和height需要放在标签内，没有单位。默认是300，300。设置width和height就是增大画布
- style设置width和height是等比缩放。类似把图片放大缩小
- **width和height属性作为标签属性写在行内代表的是画布的分辨率(resolution)，而写在样式里代表的是画布的大小（size）**
### 使用
```javascript
const canvas = document.getElementById('canvas');
const cnt = canvas.getContext('2d');
cnt.strokeStyle = 'red'
cnt.fillStyle = '#ffffff'
cnt.lineWidth = '4px'
```
### 使用心得
1. 注意要save和restore。
2. beginPath是开始绘制路径，closePath是绘制一个回到原点的路径。
3. 注意修改canvas的基本属性时，要考虑对下次绘制的影响。
### ⚠️注意事项
#### dpi导致的毛边
##### 问题
使用canvas时，由于不同手机的dpi不同，会导致canvas绘制时出现毛边。
##### 解决方案
1. 适配dpi
```javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scale = window.devicePixelRatio;
canvas.width = Math.floor(size * scale);
canvas.height = Math.floor(size * scale);
ctx.scale(scale, scale);
```
2. 引入hidpi-canvas
- 没有实际去尝试。(TODO)
```javascript
<script src="assets/js/hidpi-canvas.min.js" ></script>
const canvas = document.getElementById('canvas');
this.ctx = canvas.getContext("2d");
const ratio = this.getPixelRatio(this.ctx);
canvas.width = 360 * ratio;
canvas.height = 360 * ratio;
```

### 基本api
- cnt.strokeStyle: 设置画笔的颜色，描边使用。
- cnt.fillStyle: 设置填充色。
- cnt.lineWidth: 设置画笔的宽度。值为数字，默认加有宽度。
- cnt.fillRect(x,y,w,h):画一个实心矩形x，y：坐标(距离canvas画布左上角)，w,h：要画的矩形的宽高。
- cnt.strokeRect(x,y,w,h): 画一个矩形框。参数同上
- cnt.clearRect(x,y,w,h): 清除一个矩形区域。参数同上。
- cnt.lineCap: 设置线条端点的形状.(butt: 平头，round：圆头， square：出方头)
- cnt.lineJoin: 设置线段交点的形状(round: 圆转， bevel：取平，miter：出尖)

#### 绘制路径
- cnt.beginPath：表示要开始画新的路径,会清除掉以前的老的路径。重新开始新路径。
- cnt.closePath：将笔点返回到当前子路径起始点的方法。它尝试从当前点到起始点绘制一条直线。如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作。
- cnt.arc(x,y,r,sdeg,edeg,counterclockwise): 画圆弧，以x,y为圆心，r为半径，sdeg为开始弧度，edeg为结束弧度，count是否逆时针画，默认为顺时针。sdeg和edeg是弧度不是角度。360 = 2Math.PI; 
- cnt.arcTo(x1,y1,x2,y2,r):画切线。画初始点和(x2,y2)的切线，(x1，y1)是交点。
- cnt.bezierCurveTo(cx1,cy1,cx2,cy2,x,y):画三次贝塞尔曲线，(cx1,cy1)(cx2,cy2)为控制点，原点和(x,y)为起始和终止点。
- lineTo(x, y)：绘制一条从上一点到(x, y)的直线
- moveTo(x, y)：移动原点。
- quadraticCurveTo(cx, cy, x, y)：画二次贝塞尔曲线。
- rect(x, y, width, height)：画一个矩形。

#### 绘制文本
- cnt.font：指定字体
- cnt.textAlign:指定对齐方式。
- cnt.textBaseline：指定文本的基线。
- cnt.fillText('string',x,y,maxWidth): 绘制实心文本。string：绘制内容，x,y是绘制区域的基准点。具体绘制位置，依赖textAlign和textBaseline
- strokeText(): 绘制文本
- measureText():确定文本大小的方法。这个方法接收一个参数，即要绘制的文本，然后返回一个TextMetrics 对象。这个返回的对象目前只有一个属性 width。

#### 变换
操作画在画布上的图像。
- cnt.rotate(angle): 围绕原点把图像旋转angle弧度。是以canvas的原点为中心旋转。**需要在画图像之前使用rotate。**
- scale(scalex, scaley): 通过在x轴乘以scalex，y轴乘以scaley去缩放图像。
- tanslate(x,y)：把原点移动到(x,y)。
#### 其他
- closePath()绘制一个返回起点的线。
- isPointInPath(x,y): 判断点(x,y)是否在画布上
- cnt.save()： 保存此时的canvas的状态。颜色，原点等。
- cnt.restore(): 从暂存栈中取出并恢复之前保存的设置。就是删除restore和上次save中间对cnt的属性操作。恢复到上次save时。
- 可以多次调用save，多次调用restore。**类似有一个历史记录。**
- **save()方法只保存应用到绘图上下文的设置和变换，不保存绘图上下文的内容**

#### 绘制图像
把现有的图像绘制到画布上。使用drawImage方法
- drawImage(image,x,y):把image绘制到(x,y)处。图像与原来一样大第一个参数也可以是别的canvas。
```javascript
const can = document.querySelector('canvas');
cnt.drawImage(can,10,10)
```
- drawImage(image,x,y,w,h): 把image绘制到(x,y)处。但是图像会被缩放到(w,h)
- context.drawImage(image, 0, 10, 50,50,0,100,40, 60)：这一部分从(0,10)开始，50像素宽、50像素高。而绘制到画布上时，会从(0,100)开始，变成40像素宽、60 像素高。
- 只把图像绘制到上下文中的一个区域。此时，需要给drawImage()提供9个参数：要绘制的图像、源图像x坐标、源图像y坐标、源图像宽度、源图像高度、目标区域x坐标、目标区域 y 坐标、目标区域宽度和目标区域高度
#### 绘制阴影
相当于给当前的画笔增加阴影属性，后续绘制的时候会自动加上阴影
- shadowColor: 阴影颜色，默认为黑色
- shadowOffsetX: 阴影相对于x轴的偏移量
- shadowOffsetY: 阴影相对于y轴的偏移量
- shadowBlur：阴影的模糊量。

#### 绘制渐变
##### 线性渐变
- cnt.createLinearGradient(30, 30, 70, 70): 指定(30,30)到(70.70)是渐变的范围。返回一个渐变对象grad
- grad.addColorStop(start, color): 添加渐变的颜色，可以调用多次，指定多个渐变的开始中间颜色。start指定的是颜色的位置，0是开始颜色，1是结束颜色
- **创建好渐变之后，需要把它赋给fillStyle或者strokeStyle。然后再使用**
```javascript
let grad = cnt.createLinearGradient(30,30,70,70);
grad.addColorStop(0, 'white')
grad.addColorStop(0.5, 'red')
grad.addColorStop(1, 'black')
cnt.fillStyle = grad;
cnt.fillRect(30,30,70,70)
// 注意渐变的坐标和绘制图像的坐标。
```
##### 径向渐变
- cnt.createRadialGradient(100,100,10,100,100,20):参数依次是内圆的坐标x,y，半径r，外圆的坐标x,y，半径r。
- 其他和线性渐变一致。

##### 圆弧渐变
- 在具有给定坐标的点周围创建渐变。
- cnt.createConicGradient(startAngle, x, y):参数依次是开始渐变的角度(单位是弧度)，原点的坐标x,y。
- 从右侧轴开始。
- 可以用来绘制圆锥渐变。
- 注意它的兼容性。

#### 绘制图案
先创建一个图案，再绘制到canvas中。就像先创建一个纹理，然后粘到某个地方(路径，矩形，闭合的区域)
- createPattern(img, repeat): 创建一个图案，第一个参数是img元素(canvas,video)。第二个参数指定如何重复图像。(repeat,repeat-x,repeat-y,no-repeat)
- 和渐变一样，图案的起点实际上是画布的原点(0,0),将填充样式设置为图案，表示在指定位置而不是在开始绘制的位置显示图案。
```javascript
let image = document.querySelector('image');
cnt.fillStyle = image;
cnt.fillRect(10,10,100,100);
```

### 合成图片和马赛克
- 合成图片：就是在canvas中绘制两张图片，然后吧图片转换成base64,再输入到页面中
- 1. const a = canvas.toDataURL();
- 2. img.setAttribute('src', a);
- 马赛克：就是把图片的像素操作修改一下
- 1. let imageData = cnt.getImageData(0, 0, canvas.width, canvas.height)
- 2. 见drawMosaic函数
```javascript
const image = new Image(10, 10);
image.src = 'http://127.0.0.1:8080/test.png';
const canvas = document.getElementById('canvas');
const img = document.getElementById('img');
const cnt = canvas.getContext('2d');
image.onload = function() {
  flag++;
  if(flag >= 2) {
    cnt.drawImage(image, 0, 0, 200, 200);
    cnt.drawImage(image2, 0, 0, 100, 100);
    // 绘图
    // const a = canvas.toDataURL();
    // img.setAttribute('src', a);
    // 马赛克
    let imageData = cnt.getImageData(0, 0, canvas.width, canvas.height)
    drawMosaic(imageData)
  }
}
const image2 = new Image(10, 10);
  image2.src = 'http://127.0.0.1:8080/favicon.ico';
  image2.onload = function() {
    flag++;
    if(flag >= 2) {
      cnt.drawImage(image, 0, 0, 200, 200);
      cnt.drawImage(image2, 0, 0, 100, 100);
      // 绘图
      // const a = canvas.toDataURL();
      // img.setAttribute('src', a);
      // 马赛克
      let imageData = cnt.getImageData(0, 0, canvas.width, canvas.height)
      drawMosaic(imageData)
    }
  }
  function drawMosaic(imageData){
      let r, g, b;
      for(let x = 0; x <= canvas.width; x += 10) {
          for(let y = 0; y <= canvas.height; y += 10) {

              // 获取具体位置上像素点的RGB值，然后在canvas上重新绘制图片

              r = imageData.data[(y * canvas.width + x) * 4]
              g = imageData.data[(y * canvas.width + x) * 4 + 1]
              b = imageData.data[(y * canvas.width + x) * 4 + 2]

              color = `rgb(${r}, ${g}, ${b})`

               // 在图像具体位置生成马赛克

               cnt.fillStyle = color
               cnt.fillRect(x, y, 10, 10) // 最终将马赛克绘制上去
          }
      }
    }
```

#### 绘制图像数据

#### 合成

## webGL
