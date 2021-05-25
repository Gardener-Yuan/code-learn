function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;

  var throttle = function () {
    var now = +new Date();
    var remain = now - previous - wait;
    args = arguments;

    if (remain <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        previous = +new Date();
        timeout = null;
        func.apply(context, args)
      }, remain)
    }
  };

  return throttle()
}
