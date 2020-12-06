import AppBar from './modules/heder_navigation'
import Tests from './modules/tests/tests'
import CategoryTests from './modules/tests/categoryTests'
import Test from './modules/tests/test'
import Auth from './modules/auth/auth'
import Shared from '../../../shared/store/modules/shared'

const sharedStore = {
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    AppBar,
    Tests,
    CategoryTests,
    Test,
    Auth,
    Shared
  }
}

export default sharedStore
