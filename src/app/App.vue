<template>
  <v-app>
  <v-row>
    <v-col
      cols="12"
      sm="12"
    >
        <nav-bar></nav-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-col>
  </v-row>
  </v-app>
</template>

<script>
import navBar from './shared/components/header/HeaderComponent'

export default {
  name: 'App',
  components: {
    navBar
  }
}
</script>
