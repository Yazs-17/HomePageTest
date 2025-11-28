/**
 * 
 * @param {Function} func 
 * @param {Number} delay 
 * @returns 
 */
function throttle (func, delay) {
  let lastExecutionTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastExecutionTime >= delay) {
      lastExecutionTime = now;
      func.apply(this, args);
    }
  }
}
function onScroll () {
  console.log('Scroll event triggered:', Date.now());
}

const throttledOnScroll = throttle(onScroll, 1000);
setInterval(throttledOnScroll, 290);

// 或者使用定时器实现

/**
 * 
 * @param {Function} func 
 * @param {Number} delay 
 * @returns 
 */
function throttle2 (func, delay) {
  let timeoutId = 0;
  return function (...args) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        func.apply(this, args);
      }, delay)
    }
  }
}
function onScroll () {
  console.log('Scroll event triggered:', Date.now());
}

const Test2 = throttle2(onScroll, 1000);
setInterval(Test2, 290);