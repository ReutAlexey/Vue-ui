import AppBar from './modules/heder_navigation'
import Tests from './modules/tests/tests'
import CategoryTests from './modules/tests/categoryTests'
import Test from './modules/tests/test'

const sharedStore = {
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    AppBar,
    Tests,
    CategoryTests,
    Test
  }
}

export default sharedStore
