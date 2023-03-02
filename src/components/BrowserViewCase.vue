<script setup lang="ts">
import { ref } from 'vue'
import browserViewManager from '../browserViewManager/index';

const electronBVid =ref(0);
const vueBVid =ref(0);


async function toggleElectronBV() {
    if(electronBVid.value){
        browserViewManager.removeBrowserView(electronBVid.value);
        electronBVid.value = 0;
        return;
    }
    const id = await browserViewManager.addElectronBV();
    electronBVid.value = id;
}
async function toggleVueBV() {
    if(vueBVid.value){
        browserViewManager.removeBrowserView(vueBVid.value);
        vueBVid.value = 0;
        return;
    }
    const id = await browserViewManager.addVueBV();
    vueBVid.value = id;
}
</script>

<template>
  <div class="card">
    <button type="button" @click="toggleElectronBV"> {{ electronBVid ? ' remove browserView ' :'add new browserView load electron.com'}}</button>
    <button type="button" @click="toggleVueBV">{{ vueBVid ? " remove browserView ": "add new browserView load vuejs.org" }}</button>
  </div>
</template>

<style scoped>

button{
    margin-bottom:10px;
}
</style>
