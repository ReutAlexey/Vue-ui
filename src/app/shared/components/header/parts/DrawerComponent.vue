<template>
  <v-navigation-drawer
    app
    temporary
    :value="drawerChange"
  >
    <v-card
      class="mx-auto"
      width="300"
    >
      <v-list>
        <v-subheader>TestManager</v-subheader>
      <v-list-item
        v-for="link in links"
        :key="link.title"
        link
        :to="link.url"
      >
        <v-icon left v-text="link.icon"></v-icon>
        <v-list-item-title
          v-text="link.title"
        ></v-list-item-title>
       </v-list-item>

        <v-list-group
          :value="false"
          no-action
          prepend-icon="mdi-shape"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Категории</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="category in categories"
            :key="category.id"
            link
            :to="'/category/' + category.slug + '?id='+ category.id"
          >
            <v-list-item-title v-text="category.category"></v-list-item-title>

          </v-list-item>
        </v-list-group>

        <v-divider></v-divider>
        <link-auth></link-auth>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import linkAuth from './LinkDrawerAuthComponent'

export default {
  name: 'DrawerComponent',
  components: {
    linkAuth
  },
  props: ['drawer', 'links', 'categories'],
  data: () => ({
    drawerOff: false
  }),
  methods: {
    changeDrawer () {
      this.$emit('changeDrawer', {
        drawer: false
      })
    }
  },
  computed: {
    drawerChange () {
      return this.drawer
    }
  }
}
</script>

<style scoped>

</style>
