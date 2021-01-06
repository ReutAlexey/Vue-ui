import Vue from 'vue'
import Vuex from 'vuex'
import sharedStore from './Shared/store'
import userStore from './user/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: 'http://127.0.0.1:8000/api'
  },
  modules: {
    sharedStore,
    userStore
  },
  getters: {
    GET_BACKEND_URL: state => { return state.backendUrl }
  }
})
// 'http://apimanager.adsffdby.vh114.hosterby.com/api'
// 'http://127.0.0.1:8000/api'
