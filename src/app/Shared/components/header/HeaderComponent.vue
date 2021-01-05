<template>
  <div>
    <drawer
      :changeDrawer="drawer"
    ></drawer>
    <v-toolbar
      dark color="#2F4F4F"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>TestManager.by</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
        class="hidden-sm-and-down"
      >
          <v-btn
            x-small
            color="#2F4F4F"
            v-for="link in links"
            :key="link.link"
            :to="link.link"
          >
            {{ link.name }}
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
    </v-toolbar>
  </div>
</template>

<script>
import drawer from './parts/DrawerComponent'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HeaderComponent',
  components: {
    drawer
  },
  data: () => ({
    drawer: false,
    links: [
      { link: '/', name: 'Главная' }
    ],
    categoryLinks: [
      { category: 'Разное', id: '1' },
      { category: 'PDD', id: '2' },
      { category: 'IQ', id: '3' }
    ]
  }),
  computed: {
    ...mapGetters(['GET_LIST_CATEGORIES'])
  },
  methods: {
    ...mapActions(['A_LIST_CATEGORIES'])
  },
  created () {
    this.A_LIST_CATEGORIES()
  }
}
</script>
