import { Component, createApp } from 'vue';
import './style.scss';
import MainApp from './App.vue';
import i18next from './locales';
import i18NextVue from 'i18next-vue';
import 'uno.css';
import { router } from './routers';

function initVueApp(App: Component) {
  return createApp(App).use(i18NextVue, { i18next }).use(router);
}

function render() {
  initVueApp(MainApp).mount('#app');
}

render();
