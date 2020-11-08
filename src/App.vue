<template>
  <v-app>
    <v-app-bar
      app
      color="blue"
      flat
    >
      <v-toolbar-title><router-link to="/">Test-Manager</router-link></v-toolbar-title>
      <v-menu
        left
        offset-y
        class="ml-5"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>mdi-menu-down</v-icon>
            Категории
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <div class="d-flex flex-row justify-center" v-if="isLogged">
        <v-btn
          small
          class="ma-3"
          text
          link
          to="/profile">Личный кабинет</v-btn>
        <exit-button></exit-button>
      </div>

      <div v-if="!isLogged">
        <v-btn
          text
          link
          to="/register">
          Регистрация
        </v-btn>
        <v-btn
          text
          link
          to="/login">
          Войти
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import exitButton from './components/parts/Button-logout'

export default {
  name: 'App',
  components: {
    exitButton
  },
  methods: {
  },
  computed: {
    isLogged () {
      return this.$store.getters.IS_LOGGED_IN
    }
  },
  created () {
    this.$store.dispatch('IS_LOGGED')
    if (this.$store.state.status === 'error') {
      this.$router.push('/')
    }
  }
}
</script>
