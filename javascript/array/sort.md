## 复杂度
### 时间复杂度
O(n ^ n ),O(n!),O(2 ^ n ),O(n ^ 2 ),O(nlogn),O(n),O(logn)
![image](https://image-1301623187.cos.ap-nanjing.myqcloud.com/javascript/px.png)

### 空间复杂度
一个算法在运行过程中临时占用存储空间大小的度量
## 各种排序
### 比较类排序
通过比较来决定元素间的相对次序，他的时间复杂度不能突破O(nlogn),所以也成为了非线性性时间比较类排序
#### 交换排序
##### 冒泡排序
稳定排序，最基础,一次比较两个元素，顺序不对，就交换位置，然后基准向后推，继续执行，执行到数组末尾之后，再次从头开始。

```javascript
let array = [1,2,3,4,5,11,34,6,9,7,12,8]
for(let i =0;i<array.length;i++){
    for(let j = 0;j<array.length-i;j++){
        if(array[j]>array[j+1]){
            const temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
    }
}
// array [1,2,3,4,5,6,7,8,9,11,12,34]
```
##### 快速排序
- 不稳定,
- 通过一趟排序，将代排记录分割成独立两部分，其中一部分记录的关键字均比另一部分的关键字小则可以分别对这两部分记录继续进行排序，以达到整个序列有序

```javascript
let array = [1,2,3,4,5,11,34,6,9,7,12,8]
function quicksort(arr){
    if(arr.length<=1)return arr
    let left = []
    let right = []
    for(let i =1;i<arr.length;i++){
        if(arr[i]<arr[0]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    left.push(arr[0])
    return quickSort(left).concat(quickSort(right))
}
//array [1,2,3,4,5,6,7,8,9,11,12,34]
```

#### 插入排序
构建有序序列，对于未排序的数据，在已排序序列中从前往后扫描找到相应位置并插入，从而实现排序
```javascript
let array = [1,2,3,4,5,11,34,6,9,7,12,8]
for(let i = 1;i<array.length;i++){
    current = array[i]
    prev = i-1
    while(prev>0 && current < array[prev]){
        array[prev+1] = array[prev]
        prev--
    }
    array[prev+1] = current
}
//array [1,2,3,4,5,6,7,8,9,11,12,34]
```
#### 选择排序
首先把最小的元素放在序列起始位置，然后从剩余的未排序元素中继续寻找最小元素，放在已排序序列之后，循环执行，直到所有元素均排序完毕

##### 普通选择排序
```javascript
let array = [1,2,3,4,5,11,34,6,9,7,12,8]
let minIndex,temp
for(let i =0;i<array.length;i++){
    minIndex = [i]
    for(let j=i+1;j<array.length;j++){
        if(array[j]<array[minIndex]){
            minIndex = j
        }
        temp = array[minIndex]
        array[minIndex] = array[i]
        array[i] = temp
    }
}
//array [1,2,3,4,5,6,7,8,9,11,12,34]
```
##### 堆排序

#### 归并排序
- 是稳定排序，O(nlogn),但需要额外的内存空间
- 采用分治法，将已有序的子序列合并，得到完全有序的序列。
- 先使每个子序列有序，再使子序列段间有序。
- 若将两个有序表合并成一个有序表，称为二路归并

```javascript
let array = [1,2,3,4,5,11,34,6,9,7,12,8]
function(){
    
}
```
### 非比较类排序
不通过比较来决定元素间的相对次序，可以突破基于比较排序的时间下界，以线性时间运行，称为线性时间非比较类排序
#### 计数排序
#### 桶排序
#### 基数排序

## 原生JS数组的sort实现
- 排序思路，参数对比
- sort:对数组元素进行排序，默认排序规则是把元素转化为字符串，在进行排序。(按照)

### 底层实现(V8)
1. 当n<=n 采用插入排序
2. 当n>10 采用三路快速排序
3. 当10<n<1000时，采用中位数作为哨兵元素
4. 当n>1000时，每隔200-215个元素跳出一个元素，放到一个新数组中，然后对它排序，找到中间位置的数，以此作为中位数
插入排序经过优化以后，对于小数据集的排序性能很高。

