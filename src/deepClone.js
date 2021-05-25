// 深拷贝
function deepClone(target) {
  if (typeof target === 'object') {
    var clone = Array.isArray(target) ? [] : {};

    for (let key in target) {
      clone[key] = deepClone(target[key]);
    }

    return clone;
  } else {
    return target;
  }
}

console.log(deepClone({
  a: '1',
  b: ['hello world'],
  c: {
    name: 'hello',
    age: 18,
    personInfo: {
      facebook: '123',
      ins: ['123', { aa: 'wow' }]
    }
  }
}));

console.log(deepClone([
  {aa: 'Helloween'}
]));
