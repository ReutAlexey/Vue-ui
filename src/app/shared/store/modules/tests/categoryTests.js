import axios from 'axios'

const category = {
  state: {
    testsCategory: []
  },
  actions: {
    async A_SET_CATEGORY_TESTS ({ commit }, categoryId) {
      try {
        const categoryTests = await axios({ url: this.state.backendUrl + '/front/tests/category/' + categoryId, method: 'GET' })
        commit('M_SET_CATEGORY_TESTS', categoryTests.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_SET_CATEGORY_TESTS (state, categoryTests) {
      state.testsCategory = categoryTests
    }
  },
  getters: {
    GET_CATEGORY_TESTS: state => { return state.testsCategory }
  }
}

export default category
