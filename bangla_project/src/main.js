// import Vue from 'vue';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import App from './App.vue';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

// Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App),
// }).$mount('#app');

import {createApp} from 'vue'
import App from './app.vue'
import router from 'vue-router'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

// createApp(App).use(bootstrap).mount('#app')


const app = createApp(App)
app.use(bootstrap)
app.mount('#app')
app.use(router)