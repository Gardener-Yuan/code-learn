// trim解析
String.prototype.trim = function () {
  return this.replace(/^\s*/, '').replace(/\s*$/, '');
};
