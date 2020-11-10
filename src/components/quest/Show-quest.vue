<template>
  <div>
    <p>quest</p>
    {{countQuest}}
    {{quest[count]}}
    <v-card>
      <v-card-text>
        <v-img
          v-show="quest[count].image_link.length > 1"
          :src="quest[count].image_link"
        ></v-img>
      </v-card-text>
      <v-card-subtitle>

        <p><b>{{quest[count].quest}}</b></p>
      </v-card-subtitle>
      <v-card-text
        v-for="answer in quest[count].answers"
        :key="answer.id"
      >
        <p>{{answer.answer}}</p>
      </v-card-text>
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
      countQuest: 0
    }
  },
  methods: {
    counter () {
      ++this.countQuest
    }
  },
  computed: {
    count () {
      return this.countQuest
    },
    quest () {
      return this.$store.getters.GET_QUEST
    }
  }
}
</script>

<style scoped>

</style>
