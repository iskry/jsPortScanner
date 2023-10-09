const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const networkScannerRoutes = require("./routes/networkScannerRoutes");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", networkScannerRoutes);

server.listen(3000, () => {
  console.log("listening on *:3000");
});


