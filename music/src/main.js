

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router';
import VeeValidatePlugin from "./includes/validation" 

import { auth } from  "./includes/firebase";
import { registerSW } from "virtual:pwa-register"
import  GlobalComponents  from  './includes/_globals'
import progressBar from './includes/progress-bar';
import Icon from "../src/directive/icon"
import i18n from './includes/i18n'

import  '../src/style.css'
import './assets/main.css'
import "nprogress/nprogress.css";

registerSW({ immediate: true })
progressBar(router);
 
let app;
auth.onAuthStateChanged(() => {
   if(!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin);
    app.directive("icon",Icon)
    app.directive("app")
    app.use(i18n)
    app.use(GlobalComponents)
    
    app.mount('#app')
   }
})

