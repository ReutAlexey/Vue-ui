<template>
  <div>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      width="300"
    >
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'DrawerComponent',
  props: ['changeDrawer'],
  data: () => ({
    drawer: false
  }),
  watch: {
    changeDrawer () {
      this.drawer = this.changeDrawer
    }
  }
}
</script>

<style scoped>

</style>
