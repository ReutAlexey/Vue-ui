<template>
  <v-toolbar-items>
  <v-menu
    bottom
    origin="center center"
    transition="scale-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        x-small
        color="#2F4F4F"
        dark
        v-bind="attrs"
        v-on="on"
      >
        {{ GET_USER.name }}
        <v-icon right>mdi-menu-up</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in GET_ACCOUNT_NAVIGATION"
        :key="i"
        link
        :to="item.url"
      >
        <v-icon left>{{item.icon}}</v-icon>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  </v-toolbar-items>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AccountNavigationComponent',
  computed: {
    ...mapGetters(['GET_ACCOUNT_NAVIGATION', 'GET_USER'])
  }
}
</script>

<style scoped>

</style>
