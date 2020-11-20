<template>
  <v-app
    style="background-color: #FFFFFF"
  >
    <head-bar></head-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import headBar from '@/components/parts/HeadComponent'

export default {
  name: 'App',
  components: {
    headBar
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
