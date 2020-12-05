<template>
  <div>
    <test-result
      v-if="GET_RESULT"
    ></test-result>
    <v-card
      v-if="!GET_RESULT"
    >
      <v-card-text>
        <v-img
          v-if="GET_QUESTIONS[i].image"
          :src="GET_QUESTIONS[i].image"
          contain
          max-height="400"
          max-width="500"
        ></v-img>
        <v-card-title
          v-text="'Вопрос: ' + (i + 1) + '/' +  GET_QUESTIONS.length"
        ></v-card-title>
        <v-divider></v-divider>
        <h3><b>{{GET_QUESTIONS[i].quest}}</b></h3>
      </v-card-text>
      <div
        class="d-flex"
        v-for="answer in GET_QUESTIONS[i].answers"
        :key="answer.id"
      >
        <v-checkbox
          v-show="answer.variant === 'text'"
          :label="answer.answer"
          :value="answer.id"
          v-model="arrayAnswers[i]"
        ></v-checkbox>
        <v-checkbox
          v-show="answer.variant === 'image'"
          :label="answer.answer"
          :value="answer.id"
          v-model="arrayAnswers[i]"
        ></v-checkbox>
      </div>
      <v-card-actions>
        <v-btn
          color="primary"
          v-text="'Далее'"
          @click="nextQuestion"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import testResult from './TestResultComponent'

export default {
  name: 'Quests',
  components: {
    testResult
  },
  data: () => ({
    i: 0,
    arrayAnswers: [[]]
  }),
  computed: {
    ...mapGetters(['GET_QUESTIONS', 'GET_RESULT'])
  },
  methods: {
    nextQuestion () {
      if (this.i === (this.GET_QUESTIONS.length - 1) && this.arrayAnswers[this.i].length > 0) {
        this.$store.dispatch('A_SET_CALCULATION_RESULT', { answers: this.arrayAnswers, testId: 1 })
      } else if (this.arrayAnswers[this.i].length > 0) {
        this.arrayAnswers.push([])
        ++this.i
      }
    }
  }
}
</script>

<style scoped>

</style>
