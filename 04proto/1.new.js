// const obj = new Foo(1, 2);
// 创建一个空对象 obj
// 将 obj.__proto__ 指向 Foo.prototype 
// 执行 Foo 函数体，this 指向 obj，参数为 1 和 2
// 如果 Foo 函数没有显式返回对象，则返回 obj

// new 的对象只能是函数，不能是普通对象
function _new(constructor, ...args) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    // obj.__proto__ = constructor.prototype;
    const result = constructor.apply(obj, args);
    return typeof result === 'object' && result !== null ? result : obj;
}


// prototype，是函数对象的一个属性，指向一个对象，这个对象包含了通过该函数创建的实例共享的方法和属性。
// __proto__，是每个对象都有的一个属性，指向该对象的原型对象，即构造函数的 prototype 属性。