<template>
  <v-app
    style="background-color: #FFFFFF"
  >
    <header-bar></header-bar>
    <v-main class="main-container">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import headerBar from './shared/components/header/HeaderComponent'

export default {
  name: 'App',
  components: {
    headerBar
  },
  created () {
    if (this.$store.getters.IS_LOGGED) {
      console.log('is logged')
    } else {
      console.log('no token')
    }
  }
}
</script>
<style lang="sass">
.main-container
  margin-top: 100px
</style>
