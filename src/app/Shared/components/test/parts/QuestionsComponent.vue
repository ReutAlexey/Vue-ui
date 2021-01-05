<template>
  <div>
    <result-test
      v-if="GET_RESULT"
    />
    <v-card>
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
import ResultTest from './ResultComponent'

export default {
  name: 'QuestionsComponent',
  components: {
    ResultTest
  },
  data: () => ({
    i: 0,
    arrayAnswers: [[]],
    questions: Array
  }),
  computed: {
    ...mapGetters(['GET_QUESTIONS', 'GET_TEST', 'GET_RESULT']),
    quest () {
      return this.questions[this.i]
    }
  },
  methods: {
    nextQuestion () {
      if (this.i === (this.GET_QUESTIONS.length - 1) && this.arrayAnswers[this.i].length > 0) {
        this.$store.dispatch('A_SET_CALCULATION_RESULT', { answers: this.arrayAnswers, testId: this.GET_TEST.id })
        this.$router.push('/result')
      } else if (this.arrayAnswers[this.i].length > 0) {
        this.arrayAnswers.push([])
        ++this.i
      }
    }
  },
  created () {
    this.$store.dispatch('A_QUESTIONS', this.GET_TEST.id)
  }
}
</script>
