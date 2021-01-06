const navigations = {
  state: {
    navigation: [
      { url: '/', name: 'Главная', icon: 'mdi-home' }
    ]
  },
  actions: {},
  mutations: {},
  getters: {
    GET_NAVIGATION: state => { return state.navigation }
  }
}

export default navigations
