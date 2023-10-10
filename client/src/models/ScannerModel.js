import io from "socket.io-client";

class ScannerModel {
  constructor() {
    this.socket = null;
    this.connectSocket();
  }

  connectSocket() {
    this.socket = io("http://localhost:3000");
    this.socket.on("connect", () => {
      console.log("Socket connected:", this.socket.connected);
    });
    this.socket.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });
  }

  scanNetwork(host, port) {
    if (!this.socket || !this.socket.connected) {
      console.error("Socket is not connected");
      return Promise.reject("Socket is not connected");
    }
    this.socket.emit("scan", { host, port });
    return new Promise((resolve) => {
      this.socket.on("result", (data) => {
        resolve(data);
      });
    });
  }
}

export default new ScannerModel();
