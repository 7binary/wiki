// наследование функционала другого объекта через прототип с помощью Object.create(model, props)
const car = {
  wheels: 4,
  init() {
    console.log(`Car has ${this.wheels} wheels and owner is ${this.owner}`);
  },
};

const carWithOwner = Object.create(car, {
  // owner является рядовым 'свойством-значением'
  owner: {
    value: 'Noah',
    writable: true,
    configurable: true,
    enumerable: true,
  },
  bar: {
    configurable: false,
    get: function() {
      return 10;
    },
    set: function(value) {
      console.log('Установка `o.bar` в', value);
    },
    /* при использовании методов доступа ES5 наш код мог бы выглядеть так:
        get function() { return 10; },
        set function(value) { console.log('Установка `o.bar` в', value); } */
  },
});
carWithOwner.init();

console.log(carWithOwner.__proto__ === car);
