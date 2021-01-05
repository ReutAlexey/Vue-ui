import category from './modules/category/category'
import tests from './modules/tests/tests'
import test from './modules/test/test'
import result from './modules/result/result'

const sharedStore = {
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    category,
    tests,
    test,
    result
  }
}

export default sharedStore
