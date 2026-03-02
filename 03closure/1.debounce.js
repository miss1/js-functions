// Debounce 
// 1. 事件触发后，n秒内没有再次触发事件，事件处理函数才会执行
// 2. 事件触发后，n秒内再次触发事件，重新计算时间
// 利用闭包保存定时器timer，每次触发时清除之前的定时器并重新设置，从而保证在连续触发中只执行最后一次

function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

// immediate 模式下，函数在第一次触发时立即执行，然后通过一个定时器来控制冷却时间。
// 只有当定时器结束后，timer 被置为 null，函数才能再次触发执行。
function debounceImmediate(fn, delay, immediate = false) {
  let timer = null;
  return function(...args) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    if (immediate) {
      const isCallNow = !timer;
      if (isCallNow) {
        fn.apply(this, args);
      }
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  }
}
