import axios from 'axios'

export default {
  state: {
    user: null,
    status: '',
    loading: false,
    access_token: localStorage.getItem('access_token') || null
  },
  actions: {
    async LOGIN ({ commit }, payload) {
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
    async REGISTER ({ commit }, payload) {
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
    async IS_LOGGED ({ commit }) {
      await axios({ url: this.state.backendUrl + '/auth/me', method: 'POST' })
        .then(response => {
          commit('M_SET_USER', response.data)
        })
        .catch(() => {
          commit('M_ERROR_AUTH')
        })
    },
    async LOGOUT ({ commit }) {
      await axios({ url: this.state.backendUrl + '/auth/logout', method: 'PUT' })
      try {
        commit('M_REMOVE_USER')
      } catch (error) {
        commit('M_ERROR_AUTH')
      }
    }
  },
  mutations: {
    M_SET_USER (state, payload) {
      state.user = payload
    },
    M_SUCCESS_AUTH (state, data) {
      state.user = data.user
      state.status = 'succes'
      state.access_token = data.access_token
      axios.defaults.headers.authorization = 'bearer ' + data.access_token
      localStorage.setItem('access_token', data.access_token)
    },
    M_ERROR_AUTH (state) {
      state.status = 'error'
      state.access_token = null
      localStorage.removeItem('access_token')
    },
    M_REMOVE_USER (state) {
      state.user = null
      state.access_token = null
      localStorage.removeItem('access_token')
    }
  },
  getters: {
    IS_LOGGED_IN (state) {
      return state.access_token !== null
    },
    GET_USER (state) {
      return state.user
    }
  }
}
