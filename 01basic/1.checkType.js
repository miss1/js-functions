// typeof 只能判断值类型，函数，是否是引用类型。增强版typeof
function enhancedTypeOf(value) {
  if (value === null) return 'null';
  if (value instanceof Array) return 'array';
  if (value instanceof Date) return 'date';
  return typeof value;
}

console.log(enhancedTypeOf(null)); // 'null'
console.log(enhancedTypeOf([])); // 'array'
console.log(enhancedTypeOf(new Date())); // 'date'
console.log(enhancedTypeOf({})); // 'object'
console.log(enhancedTypeOf(() => {})); // 'function'
console.log(enhancedTypeOf(123)); // 'number'
console.log(enhancedTypeOf('hello')); // 'string'


// 判断是否是array
const arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true
console.log(arr instanceof Array); // true
console.log(Object.prototype.toString.call(arr)); // [object Array]

// 判断一个值是否是对象
// 判断所有引用类型
function isObject(value) {
  return value !== null && typeof value === 'object';
}

// 判断纯对象，即通过 {} 或 new Object() 创建的对象
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}
