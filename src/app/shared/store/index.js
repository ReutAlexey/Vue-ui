import tests from './modules/tests/tests'
import test from './modules/test/test'
import categoryList from './modules/category/category'
import shared from './modules/shared/index'
import auth from './modules/auth/auth'

const sharedStore = {
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    tests,
    test,
    categoryList,
    shared,
    auth
  }
}

export default sharedStore
