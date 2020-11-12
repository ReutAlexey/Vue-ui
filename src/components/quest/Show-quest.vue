<template>
  <div>
    <p>quest</p>
    <v-card>
      <v-card-text>
        <b>Вопрос №...</b>
        <v-img
          :src="'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'"
        ></v-img>
      </v-card-text>
      <v-card-subtitle>
        <p class="question">
          <b>
            <v-icon
              color="success"
              large
            >mdi-map-marker-question-outline</v-icon>
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..'
          </b>
        </p>
      </v-card-subtitle>
      <div>
      <v-card-text class="row">
        <v-checkbox
          label="jnd"
          color="success"
          hide-details
        ></v-checkbox>
        <p>Вариант ответа</p>
      </v-card-text>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="counter">Далее</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Show-quest',
  data () {
    return {
      answers: [],
      countQuest: 0,
      result: 0,
      counts: 0
    }
  },
  methods: {
    counter () {
      var flag = 0
      for (const answer of this.quest[this.countQuest].answers) {
        if (answer.status_answer === 1) {
          for (const ans of this.answers) {
            if (ans === answer.id) {
              flag = 1
            } else {
              flag = 0
              break
            }
          }
        }
      }
      this.answers = []
      if (flag === 1) {
        if (this.quest[this.countQuest].ball !== 0) {
          console.log(this.result += this.quest[this.countQuest].ball)
        } else {
          this.result += 1
        }
      }
      if (this.countQuest < this.questCount) {
        ++this.countQuest
      } else {
        if (this.result !== 0) {
          this.result = (this.result / (this.questCount + 1)) * 100
          this.$store.dispatch('SET_TEST_RESULT', this.result + '%')
          this.$router.push('/result')
        }
      }
    }
  },
  computed: {
    quest () {
      return this.$store.getters.GET_QUEST
    },
    questCount () {
      return (this.$store.getters.GET_QUEST.length) - 1
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
