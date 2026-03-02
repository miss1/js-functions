// arr.every(callback, thisArg)，如果是箭头函数，thisArg 无效，回调函数内部的 this 仍然指向外部作用域。
// callback 是一个函数，数组中的每个元素都会调用这个函数一次，
// 传入三个参数：当前元素的值、当前元素的索引和整个数组。只有当所有元素都返回 true 时，every 才返回 true，否则返回 false。

Array.prototype.myEvery = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (!callback.call(thisArg, this[i], i, this)) return false;
    }
  }
  return true;
}

const arr = [1, 2, , 3];
console.log(arr.every(x => x > 0)); // true
console.log(arr.myEvery(x => x > 0)); // true
console.log(arr.myEvery(function (x) {return x > 0}));

// 注意：对于空数组，every 返回 true，some 返回 false。空数组，不做循环，直接返回结果。
console.log([].some(() => true))   // false
console.log([].every(() => false)) // true