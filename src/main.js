import Vue from 'vue'
import App from './App.vue'

import api from './api/config'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
