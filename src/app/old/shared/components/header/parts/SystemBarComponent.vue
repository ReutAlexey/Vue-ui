<template>
  <div>
    <v-system-bar
      height="40"
      dark
      fixed
      class="xs2"
    >
      <v-toolbar-title>Test-Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <div
        v-show="!IS_LOGGED"
      >
        <v-btn
          to="/register"
          text
        >
          <v-icon left>mdi-account-plus</v-icon>
          Регистрация
        </v-btn>
        |
        <v-btn
          to="/login"
          text
        >
          <v-icon left>mdi-login</v-icon>
          войти
        </v-btn>
      </div>
      <div
        v-show="IS_LOGGED"
      >
        <v-btn
          :to="'/profile/'"
          text
        >
          <v-icon left>mdi-login</v-icon>
          Личный кабитнет
        </v-btn>
        <v-btn
          text
          @click="A_LOGOUT"
          :loading="loading"
        >
          <v-icon left>mdi-login</v-icon>
          Выйти
        </v-btn>
      </div>
    </v-system-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'SystemBarComponent',
  methods: {
    ...mapActions(['A_LOGOUT'])
  },
  computed: {
    ...mapGetters(['IS_LOGGED']),
    loading () {
      return this.$store.getters.GET_LOADING
    }
  }
}
</script>

<style scoped>

</style>
