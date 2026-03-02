// 把多个函数组合成一个新函数, 每个函数的输出成为下一个函数的输入
// compose: 从右向左执行函数
// pipe: 从左向右执行函数
// 用 reduce 或 reduceRight 实现
// compose / pipe 的函数通常是箭头函数或纯函数：不考虑this

function compose(...fns) {
  return function(initialValue) {
    return fns.reduceRight((acc, fn) => {
      return fn(acc)
    }, initialValue);
  }
}

function pipe(...fns) {
  return function(initialvalue) {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    }, initialvalue);
  }
}


// test
const add = ([a, b]) => a + b;
const double = x => x * 2;
const square = x => x * x;

const fn1 = compose(square, double, add);
console.log(fn1([1, 2])); // add(1,2)=3 → double(3)=6 → square(6)=36

const fn2 = pipe(add, double, square);
console.log(fn2([1, 2])); // add(1,2)=3 → double(3)=6 → square(6)=36