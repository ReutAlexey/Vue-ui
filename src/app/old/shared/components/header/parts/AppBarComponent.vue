<template>
  <div>
    <v-app-bar
      color="#A9A9A9"
      max-height="55"
      class="mt-10"
      fixed
    >
      <v-tabs
        centered
      >
        <v-tab
          v-for="link in GET_NAVIGATION_LINK"
          :key="link.link"
          :to="link.link"
        >{{link.name}}
        </v-tab>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-tab
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Категории
            </v-tab>
          </template>
          <v-list>
            <v-list-item
              v-for="link in GET_CATEGORIES_LINKS"
              :key="link.id"
            >
              <v-list-item-title>
                <router-link
                  :to="'/category/' + link.slug + '/' + link.id"
                >
                  {{link.category}}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AppBarComponent',
  computed: {
    ...mapGetters(['GET_NAVIGATION_LINK', 'GET_CATEGORIES_LINKS'])
  },
  created () {
    this.$store.dispatch('A_SET_CATEGORIES_LINK')
  }
}
</script>

<style scoped>

</style>
