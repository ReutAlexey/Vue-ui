import axios from 'axios'

const auth = {
  state: {
    user: {},
    accessToken: localStorage.getItem('access_token') || false,
    status: ''
  },
  actions: {
    async A_LOGIN ({ commit }, payload) {
      commit('M_SET_LOADING', true)
      try {
        const user = await axios({ url: this.state.backendUrl + '/auth/login', method: 'PUT', data: payload })
        console.log(user.data)
        commit('M_SUCCESS_AUTH', user.data)
        commit('M_SET_LOADING', false)
      } catch (error) {
        commit('M_SET_ERROR', error)
        commit('M_ERROR_AUTH')
        commit('M_SET_LOADING', false)
        throw error
      }
    },
    async A_REGISTER ({ commit }, form) {
      try {
        commit('M_SET_LOADING', true)
        const user = await axios({ url: this.state.backendUrl + '/auth/register', data: form, method: 'POST' })
        commit('M_SUCCESS_AUTH', user.data)
        commit('M_SET_LOADING', true)
      } catch (error) {
        commit('M_SET_ERROR', error)
        commit('M_ERROR_AUTH')
        commit('M_SET_LOADING', true)
      }
    },
    async A_LOGOUT ({ commit }) {
      try {
        await axios({ url: this.state.backendUrl + '/auth/logout', method: 'POST' })
        commit('M_REMOVE_USER')
      } catch (error) {
        commit('M_REMOVE_USER')
      }
    },
    async A_REMEMBER_ME ({ commit }) {
      try {
        const me = await axios({ url: this.state.backendUrl + '/auth/me', method: 'POST' })
        commit('M_SET_USER', me)
      } catch (error) {
        commit('M_ERROR_AUTH')
        throw error
      }
    },
    A_REFRESH_TOKEN ({ commit }) {
      axios({ url: this.state.backendUrl + '/auth/refresh', method: 'POST' })
        .then(response => {
          console.log(response.data)
          commit('M_SUCCESS_AUTH', response.data)
        })
        .catch(() => {
          commit('M_ERROR_AUTH')
        })
    },
    createF ({ commit }) {
      axios({ url: this.state.backendUrl + '/user/tests/create', method: 'GET' })
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
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
    M_REFRESH_TOKEN (state, token) {
      axios.defaults.headers.authorization = 'bearer ' + token.access_token
      localStorage.setItem('access_token', token.access_token)
    },
    M_ERROR_AUTH (state) {
      state.status = 'error'
      state.accessToken = null
      localStorage.removeItem('access_token')
      state.user = {}
    },
    M_SET_USER (state, user) {
      state.user = user
    },
    M_REMOVE_USER (state) {
      state.user = {}
      state.accessToken = false
      localStorage.removeItem('access_token')
      state.status = ''
    }
  },
  getters: {
    GET_USER: state => { return state.user },
    IS_LOGGED: state => { return state.accessToken }
  }
}

export default auth
