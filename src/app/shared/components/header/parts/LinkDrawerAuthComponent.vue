<template>
  <div>
    <div
      v-show="IS_LOGGED"
    >
      <v-list-item
        @click="logout"
        link
      >
        <v-icon left>mdi-logout</v-icon>
        <v-list-item-title
        >Выйти</v-list-item-title>
      </v-list-item>
      <v-list-item
        link
        to="/profile"
      >
        <v-icon left>mdi-account-box-outline</v-icon>
        <v-list-item-title
        >Личный кабинет</v-list-item-title>
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
  computed: {
    ...mapGetters(['IS_LOGGED'])
  }
}
</script>

<style scoped>

</style>
