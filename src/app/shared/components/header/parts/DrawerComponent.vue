<template>
  <v-navigation-drawer
    app
    temporary
    v-model="getDrawer"
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
        <v-list-item
          v-for="link in statusUser"
          :key="link.title"
          link
          :disabled="link.statusButton"
        >
          <v-icon left v-text="link.icon"></v-icon>
          <v-list-item-title
            :to="link.url"
            v-text="link.title"
          ></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DrawerComponent',
  props: ['drawer', 'links', 'statusUser', 'categories'],
  computed: {
    getDrawer () {
      return this.drawer
    }
  }
}
</script>

<style scoped>

</style>
<!--
<v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in admins"
            :key="i"
            link
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
-->
