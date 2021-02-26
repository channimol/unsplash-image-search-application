import Vue from 'vue'
import App from './App.vue'

import api from './api/config'
import router from './router'

import Buefy from "buefy";
import 'buefy/dist/buefy.css'
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

Vue.use(Buefy, {
  defaultIconPack: "fas"
})

Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
