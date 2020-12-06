import axios from 'axios'

const categoryList = {
  state: {
    categoryList: []
  },
  actions: {
    async A_SET_CATEGORY_TESTS ({ commit }, categoryId) {
      try {
        console.log(categoryId)
        const category = await axios({ url: this.state.backendUrl + '/front/tests/category/' + categoryId, method: 'GET' })
        commit('M_SET_CATEGORY_TESTS', category.data)
        console.log(category.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_SET_CATEGORY_TESTS (state, category) {
      state.categoryList = category
    }
  },
  getters: {
    GET_CATEGORY_LIST: state => { return state.categoryList }
  }
}

export default categoryList
