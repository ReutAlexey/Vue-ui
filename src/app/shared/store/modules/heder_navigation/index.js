import axios from 'axios'

const appNavigation = {
  state: {
    navigation: [
      {
        name: 'Главная',
        link: '/'
      }
    ],
    categoriesLinks: {}
  },
  actions: {
    async A_SET_CATEGORIES_LINK ({ commit }) {
      try {
        const categoriesLinks = await axios({ url: this.state.backendUrl + '/front/categories', method: 'GET' })
        commit('M_CATEGORIES_LINKS', categoriesLinks.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_CATEGORIES_LINKS (state, categories) {
      state.categoriesLinks = categories
    }
  },
  getters: {
    GET_NAVIGATION_LINK: state => { return state.navigation },
    GET_CATEGORIES_LINKS: state => { return state.categoriesLinks }
  }
}

export default appNavigation
