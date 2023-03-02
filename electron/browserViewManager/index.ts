import { BrowserWindow, ipcMain } from 'electron';
import { BrowserViewManager } from './main';
import createBrowserView from './main/index';
import { channel } from './api';

const BVMMap: Map<number, BrowserViewManager> = new Map();

const attachMainWindow = (browserWindow:BrowserWindow) => {
    const browserViewManager = createBrowserView(browserWindow);
    if(BVMMap.get(browserWindow.id)) {
        return BVMMap.get(browserWindow.id);
    }
    BVMMap.set(browserWindow.id, browserViewManager);
    return browserViewManager;
};

const attachJSAPI = (browserWindow:BrowserWindow) => {
    const bvm = BVMMap.get(browserWindow.id);
    if(bvm) {
        ipcMain.handle(`${channel}`, async (event, arg) => {
            const { method, params, id} = arg;
            const browserWindowId = event.sender.id;
            const getBVM = BVMMap.get(browserWindowId);
            if(getBVM) {
                console.log("execute method: ", method, params)
                return await getBVM[method](params, id);
            }
            return {
                error: true,
                message: 'BrowserViewManager not found'
            };
        });
    }
};

export {
    attachJSAPI,
    attachMainWindow
}