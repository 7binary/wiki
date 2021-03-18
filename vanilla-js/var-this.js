var a = 15;

function foo() {
  var a = 25;
  var result = function() {
    console.log('a :', a); // 25, 'var a' is a global scope
    console.log('this.a :', this.a); // 45, 'bind' replaces 'this' execution context
  };
  result.a = 35;
  return result;
}

var bar = foo().bind({ a: 45 });
bar();

//============================

const obj = {
  lol: 'hey',
  say: function() {
    console.log(this.lol);
  },
};
obj.say(); // hey, same obj execution context

//============================

var p = {
  lol: 'hey',
  say: function() {
    console.log(this.lol); // this=p, контекст внутри объекта
  },
  sayShorthand() {
    console.log(this.lol); // this=p, контекст внутри объекта
  },
  sayOfGlobalThis: () => {
    console.log(this.lol); // undefined, this='global', контекст снаружи объекта у стрелочных функций
  },
};

p.say(); // hey
p.sayShorthand(); // hey
p.sayOfGlobalThis(); // undefined

var fn = p.say; // отвязали от функции контекст p.this
fn(); // undefined, execution context of 'global'
fn.call(p); // hey, execution context of 'p'

var doubledBind = p.say.bind({ lol: 'newThis' }).bind(p); // втрой Bind не сработает!
doubledBind(); // newThis

