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
      } catch (error) {
        commit('M_ERROR_AUTH')
      }
    },
    async A_LOGOUT ({ commit }) {
      try {
        await axios({ url: this.state.backendUrl + '/auth/logout', method: 'POST' })
        commit('M_ERROR_AUTH')
      } catch (error) {
        commit('M_ERROR_AUTH')
      }
    },
    async A_AUTH_ME ({ commit, dispatch }) {
      try {
        const user = await axios({ url: this.state.backendUrl + '/auth/me', method: 'POST' })
        commit('M_SET_USER', user.data)
      } catch (error) {
        dispatch('A_REFRESH_TOKEN')
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
    },
    M_SET_USER (state, user) {
      state.user = user
    }
  },
  getters: {
    IS_LOGGED: state => { return state.accessToken },
    GET_USER: state => { return state.user }
  }
}

export default user
