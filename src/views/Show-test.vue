<template>
  <v-container class="mainconteiner">
    <v-card
      v-if="hide"
    >
      <v-img
        height="400"
        width="500"
        :src="showTest.image"
      ></v-img>
      <v-card-title><b>{{showTest.head}}</b></v-card-title>
      <v-card-subtitle class="description">
        <p>{{showTest.description}}</p>
      </v-card-subtitle>
      <v-card-text>
        <p>Кол-во попыток: {{showTest.attempts}}</p>
        <p>Время прохождения: {{showTest.time}}</p>
        <p>Категория:{{showTest.category.category}}</p>
        <p>Автор:{{showTest.user.name}}</p>
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
import axios from 'axios'

export default {
  name: 'Show-test',
  data () {
    return {
      test: []
    }
  },
  methods: {
    hideCard () {
      this.$store.dispatch('CHANGE_HIDE', false)
    }
  },
  computed: {

    hide () {
      return this.$store.getters.GET_HIDE
    }
  },
  created () {
    axios({ url: this.$store.state.backendUrl + '/quest/tests/' + this.$route.params.id, method: 'GET' })
      .then(response => {
        console.log(response.data)
      })
  }
}
</script>

<style scoped>

</style>
Vak51~eCzc99
