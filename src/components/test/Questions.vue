<template class="justify-center flex">
  <v-card width="60%">
    <h3>Вопрос: {{i + 1}}/{{questions.length}}</h3>
    <v-img
      contain
      max-height="400"
      max-width="500"
      v-if="questions[i].image"
      :src="questions[i].image"
    ></v-img>
    <v-card-title>{{questions[i].quest}}</v-card-title>
    <v-card>
      <v-card-text>
        {{arrAnswers}}
        <div
        v-for="answer in questions[i].answers"
        :key="answer.id"
        >
          <div
            class="row"
            v-show="answer.variant === 'text'"
          >
            <v-checkbox
              v-model="arrAnswers"
              :value="answer.id"
            ></v-checkbox>
            <p class="mt-5">{{answer.answer}}</p>
          </div>
          <div
            class="row ma-2"
            v-show="answer.variant === 'image'"
          >
            <v-checkbox
              v-model="arrAnswers"
              :value="answer.id"
            ></v-checkbox>
           <v-img
             contain
             max-width="200"
             max-height="150"
            :src="answer.image"
           ></v-img>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="succes"
        @click="nextQuestion"
      >Далее</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Questions',
  data () {
    return {
      questions: [],
      answers: [],
      arrAnswers: [],
      i: 0
    }
  },
  methods: {
    nextQuestion () {
      if (this.i === (this.questions.length - 1)) {
        console.log(this.arrAnswers)
        // this.$store.dispatch('CALCULATIONS_RESULT', this.arrAnswers)
      } else {
        ++this.i
      }
    }
  },
  created () {
    this.questions = this.$store.getters.GET_QUESTIONS
  }
}
</script>

<style scoped>

</style>
