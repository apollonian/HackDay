const electron = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const logger = console

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 632,
    minWidth: 800,
    // titleBarStyle: 'hidden',
    // frame: false,
  })

  // and load the index.html of the app.
  mainWindow.loadURL(
    isDev ?
      'http://localhost:3000' :
      path.join('file://', __dirname, '/build/index.html')
  )


  mainWindow.webContents.once('dom-ready', () => {
    // For development mode open the browser devtools, and install the
    // Redux and React dev tools
    if (isDev) {
      mainWindow.webContents.openDevTools()
      const {
        default: installExtension,
        REACT_DEVELOPER_TOOLS,
        REDUX_DEVTOOLS,
      } = require('electron-devtools-installer');

      installExtension(REACT_DEVELOPER_TOOLS.id)
        .then(name => {
          logger.log(`Added ${name}`);
        })
        .catch(err => {
          logger.log('An error occurred: ', err);
        });

      installExtension(REDUX_DEVTOOLS)
        .then(name => {
          logger.log(`Added ${name}`);
        })
        .catch(err => {
          logger.log('An error occurred: ', err);
        });
    }
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
