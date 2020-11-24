const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
let win
function createWindow() {
   win = new BrowserWindow({width: 800, height: 600,
            webPreferences: {
            nodeIntegration: false}})
   win.loadURL('https://web.whatsapp.com')
}
app.on('ready', createWindow)
