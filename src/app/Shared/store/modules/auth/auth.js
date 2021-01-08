import axios from 'axios'

const auth = {
  state: {
    loading: false
  },
  actions: {
    async A_REGISTRATION ({ commit }, form) {
      try {
        commit('M_SET_LOADING', true)
        const user = await axios({ url: this.state.backendUrl + '/auth/register', data: form, method: 'POST' })
        commit('M_SUCCESS_AUTH', user.data)
        commit('M_SET_LOADING', false)
      } catch (error) {
        commit('M_SET_ERROR', error)
        commit('M_ERROR_AUTH')
        commit('M_SET_LOADING', false)
      }
    },
    async A_LOGIN ({ commit }, form) {
      try {
        commit('M_SET_LOADING', true)
        const user = await axios({ url: this.state.backendUrl + '/auth/login', data: form, method: 'PUT' })
        commit('M_SUCCESS_AUTH', user.data)
        commit('M_SET_LOADING', false)
      } catch (error) {
        console.log(error.response)
        commit('M_SET_ERROR', error)
        commit('M_ERROR_AUTH')
        commit('M_SET_LOADING', false)
      }
    }
  },
  mutations: {
    M_SET_LOADING (state, bool) {
      state.loading = bool
    }
  },
  getters: {
    GET_LOADING: state => { return state.loading }
  }
}

export default auth
