## THREE
x,y,z轴是右手坐标系。
### 基本
- 场景(scene): 背景，画布
- 相机(camera)：观察者视角
- 渲染器(renderer)：真正渲染。把相机观察到的东西，渲染到浏览器上。

### 入门使用
```javascript
// 创建一个场景
const scene = new THREE.Scene()
// 创建一个相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
// 创建一个渲染器
const renderer = new THREE.WebGLRenderer();
// 创建一个物体
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
```

### camera
相机，看的地方
![投影方式比较](http://www.webgl3d.cn/upload/threejs60%E6%8A%95%E5%BD%B1.jpg)
#### 类型
##### OrthographicCamera：正投影相机（类似打印的效果）
```javascript
THREE.OrthographicCamera(left,right,top,bottom,near,far)
camera.position.set(200, 300, 200);// 设置位置

```
- left:渲染物体的左边界。
- right，top，bottom。
- near：距离相机多远的位置开始渲染
- far: 距离多远开始不渲染
- 左右边界的距离与上下边界的距离比值与画布的渲染窗口的宽高比例要一致，否则三维模型的显示效果会被单方向不等比例拉伸

##### PerspectiveCamera：透视投影相机（类似人眼看）
```javascript
THREE.PerspectiveCamera(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
```
- fov: 指的是能看到的视角角度范围，人眼是180度左右，一般舍60-90度。
- aspect：宽高比，就是能看到的区域。类似于屏幕的宽高比。
- near：表示距离相机多远开始渲染。
- far：距离相机多远不再渲染。就是只渲染一片区域。
- 这些参数的目的就是确定一个范围.

##### 相机位置
camera.position;
```javascript
camera.position.x = 0
camera.position.y = 1
camera.position.z = 2
```
##### 相机拍摄目标位置
camera.lookAt(): 参数是一个三维点。(THREE.Vector3(x,y,z))

### 全局渲染和局部渲染
#### 全局渲染
```javascript
renderer.setSize(width, height)
document.body.appendChild(renderer.domElement);
// renderer.domELement: 渲染器渲染好的dom元素(canvas
)
// setSize：设置canvas的宽高。
```

#### 局部渲染
```javascript
renderer.setSize(300, 300);
document.querySelector('.class').appendChild(renderer.domElement)
```

### 物体
几何体
```javascript
// 创建一个几何体
const geometry = new THREE.BoxGeometry(x,y,z)
// 创建一个几何球体
const geometry = new THREE.SphareGeometry(x,y,z)
// 创建一个材质
const material=new THREE.MeshLambertMaterial({color:0x0000ff})
```

### 光源
const point=new THREE.PointLight(0xffffff)
