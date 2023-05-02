(async () => {
  const ws = new WebSocket('ws://localhost:25600'),
        sw = (await navigator.serviceWorker.ready).active;

  ws.onopen = () => console.log('[debug]', 'connection opened!');
  ws.onmessage = e => {
    const data = e.data;

    console.log(data);
    sw.postMessage(data);
  }
})();