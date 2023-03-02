class BrowserViewManager {
    sdk: any;
    idMap: Map<any, any>;
    constructor(){
        const sdk = window.electronAPI;
        this.idMap = new Map();
        this.sdk = sdk;
    }
    async addBrowserView(config: any) {
        const id = await this.sdk.addBrowserView(config);
        this.idMap.set(id, config);
        return id;
    }
    async removeBrowserView(id:number) {
        const flag = await this.sdk.removeBrowserView(id);
        return flag;
    }
    async showBrowserView(id:number) {
        return await this.sdk.showBrowserView(id);
    }
    async hideBrowserView(id:number) {
        return await this.sdk.hideBrowserView(id);
    }

    /***** test case */
    async addElectronBV () {
        const electronBV = await this.addBrowserView({
            url: 'https://electronjs.org',
            width: 300,
            height: 200,
            x: 0,
            y: 0,
            webPreferences: {
              nodeIntegration: true,
              contextIsolation: false,
              enableRemoteModule: true,
            },
        });
        return electronBV;
    }

    async addVueBV () {
        const vueBV = await this.addBrowserView({
            url: 'https://cn.vuejs.org',
            width: 300,
            height: 200,
            x: 300,
            y: 0,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
              },
        });
        return vueBV;
    }
}

const BVM = new BrowserViewManager();

export default BVM;
