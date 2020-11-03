import axios from 'axios'

export default {
  state: {
    user: {},
    status: '',
    loading: false,
    access_token: localStorage.getItem('access_token') || ''
  },
  actions: {
    async LOGIN ({ commit }, payload) {
      commit('M_CLEAR_ERROR')
      commit('M_SET_LOADING', true)
      try {
        const user = await axios({ url: this.state.backendUrl + '/auth/login', method: 'POST', data: payload })
        commit('M_SUCCESS_AUTH', user.data)
        commit('M_SET_LOADING', false)
      } catch (error) {
        commit('M_SET_ERROR', error)
        commit('M_ERROR_AUTH')
        commit('M_SET_LOADING', false)
        throw error
      }
    },
    async REGISTER ({ commit }, payload) {
      commit('M_CLEAR_ERROR')
      commit('M_SET_LOADING', true)
      try {
        const user = await axios({ url: this.state.backendUrl + '/auth/register', method: 'POST', data: payload })
        commit('M_SUCCESS_AUTH', user.data)
        commit('M_SET_LOADING', false)
      } catch (error) {
        commit('M_SET_ERROR', error)
        commit('M_ERROR_AUTH')
        commit('M_SET_LOADING', false)
        throw error
      }
    }
  },
  mutations: {
    M_SUCCESS_AUTH (state, data) {
      state.user = data.user
      state.status = 'succes'
      state.access_token = data.access_token
      axios.defaults.headers.authorization = 'bearer ' + data.access_token
      localStorage.setItem('access_token', data.access_token)
    },
    M_ERROR_AUTH (state) {
      state.status = 'error'
      state.access_token = ''
      localStorage.removeItem('access_token')
    }
  },
  getters: {
    IS_LOGGED_IN: state => state.access_token
  }
}
