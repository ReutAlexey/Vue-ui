import axios from 'axios'

const result = {
  state: {
    result: false,
    description: ''
  },
  actions: {
    async A_SET_CALCULATION_RESULT ({ commit }, answers) {
      try {
        commit('M_SET_RESULT', false)
        const result = await axios({ url: this.state.backendUrl + '/front/results/calculation', data: answers, method: 'PUT' })
        console.log(result.data)
        commit('M_SET_RESULT', result.data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mutations: {
    M_SET_RESULT (state, result) {
      state.result = result
    }
  },
  getters: {
    GET_RESULT: state => { return state.result }
  }
}

export default result
