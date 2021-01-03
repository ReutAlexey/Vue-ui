<template>
  <div>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      width="300"
    >
    </v-navigation-drawer>
    <v-toolbar
      dark color="#2F4F4F"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>TestManager.by</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
      >
        <v-btn
          small
          color="#2F4F4F"
        >
          jhjhj
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    drawer: false
  })
}
</script>

<style scoped>

</style>
