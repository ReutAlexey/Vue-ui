import Vue from 'vue'
import Vuex from 'vuex'
import shared from './shared/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: 'http://127.0.0.1:8000/api'
  },
  modules: {
    shared
  },
  getters: {
    GET_BACKEND_URL: state => { return state.backendUrl }
  }
})
// 'http://apimanager.adsffdby.vh114.hosterby.com/api'
// 'http://127.0.0.1:8000/api'
