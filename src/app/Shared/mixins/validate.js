export default {
  data: () => ({
    valid: false,
    rules: {
      emailRules: [
        v => !!v || 'Заполните поле E-mail',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      textRules: [
        v => !!v || 'Заполните поле'
      ]
    }
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
