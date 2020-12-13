export default {
  data: () => ({
    valid: false,
    rules: {
      required: [v => !!v || 'Заполните поле'],
      requiredSelect: [v => !!v || 'Выберите вариант'],
      int: [
        v => /[0-9]/.test(v) || 'Поле должно содержать только цифры',
        v => /^.{1,10}$/.test(v) || 'Поле может содеожать не более 5 цифр'
      ],
      intScope: [
        v => /[0-9]/.test(v) || 'Поле должно содержать только цифры'
      ]
    }
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    }
  }
}
