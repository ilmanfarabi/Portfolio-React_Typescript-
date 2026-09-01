import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './DeviceList.css';

export default function DeviceList() {
  const [devices, setDevices] = useState([]);
  const [connected, setConnected] = useState(false);
  const [serverUrl, setServerUrl] = useState('http://localhost:3001');
  const [customName, setCustomName] = useState('');

  useEffect(() => {
    const socket = io(serverUrl, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5
    });

    socket.on('connect', () => {
      setConnected(true);
      console.log('Connected to server');
    });

    socket.on('devices', (deviceList) => {
      setDevices(deviceList);
    });

    socket.on('disconnect', () => {
      setConnected(false);
    });

    return () => socket.disconnect();
  }, [serverUrl]);

  const handleNameChange = () => {
    if (customName.trim()) {
      const socket = io(serverUrl);
      socket.emit('updateName', customName);
      setCustomName('');
    }
  };

  return (
    <div className="device-list-container">
      <h2>📱 WiFi Network Devices</h2>
      
      <div className="connection-status">
        <div className={`status-indicator ${connected ? 'online' : 'offline'}`}></div>
        <span>{connected ? 'Connected to Network' : 'Disconnected'}</span>
      </div>

      <div className="server-input">
        <input 
          type="text" 
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
          placeholder="Server URL (e.g., http://192.168.x.x:3001)"
        />
      </div>

      <div className="device-name-input">
        <input 
          type="text" 
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
          placeholder="Set your device name"
          onKeyPress={(e) => e.key === 'Enter' && handleNameChange()}
        />
        <button onClick={handleNameChange}>Update Name</button>
      </div>

      <div className="devices-grid">
        {devices.length === 0 ? (
          <p className="no-devices">No devices connected yet</p>
        ) : (
          devices.map((device) => (
            <div key={device.id} className="device-card">
              <div className="device-icon">📱</div>
              <h3>{device.hostname}</h3>
              <p className="device-id">ID: {device.id}</p>
              <p className="device-platform">{device.platform}</p>
              <p className="device-time">{device.connectedAt}</p>
            </div>
          ))
        )}
      </div>

      <div className="device-count">
        Total Devices: <strong>{devices.length}</strong>
      </div>
    </div>
  );
}
