<template>
  <div>
    <test-result
      v-if="GET_RESULT"
    ></test-result>
    {{quest}}
    <v-card

      v-if="!GET_RESULT"
    >
        <v-img
          v-if="GET_QUESTIONS[i].image !== ''"
          :src="GET_QUESTIONS[i].image"
          contain
          max-height="400"
          max-width="500"
        ></v-img>
        <v-card-title
          v-text="'Вопрос: ' + (i + 1) + '/' +  GET_QUESTIONS.length"
        ></v-card-title>
      <v-card-text>
        <v-divider></v-divider>
        <h3><b>{{GET_QUESTIONS[i].quest}}</b></h3>
      </v-card-text>
      <v-item-group
        v-model="arrayAnswers[i]"
        multiple
      >
          <v-container class="pa-1">
              <v-flex
                v-for="answer in GET_QUESTIONS[i].answers"
                :key="answer.id"
              >
                <v-checkbox
                  v-if="answer.variant === 'text'"
                  :label="answer.answer"
                  :value="answer.id"
                  v-model="arrayAnswers[i]"
                ></v-checkbox>
                <v-item
                  v-else-if="answer.variant === 'image'"
                  v-slot="{ active, toggle }"
                  :value="answer.id"
                >
                  <v-img
                    :style=" active ? 'border: 2px solid green' : ''"
                    :src="answer.image"
                    width="200"
                    class="text-right pa-2"
                    @click="toggle"
                  >
                    <v-btn
                      icon
                      dark
                    >
                      <v-icon>
                        {{ active ? 'mdi-heart' : 'mdi-heart-outline' }}
                      </v-icon>
                    </v-btn>
                  </v-img>
                </v-item>
              </v-flex>
          </v-container>
      </v-item-group>
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
    arrayAnswers: [[]],
    questions: Array
  }),
  computed: {
    ...mapGetters(['GET_QUESTIONS', 'GET_RESULT', 'GET_TEST']),
    quest () {
      return this.questions[this.i]
    }
  },
  methods: {
    nextQuestion () {
      if (this.i === (this.GET_QUESTIONS.length - 1) && this.arrayAnswers[this.i].length > 0) {
        this.$store.dispatch('A_SET_CALCULATION_RESULT', { answers: this.arrayAnswers, testId: this.GET_TEST.id })
      } else if (this.arrayAnswers[this.i].length > 0) {
        this.arrayAnswers.push([])
        ++this.i
      }
    }
  },
  created () {
    this.questions = this.$store.dispatch('A_SET_QUESTIONS', this.$route.params.testId)
  }
}
</script>

<style scoped>

</style>
