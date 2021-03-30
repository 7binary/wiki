// используя старый интерфейс, подменять реализацию внутри новым классом-сервисом
class OldCalc {
  operations(t1, t2, op) {
    switch (op) {
      case 'add':
        return t1 + t2;
      case 'mul':
        return t1 * t2;
      default:
        return NaN;
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2;
  }

  mul(t1, t2) {
    return t1 * t2;
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc();
  }

  operations(t1, t2, op) {
    switch (op) {
      case 'add':
        return this.calc.add(t1, t2);
      case 'mul':
        return this.calc.mul(t1, t2);
      default:
        return NaN;
    }
  }
}

console.log(new OldCalc().operations(3, 4, 'add'));
console.log(new NewCalc().add(3, 4));
console.log(new CalcAdapter().operations(3, 4, 'add')); // используя старый интерфейс, но новый адаптер
