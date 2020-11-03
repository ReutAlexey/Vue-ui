export default {
  state: {
    loading: false,
    errors: null
  },
  actions: {
    SET_LOADING ({ commit }, bool) {
      commit('M_SET_LOADING', bool)
    },
    SET_ERROR ({ commit }, payload) {
      commit('M_SET_ERROR', payload)
    },
    CLEAR_ERROR ({ commit }) {
      commit('M_CLEAR_ERROR')
    }
  },
  mutations: {
    M_SET_LOADING (state, payload) {
      state.loading = payload
    },
    M_SET_ERROR (state, payload) {
      state.errors = payload
    },
    M_CLEAR_ERROR (state) {
      state.errors = null
    }
  },
  getters: {
    GET_LOADING (state) {
      return state.loading
    },
    GET_ERROR: state => {
      return state.errors
    }
  }
}
