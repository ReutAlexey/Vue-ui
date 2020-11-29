<template>
  <v-container class="mainconteiner">
    <v-card
      v-if="hide"
    >
      <v-img
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
        <p>Время прохождения: {{test.time}}</p>
        <p>Категория:{{GET_TEST.category}}</p>
        <p>Автор:{{GET_TEST.user.name}}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          color="#2cd42d"
          :to="'/test/' + this.$route.params.id + '/question'"
          @click="hideCard"
        >Начать</v-btn>
      </v-card-actions>
    </v-card>
    <router-view
      class="d-flex justify-center mb-6"
      v-if="!hide"></router-view>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Show-test',
  data () {
    return {
      test: [],
      testId: this.$route.params.id
    }
  },
  methods: {
    hideCard () {
      this.$store.dispatch('CHANGE_HIDE', false)
    }
  },
  computed: {
    ...mapGetters(['GET_TEST']),
    hide () {
      return this.$store.getters.GET_HIDE
    }
  },
  watch: {
    $route (toR, fromR) {
      this.$store.dispatch('A_LOAD_TEST', toR.params.id)
    }
  },
  created () {
    this.$store.dispatch('A_LOAD_TEST', this.testId)
    this.test = this.$store.getters.GET_TEST
  }
}
</script>

<style scoped>

</style>
Vak51~eCzc99
