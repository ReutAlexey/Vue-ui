<template>
  <div>
    <div
      v-show="IS_LOGGED"
    >
      <v-list-group
        v-if="IS_LOGGED"
        :value="false"
        no-action
        sub-group
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{GET_USER.name}}</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="link in userLink"
          :key="link.title"
          link
          :to="link.link"
        >
          <v-list-item-icon>
            <v-icon v-text="link.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>
      <v-list-item
        @click="logout"
        link
      >
        <v-icon left>mdi-logout</v-icon>
        <v-list-item-title
        >Выйти</v-list-item-title>
      </v-list-item>
    </div>
    <div
      v-show="!IS_LOGGED"
    >
      <v-list-item
        link
        to="/login"
      >
        <v-icon left>mdi-logout</v-icon>
        <v-list-item-title
        >Войти</v-list-item-title>
      </v-list-item>
      <v-list-item
        link
        to="/registration"
      >
        <v-icon left>mdi-account-box-outline</v-icon>
        <v-list-item-title
        >Регистрация</v-list-item-title>
      </v-list-item>
    </div>
  </div>
</template>

<script>
import logout from '../../../mixins/logout'
import { mapGetters } from 'vuex'

export default {
  name: 'LinkDrawerAuthComponent',
  mixins: [logout],
  data: () => ({
    userLink: [
      { link: '/create-test', icon: 'mdi-newspaper-plus', title: 'Создать тест' },
      { link: '', icon: 'mdi-clipboard-list-outline', title: 'Мои тесты' },
      { link: '', icon: 'mdi-order-bool-descending-variant', title: 'Пройденые тесты' }
    ]
  }),
  computed: {
    ...mapGetters(['IS_LOGGED', 'GET_USER'])
  }
}
</script>

<style scoped>

</style>
