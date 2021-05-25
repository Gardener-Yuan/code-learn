/**
 * @description new 模拟
 * 第一个参数为函数
 * eg.  var person = objectFactory(Otaku, 'Kevin', '18')
 * */
function objectFactory() {
  let obj = {};
  // 第一个参数传function，即构造函数原型
  const constructor = [].shift.call(arguments);

  // 将构造函数原型赋值给对象__proto__
  obj.__proto__ = constructor.prototype;

  // 执行函数
  const ret = constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;
}
