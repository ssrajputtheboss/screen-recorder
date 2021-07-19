const { app, BrowserWindow,ipcMain } = require('electron')
function createWindow () {
    const win = new BrowserWindow({
      width: 225,
      height: 150,
      icon:__dirname+'/icon/camera.ico',
      webPreferences:{
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
      }
    })
  
    win.loadFile('index.html')
    win.removeMenu()
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed',()=>app.quit())

ipcMain.on('save-close',(e,a)=>{
  setTimeout(()=>app.quit(),2000)
})