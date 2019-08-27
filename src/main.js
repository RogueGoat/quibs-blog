import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
//these are the vue dependencies - I added the router for the blog functionality

import './assets/styles.css'
//these are the tailwind base styles


//vue configuration
Vue.config.productionTip = false

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
