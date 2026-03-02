// onces functions: 只执行一次，后续调用都返回第一次的结果
// 利用闭包保存执行状态
// 场景：比如事件监听器，某些初始化操作等，只需要执行一次，避免重复执行带来的性能问题
function once(fn) {
  let result;
  return function(...args) {
    if (fn) {
      result = fn.apply(this, args);
      fn = null;
    }
    return result;
  }
}

const add = (a, b) => a + b;
const addOnce = once(add);
console.log(addOnce(1, 2)); // 3
console.log(addOnce(3, 4)); // 3, 后续调用返回第一次的结果