// not working with function expressions () => {}, cuz they are lexical scoped (who called us)
// use function for dynamic scope on runtime
Date.prototype.lastYear = function() {
  return this.getFullYear() - 1;
};
const date = new Date('01.01.2021');
console.log(date.lastYear());


Array.prototype.appendSign = function(sign) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(`${this[i]}${sign}`);
  }
  return arr;
};
console.log([1, 2, 3].map('++'));


Function.prototype.bind = function(obj) {
  const self = this;
  return function() {
    return self.apply(obj, arguments);
  };
};
