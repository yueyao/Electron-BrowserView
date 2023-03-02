# electron-browserView Example

🎯 Based on the official [electron-vite-vue](https://github.com/electron-vite/electron-vite-vue)

## Quick Start

```sh
yarn dev
```

## browserView Manager
![bv.gif](/public/bv.gif)

```
--- electron/browserViewManager
    --api/index.ts         ipc handle
    --main/index.ts        client 
    --preload/electronAPI.ts  render process inject

--- src
    --browserViewManager/index.ts       front js 
    --components/browserViewCase.vue    demo case
    
```