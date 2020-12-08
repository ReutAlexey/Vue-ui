export default {
  data: () => ({
    rules: {
      required: [v => !!v || 'Заполните поле'],
      requiredSelect: v => !!v || 'Выберите вариант'
    }
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
