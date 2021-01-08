const navigations = {
  state: {
    navigation: [
      { url: '/', name: 'Главная', icon: 'mdi-home' }
    ],
    authNavigation: [
      { url: '/registration', name: 'Регистрация', icon: 'mdi-account-plus' },
      { url: '/login', name: 'Вход', icon: 'mdi-login' }
    ],
    accountNavigation: [
      { url: '/create-test', name: 'Создать тест', icon: 'mdi-pencil' },
      { url: '/my-tests', name: 'Мои тесты', icon: 'mdi-folder-google-drive' },
      { url: '/exit', name: 'Выход', icon: 'mdi-exit-run' }
    ]
  },
  actions: {},
  mutations: {},
  getters: {
    GET_NAVIGATION: state => { return state.navigation },
    GET_AUTH_NAVIGATION: state => { return state.authNavigation },
    GET_ACCOUNT_NAVIGATION: state => { return state.accountNavigation }
  }
}

export default navigations
