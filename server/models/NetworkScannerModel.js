const net = require("net");

class NetworkScannerModel {
  scanPort(host, port) {
    return new Promise((resolve) => {
      const client = new net.Socket();
      client.connect(port, host, () => {
        resolve("open");
        client.destroy();
      });
      client.on("error", () => {
        resolve("closed");
      });
    });
  }
}

module.exports = new NetworkScannerModel();
