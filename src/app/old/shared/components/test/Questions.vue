<template>
  <div>
    <v-alert
      v-if="GET_RESULT"
      class="alert-result align-center"
      color="info"
      dark
      border="top"
      icon="mdi-alert"
      transition="scale-transition"
    >
      <v-row align="center">
        <v-col class="grow">
          Результат прохождения теста <b>{{GET_RESULT}}</b>
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
      v-if="!GET_RESULT"
    >
      <h3>Вопрос: {{i + 1}}/{{GET_QUESTIONS.length}}</h3>
      <v-img
        contain
        max-height="400"
        max-width="500"
        v-if="GET_QUESTIONS[i].image"
        :src="GET_QUESTIONS[i].image"
      ></v-img>
      <v-card-title>{{GET_QUESTIONS[i].quest}}</v-card-title>
      <v-card
        class="ma-3"
      >
        <v-card-text>
          <div
            v-for="answer in GET_QUESTIONS[i].answers"
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
import { mapGetters } from 'vuex'

export default {
  name: 'Questions',
  data () {
    return {
      answers: [],
      arrAnswers: [[]],
      i: 0
    }
  },
  methods: {
    nextQuestion () {
      if (this.i === (this.GET_QUESTIONS.length - 1) && this.arrAnswers[this.i].length > 0) {
        console.log('send test')
        this.$store.dispatch('CALCULATIONS_RESULT', { answers: this.arrAnswers, testId: this.GET_TEST_ID })
      } else if (this.arrAnswers[this.i].length > 0) {
        this.arrAnswers.push([])
        ++this.i
      }
    },
    restartTest () {
      this.$store.commit('M_CLEAR_TEST')
      this.$router.push('/test/' + this.$route.params.testId)
    },
    goHome () {
      this.$store.commit('M_CLEAR_TEST')
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['GET_QUESTIONS', 'GET_RESULT', 'GET_TEST_ID'])
  },
  created () {
    this.$store.dispatch('A_SET_QUESTIONS', this.$route.params.testId)
  }
}
</script>

<style scoped>

</style>
