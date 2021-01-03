export default {
  props: {
    index: Number
  },
  data: () => ({
    answer: {
      answer: '',
      status: false
    }
  }),
  methods: {
    writingValue () {
      this.$emit('writingValue', {
        answer: this.answer.answer,
        variant: this.variant,
        index: this.$props.index,
        status: this.answer.status
      })
    },
    deleteInput () {
      this.$emit('deleteInput', this.$props.index)
    }
  }
}
