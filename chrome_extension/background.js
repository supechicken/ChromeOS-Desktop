chrome.offscreen.createDocument({
  url: 'ws_receiver/wrapper.html',
  reasons: ['BLOBS'],
  justification: 'websocket listener',
});

self.onmessage = e => {
  const data = JSON.parse(e.data);
  console.log('[debug]', 'received request:', data);
  if (data.url == 'chrome://newtab') {
    chrome.windows.create({ url: data.url });
  } else {
    chrome.windows.create({ url: data.url, type: 'popup' }, win => chrome.windows.remove(win.id));
  }
};