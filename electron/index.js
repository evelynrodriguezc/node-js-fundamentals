const { app, BrowserWindow } = require('electron');

//using variables with a 0 like wind0w to remember that they can have any name
// BrowserWindow is from electron so its name stays the same

let mainWind0w;
app.on('ready', createWind0w);

function createWind0w() {
    mainWind0w = new BrowserWindow({
        width: 800,
        height: 600, 
    });
    mainWind0w.loadFile('index.html');
}