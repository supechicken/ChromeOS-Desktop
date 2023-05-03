(async () => {
  const sw = (await navigator.serviceWorker.ready).active;
  const connect_websocket = () => {
    const ws = new WebSocket('ws://localhost:25600');

    ws.onopen    = () => console.log('[debug]', 'connection opened!');
    ws.onclose   = () => {
      console.log('[debug]', 'will reconnect after 1 seconds...')
      setTimeout(connect_websocket, 1000);
    };

    ws.onmessage = e => {
      const data = e.data;
      console.log(data);
      sw.postMessage(data);
    }
  };

  connect_websocket();
})();