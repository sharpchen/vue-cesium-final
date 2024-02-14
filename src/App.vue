<template>
  <el-row ref="viewerContainer" class="demo-viewer">
    <vc-viewer style="width: 100%; height: 100%; position: fixed; top: 0; left: 0" :sky-box="false">
      <vc-primitive-tileset
        ref="primitive"
        url="http://localhost:8080/tileset.json"
        :prefer-leaves="true"
        :maximum-screen-space-error="2048"
        @ready="onReady"
        @click="onClicked"
        @all-tiles-loaded="allTilesLoaded">
      </vc-primitive-tileset>
    </vc-viewer>
  </el-row>
</template>

<script lang="ts" setup>
  import { VcReadyObject } from 'vue-cesium/es/utils/types';

  const onReady = ({ cesiumObject: tileset, viewer }: VcReadyObject) => {
    const cartographic = Cesium.Cartographic.fromCartesian(
      (tileset as Cesium.Cesium3DTileset).boundingSphere.center
    );
    const surface = Cesium.Cartesian3.fromRadians(
      cartographic.longitude,
      cartographic.latitude,
      cartographic.height
    );
    const offset = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0);
    const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3());
    (tileset as Cesium.Cesium3DTileset).modelMatrix = Cesium.Matrix4.fromTranslation(translation);
    viewer.zoomTo(tileset as Cesium.Cesium3DTileset);
  };
  function onClicked(e) {
    console.log(e);
  }
  function allTilesLoaded(e) {
    console.log('allTilesLoaded');
  }
  function unload() {
    // this.$refs.primitive.unload();
  }
  function load() {
    // this.$refs.primitive.load();
  }
  function reload() {
    // this.$refs.primitive.reload();
  }
</script>

<style></style>
