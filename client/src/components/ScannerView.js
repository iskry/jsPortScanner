import React from "react";

function ScannerView({ onScan, status }) {
  const [host, setHost] = React.useState("");
  const [port, setPort] = React.useState("");

  const handleScan = () => {
    onScan(host, port);
  };

  return (
    <div>
      <input
        value={host}
        onChange={(e) => setHost(e.target.value)}
        placeholder="Host"
      />
      <input
        value={port}
        onChange={(e) => setPort(e.target.value)}
        placeholder="Port"
      />
      <button onClick={handleScan}>Scan</button>
      <p>{status}</p>
    </div>
  );
}

export default ScannerView;
