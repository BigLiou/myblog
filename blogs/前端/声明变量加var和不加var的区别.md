# 加var和不加var的区别

- 使用var声明变量

```javascript
var a = 10
console.log(a)				//10
console.log(window.a)		//10
```

- 不使用var声明变量

```javascript
b = 20
console.log(b)				//20
console.log(window.b)		//20
```

相同点：

不管加不加var，声明的变量都是window对象的属性

不同点：

```javascript
var a = 10;
delete window.a;			//false
b = 20;
delete window.b;			//true
```

使用var声明的变量不可以使用delete从window对象中删除

不使用var声明的变量可以使用delete从window对象中删除