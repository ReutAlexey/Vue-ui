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
  props: ['drawer', 'links', 'statusUser'],
  computed: {
    getDrawer () {
      return this.drawer
    }
  }
}
</script>

<style scoped>

</style>
