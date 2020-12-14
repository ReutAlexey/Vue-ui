<template>
  <v-toolbar-items
  >
    <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-show="IS_LOGGED"
          small
          color="#2F4F4F"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Личный кабинет
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in userLink"
          :key="i"
          link
          :to="item.link"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      v-show="IS_LOGGED"
      small
      color="#2F4F4F"
      @click="logout"
    >
      <v-icon left>mdi-exit-to-app</v-icon>
      Выйти
    </v-btn>
    <v-btn
      v-show="!IS_LOGGED"
      link
      to="/registration"
      small
      color="#2F4F4F"
    >
      <v-icon left>mdi-account-plus-outline</v-icon>
      Регистрация
    </v-btn>
    <v-btn
      v-show="!IS_LOGGED"
      link
      to="/login"
      small
      color="#2F4F4F"
    >
      <v-icon left>mdi-login</v-icon>
      Войти
    </v-btn>
  </v-toolbar-items>
</template>

<script>
import logout from '@/app/shared/mixins/logout'
import { mapGetters } from 'vuex'

export default {
  name: 'buttonAuthComponent',
  mixins: [logout],
  data: () => ({
    userLink: [
      { link: '/create-test', icon: 'mdi-newspaper-plus', title: 'Создать тест' },
      { link: '', icon: 'mdi-clipboard-list-outline', title: 'Мои тесты' },
      { link: '', icon: 'mdi-order-bool-descending-variant', title: 'Пройденые тесты' }
    ]
  }),
  computed: {
    ...mapGetters(['IS_LOGGED'])
  }
}
</script>

<style scoped>

</style>
