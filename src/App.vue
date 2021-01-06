<template>
  <v-app
    style="background-color: #FFFFFF"
  >
    <Header></Header>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './app/Shared/components/header/HeaderComponent'

export default {
  name: 'App',
  components: {
    Header
  },
  created () {
    if (this.$store.getters.IS_LOGGED) {
      this.$store.dispatch('A_REFRESH_TOKEN')
        .catch(() => {
          if (this.$route.path !== '/') {
            this.$router.push('/')
          }
        })
    }
  }
}
</script>
<style lang="sass">
</style>
