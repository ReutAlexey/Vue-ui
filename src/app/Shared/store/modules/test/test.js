import axios from 'axios'

const test = {
  state: {
    test: {},
    questions: []
  },
  actions: {
    A_TEST ({ commit }, testId) {
      axios({ url: this.state.backendUrl + '/front/tests/' + testId, method: 'GET' })
        .then(response => {
          commit('M_TEST', response.data)
        })
    },
    A_QUESTIONS ({ commit }, testId) {
      axios({ url: this.state.backendUrl + '/front/questions/' + testId, method: 'GET' })
        .then(response => {
          commit('M_QUESTIONS', response.data)
        })
    }
  },
  mutations: {
    M_TEST (state, test) {
      state.test = test
      state.test.category = test.categories.title
      state.test.author = test.users.name
      state.test.avgResult = Math.round(test.results_avg_result)
    },
    M_QUESTIONS (state, questions) {
      state.questions = questions
    }
  },
  getters: {
    GET_TEST: state => { return state.test },
    GET_QUESTIONS: state => { return state.questions }
  }
}

export default test
