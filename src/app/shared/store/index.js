import tests from './modules/tests/tests'
import test from './modules/test/test'

const sharedStore = {
  state: {},
  actions: {},
  mutations: {},
  getters: {},
  modules: {
    tests,
    test
  }
}

export default sharedStore
