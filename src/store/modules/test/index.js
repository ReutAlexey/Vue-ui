import axios from 'axios'

export default {
  state: {
    test: [],
    questions: [],
    result: '',
    hide: true
  },
  actions: {
    async A_LOAD_TEST ({ commit }, testId) {
      try {
        commit('M_CLEAR_TEST')
        const test = await axios({ url: this.state.backendUrl + '/guest/tests/' + testId, method: 'GET' })
        commit('M_SET_TEST', test.data)
        commit('M_SET_QUESTIONS', test.data.quests)
      } catch (error) {
        console.log(error)
      }
    },
    async CALCULATIONS_RESULT ({ commit }, payload) {
      try {
        const result = await axios({ url: this.state.backendUrl + '/calculation/result', data: payload, method: 'PUT' })
        console.log(result.data)
        commit('M_SET_RESULT', `${result.data}`)
      } catch (error) {
        console.log(error)
      }
    },
    CHANGE_HIDE ({ commit }, payload) {
      commit('M_CHANGE_HIDE', payload)
    }
  },
  mutations: {
    M_CLEAR_TEST (state) {
      state.test = []
      state.questions = []
      state.hide = true
      state.result = ''
    },
    M_SET_TEST (state, payload) {
      state.test = payload
    },
    M_SET_QUESTIONS (state, payload) {
      state.questions = payload
    },
    M_SET_RESULT (state, result) {
      state.result = result
    },
    M_CHANGE_HIDE (state, payload) {
      state.hide = payload
    }
  },
  getters: {
    GET_QUESTIONS: state => { return state.questions },
    GET_TEST: state => { return state.test },
    GET_RESULT: state => { return state.result },
    GET_HIDE: state => { return state.hide },
    GET_TEST_ID: state => { return state.test.id }
  }
}
