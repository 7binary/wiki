// класс для создания экземпляров других классов
class FreemiumMembership {
  constructor(name) {
    this.name = name;
    this.price = 1;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.price = 5;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.price = 10;
  }
}

class MembershipFactory {
  static list = {
    freemium: FreemiumMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  create(name, type = 'freemium') {
    const Membership = MembershipFactory.list[type] || MembershipFactory.list.freemium;
    const member = new Membership(name);
    member.type = type;
    member.toString = function() {
      return `${this.name} subscribed "${this.type}" for ${this.price} per month`;
    }
    return member;
  }
}

const factory = new MembershipFactory();
const members = [
  factory.create('Alice', 'freemium'),
  factory.create('Dave', 'standard'),
  factory.create('Viktor', 'premium'),
];
members.forEach(m => console.log(m.toString()));
