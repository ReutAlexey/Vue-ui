<template>
  <div>
    <v-alert
      v-if="result"
      class="alert-result align-center"
      color="info"
      dark
      border="top"
      icon="mdi-alert"
      transition="scale-transition"
    >
      <v-row align="center">
        <v-col class="grow">
          Результат прохождения теста <b>{{result}}</b>
        </v-col>
        <v-col class="shrink">
          <v-btn @click="restartTest">
            Пройти еще раз
          </v-btn>
        </v-col>
        <v-col class="shrink">
          <v-btn @click="goHome">
            На главную
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  <v-card
    width="60%"
    v-if="!result"
  >
    <h3>Вопрос: {{i + 1}}/{{questions.length}}</h3>
    <v-img
      contain
      max-height="400"
      max-width="500"
      v-if="questions[i].image"
      :src="questions[i].image"
    ></v-img>
    <v-card-title>{{questions[i].quest}}</v-card-title>
    <v-card
      class="ma-3"
    >
      <v-card-text>
        <div
        v-for="answer in questions[i].answers"
        :key="answer.id"
        >
          <div
            class="row"
            v-show="answer.variant === 'text'"
          >
            <v-checkbox
              v-model="arrAnswers[i]"
              :value="answer.id"
            ></v-checkbox>
            <p class="mt-5">{{answer.answer}}</p>
          </div>
          <div
            class="row ma-2"
            v-show="answer.variant === 'image'"
          >
            <v-checkbox
              v-model="arrAnswers[i]"
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
        color="success"
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
      arrAnswers: [[]],
      i: 0
    }
  },
  methods: {
    nextQuestion () {
      if (this.i === (this.questions.length - 1) && this.arrAnswers[this.i].length > 0) {
        console.log(JSON.stringify({ answers: this.arrAnswers, testId: this.questions[0].test_id }))
        this.$store.dispatch('CALCULATIONS_RESULT', { answers: this.arrAnswers, testId: this.questions[0].test_id })
      } else if (this.arrAnswers[this.i].length > 0) {
        this.arrAnswers.push([])
        ++this.i
      }
    },
    restartTest () {
      this.$store.commit('M_SET_RESULT', false)
      this.$store.dispatch('CHANGE_HIDE', true)
      this.$router.push('/test/' + this.$route.params.id)
    },
    goHome () {
      this.$store.commit('M_SET_RESULT', false)
      this.$store.dispatch('CHANGE_HIDE', true)
      this.$router.push('/')
    }
  },
  computed: {
    result () {
      return this.$store.getters.GET_RESULT
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
