const NetworkScannerModel = require("../models/NetworkScannerModel");

class NetworkScannerController {
  async scanPort(socket, data) {
    const { host, port } = data;
    const status = await NetworkScannerModel.scanPort(host, port);
    socket.emit("result", { host, port, status });
  }
}

module.exports = new NetworkScannerController();
