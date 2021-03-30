// добавлять новый функционал существующим классам
class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `http://${this.ip}:${this.port}`;
  }
}

function wrapWithAWS(server) {
  server.port += 500;
  server.isAWS = true;
  server.initAWS = function() {
    return server.url;
  };
  return server;
}

const s1 = wrapWithAWS(new Server('192.168.0.1', 80));
console.log(s1, s1.initAWS());
