const arr = [];
console.log(arr.__proto__ === Array.prototype, 'arr.__proto__ === Array.prototype');
console.log(Array.prototype.__proto__ === Object.prototype, 'Array.prototype.__proto__ === Object.prototype');
// Array.prototype = join() filter() find() map()

const obj = {};
console.log(obj.__proto__ === Object.prototype, 'obj.__proto__ === Object.prototype');

console.log(Object.prototype.__proto__ === null, 'Object.prototype.__proto__ === null');
console.log(typeof Object === 'function', `typeof Object === 'function'`);
console.log(typeof Object.prototype === 'object', `typeof Object.prototype === 'object'`);

const func = () => {
};
console.log(func.__proto__ === Function.prototype, 'func.__proto__ === Function.prototype');
console.log(Function.prototype.__proto__ === Object.prototype, 'Function.prototype.__proto__ === Object.prototype');
// Function.prototype = bind(), call(), apply()

console.log('----------------------');
const human = {
  mortal: true,
};
const putin = Object.create(human); // created prototype chain here
putin.age = 68;
console.log(putin, putin.mortal);
console.log(human.isPrototypeOf(putin), 'human.isPrototypeOf(putin)');
