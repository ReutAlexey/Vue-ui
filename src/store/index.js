import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Shared from './modules/shared'
import CreationTest from './modules/creation_test'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: 'http://127.0.0.1:8000/api'
  },
  modules: {
    Auth,
    Shared,
    CreationTest
  }
})
