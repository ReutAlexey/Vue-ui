import axios from 'axios'

const test = {
  state: {
    test: {},
    questions: [],
    result: ''
  },
  actions: {
    async A_SET_TEST ({ commit }, testId) {
      axios({ url: this.state.backendUrl + '/front/tests/' + testId, method: 'GET' })
      try {
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
    async A_SET_CALCULATION_RESULT ({ commit }, answers) {
      try {
        const result = await axios({ url: this.state.backendUrl + '/front/calculations/result', data: answers, method: 'PUT' })
        commit('M_SET_RESULT', result.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_SET_TEST (state, payload) {
      state.test = payload
      state.test.user = payload.user.name
      state.test.category = payload.category.category
    },
    M_SET_QUESTIONS (state, questions) {
      state.questions = questions
    },
    M_SET_RESULT (state, result) {
      state.result = result
    }
  },
  getters: {
    GET_TEST: state => { return state.test },
    GET_QUESTIONS: state => { return state.questions },
    GET_RESULT: state => { return state.result }
  }
}

export default test
