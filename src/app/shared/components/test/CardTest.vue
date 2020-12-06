<template>
  <div>
  <v-card
    v-show="hide"
    class="mx-auto"
    max-width="900"
  >
    <v-img
      v-show="GET_TEST.image"
      class="white--text align-end"
      max-height="400"
      :src="GET_TEST.image"
    >
    </v-img>
    <v-card-title
      v-text="GET_TEST.head"
    ></v-card-title>
    <v-card-text
      v-text="GET_TEST.description"
    ></v-card-text>
    <div class="d-flex">
      <v-card-subtitle>
        Категория: <b>{{GET_TEST.category}}</b><br>
        Средний результат: <b>{{GET_TEST.results_avg_result}}</b><br>
        Автор: <b>{{GET_TEST.user}}</b><br>
        Дата: <b>{{GET_TEST.date}}</b>
      </v-card-subtitle>
    </div>
      <v-card-actions>
        <v-btn
          block
          color="success"
          @click="showQuests"
        >Начать</v-btn>
      </v-card-actions>
  </v-card>
    <quests
      v-show="!hide"
    ></quests>
  </div>
</template>

<script>
import quests from './parts/Quests'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CardTest',
  components: {
    quests
  },
  data: () => ({
    hide: true
  }),
  methods: {
    ...mapActions(['A_SET_TEST', 'A_SET_QUESTIONS']),
    showQuests () {
      this.A_SET_QUESTIONS(this.$route.params.testId)
      this.hide = false
    }
  },
  computed: {
    ...mapGetters(['GET_TEST'])
  },
  created () {
    this.A_SET_TEST(this.$route.params.testId)
  }
}
</script>

<style scoped>

</style>
