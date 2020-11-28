<template>
  <v-app
    style="background-color: #FFFFFF"
  >
    <header-bar></header-bar>
    <v-main class="mt-10">
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
    if (this.$store.getters.IS_LOGGED_IN) {
      console.log('is logged')
      this.$store.dispatch('IS_LOGGED')
    }
  }
}
</script>
<style lang="sass">
.mainconteiner
  margin-top: 100px
.description p
  font-family: sans-serif
  font-size: 20px
  color: black
.question
  font-family: sans-serif
  font-size: 20px
</style>
