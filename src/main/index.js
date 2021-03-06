// Native
const { format } = require('url')

// Packages
const { BrowserWindow, app } = require('electron')
const isDev = require('electron-is-dev')
const prepareNext = require('electron-next')
const { resolve } = require('app-root-path')

const isMac = "darwin" == process.platform

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./src/renderer')

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: isMac ? true : true,
    titleBarStyle: isMac ? 'hidden' : ''
  })

  const devPath = 'http://localhost:8000/start'

  const prodPath = format({
    pathname: resolve('src/renderer/out/start/index.html'),
    protocol: 'file:',
    slashes: true
  })

  const url = isDev ? devPath : prodPath
  mainWindow.loadURL(url)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

})

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
