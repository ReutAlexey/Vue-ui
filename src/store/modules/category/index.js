import axios from 'axios'

export default {
  state: {
    category: [],
    testsCategory: []
  },
  actions: {
    async A_CATEGORY ({ commit }) {
      try {
        const category = await axios({ url: this.state.backendUrl + '/guest/category', method: 'GET' })
        commit('M_CATEGORY', category.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_CATEGORY (state, payload) {
      state.category = payload
    }
  },
  getters: {
    GET_CATEGORY (state) {
      return state.category
    }
  }
}
