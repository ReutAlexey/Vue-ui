import axios from 'axios'

const tests = {
  state: {
    tests: []
  },
  actions: {
    async A_SET_TESTS ({ commit }) {
      try {
        const tests = await axios({ url: this.state.backendUrl + '/front/tests', method: 'GET' })
        commit('M_SET_TESTS', tests.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_SET_TESTS (state, payload) {
      state.tests = payload
    }
  },
  getters: {
    GET_TESTS: state => { return state.tests }
  }
}

export default tests
