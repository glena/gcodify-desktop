'use strict'

import { app, BrowserWindow, ipcMain, dialog } from 'electron'
import * as path from 'path'
import { format as formatUrl } from 'url'
import { processor, getBase64Image } from './lib/processor'

const isDevelopment = process.env.NODE_ENV !== 'production'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

function createMainWindow() {
  const window = new BrowserWindow()

  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  }
  else {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }))
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
})

ipcMain.on('asynchronous-message', (event, action) => {
  if (action.type === 'LOAD') {
    const selection = dialog.showOpenDialog({ filters: [{name: 'Images', extensions:['png', 'jpg']}], properties: ['openFile'] });
    
    if (selection.length!== 0) {
      processor(selection[0])
        .then((filename) => {
          action.preview = getBase64Image(path.join(__static, filename));
          action.original = getBase64Image(selection[0]);
          event.sender.send('asynchronous-reply', action)
        })
        .catch((err) => console.error(err))
    }
    return;
  }
  action.result ='TOLON ' + Math.random();
  event.sender.send('asynchronous-reply', action)
})