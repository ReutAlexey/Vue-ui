<template>
  <div>
    <v-card
      @input="sendForm"
      elevation="8">
      <v-card-actions>
        <v-radio-group
          label="Варианты ответа:"
          v-model="variantAnswers"
          row
        >
          <v-radio
            label="Картинка"
            color="red"
            value="input-image"
          ></v-radio>
          <v-radio
            label="Текст"
            color="red darken-3"
            value="input-text"
          ></v-radio>
        </v-radio-group>
      </v-card-actions>
      <v-card-text  class="d-flex flex-row">
        <v-text-field
          v-if="getType === 1"
          v-model="countBall"
          prepend-icon="mdi-counter"
          label="Колличество баллов за правильный ответ:"
          type="number"
          :rules="textRules"
          required
        ></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-title>
        Ответы
      </v-card-title>
      <v-card-text>
        <component
          :is="variantAnswers"
          v-for="input in answers"
          :key="input.id"
          :index="input.id"
          @deleteInput="deleteInput"
          @acceptDataInput="acceptDataInput"
        ></component>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn
          @click="addInput"
          icon
        ><v-icon color="primary">mdi-plus-box</v-icon></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import inputText from '../Inputs/Input-text-answer'
import inputImage from '../Inputs/Input-image-answer'

export default {
  name: 'Answers-form',
  components: {
    inputText,
    inputImage
  },
  props: {
    index: {
      default () {
        return Number
      }
    },
    typeCounting: {
      default () {
        return String
      }
    }
  },
  data () {
    return {
      variantAnswers: 'input-text',
      textRules: [
        v => !!v || 'Заполните поле "Ответ"'
      ],
      countId: 0,
      countBall: null,
      answers: [
        {
          id: 0,
          type: '',
          checkBox: false,
          answer: ''
        }]
    }
  },
  methods: {
    sendForm () {
      this.$emit('sendAnswers', {
        index: this.$props.index,
        countBall: this.typeCount,
        answers: this.answers
      })
    },
    addInput () {
      this.answers.push({ id: ++this.countId, type: '', checkBox: false, answer: '' })
    },
    acceptDataInput (data) {
      this.answers[data.index].answer = data.answer
      this.answers[data.index].checkBox = data.checkBox
      this.answers[data.index].type = data.typeAnswer
    },
    deleteInput (index) {
      if (this.answers.length > 1) {
        this.answers.splice(index, 1)
      }
    }
  },
  computed: {
    getType () {
      return this.$props.typeCounting
    },
    typeCount () {
      if (this.$props.typeCounting === 1) {
        return this.countBall
      }
      return 0
    }
  }
}
</script>

<style scoped>

</style>
