import React, { useCallback, useState } from 'react';

import ScannerModel from '../models/ScannerModel';
import ScannerView from '../views/ScannerView';

function ScannerController() {
  const [status, setStatus] = useState('');

  const handleScan = useCallback((host, port) => {
    ScannerModel.scanNetwork(host, port). then((result) => {
      setStatus('Port ${result.port} is ${result.status}');
    });
  }, []);

  return (
    <ScannerView
      status={status}
      onScan={handleScan}
    />
  );    
}

export default ScannerController;
