import axios from 'axios'

export default {
  state: {
    tests: []
  },
  actions: {
    async SET_TESTS ({ commit }) {
      const tests = await axios({ url: this.state.backendUrl + '/guest/tests', method: 'GET' })
      try {
        commit('M_SET_TESTS', tests.data)
      } catch (error) {
        console.log(error)
      }
    }
    /* async CALCULATIONS_RESULT ({ commit }, payload) {
      try {
        const result = await axios({ url: this.state.backendUrl + '/calculation/result', data: payload, method: 'PUT' })
        commit('M_SET_RESULT', result.data)
      } catch (error) {
        console.log(error)
      }
    } */
  },
  mutations: {
    M_SET_TESTS (state, payload) {
      state.tests = payload
    }
  },
  getters: {
    GET_TESTS (state) {
      return state.tests
    }
  }
}
