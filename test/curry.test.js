const curry = require('../src/curry');

test('test curry function', function(assert) {
  var curries = curry((a, b) => {
    return a+b;
  });

  expect(curries(1)(2)).toBe(3);
});
