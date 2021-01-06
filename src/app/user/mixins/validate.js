export default {
  data: () => ({
    valid: false,
    rules: {
    }
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
