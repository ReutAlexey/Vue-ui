<template>
  <div>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      width="300"
    >
      <drawer-list></drawer-list>
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
            x-small
            color="#2F4F4F"
            v-for="item in GET_NAVIGATION"
            :key="item.url"
            :to="item.url"
          >
            {{ item.name }}
          </v-btn>
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
             Категории
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in GET_LIST_CATEGORIES"
              :key="i"
              link
              :to="`/category/` + item.slug + '?id=' + item.id"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <nav-auth
        class="hidden-sm-and-down"
        v-if="!IS_LOGGED"
      >
      </nav-auth>
      <nav-account
        class="hidden-sm-and-down"
        v-if="IS_LOGGED"
      >
      </nav-account>
    </v-toolbar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import drawerList from './parts/DrawerMenuComponent'
import navAuth from './parts/AuthNavigationComponent'
import navAccount from './parts/AccountNavigationComponent'

export default {
  name: 'HeaderComponent',
  components: {
    drawerList,
    navAuth,
    navAccount
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters(['GET_LIST_CATEGORIES', 'GET_NAVIGATION', 'IS_LOGGED'])
  },
  methods: {
    ...mapActions(['A_LIST_CATEGORIES'])
  },
  created () {
    this.A_LIST_CATEGORIES()
  }
}
</script>
