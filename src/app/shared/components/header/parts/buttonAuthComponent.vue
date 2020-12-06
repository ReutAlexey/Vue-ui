<template>
  <v-toolbar-items
  >
    <v-btn
      v-show="IS_LOGGED"
      link
      to="/profile"
      small
      color="#2F4F4F"
    >
      <v-icon left>mdi-account-box-outline</v-icon>
      Личный кабинет
    </v-btn>
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
  computed: {
    ...mapGetters(['IS_LOGGED'])
  }
}
</script>

<style scoped>

</style>
