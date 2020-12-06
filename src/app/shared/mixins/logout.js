export default {
  methods: {
    logout () {
      this.$store.dispatch('A_LOGOUT')
        .then(() => {
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  }
}
