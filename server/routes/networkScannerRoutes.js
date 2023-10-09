const NetworkScannerController = require('../controllers/NetworkScannerController');

module.exports = (socket) => {
  socket.on('scan', (data) => {
    NetworkScannerController.scanPort(socket, data);
  });
};
