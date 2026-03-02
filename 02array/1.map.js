// arr.map(callback, thisArg)， 如果是箭头函数，thisArg 无效，回调函数内部的 this 仍然指向外部作用域。
// callback 是一个函数，数组中的每个元素都会调用这个函数一次，传入三个参数：当前元素的值、当前元素的索引和整个数组。

Array.prototype.myMap = function (callback, thisArg) {
	if (typeof callback !== "function") {
		throw new TypeError("callback must be a function");
	}
	const res = [];
	for (let i = 0; i < this.length; i++) {
		if (i in this) { // 处理稀疏数组，跳过空位
			res.push(callback.call(thisArg, this[i], i, this)); // thisArg 是用来指定回调函数内部的 this 指向。
		}
	}
	return res;
}

const arr = [1, 2, , 3];
console.log(arr.map(x => x * 2)); // [2, 4, <1 empty item>, 6]
console.log(arr.myMap(x => x * 2)); // [2,4,6]
console.log(arr.myMap(function (x) {return x * 2}));

// 遍历数组，执行回调并且绑定this，跳过空位，返回新数组。