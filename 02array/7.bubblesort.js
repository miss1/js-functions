// arr.sort(compareFunction)，compareFunction 是一个函数，定义了排序的顺序。它接受两个参数 a 和 b，返回一个数值：
// 默认排序是按照字符串 Unicode 码点进行排序的，这可能会导致数字排序不正确，例如 [1, 2, 10] 会被排序为 [1, 10, 2]
// 如果 compareFunction(a, b) < 0，a 会被排在 b 前面。
// 如果 compareFunction(a, b) > 0，b 会被排在 a 前面。
// 如果 compareFunction(a, b) === 0，a 和 b 的相对位置不变。


function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

Array.prototype.myBubbleSort = function (compareFunction) {
  if (typeof compareFunction !== "function") {
    compareFunction = (a, b) => String(a) > String(b) ? 1 : -1;
  }

  const n = this.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (compareFunction(this[j], this[j + 1]) > 0) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // 如果没有发生交换，说明已经排序好了，可以提前退出
  }

  return this;
}

const arr = [5, 2, 9, 1, 5, 10];
console.log(arr.sort());
console.log(arr.sort((a, b) => a - b));  
console.log(arr.myBubbleSort());
console.log(arr.myBubbleSort((a, b) => a - b));  