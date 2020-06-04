const Electron = require('electron');
const { BrowserWindow } = Electron;

class MainWindow extends BrowserWindow {
    constructor() {
        super({
            webPreferences: {
                nodeIntegration: true
            },
            height: 500,
            width: 300,
            frame: false,
            resizable: false,
            show: false
        });
        this.on('blur', this.onBlur.bind(this))
    }

    onBlur() {
        this.hide();
    }
}

module.exports = MainWindow;