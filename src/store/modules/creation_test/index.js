import axios from 'axios'

export default {
  state: {
    formCreateUrl: '/auth/test/create',
    formSaveUrl: '/auth/test',
    creationFormTest: {}
  },
  actions: {
    async TEST_CREATION_FORM ({ commit }) {
      try {
        const formCreate = await axios({ url: this.state.backendUrl + this.state.formCreateUrl, method: 'GET' })
        commit('M_TEST_CREATION_FORM', formCreate)
      } catch (error) {
        commit('M_SET_ERROR', error)
        throw error
      }
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
