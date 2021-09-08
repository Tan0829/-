import { createApp } from "vue";
import App from "./App.vue";
import '@/assets/styles/index.scss';
import router from './router';
import store, { key } from './store';
import Element from 'element-plus';
App.use(router)
App.use(store, key)
App.use(Element)

createApp(App).mount("#app");
