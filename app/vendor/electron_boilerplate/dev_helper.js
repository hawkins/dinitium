import { app, Menu, BrowserWindow } from 'electron';

var setDevMenu = function () {
    var devMenu = Menu.buildFromTemplate([{
        label: 'Development',
        submenu: [{
            label: 'Reload',
            accelerator: 'CmdOrCtrl+R',
            click: function () {
                BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
            }
        },{
            label: 'Toggle DevTools',
            accelerator: 'Alt+CmdOrCtrl+I',
            click: function () {
                BrowserWindow.getFocusedWindow().toggleDevTools();
            }
        },{
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            click: function () {
                app.quit();
            }
        }]
    },
    {
        label: 'Initium',
        submenu: [{
            label: 'Inventory',
            accelerator: 'CmdOrCtrl+I',
            click: function () {
                // Ideally we'd toggle an inventory iframe.
                BrowserWindow.getFocusedWindow().webContents.insertCSS("#inventory-frame {display: block!important}");
                // BrowserWindow.getFocusedWindow().webContents.executeJavaScript()
            }
        },{
            label: 'Profile',
            accelerator: 'CmdOrCtrl+P',
            click: function () {
                // For now, refresh the page.
                BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
            }
        }]
    }]);
    Menu.setApplicationMenu(devMenu);
};

export default {
    setDevMenu: setDevMenu,
}
