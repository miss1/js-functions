// 手写深拷贝函数，考虑对象、数组、Date、RegExp。
function deepClone(value, weekMap = new WeakMap()) {
  if (value == null || typeof value !== "object") return value;
  if (weekMap.has(value)) return weekMap.get(value); // 处理循环引用
  if (value instanceof Date) return new Date(value);
  if (value instanceof RegExp) return new RegExp(value);

  const clone =Array.isArray(value) ? [] : {};
  weekMap.set(value, clone);

  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      clone[key] = deepClone(value[key], weekMap);
    }
  }
  return clone;
} 

// 测试
const obj = {
  num: 123,
  str: 'abc',
  arr: [1, 2, 3],
  date: new Date(),
  regex: /abc/g,
  nested: {
    foo: 'bar'
  }
};

// 循环引用测试
obj.self = obj;

const cloned = deepClone(obj);

console.log(cloned);
console.log(cloned.arr === obj.arr);        // false
console.log(cloned.date === obj.date);      // false
console.log(cloned.regex === obj.regex);    // false
console.log(cloned.self === cloned);        // true，循环引用保持