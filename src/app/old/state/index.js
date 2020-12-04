import Vue from 'vue'
import Vuex from 'vuex'
import Shared from '../shared/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: 'http://apimanager.adsffdby.vh114.hosterby.com/api'
  },
  modules: {
    Shared
  }
})
