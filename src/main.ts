import { createApp } from 'vue';
import './assets/scss/styles.scss';
import App from './App.vue';
import store from './store';
import router from './routes';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

const app=createApp(App);
app.use(store);
app.use(router);
app.use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions);
app.mount("#app");