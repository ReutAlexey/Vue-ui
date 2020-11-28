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
export default {
  name: 'SystemBarComponent'
}
</script>

<style scoped>

</style>
