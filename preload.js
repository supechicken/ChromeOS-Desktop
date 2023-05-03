const { contextBridge } = require('electron');
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 25600 });

let sendRequestToChrome;

wss.on('connection', ws => {
  window.wsConnected = true;
  console.log('extension connected!');

  ws.on('error', console.error);
  ws.on('message', data => console.log('received: %s', data));

  sendRequestToChrome = data => {
    ws.send(JSON.stringify(data));
  };
});

window.addEventListener('DOMContentLoaded', () => {
  contextBridge.exposeInMainWorld('openURL', url => {
    if (!window.wsConnected) {
      alert('Cannot communicate with the integration extension. (wait a few seconds and try again?)');
    } else {
      sendRequestToChrome({request: 'openURL', url: url});
    }
  });
})