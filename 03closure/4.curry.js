// curry 将一个多参数函数转成一系列单参数函数的过程
// 是利用闭包保存参数，递归判断是否收齐参数，如果收齐就执行原函数

function curry(fn) {
  const arity = fn.length; // 获取函数的参数个数
  return function curried(...args) {
    if (args.length >= arity) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      }
    }
  }
}


// test
function add(a, b, c) {
  return a + b + c;
}

const curried = curry(add);

console.log(curried(1)(2)(3)); // 6
console.log(curried(1, 2)(3)); // 6
console.log(curried(1)(2, 3)); // 6
console.log(curried(1, 2, 3)); // 6