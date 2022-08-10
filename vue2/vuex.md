## vuex
1. 大中型项目做状态管理使用。建立一个store存数据，然后页面共享这些数据。
2. vuex是绑定在vue实例上的，所以刷新页面和window.open跳转，新页面都会重置vuex
3. 当页面很复杂，有很多组件依赖同一个属性时，使用vuex。
4. h5页面，不是通过open开页面使用vuex去记录数据。

### 基本使用
```javascript
Vue.use(vuex)
export const store = new Vuex.store({
    state: {
        // 基本的常量数据
    },
    getters: {
        // 类似与计算属性
        // 页面使用时，可以传递参数。
    },
    mutations: {
        // 同步的更改state
    },
    actions: {
        // 异步的更改state
    }
})
// 新建vue实例时，加入store。
new Vue({store});
```

### state
store存储的数据都在这里。
#### mapState函数
就是为了方便才做state。mapState返回一个对象。
```javascript
// 页面使用
computed: {
    name() {
    return this.$store.state.name;
    }
}
computed: {
    ...mapState({
        name: state => {
            return state.name
        }
    })
    ...mapState(['name'])
    // this.name = this.$store.state.name;
}
```
### getters
就是基于state的computed。
#### mapGetters函数
```javascript
// 组件中
computed: {
    ...mapGetters({
        name: 'name'
    })
    ...mapGetters(['name'])
}
// 传递参数
// store
getters: {
    testFnc: state => {
      return (a) => {
        return a+ state.name
      }
    }
}
// 使用时
this.name = this.$store.getters.testFnc('hahahahh')
```
### mutations
同步修改state
```javascript
new Vuex.store({
    mutations: {
        add(state, payload) {
            this.state.age+=payload;
        }
    }
})
// 使用
this.$store.commit('add', 2);
this.$store.commit({
    type: 'add',
    payload: 2
});
```
#### mapMutations函数
```javascript
// 
methods: {
    ...mapMutations({
        add: 'add'
    })
    ...mapMutations([
        'add'
    ])
}
```
### actions
1. 异步修改state的值。
2. actions通过调用mutations去修改state中的属性。
3. 在acitons中使用context.state,context.getters。
4. 异步的操作写在actions中，页面只调一下dispatch。

#### 为什么要使用actions
mutation是立即生效。
在 mutation 中混合异步调用会导致你的程序很难调试。例如，当你调用了两个包含异步回调的 mutation 来改变状态，你怎么知道什么时候回调和哪个先回调呢？

```javascript
new Vuex.store({
    mutations: {
        update: (state, payload) => {
            
        }
    },
    action: {
        test() {
            // 异步操作。
            setTimeout(() => {
                context.commit('update');
            }, 1000)
        }
    }
})
// 直接使用
this.$store.dispatch('test')
// 带有参数
this.$store.dispatch('test', {
    name: 'zjh'
})
this.$store.dispatch({
    type: 'test',
    name: 'zjh'})
// 解构使用
methods: {
    ...mapActions({
        test: 'test'
    });
}


```
