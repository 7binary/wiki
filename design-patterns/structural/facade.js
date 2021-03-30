// класс-фасад скрывает внутри метода работу других классов-сервисов
class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) {
  }

  add(complaint) {
    this.complaints.push(complaint);
    return this.reply(complaint);
  }
}

class ProductComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id} ${customer} ${details}`;
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id} ${customer} ${details}`;
  }
}

class ComplaintRegistry {
  register(type, customer, details) {
    let complaints;
    const id = Math.random().toString(16).slice(5,15);
    switch (type) {
      case 'product':
        complaints = new ProductComplaints();
        break;
      default:
        complaints = new ServiceComplaints();
    }

    return complaints.add({id, customer, details});
  }
}

console.log(new ComplaintRegistry().register('product', 'Ayo', 'unavailable'));
console.log(new ComplaintRegistry().register('service', 'Save', 'not found'));
