// instanceof: obj instanceof Constructor
// 获取 Constructor.prototype
// 获取 obj.__proto__
// 判断 obj.__proto__ 是否在 Constructor.prototype 的原型链上

function _instanceof(obj, Constructor) {
  if (typeof Constructor !== 'function') {
    throw new TypeError('Right-hand side of instanceof is not callable');
  }
  let proto = Object.getPrototypeOf(obj); // 获取 obj.__proto__
  const prototype = Constructor.prototype;
  while (proto != null) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}

console.log(_instanceof([1,2], Array)); // true