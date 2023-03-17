---
title: Vue
date: 2020-05-29
---

# Vue 学习

## Vue 起步

> 每个 Vue 应用都需要通过实例化 Vue 来实现

### vue 实例

- el：挂载点，将应用挂载到指定元素上
- data：定义属性
- methods：定义函数

```javascript
let vm = new Vue({
  el: '#app', //挂载点，将Vue应用挂载到id为app的元素上
  data: {
    //data中定义数据
    name: 'Bob',
    age: 12,
  },
  methods: {
    //methods中定义方法
    sayName() {
      console.log(this.name)
    },
  },
  filters: {}, //filters中定义过滤器
  directives: {}, //directives中定义自定义指令
  components: {}, //components中定义组件

  //生命周期函数
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
})
```

## Vue 实例的生命周期

> 从 Vue 实例创建、运行到销毁的过程中，伴随着各种各样的事件，这些事件统称为生命周期

### 创建期间的生命周期函数

```javascript
beforeCreate(){}		//第一个生命周期函数, data和methods中的数据还没有初始化
created(){}				//data和methods中的数据已经初始化好了
beforeMount(){}			//模板在内存中编译好了，但还未渲染到页面中去
mounted(){}				//创建Vue实例期间最后一个生命周期函数，内存中的模板已经渲染到页面中去了
```
