import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "./assets/bootstrap/css/bootstrap.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css'


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
