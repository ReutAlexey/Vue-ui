<template>
  <v-app>
  <v-row>
    <v-col
      cols="12"
      sm="12"
    >
      <v-navigation-drawer
        app
        temporary
        v-model="drawer"
      >
        <v-list>
          <v-list-item-title>
            <v-list-item-action>
              <v-icon>star</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
              v-text="'text test'"
              >
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item-title>
        </v-list>
      </v-navigation-drawer>
        <v-toolbar dark color="#2F4F4F">
          <v-app-bar-nav-icon
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
          </v-toolbar-items>
        </v-toolbar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-col>
  </v-row>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false
  })
}
</script>
<style lang="sass">
.main-container
  margin-top: 100px
</style>
