<template>
  <div>
    <p>quest</p>
    {{quest[countQuest]}}
    <p>{{answers}}</p>
    <p>{{questCount}}</p>
    <v-card>
      <v-card-text>
        <v-img
          v-show="quest[countQuest].image_link.length > 1"
          :src="quest[countQuest].image_link"
        ></v-img>
      </v-card-text>
      <v-card-subtitle>

        <p><b>{{quest[countQuest].quest}}</b></p>
      </v-card-subtitle>
      <div
        v-for="answer in quest[countQuest].answers"
        :key="answer.id"
      >
      <v-card-text>
        <v-checkbox
          v-model="answers"
          label="jnd"
          color="success"
          hide-details
          :value="answer.id"
        ></v-checkbox>
        <v-img
          v-if="answer.variant === 'image'"
          :src="answer.image_link"
          width="150"
        ></v-img>
        <p v-if="answer.variant === 'text'">{{answer.answer}}</p>
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

<style scoped>

</style>
