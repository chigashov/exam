const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;


let win;


let argsCmd = process.argv.slice(2);
let timerTime = parseInt(argsCmd[0]);

function createWindow() {
    win = new BrowserWindow({
        width: 500,
        height: 300,
        frame: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(`file://${__dirname}/index.html`);

    win.on('closed', () => {
        win = null;
    });

    win.webContents.on('did-finish-load', () => {
        win.webContents.send('timer-change', timerTime);
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});