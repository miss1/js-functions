// arr.find(callback, thisArg)，如果是箭头函数，thisArg 无效，回调函数内部的 this 仍然指向外部作用域。
// callback 是一个函数，数组中的每个元素都会调用这个函数一次，
// 传入三个参数：当前元素的值、当前元素的索引和整个数组。返回值为 true 的第一个元素会被返回，如果没有找到这样的元素，则返回 undefined。

Array.prototype.myFind = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        return this[i];
      }
    }
  }
  return undefined;
}

const arr = [1, 2, , 3];
console.log(arr.find(x => x > 1)); // 2
console.log(arr.myFind(x => x > 1));  // 2
console.log(arr.myFind(function (x) {return x > 1}));