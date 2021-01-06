import category from './modules/category/category'
import tests from './modules/tests/tests'
import test from './modules/test/test'
import result from './modules/result/result'
import navigations from './modules/navigationMenu/navigations'
import auth from './modules/auth/auth'

const sharedStore = {
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    category,
    tests,
    test,
    result,
    navigations,
    auth
  }
}

export default sharedStore
