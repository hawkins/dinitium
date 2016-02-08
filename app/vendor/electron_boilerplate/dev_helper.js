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
            accelerator: 'I',
            click: function () {
                // Toggle the inventory iframe.
                BrowserWindow.getFocusedWindow().webContents.send('toggleInventory');
            }
        },{
            label: 'Profile',
            accelerator: 'P',
            click: function () {
                // Toggle the profile frame
                BrowserWindow.getFocusedWindow().webContents.send('toggleProfile');
            }
        }]
    }]);
    Menu.setApplicationMenu(devMenu);
};

export default {
    setDevMenu: setDevMenu,
}
