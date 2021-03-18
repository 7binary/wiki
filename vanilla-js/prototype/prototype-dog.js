// https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
function Dog(name) {
  this.name = name;
}
// Определяем статический метод для функции Dog
Dog.say = function() { console.log(this.name + ' Rawr!') }
// Добавляем метод динамический для экземпляров функции Dog
// Dog.prototype.say = function() { console.log(this.name + ' Rawr!') }

const d = new Dog('Bo');
d.say(); // TypeError: d.say is not a function.
// Пытаемся статический метод вызвать на объекте. МОЖНО ТАК: Dog.say() - выведет "Dog Rawr!"
