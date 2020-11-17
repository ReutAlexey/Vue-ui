import axios from 'axios'

export default {
  state: {
    testResult: '',
    tests: [],
    test: [],
    questions: [],
    result: '',
    hide: true
  },
  actions: {
    async SET_TESTS ({ commit }) {
      const tests = await axios({ url: this.state.backendUrl + '/guest/tests', method: 'GET' })
      try {
        commit('M_SET_TESTS', tests.data)
      } catch (error) {
        console.log(error)
      }
    },
    async SET_TEST ({ commit }, id) {
      try {
        const test = await axios({ url: this.state.backendUrl + '/guest/tests/' + id, method: 'GET', data: id })
        commit('M_SET_TEST', test.data)
        commit('M_SET_QUESTIONS', test.data.quests)
      } catch (error) {
        console.log(error)
      }
    },
    async A_TESTS_CATEGORY ({ commit }, id) {
      try {
        const tests = await axios({ url: this.state.backendUrl + '/guest/tests/category/' + id, method: 'GET' })
        commit('M_TESTS_CATEGORY', tests.data)
      } catch (error) {
        console.log(error)
      }
    },
    async CALCULATIONS_RESULT ({ commit }, payload) {
      try {
        const result = await axios({ url: this.state.backendUrl + '/guest/tests/calculation', data: payload, method: 'PUT' })
        commit('M_SET_RESULT', result.data)
      } catch (error) {
        console.log(error)
      }
    },
    CHANGE_HIDE ({ commit }, payload) {
      commit('M_CHANGE_HIDE', payload)
    }
  },
  mutations: {
    M_SET_TESTS (state, payload) {
      state.tests = payload
    },
    M_SET_TEST (state, payload) {
      state.test = payload
    },
    M_SET_QUESTIONS (state, payload) {
      state.questions = payload
    },
    M_SET_RESULT (state, payload) {
      state.result = payload
    },
    M_CHANGE_HIDE (state, payload) {
      state.hide = payload
    },
    M_TESTS_CATEGORY (state, payload) {
      state.tests = payload
    }

  },
  getters: {
    GET_TEST (state) {
      return state.test
    },
    GET_TESTS (state) {
      return state.tests
    },
    GET_QUESTIONS (state) {
      return state.questions
    },
    GET_RESULT (state) {
      return state.result
    },
    GET_HIDE: state => {
      return state.hide
    },
    GET_TESTS_CATEGORY (state) {
      return state.tests
    }
  }
}
