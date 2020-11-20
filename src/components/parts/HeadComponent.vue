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
          v-show="!isLogged"
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
          v-show="isLogged"
        >
          <v-btn
            :to="'/profile/' + getUserId"
            text
          >
            <v-icon left>mdi-login</v-icon>
            Личный кабитнет
          </v-btn>
          <v-btn
            to=""
            text
            @click="logout"
          >
            <v-icon left>mdi-login</v-icon>
            Выйти
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
            v-for="(link, index) in navigationLinks"
            :key="index"
            :to="link.link"
          >{{link.name}}</v-tab>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-tab
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Категории
              </v-tab>
            </template>
            <v-list>
              <v-list-item
                v-for="item in categories"
                :key="item.id"
              >
                <v-list-item-title>
                  <router-link
                    :to="'/category/' + item.slug + '/' + item.id"
                  >
                    {{ item.category }}
                  </router-link>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-tabs>
      </v-app-bar>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HeadComponent',
  data () {
    return {
      navigationLinks: [
        { link: '/', name: 'Главная' },
        { link: '/feedback', name: 'Обратная связь' }
      ],
      categories: []
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('LOGOUT')
        .then(() => {
          if (this.$route.fullPath !== '/') {
            this.$router.push('/')
          }
        })
    }
  },
  computed: {
    isLogged () {
      return this.$store.getters.IS_LOGGED_IN
    },
    getUserId () {
      return this.$store.getters.GET_USER_ID
    }
  },
  created () {
    this.$store.dispatch('IS_LOGGED')
    axios({ url: this.$store.state.backendUrl + '/categories/tests', method: 'GET' })
      .then(response => {
        this.categories = response.data
      })
  }
}
</script>

<style scoped>

</style>
