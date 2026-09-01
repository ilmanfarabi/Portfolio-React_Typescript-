import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import os from 'os';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());

// Store connected devices
const connectedDevices = new Map();

// Get device info
function getDeviceInfo(id) {
  return {
    id: id.substring(0, 8),
    hostname: os.hostname(),
    platform: os.platform(),
    connectedAt: new Date().toLocaleTimeString()
  };
}

// Socket.io connection handling
io.on('connection', (socket) => {
  const deviceInfo = getDeviceInfo(socket.id);
  connectedDevices.set(socket.id, deviceInfo);

  console.log(`✓ Device connected: ${deviceInfo.hostname}`);

  // Send updated device list to all clients
  io.emit('devices', Array.from(connectedDevices.values()));

  // Handle disconnection
  socket.on('disconnect', () => {
    connectedDevices.delete(socket.id);
    console.log(`✗ Device disconnected: ${deviceInfo.hostname}`);
    
    // Broadcast updated list
    io.emit('devices', Array.from(connectedDevices.values()));
  });

  // Handle device name update
  socket.on('updateName', (name) => {
    deviceInfo.hostname = name;
    io.emit('devices', Array.from(connectedDevices.values()));
  });
});

// REST endpoint to get devices
app.get('/api/devices', (req, res) => {
  res.json(Array.from(connectedDevices.values()));
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log('📱 Devices on same WiFi can connect to this server\n');
});
