import axios from 'axios'

export default {
  state: {
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
        id: 2,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: 3,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: 4,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: 5,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        id: 6,
        head: ' Test 1',
        category: 'ПДД',
        user: 'UserR',
        timeTest: 34,
        attempts: 4,
        image: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      }
    ],
    test: [],
    questions: []
  },
  actions: {
    async SET_TESTS ({ commit }) {
      const tests = await axios({ url: this.state.backendUrl + '/test', method: 'GET' })
      try {
        commit('M_SET_TESTS', tests.data)
      } catch (error) {
        console.log(error)
      }
    },
    async SET_TEST ({ commit }, id) {
      try {
        const test = await axios({ url: this.state.backendUrl + '/test/' + id, method: 'GET', data: id })
        commit('M_SET_TEST', test.data)
        commit('M_SET_QUESTIONS', test.data.quests)
      } catch (error) {
        console.log(error)
      }
    },
    CALCULATIONS_RESULT ({ commit }, payload) {
      axios({ url: this.state.backendUrl + '/test/calculation', data: payload, method: 'PUT' })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
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
    }
  }
}
