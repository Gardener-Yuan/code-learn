/**
 * @description 模拟call实现
 * */
Function.prototype.call1 = function (context) {
  const ctx = context || window;
  let args = [];

  ctx.fn = this;

  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`)
  }

  const result = eval(`ctx.fn(${args})`);

  delete ctx.fn;

  return result;
};
