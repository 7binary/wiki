// единственный экземпляр создается всегда в конструкторе
class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

const postgre = new Database('PostgreSQL');
const mongo = new Database('MongoDB');
console.log(postgre.getData(), mongo.getData()); // PostgreSQL PostgreSQL
