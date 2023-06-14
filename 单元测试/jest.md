## 匹配器
1. toBe()：相当于===，也就是我们常说的严格相等。
2. toEqual()：相当于==，只要内容相等，就可以通过测试。
3. toBeNull()：只匹配null值，需要注意的是不匹配undefined。
4. toBeUndifined()：只匹配undefined值，需要注意的是空字符串不能通过测试。
5. toBeDefined()：只要定义过了，就可以通过测试。需要注意的是给一个null值也是可以通过测试的。
6. toBeTruthy()：如果结果为true，则通过测试。
7. toBeFalsy()：如果结果为false，则通过测试。
8. toBeGreaterThan()
9. toBeLessThan()
10. toBeGreaterThanOrEqual()
11. toBeLessThanOrEqual()
12. toThrow():报错匹配器，可以加字符串
13. resolves()和rejects()：测试promise。

## 一些方法
```javascript
// 确保有几次断言被执行。
expect.assertions(1)
```

## 异步的测试
```javascript
fuction s() {
    return axios.get('url');
}

//测试文件:异步
test('测试异步', ()=>{
    return s().then(res => {
        expect(res.data).toBe();
    })
})
// 
test('测试', async ()=> {
    const result = await s();
    expect(result).toBe();
})
// resovles
test("测试", () => {
    expect(s().then(res=> res.data)).resolves.toBe()
})

```

## Mock函数
三个方法都创建了mock函数
### jest.fn()
设置函数返回值。被用来进行某些有回调函数的测试
1. 模拟要测试的包需要调用的函数或者别的包，返回函数或者指定的值，promise等。

```javascript
// 返回undefined
const a = jest.fn();
// 返回指定值
const a = jest.fn().mockReturnValue('qwe')
// 返回指定函数
const a = jest.fn((a,b) => {
    return a + b;
})
// 返回promise成功的回调。res是qqq
const a = jest.fn().mockResolvedValue('qqq')
```

### jest.mock()
模拟模块，获取函数的调用情况。
1. 一些时候不需要知道一个函数的执行结果，只需要知道它被调用了或者返回我们指定的数据。
2. 当某个模块已经被单元测试100%覆盖时，使用jest.mock()去mock该模块，节约测试时间和测试的冗余度是十分必要

```javascript
// a
function a() {
    return Axios.post('url')
}
// b
function b() {
  a().then(res => res.data)
}
import a from './util/a.js'
import b from './util/b.js'
jest.mock('./util/a.js');
test("测试mock", async() => {
    expect.assertions(1);
    await b();
    expect(a).toBeCalled();
})
```

### jest.spyOn()
1. 捕获函数的调用情况，还可以正常的执行被spy的函数。
2. 就是jest.fn()的语法糖。它创建了一个和被spy的函数具有相同内部代码的mock函数
3. 需要测试某些必须被完整执行的方法时





### tip
1. 在jest中如果想捕获函数的调用情况，则该函数必须被mock或者spy！没有mock就不能知道函数的情况。要么jest.mock去拿到函数，要么jest.spyOn()去整个模拟一个函数。
2. express中的res有locals对象