<template>
  <div>
    <v-alert
      v-if="alert"
      border="left"
      color="deep-purple accent-4"
      dark
    >
      Ваш результат: {{ result }}
      <div class="row">
        <div class="text-center">
          <v-btn
            v-if="alert"
            color="deep-purple accent-4"
            dark
          >
           Пройти ещё раз
          </v-btn>
        </div>
        <div class="text-center">
          <v-btn
            v-if="alert"
            color="deep-purple accent-4"
            dark
            to="/"
          >
            На главную
          </v-btn>
        </div>
      </div>
    </v-alert>
    <div class="text-center">
      <v-btn
        v-if="!alert"
        color="deep-purple accent-4"
        dark
        @click="alert = true"
      >
        Reset
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Show-test-result',
  data () {
    return {
      alert: true,
      result: ''
    }
  },
  computed: {
    /* result () {
      return this.$store.getters.GET_RESULT
    } */
  },
  created () {
    this.result = this.$store.getters.GET_RESULT
  }

}
</script>

<style scoped>

</style>
