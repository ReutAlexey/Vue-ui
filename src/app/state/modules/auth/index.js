import axios from 'axios'

export default {
  state: {
    user: {},
    accessToken: localStorage.getItem('accessToken') || false,
    status: ''
  },
  actions: {
    async A_LOGIN ({ commit }, { email, password }) {
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
    }
  },
  mutations: {},
  getters: {}
}
