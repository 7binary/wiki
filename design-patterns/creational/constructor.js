// создание объекта конструктором, с инкапсуляцией
/* old way
function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function() {
  return `https://${this.ip}:443`;
}
*/

class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `https://${this.ip}:443`;
  }
}

const aws = new Server('AWS Moscow', '92.168.0.1');
console.log(aws.getUrl());
