/**
 * @description 模拟bind实现
 * */
Function.prototype.bind1 = function (context) {
  // not function call
  if (typeof this !== 'function') {
    throw new Error('Please bind function');
  }

  const self = this;
  const selfArgs = Array.prototype.slice.call(arguments, 1);

  const Noop = function () {};
  const bindFn = function () {
    const args = selfArgs.concat([].slice.call(arguments));

    // 作为构造函数时，this指向实例, fNOP.prototype.isPrototypeOf(this) 为true
    // 作为普通函数，this指向window, 则绑定context
    return self.apply(Noop.prototype.isPrototypeOf(this) ? this : context, args);
  };

  // 作为构造函数的实例化的时候，可以继承原型
  Noop.prototype = this.prototype;
  bindFn.prototype = new Noop();

  return bindFn;
};
