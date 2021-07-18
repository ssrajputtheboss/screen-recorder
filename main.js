const { app, BrowserWindow } = require('electron')
function createWindow () {
    const win = new BrowserWindow({
      width: 225,
      height: 135,
      webPreferences:{
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      }
    })
  
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})