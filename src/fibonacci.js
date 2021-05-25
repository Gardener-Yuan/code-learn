/**
 * @description 斐波那契数
 * @param {number} n
 * @return {number}
 * */
var fib = function(n) {
  // 非number
  if (typeof n !== 'number') {
    throw new Error('n must be number');
  }

  // n < 0
  if (n < 0 && n > 30) {
    throw new Error('0 <= n <= 30');
  }

  if (n <= 1) {
    return n;
  }

  let k1 = fib(n - 1 < 0 ? n : n - 1); // fib(2) ===> fib(1) + fib(0) ===> 1
  let k2 = fib(n - 2 < 0 ? n : n - 2); // fib(1) ===> 1

  console.log(k1, k2);

  return k1 + k2;
};


console.log('fib(3)', fib(3));
console.log('fib(4)', fib(4));
console.log('fib(5)', fib(5));
