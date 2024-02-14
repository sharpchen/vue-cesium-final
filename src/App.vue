<script setup lang="ts">
  import { VcPrimitiveTileset, VcViewer } from 'vue-cesium';
</script>

<template>
  <VcViewer style="width: 100%; height: 100%; position: fixed; top: 0; left: 0">
    <VcPrimitiveTileset
      url="https://zouyaoji.top/vue-cesium/SampleData/Cesium3DTiles/Tilesets/dayanta/tileset.json">
    </VcPrimitiveTileset>
  </VcViewer>
</template>

<style scoped>
  html,
  body {
    margin: 0%;
    padding: 0%;
    width: 100%;
    height: 100%;
  }
</style>
