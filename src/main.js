import Vue from 'vue'
import App from './App.vue'
import router from './router'
//these are the vue dependencies - I added the router for the blog functionality

import './assets/styles.css'
//these are the tailwind base styles

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
