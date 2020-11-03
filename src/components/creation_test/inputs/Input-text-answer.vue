<template>
  <div
    class="d-flex flex-row">
    <v-checkbox
      @change="sendInputs"
      v-model="checkBox"
      label="Пр.Отв"
      color="success"
      hide-details
    ></v-checkbox>
    <v-text-field
      @input="sendInputs"
      v-model="text"
      class="pl-10"
      :rules="textRules"
      name="answer"
      :label="'Ответ№ ' + (index + 1)"
      type="text"
      required
    ></v-text-field>
    <v-btn @click="deleteInput" icon class="float-md-left"><v-icon color="red">mdi-minus-box</v-icon></v-btn>
  </div>
</template>

<script>
export default {
  name: 'Input-text-answer',
  props: {
    index: Number
  },
  data () {
    return {
      typeAnswer: 'text',
      text: '',
      checkBox: false,
      textRules: [
        v => !!v || 'Заполните поле "Ответ"'
      ]
    }
  },
  methods: {
    sendInputs () {
      this.$emit('acceptDataInput', {
        answer: this.text,
        checkBox: this.checkBox,
        index: this.$props.index,
        typeAnswer: this.typeAnswer
      })
    },
    deleteInput () {
      this.$emit('deleteInput', this.$props.index)
    }
  }
}
</script>

<style scoped>

</style>
