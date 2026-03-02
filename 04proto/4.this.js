// call, apply, bind 方法可以改变函数的 this 指向，call 和 apply 立即调用函数，bind 返回一个新的函数 
// bind 就是创建一个新的函数，把 this 固定在指定对象上，并可预设参数，同时保留函数原型链和构造函数

Function.prototype.mycall = function (context, ...args) {
  context = context || window; // 如果 context 是 null 或 undefined，默认指向全局对象
  const fnSymbol = Symbol(); // 创建一个唯一的属性名，避免覆盖原有属性
  context[fnSymbol] = this; // 将函数作为对象的方法
  const result = context[fnSymbol](...args); // 调用函数 context.fn(), 实现将this指向context
  delete context[fnSymbol]; // 删除临时属性
  return result; // 返回函数执行结果
}


Function.prototype.mybind = function (context, ...args) {
  const self = this; // 保存原函数  
  function bound(...newArgs) {
    // 如果 bound 函数被当作构造函数调用，this 指向实例对象；否则指向 context
    return self.apply(this instanceof bound ? this : context, args.concat(newArgs));
  }
  bound.prototype = Object.create(self.prototype); // 继承原函数的原型链
  return bound; // 返回绑定后的函数
}

