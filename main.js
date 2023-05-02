const { app, BrowserWindow } = require('electron');
const path = require('path');

app.whenReady().then(() => {
  const { screen } = require('electron');
  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize;

  console.log(width, height);

  const win = new BrowserWindow({
    x: 0,
    y: 0,
    width: width,
    height: height,
    frame: false,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false
    }
  })

  win.loadFile('index.html')
  //win.webContents.openDevTools()
})
