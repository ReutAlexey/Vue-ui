import axios from 'axios'

export default {
  state: {
    formCreateUrl: '/test/create',
    formSaveUrl: '/auth/test',
    creationFormTest: null
  },
  actions: {
    async TEST_CREATION_FORM ({ commit }) {
      await axios({ url: this.state.backendUrl + '/test/create', method: 'GET' })
        .then(response => {
          console.log(response.data)
          commit('M_TEST_CREATION_FORM', response.data)
        })
        .catch(error => {
          commit('M_SET_ERROR', error)
        })
    }
  },
  mutations: {
    M_TEST_CREATION_FORM (state, payload) {
      state.creationFormTest = payload
    }
  },
  getters: {
    GET_CREATION_FORM_TEST: state => {
      return state.creationFormTest
    }
  }
}
