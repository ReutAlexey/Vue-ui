import axios from 'axios'

const storeTests = {
  state: {
    testsArr: [],
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
  async A_SET_CATEGORY_TESTS ({ commit }, categoryId) {
    try {
      const category = await axios({ url: this.state.backendUrl + '/front/tests/category/' + categoryId, method: 'GET' })
      commit('M_SET_TESTS', category.data)
      console.log(categoryId)
      console.log(category.data)
    } catch (error) {
      console.log(error)
    }
  },
  mutations: {
    M_SET_TESTS (state, tests) {
      state.testsArr = tests
    }
  },
  getters: {
    GET_TESTS: state => { return state.testsArr }
  }
}

export default storeTests
