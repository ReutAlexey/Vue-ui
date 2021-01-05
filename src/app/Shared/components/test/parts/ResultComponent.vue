<template>
  <v-alert
    class="alert-result align-center"
    color="info"
    dark
    border="top"
    icon="mdi-alert"
    transition="scale-transition"
  >
    <v-row align="center">
      <v-col class="grow">
        Результат прохождения теста <b>{{GET_RESULT}}</b>
      </v-col>
      <v-col class="shrink">
        <v-btn
          disabled="disabled"
          @click="next('/test/' + idTest)">
          Пройти еще раз
        </v-btn>
      </v-col>
      <v-col class="shrink">
        <v-btn @click="next('/')">
          На главную
        </v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ResultComponent',
  computed: {
    ...mapGetters(['GET_RESULT'])
  },
  methods: {
    next (url) {
      this.$store.commit('M_SET_RESULT', false)
      this.$router.push(url)
    }
  }
}
</script>
