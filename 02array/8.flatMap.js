// flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// 等价于arr.map(fn).flat(1)
// 只拍平一层，如果需要拍平多层，可以使用 flat() 方法。

const arr1 = [1, 2, [3, [7, 8]], 4];
console.log(arr1.flatMap(x => x)); // [ 1, 2, 3, [ 7, 8 ], 4 ]
console.log(arr1.flat(2)); // [1, 2, 3, 7, 8, 4]

Array.prototype.myFlatMap = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const map = callback.call(thisArg, this[i], i, this);
      if (Array.isArray(map)) {
        result.push(...map);
      } else {
        result.push(map);
      }
    }
  }
  return result;
}

console.log(arr1.myFlatMap(x => x)); // [ 1, 2, 3, [ 7, 8 ], 4 ]