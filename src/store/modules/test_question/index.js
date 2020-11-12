export default {
  state: {
    quests: [],
    testResult: '',
    tests: [
      {
        id: 1,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: 1,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: 1,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: 1,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: 1,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: 1,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      }
    ]
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
    GET_TEST (state) {
      return state.tests
    },
    GET_QUEST (state) {
      return state.quests
    },
    GET_RESULT (state) {
      return state.testResult
    }
  }
}
