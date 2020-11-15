<template class="justify-center flex">
  <div>
    <v-alert
      class="alert-result"
      :value="alert"
      color="info"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
    >
      Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.

      Phasellus nec sem in justo pellentesque facilisis. Phasellus magna. Cras risus ipsum, faucibus ut, ullamcorper id, varius ac, leo. In hac habitasse platea dictumst. Praesent turpis.
    </v-alert>
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
  </div>
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
        this.$store.dispatch('CALCULATIONS_RESULT', { answers: this.arrAnswers, testId: this.questions[0].test_id })
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
.alert-result {
  position: absolute;
  display: block;
  margin: 10% 10% 10% auto;
  z-index: 100;
}
</style>
