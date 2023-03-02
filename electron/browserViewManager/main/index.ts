import { BrowserView, BrowserWindow } from "electron";

export class BrowserViewManager {
    browserWindow: BrowserWindow;
    browwserViewMap: Map<number, BrowserView>;
    constructor(browserWindow: BrowserWindow) {
        this.browserWindow = browserWindow;
        this.browwserViewMap = new Map();
    }

    async addBrowserView(config: any) {
        const browserView = new BrowserView(config);
        this.browserWindow.addBrowserView(browserView);
        browserView.webContents.loadURL(config.url);
        browserView.setBounds({...config});
        const id = browserView.webContents.id;
        this.browwserViewMap.set(id, browserView);
        return id;
    }

    removeBrowserView(id:number) {
        const bv = this.browwserViewMap.get(id);
        this.browserWindow.removeBrowserView(bv);
    }

    showBrowserView(id:number) {
        const bv = this.browwserViewMap.get(id);
        this.browserWindow.addBrowserView(bv)
    }
    hideBrowserView(id:number) {
        const bv = this.browwserViewMap.get(id);
        this.browserWindow.removeBrowserView(bv);
    }

    getBrowserViews() {
        return this.browwserViewMap;
    }

    destroyBrowserView(id:number) {
        const bv = this.browwserViewMap.get(id);
        if(bv){
            // @ts-ignore
            bv?.webContents?.destroy();
        }
    }

    destroyAllBrowserViews() {
        this.browwserViewMap.forEach((bv, id) => {
            this.destroyBrowserView(id);
        });
    }

    executeJavaScriptInBrowserView(id:number, code: string) {
        const bv = this.browwserViewMap.get(id);
        bv?.webContents?.executeJavaScript(code);
    }
}

export default (browserWindow:BrowserWindow) => {
    return new BrowserViewManager(browserWindow);
}