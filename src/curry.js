/**
 * @description 柯里化实现
 * 将f(a, b, c) 转化为 f(a)(b)(c)
 * */
function curry(fn, args = []) {
  const fnArgsLength = fn.length;

  return function () {
    const _args = args.slice(0);
    let arg;

    for (let i = 0; i < arguments.length; i++) {
      arg = arguments[i];
      _args.push(arg);
    }

    if (_args.length < fnArgsLength) {
      return curry.call(this, fn, _args);
    } else {
      return fn.apply(this, _args);
    }
  }
}

module.exports = curry;
