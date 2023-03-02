import { IpcMain,ipcRenderer } from "electron"

const channel = 'browserViewManager';

const apis = {
    async addBrowserView(config) {
        return ipcRenderer.invoke(`${channel}`, {
            method: 'addBrowserView',
            params: config,
        });
    },
    removeBrowserView(id:number) {
        return ipcRenderer.invoke(`${channel}`, {
            method: 'removeBrowserView',
            params: id,
        });
    },
    showBrowserView(id:number) {
        return ipcRenderer.invoke(`${channel}`, {
            method: 'showBrowserView',
            params: id,
        });
    },
    hideBrowserView(id:number) {
        return ipcRenderer.invoke(`${channel}`, {
            method: 'hideBrowserView',
            params: id,
        });
    }
};

export {
    channel,
    apis,
}