<template>
  <v-app>
    <v-system-bar
      height="40"
      dark
      fixed
    >
      <v-toolbar-title>Test-Manager</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
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
    </v-system-bar>
    <v-app-bar
      color="#A9A9A9"
      max-height="55"
      class="mt-10"
      fixed
    >
        <v-tabs
          centered
        >
          <v-tab
            v-for="link in navigationLinks"
            :key="link"
            :to="link.link"
          >{{link.name}}</v-tab>
        </v-tabs>
    </v-app-bar>
    <v-main class="mainconteiner">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      navigationLinks: [
        { link: '/', name: 'Главная' },
        { link: '/feedback', name: 'Обратная связь' }
      ]
    }
  }
}
</script>
<style scoped>
.mainconteiner {
  margin-top: 100px;
}
</style>
