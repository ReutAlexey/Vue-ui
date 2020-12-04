<template>
  <v-card
    class="mx-auto"
    max-width="900"
  >
    <v-img
      v-show="GET_TEST.image"
      class="white--text align-end"
      height="400"
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
          @click="A_SET_QUESTIONS(getTestId)"
        >Начать</v-btn>
      </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CardTest',
  methods: {
    ...mapActions(['A_SET_TEST', 'A_SET_QUESTIONS'])
  },
  computed: {
    ...mapGetters(['GET_TEST']),
    getTestId () {
      return this.$route.params.testId
    }
  },
  created () {
    this.A_SET_TEST(this.getTestId)
  }
}
</script>

<style scoped>

</style>
