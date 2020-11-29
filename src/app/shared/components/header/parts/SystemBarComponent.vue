<template>
  <div>
    <v-system-bar
      height="40"
      dark
      fixed
    >
      <v-toolbar-title>Test-Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <div
        v-if="!IS_LOGGED"
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
        v-if="IS_LOGGED"
      >
        <v-btn
          :to="'/profile/'"
          text
        >
          <v-icon left>mdi-login</v-icon>
          Личный кабитнет
        </v-btn>
        <v-btn
          to=""
          text
        >
          <v-icon left>mdi-login</v-icon>
          Выйти
        </v-btn>
      </div>
    </v-system-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SystemBarComponent',
  computed: {
    ...mapGetters(['IS_LOGGED'])
  }
}
</script>

<style scoped>

</style>
