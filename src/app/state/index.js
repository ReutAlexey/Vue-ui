import Vue from 'vue'
import Vuex from 'vuex'
import Shared from '../shared/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: 'http://127.0.0.1:8000/api'
  },
  modules: {
    Shared
  }
})
