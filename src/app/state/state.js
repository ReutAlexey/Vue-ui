import Vuex from 'vuex'
import Shared from './modules/shared'
import Auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendUrl: 'http://127.0.0.1:8000/api'
  },
  modules: {
    Auth,
    Shared
  }
})
