// arr.reduce(callback, initialValue)，callback 是一个函数，数组中的每个元素都会调用这个函数一次，
// 传入四个参数：累加器、当前元素的值、当前元素的索引和整个数组。返回值是最终的累加器值。
// initialValue 是可选的，如果提供了 initialValue，第一次调用 callback 时，acc 的值为 initialValue，x 的值为数组中的第一个元素；
// 如果没有提供 initialValue，第一次调用 callback 时，acc 的值为数组中的第一个元素，x 的值为数组中的第二个元素。

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }
  let acc, startIndex = 0;
  if (arguments.length > 1) {
    acc = initialValue;
  } else {
    if (this.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    acc = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      acc = callback(acc, this[i], i, this);
    }
  }
  return acc;
}

const arr = [1, , 2, 3];
console.log(arr.reduce((acc, x) => acc + x)); // 6
console.log(arr.myReduce((acc, x) => acc + x)); // 6
console.log(arr.myReduce((acc, x) => acc + x, 0)); // 6
console.log(arr.myReduce(function (acc, x) {return acc + x}));