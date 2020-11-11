export default {
  state: {
    quests: [],
    testResult: ''
  },
  actions: {
    SET_TEST_RESULT ({ commit }, payload) {
      commit('M_SET_RESULT_TEST', payload)
    }
  },
  mutations: {
    M_SET_QUESTION (state, quests) {
      state.quests = quests
    },
    M_SET_RESULT_TEST (state, payload) {
      state.testResult = payload
    }
  },
  getters: {
    GET_QUEST (state) {
      return state.quests
    },
    GET_RESULT (state) {
      return state.testResult
    }
  }
}
