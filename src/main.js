import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';
// import axios from './axios';
import './axios';
import './style.css';



const Pinia = createPinia();

const app = createApp(App);
app.use(router)
  .use(Pinia)
  .mount('#app')

