import { createPinia } from 'pinia';
import { createApp } from 'vue';
import VueCesium from 'vue-cesium';
import 'vue-cesium/dist/index.css';
import './assets/main.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueCesium, {
  cesiumPath: '../node_modules/cesium/Build/Cesium/Cesium.js'
});

app.mount('#app');
