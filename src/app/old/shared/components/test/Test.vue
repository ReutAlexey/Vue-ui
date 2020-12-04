<template>
  <v-container class="mainconteiner">
    <v-card
      v-if="GET_HIDE"
    >
      <v-img
        v-show="GET_TEST.image"
        height="400"
        width="500"
        :src="GET_TEST.image"
      ></v-img>
      <v-card-title><b>{{GET_TEST.head}}</b></v-card-title>
      <v-card-subtitle class="description">
        <p>{{GET_TEST.description}}</p>
      </v-card-subtitle>
      <v-card-text>
        <p>Кол-во попыток: {{GET_TEST.attempts}}</p>
        <p>Время прохождения: {{GET_TEST.time}}</p>
        <p>Категория:{{GET_TEST.category}}</p>
        <p>Автор:{{GET_TEST.user}}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          color="#2cd42d"
          :to="'/test/' + this.$route.params.testId + '/question'"
          @click="hideCard"
        >Начать</v-btn>
      </v-card-actions>
    </v-card>
    <router-view
      class="d-flex justify-center mb-6"
      v-if="!GET_HIDE"></router-view>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'test',
  data () {
    return {
      testId: Number
    }
  },
  methods: {
    hideCard () {
      this.$store.commit('M_CHANGE_HIDE', false)
    }
  },
  computed: {
    ...mapGetters(['GET_TEST', 'GET_HIDE'])
  },
  watch: {
    $route (toR, fromR) {
      this.$store.dispatch('A_SET_TEST', toR.params.testId)
    }
  },
  created () {
    console.log(this.$route.params.testId)
    this.$store.dispatch('A_SET_TEST', this.$route.params.testId)
  }
}
</script>

<style scoped>

</style>
