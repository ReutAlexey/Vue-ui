export default {
  state: {
    quests: []
  },
  actions: {},
  mutations: {
    M_SET_QUESTION (state, quests) {
      state.quests = quests
    }
  },
  getters: {
    GET_QUEST (state) {
      return state.quests
    }
  }
}
