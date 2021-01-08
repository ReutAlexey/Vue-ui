import { mapActions } from 'vuex'

export default {
  data: () => ({
    valid: false,
    rules: {
    }
  }),
  methods: {
    ...mapActions(['A_LOGOUT']),
    logout () {
      this.A_LOGOUT()
    }
  }
}
