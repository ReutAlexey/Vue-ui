<template>
  <v-app>
    <v-app-bar
      app
      color="blue"
      flat
    >
      <v-toolbar-title>Test-Manager</v-toolbar-title>
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
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
}
</script>
