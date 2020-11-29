import axios from 'axios'

export default {
  state: {
    user: {},
    accessToken: localStorage.getItem('accessToken') || false,
    status: ''
  },
  actions: {
    async A_LOGIN ({ commit }, payload) {
      commit('M_CLEAR_ERROR')
      commit('M_SET_LOADING', true)
      try {
        const user = await axios({ url: this.state.backendUrl + '/auth/login', method: 'PUT', data: payload })
        commit('M_SUCCESS_AUTH', user.data)
        commit('M_SET_LOADING', false)
      } catch (error) {
        commit('M_SET_ERROR', error)
        commit('M_ERROR_AUTH')
        commit('M_SET_LOADING', false)
        throw error
      }
    },
    async A_REGISTER ({ commit }, payload) {
      commit('M_CLEAR_ERROR')
      commit('M_SET_LOADING', true)
      try {
        const user = await axios({ url: this.state.backendUrl + '/auth/register', method: 'PUT', data: payload })
        commit('M_SUCCESS_AUTH', user.data)
        commit('M_SET_LOADING', false)
      } catch (error) {
        commit('M_SET_ERROR', error)
        commit('M_ERROR_AUTH')
        commit('M_SET_LOADING', false)
        throw error
      }
    },
    async A_REMEMBER ({ commit }) {
      try {
        commit('M_CLEAR_ERROR')
        const user = await axios({ url: this.state.backendUrl + '/auth/me', method: 'POST' })
        commit('M_SET_USER', user.data)
      } catch (error) {
        commit('M_ERROR_AUTH')
      }
    },
    async A_REFRESH ({ commit }) {
      try {
        const user = await axios({ url: '', method: 'POST' })
        commit('M_SUCCESS_AUTH', user.data)
      } catch (error) {
        commit('M_SET_ERROR', error)
        commit('M_ERROR_AUTH')
      }
    }

  },
  mutations: {
    M_SUCCESS_AUTH (state, payload) {
      state.user = payload.user
      state.status = 'success'
      state.accessToken = payload.access_token
      axios.defaults.headers.authorization = 'bearer ' + payload.access_token
      localStorage.setItem('access_token', payload.access_token)
    },
    M_ERROR_AUTH (state) {
      state.status = 'error'
      state.accessToken = null
      localStorage.removeItem('access_token')
      state.user = {}
    }
  },
  getters: {
    GET_USER: state => { return state.user },
    IS_LOGGED: state => { return state.accessToken }
  }
}
