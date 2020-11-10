<template>
  <v-container>
    <h1>Test {{id}}</h1>
    <v-card
      v-if="hide"
      class="mx-auto"
      height="auto"
      max-width="700"
    >
      <v-card-text>
        <v-img
          src="https://img1.fonwall.ru/o/ye/aston-martin-cars-2019-cars-aston-martin-vanquish-vision.jpeg">
        </v-img>
        <h3>{{test.title}}</h3>
        <p>{{test.description}}</p>
      </v-card-text>
      <v-card-text>
        <p>Количество вопросов: <b></b></p>
        <p>Время прохождения: <b>{{test.time_test > 0 ? test.time_test : 'не ограничено'}}</b></p>
        <p>Количество попыток: <b>{{test.number_attempts> 0 ? test.number_attempts : 'не ограничено'}}</b></p>
        <p>Категория: <b>{{test.category.category}}</b></p>
        <p><b></b></p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <!--<router-link
          class="mr-10 mb-5 v-btn v-btn&#45;&#45;contained theme&#45;&#45;light v-size&#45;&#45;default primary"
          :to="'/test/' + id + '/quest'"
          @click="hideCard"
        >Наччать</router-link>-->
        <v-btn
          :to="'/test/' + id + '/quest'"
          @click="hideCard"
        >Начать</v-btn>
      </v-card-actions>
    </v-card>
    <router-view></router-view>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Show-test',
  data () {
    return {
      id: this.$route.params.id,
      test: null,
      hide: true
    }
  },
  watch: {
    $route (toR, fromR) {
      this.id = toR.params.id
    }
  },
  methods: {
    hideCard () {
      this.hide = false
    }
  },
  computed: {
  },
  created () {
    axios({ url: 'http://127.0.0.1:8000/api/test/' + this.id, method: 'GET' })
      .then(response => {
        this.test = response.data
        this.$store.commit('M_SET_QUESTION', response.data.quests)
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>

</style>
