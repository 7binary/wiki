const dragon = {
  name: 'Alena',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am a dragon ${this.name}`;
    }
  },
};

// const lizSing = dragon.sing.bind(lizard);
// console.log(lizSing());

const lizard = {
  name: 'Kiki',
  fight() {
    return 1;
  },
};
lizard.__proto__ = dragon;
console.log(lizard.sing(), lizard.fire, dragon.isPrototypeOf(lizard));

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) console.log(prop);
}
