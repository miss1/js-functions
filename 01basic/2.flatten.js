/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */

// reduce 用法
function flatten(value) {
  return value.reduce((acc, val) => {
    if (Array.isArray(val)) acc.push(...flatten(val));
    else acc.push(val);
    return acc;
  }, []);
}

// dfs
function flatten2(value) {
  const res = [];
  for (const item of value) {
    if (Array.isArray(item)) {
      res.push(...flatten2(item));
    } else {
      res.push(item);
    }
  }
  return res;
}

const t = [1, [2, [3, 4]], 5];
console.log(flatten(t)); // [1, 2, 3, 4, 5]
console.log(flatten2(t)); // [1, 2, 3, 4, 5]
