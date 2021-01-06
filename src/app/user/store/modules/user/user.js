import axios from 'axios'

const user = {
  state: {
    user: {},
    accessToken: localStorage.getItem('access_token') || false
  },
  actions: {
    async A_REFRESH_TOKEN ({ commit }) {
      try {
        const token = await axios({ url: this.state.backendUrl + '/auth/refresh', method: 'POST' })
        commit('M_SUCCESS_AUTH', token.data)
        console.log(token.data)
      } catch (error) {
        commit('M_ERROR_AUTH')
      }
    }
  },
  mutations: {
    M_SUCCESS_AUTH (state, payload) {
      state.user = payload.user
      state.accessToken = payload.access_token
      axios.defaults.headers.authorization = 'bearer ' + payload.access_token
      localStorage.setItem('access_token', payload.access_token)
    },
    M_ERROR_AUTH (state) {
      state.accessToken = null
      localStorage.removeItem('access_token')
      state.user = {}
    }
  },
  getters: {
    IS_LOGGED: state => { return state.accessToken }
  }
}

export default user
