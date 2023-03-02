import {ipcRenderer} from 'electron'

const apis = {
    getNowBrowserWindowId: () => {
        return ipcRenderer.invoke('getNowBrowserWindowId');
    }
}

export {
    apis
}