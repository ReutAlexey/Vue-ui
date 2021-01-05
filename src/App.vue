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
  }
}
</script>
<style lang="sass">
</style>
