import Vue from 'vue'
import App from './app/App.vue'
import router from './app/router'
import store from './app/state'
import vuetify from './app/plugins/vuetify'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

Vue.config.productionTip = false

Vue.prototype.$http = axios
const token = localStorage.getItem('access_token')

if (token) {
  Vue.prototype.$http.defaults.headers.authorization = 'bearer ' + token
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
