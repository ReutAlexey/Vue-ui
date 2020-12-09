<template>
    <v-card
      elevation="1"
    >
      <v-card-title>
        Укажите варианты ответов:
        <v-spacer />
        <v-radio-group
          v-model="variantAnswers"
          row
        >
          <v-radio
            label="Картинка"
            color="red"
            value="image-answer"
          ></v-radio>
          <v-radio
            label="Текст"
            color="red darken-3"
            value="text-answer"
          ></v-radio>
        </v-radio-group>
      </v-card-title>
      <v-card-text @change="writingAnswers">
        <component
          :is="variantAnswers"
          v-for="(input, index) in answers"
          :key="input.id"
          :index="index"
          @writingValue="acceptDataInput"
          @deleteInput="deleteInput"
        ></component>
        <v-card-actions class="d-flex justify-center">
          <v-btn
            @click="addAnswer"
            icon
          ><v-icon color="primary">mdi-plus-box</v-icon></v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
</template>

<script>
import textAnswer from '../inputs/Text-variant-answer'
import imageAnswer from '../inputs/Image-variant-answer'

export default {
  name: 'AnswersFormComponent',
  components: {
    textAnswer,
    imageAnswer
  },
  data: () => ({
    variantAnswers: 'text-answer',
    countId: 0,
    answers: [
      {
        id: 0,
        variant: '',
        status: false,
        answer: ''
      }
    ]
  }),
  methods: {
    acceptDataInput (data) {
      this.answers[data.index].variant = data.variant
      this.answers[data.index].status = data.status
      this.answers[data.index].answer = data.answer
      this.writingAnswers()
    },
    writingAnswers () {
      this.$emit('writingAnswers', {
        answers: this.answers
      })
    },
    addAnswer () {
      this.answers.push({ id: ++this.countId, variant: '', status: false, answer: '' })
    },
    deleteInput (index) {
      if (this.answers.length > 1) {
        this.answers.splice(index, 1)
      }
    }
  }
}
</script>
