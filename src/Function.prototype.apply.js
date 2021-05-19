/**
 * @description 模拟call实现
 * */
Function.prototype.apply1 = function (context, arr) {
  const ctx = context || window;
  let args = [];
  let result = null;

  ctx.fn = this;

  if (!arr) {
    result = eval('ctx.fn()');
  } else {
    for (let i = 1; i < arr.length; i++) {
      args.push(`arguments[${i}]`)
    }
  }

  result = eval(`ctx.fn(${args})`);

  delete ctx.fn;

  return result;
};
