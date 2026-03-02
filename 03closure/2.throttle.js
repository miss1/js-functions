// throttle: 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

// 时间戳, 立即执行
function throttle(fn, delay) {
  let lastTime = 0;
  return function(...args){
    const now = Date.now();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  }
}

// 定时器，delay后执行
function throttleTimer(fn, delay) {
  let timer = null;
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  }
}