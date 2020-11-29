import axios from 'axios'

const test = {
  state: {
    test: [],
    questions: [],
    result: '',
    hide: true
  },
  actions: {
    async A_SET_TEST ({ commit }, testId) {
      try {
        commit('M_CLEAR_TEST')
        const test = await axios({ url: this.state.backendUrl + '/front/tests/' + testId, method: 'GET' })
        commit('M_SET_TEST', test.data)
      } catch (error) {
        console.log(error)
      }
    },
    async A_SET_QUESTIONS ({ commit }, testId) {
      try {
        const questions = await axios({ url: this.state.backendUrl + '/front/tests/questions/' + testId, method: 'GET' })
        commit('M_SET_QUESTIONS', questions.data)
      } catch (error) {
        console.log(error)
      }
    },
    async CALCULATIONS_RESULT ({ commit }, answers) {
      try {
        const result = await axios({ url: this.state.backendUrl + '/front/calculations/result', data: answers, method: 'PUT' })
        commit('M_SET_RESULT', result.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_SET_TEST (state, test) {
      state.test = test
    },
    M_SET_QUESTIONS (state, questions) {
      state.questions = questions
    },
    M_SET_RESULT (state, result) {
      state.result = result
    },
    M_CLEAR_TEST (state) {
      state.questions = []
      state.hide = true
      state.result = ''
    },
    M_CHANGE_HIDE (state, payload) {
      state.hide = payload
    }
  },
  getters: {
    GET_TEST: state => { return state.test },
    GET_QUESTIONS: state => { return state.questions },
    GET_TEST_ID: state => { return state.test.id },
    GET_RESULT: state => { return state.result },
    GET_HIDE: state => { return state.hide }
  }
}

export default test
