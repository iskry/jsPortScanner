import io from 'socket.io-client';

class ScannerModel {
  constructor() {
    this.socket = null;
  }
}

connectSocket() {
  this.socket = io('http://localhost:3000');
}

scanNetwork(host, port) {
  this.socket.emit('scan', { host, port });
  return new Promise((resolve, reject) => {
    this.socket.on('result', (data) => {
      resolve(data);
    });
  });
}

export default new ScannerModel();
