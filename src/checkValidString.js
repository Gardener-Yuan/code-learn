/**
 * 给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：
 * 任何左括号 ( 必须有相应的右括号 )。
 * 任何右括号 ) 必须有相应的左括号 ( 。
 * 左括号 ( 必须在对应的右括号之前 )。
 * 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
 * 一个空字符串也被视为有效字符串。
 * */
var checkValidString = function(s) {
  if (!s && typeof s === 'string') {
    return true;
  }

  let low = 0;
  let high = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      low += 1;
      high += 1;
    } else if (s[i] === ')') {
      if (low > 0) {
        low -= 1;
      }

      if (high > 0) {
        high -= 1;
      } else {
        return false;
      }
    } else if (s[i] === '*') {
      if (low > 0) {
        low -= 1;
      }

      high += 1;
    }
  }

  return low <= 0 && 0 <= high;
};

console.log(checkValidString('(**(*)'));
