import axios from 'axios'

const categoryList = {
  state: {
    listCategories: [],
    categoryTests: []
  },
  actions: {
    async A_LIST_CATEGORIES ({ commit }) {
      try {
        const categories = await axios({ url: this.state.backendUrl + '/front/categories', method: 'GET' })
        commit('M_SET_LIST_CATEGORY', categories.data)
      } catch (error) {
        console.log(error)
      }
    },
    async A_CATEGORY_TESTS ({ commit }, categoryId) {
      try {
        const category = await axios({ url: this.state.backendUrl + '/front/tests/category/' + categoryId, method: 'GET' })
        commit('M_SET_CATEGORY_TEST', category.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_SET_LIST_CATEGORY (state, listCategory) {
      state.listCategories = listCategory
    },
    M_SET_CATEGORY_TEST (state, category) {
      state.categoryTests = category
    }
  },
  getters: {
    GET_LIST_CATEGORIES: state => { return state.listCategories },
    GET_CATEGORY_TESTS: state => { return state.categoryTests }
  }
}

export default categoryList
