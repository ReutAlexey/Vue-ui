const shared = {
  state: {
    loading: false,
    errors: null
  },
  actions: {
    A_SET_LOADING ({ commit }, status) {
      commit('M_SET_LOADING', status)
    },
    A_SET_ERRORS ({ commit }, payload) {
      commit('M_SET_ERROR', payload)
    }
  },
  mutations: {
    M_SET_LOADING (state, status) {
      state.loading = status
    },
    M_SET_ERRORS (state, errors) {
      state.errors = errors
    },
    M_CLEAR_ERRORS (state) {
      state.errors = null
    }
  },
  getters: {
    GET_LOADING: state => { return state.loading },
    GET_ERRORS: state => { return state.errors }
  }
}

export default shared
