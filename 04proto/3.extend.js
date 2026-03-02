// ES5 原型链继承，子类构造函数的 prototype 指向父类的实例
// ES6 class 语法糖实现继承：extends 自动设置原型链，super 关键字调用父类构造函数，绑定this
// constructor 是每个原型对象上指向创建它的函数的属性，实例通过原型链可以访问它，表示这个对象是由哪个构造函数创建的。

// 父类
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHi = function () {
  console.log('Hi, ' + this.name);
};

// 子类
function Child(name, age) {
  // 继承父类属性
  Parent.call(this, name);
  this.age = age;
}

// 继承父类方法
Child.prototype = Object.create(Parent.prototype); // 原型链继承
Child.prototype.constructor = Child;

// 测试
const c = new Child('Alice', 20);
c.sayHi(); // Hi, Alice
console.log(c.age); // 20
console.log(c instanceof Child); // true
console.log(c instanceof Parent); // true


// ES6 class 语法糖实现继承
// 父类
class Parent2 {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log('Hi, ' + this.name);
  }
}

// 子类
class Child2 extends Parent2 {
  constructor(name, age) {
    super(name); // 调用父类构造函数
    this.age = age;
  }
}

// 测试
const c2 = new Child2('Alice', 20);
c2.sayHi(); // Hi, Alice
console.log(c2.age); // 20
console.log(c2 instanceof Child2); // true
console.log(c2 instanceof Parent2); // true