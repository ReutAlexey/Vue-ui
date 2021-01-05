import axios from 'axios'

const tests = {
  state: {
    tests: [],
    test: [],
    quests: []
  },
  actions: {
    async A_TESTS ({ commit }) {
      try {
        const tests = await axios({ url: this.state.backendUrl + '/front/tests', method: 'GET' })
        commit('M_SET_TESTS', tests.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_SET_TESTS (state, tests) {
      state.tests = tests
    }
  },
  getters: {
    GET_TESTS: state => { return state.tests }
  }
}

export default tests
