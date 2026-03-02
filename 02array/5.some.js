// arr.some(callback, thisArg)，如果是箭头函数，thisArg 无效，回调函数内部的 this 仍然指向外部作用域。
// callback 是一个函数，数组中的每个元素都会调用这个函数一次，
// 传入三个参数：当前元素的值、当前元素的索引和整个数组。只要有一个元素返回 true，some 就返回 true，否则返回 false。

Array.prototype.mySome = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
          return true;
      }
    }
  }
  return false;
}

const arr = [1, 2, , 3];
console.log(arr.some(x => x > 2)); // true
console.log(arr.mySome(x => x > 2)); // true
console.log(arr.mySome(function (x) {return x > 2}));