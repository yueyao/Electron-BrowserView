import { contextBridge } from "electron";
import {apis} from '../browserViewManager/api/index';
import { apis as mainAPI } from '../main/api';

export default () => {
    const electron = {};
    Object.assign(electron,apis);
    Object.assign(electron,mainAPI);
    contextBridge.exposeInMainWorld('electronAPI', electron)
}