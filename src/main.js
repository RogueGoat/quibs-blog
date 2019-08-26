import Vue from 'vue'
import App from './App.vue'
import router from './router'
//these are the vue dependencies - I added the router for the blog functionality

import './assets/styles.css'
//these are the tailwind base styles

//simple function to add class after load
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById('quibs-logo').classList.add('loaded')
//
// });

//vue configuration
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
